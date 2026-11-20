# Blogger API lokal

Blog: https://catataniphonebandung.blogspot.com/
Blog ID: `1838144342015622432`
Google Cloud: `gen-lang-client-0862255955` (kikl)
OAuth Desktop client: `Blogger Bandung Local API`

Simpan unduhan JSON kredensial OAuth Desktop sebagai `.blogger-local/client.json`.
Folder ini diabaikan Git. Jangan menyimpan kredensial atau token dalam `public/`,
kode aplikasi, screenshot, atau variabel `NEXT_PUBLIC_*`.

1. Jalankan `node scripts/blogger-api.mjs auth`.
2. Buka URL dalam `.blogger-local/auth-session.json` dan selesaikan izin Google.
3. Jalankan `node scripts/blogger-api.mjs status` untuk memverifikasi blog tujuan.
4. Jalankan `node scripts/blogger-api.mjs posts` untuk membaca artikel.

Untuk membuat draft, siapkan JSON dengan `title` dan `content` (HTML), lalu:
`node scripts/blogger-api.mjs draft path/to/post.json`.
Perintah ini menyimpan draft, bukan menerbitkan artikel.

OAuth memakai PKCE, state acak dan callback loopback di 127.0.0.1.
Token disimpan lokal dan diperbarui otomatis. Izin Google `blogger` berlaku untuk
konten Blogger akun yang disetujui; skrip ini membatasi endpoint ke blog ID di atas.
Ini integrasi API lokal, belum server MCP.

## Paket konten blog

Konten orisinal halaman Tentang/Kontak dan dua artikel tambahan tersimpan pada
`docs/blogger-content.json`. Periksa rencana dengan `node scripts/blogger-content.mjs`.
Untuk menerbitkan konten tersebut secara eksplisit, gunakan
`node scripts/blogger-content.mjs --apply`. Skrip memeriksa judul yang sudah ada
untuk menghindari duplikasi dan berhenti bila isi yang sudah ada berbeda.
Hasil publikasi tercatat di `docs/blogger-publication.json`; pemeriksaan HTTP
dan backlink tercatat di `docs/blogger-verification.json`.

Blog kini memiliki tiga artikel dan dua halaman publik. Navigasi Home,
Tentang Blog, serta Kontak dan Lokasi ditampilkan melalui widget Pages.
Bahasa Indonesia, deskripsi blog, dan deskripsi pencarian sudah diatur.
Halaman publik dan tujuan backlink berstatus HTTP 200 saat diperiksa.
Status indeks mesin pencari belum diverifikasi.

Jika aplikasi berstatus Testing, tambahkan akun pemilik sebagai test user pada
Google Auth Platform > Audience. Token dapat kedaluwarsa menurut kebijakan
testing Google; jalankan auth ulang bila Google mengembalikan invalid_grant.

Referensi: https://developers.google.com/identity/protocols/oauth2/native-app
dan https://developers.google.com/blogger/docs/3.0/using
