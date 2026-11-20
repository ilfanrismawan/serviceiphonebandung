// Local-only Blogger API client. No dependencies; credentials never enter Next.js.
import { createServer } from 'node:http';
import { randomBytes, createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const dir = fileURLToPath(new URL('../.blogger-local/', import.meta.url));
const blogId = '1838144342015622432';
const scope = 'https://www.googleapis.com/auth/blogger';
const load = async name => JSON.parse(await readFile(`${dir}${name}`, 'utf8'));
async function save(name, value) {
  await mkdir(dir, { recursive: true });
  await writeFile(`${dir}${name}`, JSON.stringify(value, null, 2), { mode: 0o600 });
}
async function tokenRequest(params) {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', body: new URLSearchParams(params), signal: AbortSignal.timeout(30000),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(`OAuth ${response.status}: ${result.error || 'request failed'}`);
  return result;
}
async function client() {
  const config = await load('client.json');
  if (!config.installed?.client_id || !config.installed?.client_secret)
    throw new Error('Simpan JSON OAuth Desktop Google sebagai .blogger-local/client.json.');
  return config.installed;
}
async function auth() {
  const credentials = await client();
  const state = randomBytes(32).toString('base64url');
  const verifier = randomBytes(48).toString('base64url');
  const server = createServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const redirect = `http://127.0.0.1:${server.address().port}/callback`;
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.search = new URLSearchParams({ client_id: credentials.client_id, redirect_uri: redirect,
    response_type: 'code', scope, state, access_type: 'offline', prompt: 'consent',
    code_challenge: createHash('sha256').update(verifier).digest('base64url'),
    code_challenge_method: 'S256' }).toString();
  await save('auth-session.json', { url: url.href });
  console.log('Buka URL pada .blogger-local/auth-session.json untuk menyetujui akses Google.');
  const timer = setTimeout(() => { console.error('Login kedaluwarsa. Jalankan auth lagi.'); server.close(); }, 600000);
  server.on('request', async (req, res) => {
    const incoming = new URL(req.url, redirect);
    if (incoming.pathname !== '/callback') { res.writeHead(404).end(); return; }
    if (incoming.searchParams.get('state') !== state) { res.writeHead(400).end('Invalid state'); return; }
    if (incoming.searchParams.has('error')) { res.writeHead(400).end('Authorization declined.'); clearTimeout(timer); server.close(); return; }
    const code = incoming.searchParams.get('code');
    if (!code) { res.writeHead(400).end('Missing code'); return; }
    try {
      const tokens = await tokenRequest({ client_id: credentials.client_id, client_secret: credentials.client_secret,
        code, code_verifier: verifier, redirect_uri: redirect, grant_type: 'authorization_code' });
      if (!tokens.refresh_token) throw new Error('Google tidak memberikan refresh token.');
      await save('token.json', { ...tokens, expires_at: Date.now() + tokens.expires_in * 1000 });
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Blogger API terhubung. Tab ini boleh ditutup.');
      console.log('OAuth tersimpan. Jalankan: node scripts/blogger-api.mjs status');
    } catch (error) { res.writeHead(500).end('OAuth failed. Check local console.'); console.error(error.message); }
    finally { clearTimeout(timer); server.close(); }
  });
}
export async function api(path, options = {}) {
  const credentials = await client();
  let tokens = await load('token.json');
  if (tokens.expires_at < Date.now() + 60000) {
    const refreshed = await tokenRequest({ client_id: credentials.client_id, client_secret: credentials.client_secret,
      refresh_token: tokens.refresh_token, grant_type: 'refresh_token' });
    tokens = { ...tokens, ...refreshed, expires_at: Date.now() + refreshed.expires_in * 1000 };
    await save('token.json', tokens);
  }
  const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}${path}`, {
    ...options, headers: { Authorization: `Bearer ${tokens.access_token}`, 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(30000),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(`Blogger ${response.status}: ${result.error?.message || 'request failed'}`);
  return result;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) try {
  const command = process.argv[2];
  if (command === 'auth') await auth();
  else if (command === 'status') {
    const blog = await api('');
    console.log(JSON.stringify({ connected: true, id: blog.id, name: blog.name, url: blog.url, posts: blog.posts?.totalItems }, null, 2));
  } else if (command === 'posts') {
    const posts = await api('/posts?maxResults=20&fetchBodies=false');
    console.log(JSON.stringify((posts.items || []).map(({ id, title, url }) => ({ id, title, url })), null, 2));
  } else if (command === 'draft') {
    if (!process.argv[3]) throw new Error('Berikan path JSON berisi title dan content HTML.');
    const post = JSON.parse(await readFile(process.argv[3], 'utf8'));
    if (typeof post.title !== 'string' || !post.title.trim() || typeof post.content !== 'string' || !post.content.trim())
      throw new Error('title dan content wajib diisi.');
    const result = await api('/posts?isDraft=true', { method: 'POST', body: JSON.stringify({ title: post.title, content: post.content }) });
    console.log(JSON.stringify({ id: result.id, title: result.title, status: result.status }, null, 2));
  } else console.log('Usage: node scripts/blogger-api.mjs auth|status|posts|draft <post.json>');
} catch (error) { console.error(error.code === 'ENOENT' ? 'Konfigurasi/token belum ada. Simpan .blogger-local/client.json lalu jalankan auth.' : error.message); process.exitCode = 1; }
