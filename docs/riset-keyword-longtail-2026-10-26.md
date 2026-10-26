# Riset Long-Tail Keyword Lokal Bandung — 26 Oktober 2026

Tujuan: menemukan long-tail keyword yang **punya pencarian nyata** dan **realistis dikejar sampai #1 Google** untuk Service iPhone Bandung (Jl. Dipati Ukur No.86).

## Sumber data dan batasannya

| Sumber | Yang dibuktikan | Batasan |
| --- | --- | --- |
| Ubersuggest (data Google Ads, Indonesia, bahasa Indonesia) | Angka volume bulanan + SEO Difficulty (SD) | Kuota gratis hanya 1 pencarian; banyak baris ditandai "Outdated". Long-tail di bawah ambang Keyword Planner tampil "0". |
| Google Autocomplete (`hl=id`, `gl=id`) | Query benar-benar diketik orang secara berulang | Tidak memberi angka. Untuk long-tail satu kota, volumenya umumnya kecil (puluhan per bulan atau kurang). |
| SERP manual google.co.id, lokasi terdeteksi Kota Bandung | Siapa yang ranking di halaman 1 dan apakah ada halaman yang benar-benar spesifik | Snapshot satu hari; hasil bisa berbeda per lokasi/perangkat. |

Tidak ada akses Keyword Planner, Search Console, atau Ahrefs (Ahrefs meminta CAPTCHA). Keterangan kolom volume:

- **angka** = volume bulanan Ubersuggest (Indonesia).
- **AC** = muncul di Google Autocomplete persis seperti tertulis.
- **AC+** = muncul sebagai saran di query *nasional* (misalnya mengetik "ganti baterai iphone xr" langsung menyarankan "... bandung"). Ini sinyal lokal paling kuat setelah angka.

## Temuan penting sebelum mengejar keyword

1. **Banyak halaman belum terindeks.** `site:serviceiphonebandung.vercel.app/blog` hanya menampilkan 3 dari 13 artikel; `/lokasi/dipatiukur` tidak terindeks sama sekali. Google masih menampilkan judul lama "iServis Bandung" dan snippet harga lama (iPhone 6). Tanpa indeks, keyword apa pun tidak bisa ranking.
2. **Halaman layanan terbukti bisa ranking.** `/layanan/service-port-charger-iphone` sudah **#7** untuk "service port charger iphone bandung" walau masih di domain vercel.app.
3. **Celah konten besar di keyword model + kerusakan + Bandung.** Untuk "ganti baterai iphone 11/13/xr bandung" dan "ganti lcd iphone xr bandung", halaman 1 diisi homepage generik kompetitor, Instagram, listicle (tempat.info, kumparan), OLX, dan postingan Threads/Facebook. Hampir tidak ada halaman yang khusus membahas model tersebut di Bandung.
4. **Query "terdekat" dikuasai Google Maps.** SERP "service iphone bandung terdekat" diawali blok Bisnis: iChoose (±1,5 rb ulasan), Igo Repair (733), iColor (495). Website saja tidak cukup; butuh Google Business Profile dan ulasan asli.
5. **Beberapa area sudah "dimiliki" kompetitor.** Ciumbuleuit → iFixied (punya cabang), Cihampelas → Casecorner, Dago → iBox AASP. Dipatiukur justru lemah: hasil teratas hanya Instagram iColor Dipatiukur (buka Jan 2026), Waze Pahlawan Gadget, dan listicle.

## Prioritas A — peluang #1 paling tinggi

Belum ada halaman spesifik di SERP, niat transaksi tinggi, dan harga per model sudah tersedia di `data/prices.ts`.

| Keyword utama (+ varian) | Bukti volume | Kondisi SERP 26 Okt | Halaman target |
| --- | --- | --- | --- |
| ganti baterai iphone xr bandung | AC+ | Tidak ada halaman khusus; homepage generik + Maps | Halaman baru per model (baterai XR Rp190.000) |
| ganti baterai iphone 11 bandung · harga ganti baterai iphone 11 bandung · ganti baterai iphone 11 di bandung | AC (3 varian) | IG, listicle, pertanyaan Threads, OLX | Halaman baru (Rp195.000) |
| ganti baterai iphone 13 bandung · harga ganti baterai iphone 13 bandung · ganti baterai iphone 13 di bandung | AC (3 varian) | Satu artikel KG Care (13 Pro Max), sisanya generik | Halaman baru (Rp290.000) |
| ganti baterai iphone 12 bandung | AC | Belum dicek, pola serupa | Halaman baru |
| ganti baterai iphone x bandung | AC | Belum dicek, pola serupa | Halaman baru |
| ganti baterai iphone 14 pro bandung | AC | Belum dicek, pola serupa | Halaman baru |
| ganti lcd iphone 11 bandung | AC | Generik + OLX | Halaman baru (Grade A Rp295.000 / Genuine Rp950.000) |
| ganti lcd iphone xr bandung | AC | Hanya halaman produk Gadgetarian | Halaman baru (Rp290.000 / Rp900.000) |
| ganti lcd iphone xs bandung · ganti lcd iphone x bandung | AC | Belum dicek, pola serupa | Halaman baru |
| service iphone dipatiukur · service iphone bandung dipatiukur | **10/bln** (SD 10) + AC | Lemah: IG iColor, Waze, listicle; akun IG @flowservice_ di halaman 2 | `/lokasi/dipatiukur` (wajib diindeks dulu) |
| service sinyal iphone bandung | AC+ | Generik, tidak ada halaman khusus | Halaman layanan baru, **hanya jika owner memang bisa servis sinyal/baseband** |

