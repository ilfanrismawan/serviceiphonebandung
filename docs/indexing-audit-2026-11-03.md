# Pemeriksaan crawl dan indexing — 3 November 2026

Target: https://serviceiphonebandung.vercel.app. Pemeriksaan HTTP dari lingkungan lokal, bukan dari infrastruktur Google. Tidak ada akses Search Console atau log Googlebot dalam pemeriksaan ini.

## Hasil situs publik

- `/robots.txt`: HTTP 200, text/plain, Allow `/`, blok hanya `/admin`, `/nota/`, `/api/nota-admin/`. Sitemap menunjuk origin yang benar. Tidak ada crawl-delay.
- `/sitemap.xml`: HTTP 200, application/xml, 46 URL unik, 20 lastmod pada artikel. Tidak ditemukan URL duplikat.
- Seluruh 46 URL: HTTP 200, canonical sesuai URL masing-masing, tidak ada meta robots atau X-Robots-Tag noindex, judul unik, satu H1.
- Waktu fetch penuh halaman pada satu pengujian: minimum 55 ms, median 374 ms, maksimum 728 ms. Robots 625 ms, sitemap 853 ms. Angka ini bukan Core Web Vitals, TTFB terisolasi, atau bukti kecepatan Googlebot.
- Header cache publik normal (`public, max-age=0, must-revalidate`); halaman banyak dilayani Vercel HIT. Nilai Age tidak membuktikan konten stale tanpa pembandingan versi deployment.

## Temuan yang perlu ditindaklanjuti

1. **Kode lokal berbeda dari produksi.** Sitemap lokal menghasilkan 31 URL, produksi 46. Sebanyak 15 URL produksi tidak ada di sitemap lokal: empat halaman model iPhone 15/16, tujuh artikel tambahan, dan empat artikel yang dibatasi publikasinya secara lokal. Jangan deploy checkout ini sebelum menyelaraskan sumber produksi; beberapa URL berpotensi hilang atau menjadi 404. Belum diperiksa platform/branch deployment mana yang menghasilkan produksi.
2. **Batas publikasi lokal tetap 13 Oktober 2026.** `lib/publication.ts` memerlukan `publicationApproved: true` atau kedua tanggal artikel berada sebelum/sama cutoff. Empat artikel 14–22 Oktober tidak lolos lokal, tetapi sudah HTTP 200 dan masuk sitemap produksi. Ini masalah konsistensi versi, bukan bukti bahwa produksi saat ini memblokir artikel tersebut.
3. **26 URL sitemap publik tidak mempunyai lastmod.** Mayoritas halaman statis/layanan tidak menyampaikan tanggal perubahan melalui sitemap. Ini valid, bukan error indexing. Menambahkan tanggal perubahan konten yang nyata dapat membantu Google mengetahui update; jangan memakai tanggal sekarang pada setiap build/request.
4. **Belum ada bukti penyebab spesifik dari Google.** HTTP 200 dan robots terbuka memenuhi pemeriksaan akses dasar, tetapi tidak menjamin indexing. Dibutuhkan Page Indexing, URL Inspection, dan Crawl Stats untuk membedakan discovered-not-indexed, crawled-not-indexed, canonical lain, soft 404, atau kegagalan fetch historis.

## Langkah prioritas

1. Pastikan branch/commit produksi dan folder kerja ini sinkron sebelum perubahan SEO atau deploy berikutnya.
2. Pada Search Console property `https://serviceiphonebandung.vercel.app/`, periksa sitemap: status, last read, discovered pages. Kirim `/sitemap.xml` bila belum terdaftar; tidak perlu mengirim ulang berkali-kali.
3. Inspeksi satu URL bermasalah: last crawl, page fetch, crawling/indexing allowed, user-declared canonical dan Google-selected canonical. Jalankan Live Test; gunakan Request Indexing setelah perbaikan nyata.
4. Periksa Crawl Stats untuk masalah host, robots fetch, respons 5xx/429 dan respons server yang meningkat; cocokkan dengan log hosting.
5. Setelah versi kode sinkron, tambahkan tanggal modifikasi editorial yang nyata untuk halaman layanan/statis dan jaga internal link ke URL penting. Review konten per URL bila Google menyatakan crawled-not-indexed; jangan menyimpulkan kualitas rendah hanya dari belum terindeks.

## Referensi

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap — sitemap merupakan petunjuk; lastmod harus konsisten dan akurat; priority/changefreq diabaikan Google.
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl — permintaan crawl tidak menjamin indexing segera atau sama sekali.
- https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors — diagnosis penemuan update, log crawl dan Search Console.

Saat audit awal belum ada perubahan konfigurasi aplikasi atau deployment. Data HTTP lengkap tersimpan lokal pada `tmp/indexing-live-audit.json`. Skrip sementara audit telah dibersihkan; pemeriksaan regresi tersedia di `scripts/indexing-check.ts`.

## Pengerjaan lanjutan

