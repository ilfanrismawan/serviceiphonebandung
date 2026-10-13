import assert from "node:assert/strict";

const base = process.env.SEO_TEST_BASE || "http://localhost:3000";
const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://serviceiphonebandung.vercel.app";
const get = async (path) => {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  return response.text();
};
const xml = await get("/sitemap.xml");
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(new Set(urls).size, urls.length);
assert.ok(urls.some((url) => url.endsWith("/lokasi/dipatiukur")));
assert.ok(!urls.some((url) => url.includes("/area/")));
const titles = new Set();
const internalLinks = new Set();
for (const url of urls) {
  assert.equal(new URL(url).origin, origin);
  const path = new URL(url).pathname;
  const html = await get(path);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `One H1: ${path}`);
  assert.equal([...html.matchAll(/<main(?:\s|>)/g)].length, 1, `One main: ${path}`);
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
  assert.ok(canonical, `Canonical exists: ${path}`);
  assert.equal(new URL(canonical[1]).href, new URL(path, origin).href, `Canonical: ${path}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Unique title: ${path}`);
  titles.add(title);
  assert.match(html, /name="description" content="[^"]+"/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /property="og:url"/);
  assert.ok(!/name="robots" content="[^"]*noindex/.test(html), path);
  for (const match of html.matchAll(/<a[^>]+href="(\/[^"#?]*)"/g)) internalLinks.add(match[1]);
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
    const schema = JSON.parse(match[1]);
    assert.ok(schema["@type"] && schema["@context"]);
    if (schema["@type"] === "LocalBusiness") {
      assert.match(schema.address.streetAddress, /No\.86/);
      assert.equal(schema.telephone, "+6287860002347");
      assert.equal(schema.hasMap, "https://share.google/QbGeqpEWGPLHdoigW");
      assert.ok(!schema.aggregateRating && !schema.review && !schema.geo && !schema.address.postalCode);
    }
  }
}
for (const path of internalLinks) await get(path);
assert.match(await get("/area/dago"), /name="robots" content="noindex, nofollow"/);
assert.match(await get("/robots.txt"), /Allow: \/\s/);
assert.ok((await get("/robots.txt")).includes(`${origin}/sitemap.xml`));
const home = await get("/");
assert.ok(!home.includes("350+ Ulasan"));
for (const slug of ["cara-cek-iphone-bekas-sebelum-beli-di-bandung", "suara-speaker-dan-earpiece-iphone-kecil-atau-kresek", "face-id-iphone-tidak-berfungsi-penyebab-dan-solusi", "layar-iphone-green-screen-white-screen-solusi"]) {
  assert.equal((await fetch(new URL(`/blog/${slug}`, base))).status, 404, `Unreviewed scheduled article: ${slug}`);
}
if (!process.env.NEXT_PUBLIC_GA4_ID) assert.ok(!home.includes("googletagmanager.com/gtag/js"));
const image = await fetch(new URL("/opengraph-image", base));
assert.equal(image.status, 200);
assert.match(image.headers.get("content-type"), /image\/png/);
console.log(`PASS: ${urls.length} sitemap pages; status, unique titles, canonicals, descriptions, OG, H1/main, JSON-LD, robots, Maps and analytics-disabled checks.`);
