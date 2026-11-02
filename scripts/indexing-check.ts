import 'next/dist/server/node-environment-baseline';
import assert from 'node:assert/strict';
import { unstable_doesMiddlewareMatch as unstable_doesProxyMatch } from 'next/experimental/testing/server';
import {config} from '../proxy';
import sitemap from '../app/sitemap';
import {posts} from '../data/posts';
import {isPublishedPost} from '../lib/publication';
for (const url of ['/', '/blog/test', '/sitemap.xml', '/robots.txt', '/nota/test', '/opengraph-image']) {
  assert.equal(unstable_doesProxyMatch({config,nextConfig:{},url}), false, url);
}
for (const url of ['/admin','/admin/login','/api/nota-admin/invoices']) {
  assert.equal(unstable_doesProxyMatch({config,nextConfig:{},url}), true, url);
}
const entries=sitemap();
const published=posts.filter(isPublishedPost);
assert.ok(entries.length >= 46, 'Keep existing sitemap coverage');
assert.equal(new Set(entries.map(p=>p.url)).size,entries.length);
assert.equal(entries.find(p=>p.url.endsWith('/blog'))?.lastModified,published.map(p=>p.updatedAt).sort().at(-1));
assert.ok(entries.filter(p=>p.url.includes('/blog/')).every(p=>p.images?.length && p.lastModified));
console.log(`PASS: ${entries.length} sitemap URLs, blog freshness/images, public bypass and admin proxy matching.`);
