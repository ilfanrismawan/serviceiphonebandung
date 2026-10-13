import { spawn } from "node:child_process";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import assert from "node:assert/strict";

const profile = await mkdtemp(join(tmpdir(), "flow-seo-chrome-"));
const chrome = spawn(process.env.CHROME_PATH || "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", ["--headless=new", "--disable-gpu", "--no-first-run", "--remote-debugging-port=9333", `--user-data-dir=${profile}`, "about:blank"], { windowsHide: true, stdio: "ignore" });
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
try {
  let target;
  for (let attempt = 0; attempt < 30; attempt++) {
    try { target = await (await fetch("http://127.0.0.1:9333/json/new?about:blank", { method: "PUT" })).json(); break; } catch { await pause(500); }
  }
  assert.ok(target, "Chrome DevTools available");
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));
  let sequence = 0;
  const pending = new Map();
  socket.addEventListener("message", ({ data }) => {
    const result = JSON.parse(data);
    if (result.id) { const promise = pending.get(result.id); pending.delete(result.id); if (result.error) promise.reject(result.error); else promise.resolve(result.result); }
  });
  function command(method, params = {}) {
    const id = ++sequence;
    return new Promise((resolve, reject) => { pending.set(id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params })); });
  }
  const evaluate = async (expression) => (await command("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true })).result.value;
  await command("Page.enable");
  await command("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await command("Emulation.setCPUThrottlingRate", { rate: 4 });
  await command("Network.enable");
  await command("Network.emulateNetworkConditions", { offline: false, latency: 150, downloadThroughput: 200000, uploadThroughput: 93750, connectionType: "cellular4g" });
  await command("Page.addScriptToEvaluateOnNewDocument", { source: "window.__seo={lcp:0,cls:0};new PerformanceObserver(l=>{for(const e of l.getEntries())window.__seo.lcp=e.startTime}).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(l=>{for(const e of l.getEntries())if(!e.hadRecentInput)window.__seo.cls+=e.value}).observe({type:'layout-shift',buffered:true});" });
  await mkdir(".seo-reports", { recursive: true });
  const results = [];
  for (const path of ["/", "/lokasi/dipatiukur"]) {
    await command("Page.navigate", { url: `${process.env.SEO_TEST_BASE || "http://localhost:3002"}${path}` });
    for (let attempt = 0; attempt < 50; attempt++) { if (await evaluate("document.readyState==='complete'")) break; await pause(400); }
    await pause(4000);
    const result = await evaluate("({metrics:window.__seo,paint:performance.getEntriesByType('paint').map(e=>({name:e.name,ms:e.startTime})),overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,missingAlt:[...document.images].filter(i=>!i.hasAttribute('alt')).length,wa:[...document.querySelectorAll('a')].filter(a=>a.href.startsWith('https://wa.me/')).length})");
    assert.equal(result.h1, 1); assert.equal(result.overflow, false); assert.equal(result.missingAlt, 0); assert.ok(result.wa > 0);
    const screenshot = await command("Page.captureScreenshot", { format: "png" });
    await writeFile(`.seo-reports/${path==='/'?'home':'dipatiukur'}-mobile.png`, Buffer.from(screenshot.data, "base64"));
    if (path === "/") {
      const before = await evaluate("document.querySelector('#model-select').closest('section').querySelector('a[href^=\"https://wa.me/\"]').href");
      await evaluate("(()=>{let s=document.querySelector('#model-select');s.value=s.options[s.options.length-1].value;s.dispatchEvent(new Event('change',{bubbles:true}));return true})()");
      await pause(500);
      const after = await evaluate("(()=>{const s=document.querySelector('#model-select');const href=s.closest('section').querySelector('a[href^=\"https://wa.me/\"]').href;return {href,model:s.selectedOptions[0].textContent}})()");
      assert.notEqual(before, after.href);
      assert.ok(new URL(after.href).searchParams.get('text').includes(after.model));
      result.calculatorModelAndWhatsAppUpdated = true;
    }
    results.push({ path, ...result });
  }
  await writeFile(".seo-reports/mobile.json", JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  socket.close();
} finally { chrome.kill(); }