- Local `main` diperbarui secara fast-forward dari `ed33939` ke `4a55159` (`origin/main`). Empat perubahan lokal yang sudah ada disimpan dan diterapkan kembali otomatis tanpa konflik. Daftar sitemap lokal sekarang persis mencakup 46 URL produksi, tanpa URL yang hilang atau tambahan; seluruh artikel saat ini lolos persetujuan publikasi. Batas editorial tidak dihapus.
- Sitemap `/blog` sekarang memperoleh lastmod dari updatedAt artikel terbit terbaru, bukan jam build. Gambar artikel turut dicantumkan melalui image sitemap. Halaman statis/layanan tetap tanpa lastmod sampai tanggal perubahan kontennya dicatat secara editorial; tidak memasukkan tanggal buatan.
- Proxy refresh sesi Supabase dibatasi ke `/admin/:path*` dan `/api/nota-admin/:path*`. Permintaan halaman publik, sitemap, robots dan aset tidak melewati refresh sesi. Ini menghilangkan pekerjaan perantara yang tidak dibutuhkan; bukan klaim bahwa proxy merupakan penyebab Google terlambat mengindeks. Autentikasi nota tetap diperiksa oleh lapisan aplikasi.
- Pemeriksaan SEO HTTP diperluas untuk mendeteksi X-Robots-Tag noindex pada URL sitemap, tanggal lastmod tidak valid/masa depan, namespace image sitemap dan URL privat yang tidak sengaja masuk sitemap.
- Pemeriksaan mandiri `node_modules/.bin/tsx scripts/indexing-check.ts` memastikan cakupan URL lama, tanggal blog, gambar artikel, pengecualian proxy halaman publik dan pencocokan rute admin. API pengujian aktual paket Next ini masih bernama `unstable_doesMiddlewareMatch`, meskipun panduan terpasang menyebut nama proxy.
- Belum push atau deploy. Dibutuhkan data Search Console untuk diagnosis penyebab Google dan validasi hasil setelah rilis.

## Bukti Search Console dari pengguna

Screenshot yang diterima 3 November: sitemap `/sitemap.xml` submitted 26 Oktober, last read 1 November 2026, Success, 46 discovered pages; robots Valid; Crawl Stats 599 requests selama 90 hari. Ringkasan Page Indexing menunjukkan 13 indexed, 0 not indexed, last update 23 Oktober. Screenshot tabel alasan semula terlihat menunjukkan 12 Crawled – currently not indexed, tetapi ekspor CSV lanjutan membuktikan angka 12 berasal dari riwayat 21 September, bukan jumlah aktif terbaru. Jangan menganggap 46 dikurangi 13 sebagai jumlah error indexing.

Ekspor dari `C:/Users/Agus H/Downloads`: `Metadata.csv` menyatakan Issue Crawled - currently not indexed, cakupan All known pages. `Chart.csv` berisi 12 affected pages pada 21 September, lalu 0 setiap hari 22 September–23 Oktober. `Table.csv` hanya header `URL,Last crawled`, tanpa URL. Tidak ada bukti dari ekspor ini bahwa 12 URL masih bermasalah sekarang, dan data ini belum menjangkau artikel akhir Oktober.

Inspeksi pengguna terhadap `/blog/iphone-duo-layar-retak-garansi-biaya-ganti-layar` menyatakan URL is unknown to Google, last crawl N/A, referring sitemap/page tidak terdeteksi. Ini hasil informasi indeks, bukan Live Test. Kolom crawl allowed/indexing allowed/canonical yang N/A tidak berarti crawling dilarang atau canonical situs hilang.

Pemeriksaan HTTP lanjutan: artikel mengembalikan 200; HTML memuat self-canonical dan tanggal terbit 31 Oktober 2026, tanpa meta robots noindex. Sitemap publik mencantumkannya; HTML beranda dan `/blog` sudah memiliki `<a href>` ke artikel tersebut. Dengan tanggal pemeriksaan 3 November, usia artikel sekitar tiga hari. Penemuan tersedia di situs, tetapi belum ada catatan crawl di hasil inspeksi pengguna. Jangan menyimpulkan penalti/kualitas buruk atau bug robots dari status ini saja. Langkah berikutnya: Test Live URL untuk artikel ini; bila Google dapat mengaksesnya dan indexing diizinkan, Request Indexing satu kali lalu pantau, bukan mengirim sitemap/permintaan yang sama berulang.

Referensi status: https://support.google.com/webmasters/answer/7440203?hl=en . Pemeriksaan mandiri indexing/proxy telah PASS: 46 URL, blog freshness/images, halaman publik melewati proxy, rute admin tetap cocok.

Validasi tambahan: `git diff --check` PASS. Build dan lint masih berjalan sangat lambat pada lingkungan lokal; build terakhir teramati pada tahap compile, sehingga keduanya belum dinyatakan PASS. Pemeriksaan HTTP hasil build belum dijalankan. Situs publik belum berubah.
