/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
function load(path, env, dependencies = {}) {
  const source = ts.transpileModule(fs.readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const exports = {};
  vm.runInNewContext(source, { exports, URL, process: { env }, require: (name) => { assert.ok(dependencies[name], name); return dependencies[name]; } });
  return exports;
}
(async () => {
  for (const env of [{}, { NEXT_PUBLIC_SITE_URL: 'https://confirmed-domain.invalid/', SEO_REDIRECT_HOSTS: 'serviceiphonebandung.vercel.app,www.confirmed-domain.invalid' }]) {
    const origin = load('config/origin.ts', env);
    const config = load('next.config.ts', env, { './config/origin': origin }).default;
    const rules = await config.redirects();
    assert.equal(rules.length, env.SEO_REDIRECT_HOSTS ? 2 : 0);
    for (const rule of rules) {
      assert.equal(rule.permanent, true);
      assert.equal(rule.source, '/:path*');
      assert.equal(rule.destination, 'https://confirmed-domain.invalid/:path*');
      assert.equal(rule.has[0].type, 'host');
      const pattern = new RegExp(`^${rule.has[0].value}$`);
      assert.ok(!pattern.test('confirmed-domain.invalid'));
      assert.ok(!pattern.test('serviceiphonebandungXvercelXapp'));
    }
  }
  const origin = load('config/origin.ts', {});
  for (const value of ['http://host.invalid', 'https://host.invalid/path', 'https://user:pass@host.invalid', 'https://host.invalid?query=1']) assert.throws(() => origin.getSiteOrigin(value));
  const env = { NEXT_PUBLIC_SITE_URL: 'https://confirmed-domain.invalid', SEO_REDIRECT_HOSTS: 'confirmed-domain.invalid' };
  await assert.rejects(load('next.config.ts', env, { './config/origin': load('config/origin.ts', env) }).default.redirects());
  console.log('PASS: migration config, hostname matching, permanent redirects, path preservation, malformed origin and loop rejection. Reserved .invalid hostname is test-only.');
})();
