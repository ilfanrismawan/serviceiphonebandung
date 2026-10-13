/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const source = ts.transpileModule(fs.readFileSync('components/seo/Analytics.tsx','utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
for (const id of [undefined, 'bad-id', 'G-TEST123']) {
  let listener;
  const effects = [];
  const exports = {};
  const window = { location: { origin: 'https://test.invalid', pathname: '/harga' } };
  class Element { closest() { return this; } }
  class HTMLAnchorElement extends Element {
    constructor(href, event) { super(); this.href = href; this.dataset = { seoEvent: event }; }
  }
  const document = { addEventListener: (name, handler) => { listener = handler; }, removeEventListener: () => { listener = undefined; } };
  vm.runInNewContext(source, { exports, URL, Date, Element, HTMLAnchorElement, window, document, process: { env: { NEXT_PUBLIC_GA4_ID: id } }, require: (name) => ({
    react: { useEffect: (effect) => effects.push(effect) },
    'next/navigation': { usePathname: () => '/harga' },
    'next/script': { default: 'Script' },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }) },
  })[name] });
  const output = exports.Analytics();
  const cleanups = effects.map((effect) => effect());
  if (id !== 'G-TEST123') { assert.equal(output, null); assert.equal(listener, undefined); continue; }
  assert.ok(output.props.src.endsWith('G-TEST123'));
  assert.equal(window.dataLayer.filter((args) => args[1] === 'page_view').length, 1);
  listener({ target: new HTMLAnchorElement('https://wa.me/6287860002347?text=private') });
  listener({ target: new HTMLAnchorElement('https://www.google.com/maps/dir/?api=1&destination=private') });
  listener({ target: new HTMLAnchorElement('https://share.google/QbGeqpEWGPLHdoigW','directions_click') });
  listener({ target: new HTMLAnchorElement('https://test.invalid/layanan') });
  const clicks = window.dataLayer.filter((args) => args[1] === 'whatsapp_click' || args[1] === 'directions_click');
  assert.equal(clicks.length, 3);
  assert.ok(!JSON.stringify(clicks).includes('private'));
  assert.ok(!JSON.stringify(clicks).includes('628786'));
  cleanups[0](); assert.equal(listener, undefined);
}
console.log('PASS: GA4 opt-in, page view, WhatsApp/directions events, internal-link exclusion, private-data exclusion, listener cleanup.');
