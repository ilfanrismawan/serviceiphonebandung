import { api } from './blogger-api.mjs';
import { readFile, writeFile } from 'node:fs/promises';
const posts = (await api('/posts?fetchBodies=true&maxResults=20')).items || [];
const packUrl = new URL('../docs/blogger-content.json', import.meta.url);
const pack = JSON.parse(await readFile(packUrl, 'utf8'));
const known = new Set(['3312007399739888523', '8744328338490179606', '7739379533821078454']);
const report = [];
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const post of posts.filter(post => known.has(post.id))) {
  if (post.content.includes('id="blog-editorial-info"')) { report.push({ id: post.id, action: 'already updated' }); continue; }
  const image = post.id === '8744328338490179606' ? 'lcd' : 'charging';
  const alt = image === 'lcd' ? 'Ilustrasi iPhone dengan kaca belakang retak' : 'Ilustrasi ponsel yang terhubung ke kabel pengisian daya';
  const intro = `<div id="blog-editorial-info"><p><strong>Oleh Tim Service iPhone Bandung</strong> · Panduan pelanggan</p><figure style="margin:0 0 24px"><img src="https://serviceiphonebandung.vercel.app/images/services/${image}.webp" alt="${alt}" style="display:block;width:100%;max-width:720px;max-height:420px;object-fit:contain;margin:auto"/><figcaption style="font-size:13px;color:#666">Gambar ilustrasi dari aset website bisnis, bukan dokumentasi kasus dalam artikel.</figcaption></figure></div>`;
  const related = `<nav aria-label="Artikel terkait"><h2>Baca panduan lainnya</h2><ul>${posts.filter(other => known.has(other.id) && other.id !== post.id).map(other => `<li><a href="${escape(other.url)}">${escape(other.title)}</a></li>`).join('')}</ul><p><a href="https://catataniphonebandung.blogspot.com/p/tentang-blog.html">Tentang pengelola blog</a> · <a href="https://catataniphonebandung.blogspot.com/p/kontak-dan-lokasi.html">Kontak dan lokasi</a></p></nav>`;
  const content = intro + post.content + related;
  await writeFile(new URL(`../.blogger-local/backup-${post.id}.json`, import.meta.url), JSON.stringify(post, null, 2));
  const updated = await api(`/posts/${post.id}`, { method: 'PATCH', body: JSON.stringify({ content }) });
  if (!updated.content.includes('blog-editorial-info') || updated.status !== 'LIVE') throw new Error(`Update not verified: ${post.id}`);
  const entry = pack.posts.find(entry => entry.title === post.title);
  if (entry) entry.content = updated.content;
  report.push({ id: post.id, url: updated.url, status: updated.status });
}
await writeFile(packUrl, JSON.stringify(pack, null, 2));
await writeFile(new URL('../docs/blogger-enrichment.json', import.meta.url), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
