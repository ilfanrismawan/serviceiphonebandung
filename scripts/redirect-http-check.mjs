import http from "node:http";
import assert from "node:assert/strict";
// Start a separate dev instance with the .invalid test origin and old hostname.
for (const path of ["/", "/layanan/ganti-baterai-iphone?utm_source=maps", "/lokasi/dipatiukur", "/blog/layar-iphone-blank-hitam-tapi-nyala"]) {
  const result = await new Promise((resolve, reject) => {
    const request = http.request({ hostname: "127.0.0.1", port: 3001, path, headers: { Host: "serviceiphonebandung.vercel.app" }, timeout: 10000 }, (response) => {
      response.resume(); resolve({ status: response.statusCode, location: response.headers.location });
    });
    request.on("error", reject);
    request.on("timeout", () => request.destroy(new Error("timeout")));
    request.end();
  });
  assert.equal(result.status, 308);
  assert.equal(new URL(result.location).href, new URL(path, "https://confirmed-domain.invalid").href);
}
console.log("PASS: runtime HTTP 308 migration; root/service/location/blog paths and query preserved.");
