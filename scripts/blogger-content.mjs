// Explicit, repeatable publication of the editorial pack for this blog only.
import { api } from './blogger-api.mjs';
import { readFile, writeFile } from 'node:fs/promises';
const source = new URL('../docs/blogger-content.json', import.meta.url);
const pack = JSON.parse(await readFile(source, 'utf8'));
const execute = process.argv.includes('--apply');
const report = [];
for (const kind of ['pages', 'posts']) {
  const existing = [];
  let pageToken;
  do {
    const params = new URLSearchParams({ maxResults: '50', fetchBodies: 'true' });
    if (kind === 'posts') { params.append('status', 'live'); params.append('status', 'draft'); params.set('view', 'ADMIN'); }
    if (pageToken) params.set('pageToken', pageToken);
    const data = await api(`/${kind}?${params}`);
    existing.push(...(data.items || []));
    pageToken = data.nextPageToken;
  } while (pageToken);
  for (const entry of pack[kind]) {
    const matches = existing.filter(item => item.title === entry.title);
    if (matches.length > 1) throw new Error(`Duplicate title: ${entry.title}`);
    let result = matches[0];
    if (result && result.content !== entry.content)
      throw new Error(`Existing content differs; review manually: ${entry.title}`);
    if (!result && execute) {
      result = await api(`/${kind}${kind === 'posts' ? '?isDraft=true' : ''}`, {
        method: 'POST', body: JSON.stringify(entry),
      });
    }
    if (kind === 'posts' && execute && result.status === 'DRAFT')
      result = await api(`/posts/${result.id}/publish`, { method: 'POST' });
    report.push({ kind, title: entry.title, id: result?.id, url: result?.url,
      status: result?.status, action: execute ? 'verified' : (result ? 'exists' : 'planned') });
  }
}
if (execute) await writeFile(new URL('../docs/blogger-publication.json', import.meta.url), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