## Prioritas B — perkuat halaman yang sudah ada

| Keyword | Bukti volume | Kondisi SERP | Halaman target |
| --- | --- | --- | --- |
| service port charger iphone bandung | AC | **Kita #7** | `/layanan/service-port-charger-iphone` — tambah konten & internal link agar naik ke 1–3 |
| service kamera iphone bandung | AC | Generik; halaman kita terindeks tapi belum halaman 1 | `/layanan/service-kamera-iphone` |
| service face id bandung · service face id iphone bandung | AC | Generik | Artikel Face ID (sudah ditulis, belum terbit) + bagian di halaman layanan, jika owner bisa |
| ganti kaca lcd iphone bandung | AC | Generik | `/layanan/ganti-lcd-iphone` (bahas kaca vs LCD) |
| ganti lcd iphone murah bandung · service lcd iphone murah bandung | AC | Generik | `/layanan/ganti-lcd-iphone` + `/harga` |
| service iphone bandung murah | **50/bln** (SD 14) | Maps + listicle + IG | `/harga` |
| service ic iphone bandung | AC | Belum dicek | Hanya jika owner menangani servis IC |

## Prioritas C — volume terbesar, persaingan berat (jangka panjang)

| Keyword | Volume | Catatan |
| --- | --- | --- |
| service iphone bandung | **1.300/bln** (SD 18) | Homepage. Didominasi IG kompetitor (33–35 rb follower), listicle, Maps. Naik otomatis jika klaster A–B kuat. |
| tempat service iphone bandung | **140/bln** (SD 23) | Listicle (tempat.info, kumparan). Lebih realistis minta dimasukkan ke listicle itu daripada mengalahkannya. |
| service iphone bandung terdekat | **140/bln** (SD 11) | Blok Maps di posisi teratas → Google Business Profile + ulasan asli. |

## Konten pendukung (pertanyaan biaya, cakupan nasional)

Muncul di Autocomplete nasional; cocok sebagai FAQ atau artikel yang mengarah ke halaman Bandung:

- biaya service iphone mati total (+ varian iPhone 11, 13, XR) · service iphone mati total berapa · berapa lama service iphone mati total
- service iphone kena air berapa · biaya service iphone mati kena air
- service face id iphone berapa (+ varian 11, XR, X)
- ganti baterai iphone xr berapa · harga ganti baterai iphone 11 di ibox (perbandingan iBox vs servis independen)

## Hindari

- **"resmi", "service center resmi", "ibox", "bec", "paskal", "itc"** — navigasional ke tempat lain, dan toko ini independen (jangan memberi kesan resmi Apple).
- **"service iphone 24 jam bandung"** — jam buka 10.00–22.00.
- **Ciumbuleuit, Cihampelas, Dago** sebagai target utama — dikuasai iFixied, Casecorner, dan iBox. Dago cukup disebut di halaman Dipatiukur.
- **Model yang tidak muncul di Autocomplete** (mis. "ganti baterai iphone 12 pro bandung", "ganti lcd iphone 13 bandung") — volume belum terbukti; cukup lewat tabel harga, jangan dibuatkan halaman sendiri dulu. Membuat halaman untuk 31 model sekaligus berisiko dianggap thin/doorway.

## Langkah berikutnya

1. **Search Console:** submit `/sitemap.xml`, lalu URL Inspection → *Request indexing* untuk `/lokasi/dipatiukur`, 6 halaman layanan, dan artikel baru.
2. **Halaman model Prioritas A** (6 baterai, 4 LCD) sudah dibuat 26 Okt 2026 di `/layanan/ganti-baterai-iphone/[model]` dan `/layanan/ganti-lcd-iphone/[model]`. Isinya di `data/modelServices.ts`, harga diambil otomatis dari `data/prices.ts`. Tambah model lain hanya jika terbukti dicari (muncul di Autocomplete/Keyword Planner).
3. **Google Business Profile:** samakan NAP, minta ulasan asli pelanggan; tanpa ini query "terdekat" tidak terjangkau.
4. **Verifikasi angka volume** di Keyword Planner akun Google Ads yang sudah terpasang (tag `AW-18534863324`): *Tools → Keyword Planner → Get search volume and forecasts*, tempel daftar di bawah, set lokasi **Bandung, Jawa Barat**.

Daftar siap tempel:

```
service iphone bandung
service iphone bandung terdekat
tempat service iphone bandung
service iphone bandung murah
service iphone dipatiukur
service iphone bandung dipatiukur
ganti baterai iphone bandung
ganti baterai iphone 11 bandung
harga ganti baterai iphone 11 bandung
ganti baterai iphone 13 bandung
harga ganti baterai iphone 13 bandung
ganti baterai iphone xr bandung
ganti baterai iphone 12 bandung
ganti baterai iphone x bandung
ganti baterai iphone 14 pro bandung
ganti lcd iphone bandung
ganti lcd iphone 11 bandung
ganti lcd iphone xr bandung
ganti lcd iphone xs bandung
ganti lcd iphone x bandung
ganti kaca lcd iphone bandung
ganti lcd iphone murah bandung
service port charger iphone bandung
service kamera iphone bandung
service sinyal iphone bandung
service face id bandung
service ic iphone bandung
```

Setelah halaman terbit dan terindeks, ukur di Search Console (impressions, posisi, CTR per query) setiap 2–4 minggu. Ranking #1 tidak bisa dijamin; daftar ini memilih keyword dengan persaingan halaman 1 paling lemah berdasarkan snapshot di atas.
