# Sistem nota servis

## Multi-brand

Satu passcode admin mengelola seluruh brand. Pilih **Semua brand** untuk ringkasan gabungan, atau pilih satu brand untuk dashboard dan nota brand tersebut. Ringkasan pembayaran dihitung untuk seluruh hasil filter, termasuk halaman lainnya.

Melalui **Kelola brand**, admin dapat menambahkan brand dan mengatur logo, warna, nama, alamat, WhatsApp, rekening, garansi, layanan, status tambahan, catatan kaki, dan ukuran cetaknya. Tidak ada brand contoh yang otomatis ditambahkan ke database operasional.

Saat membuat nota, pilih **Brand penerbit nota**. Tiap brand mempunyai kode unik dan nomor urut sendiri, misalnya `SIB-000001` dan `DGC-000001`. Kode terdiri dari 2–8 huruf/angka dan dimulai dengan huruf. Kode tidak dapat diganti setelah nota pertama diterbitkan. Brand pada nota yang sudah diterbitkan juga tidak bisa dipindahkan.

Identitas brand disalin ke nota saat diterbitkan. Perubahan logo, rekening, alamat, warna atau ketentuan brand hanya berlaku untuk nota baru. HTML, cetak, PDF dan kontak WhatsApp customer memakai identitas tersimpan itu. Nota lama, tautan customer, pembayaran dan riwayatnya dipertahankan oleh migrasi `20261029010000_multi_brand`, dan dimasukkan ke brand pertama dengan kode `SIB`. Pengaturan toko yang sudah tersimpan dipakai untuk identitas brand pertama.

Jalankan `npm run db:deploy` sebelum menjalankan kode multi-brand terhadap database lama. Pengujian lokal juga memeriksa migrasi pada database terpisah berisi contoh nota lama.

## Integrasi Supabase SDK

Helper browser tersedia di `utils/supabase/client.ts`, helper server di `utils/supabase/server.ts`, dan penyegaran sesi Supabase di `proxy.ts` melalui `utils/supabase/middleware.ts`. Helper server bersifat async: gunakan `const supabase = await createClient()`. Proxy hanya memperbarui sesi bila ada cookie Supabase; login nota tetap memakai passcode admin.

Isi `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` di `.env.local`. Prisma CLI juga membaca `.env.local` terlebih dahulu, kemudian `.env`, dengan environment proses tetap memiliki prioritas tertinggi. Publishable key bukan pengganti password PostgreSQL dan tidak membuka schema privat `nota` kepada browser.

Kode aplikasi berada di proyek Next.js yang sama. Data tersimpan di PostgreSQL melalui Prisma 7. Supabase hanya dipakai sebagai penyedia PostgreSQL; customer tidak membutuhkan akun dan tidak memerlukan Supabase Auth.

## Menjalankan dengan Supabase

1. Buat proyek Supabase milik toko, lalu buka **Connect** di dashboard.
2. Salin `.env.example` menjadi `.env`. Isi `DATABASE_URL` dengan URI Transaction pooler untuk aplikasi. Isi `DIRECT_URL` dengan URI Direct connection untuk migrasi; jika jaringan tidak mendukung IPv6, gunakan Session pooler port 5432. Salin URI dari dashboard proyek, bukan menebak hostname. Encode karakter khusus pada password di URI. Jangan commit `.env` atau mengirim kredensial melalui chat.
3. Isi `NEXT_PUBLIC_SITE_URL` dengan origin website yang benar, tanpa path. Ini dipakai untuk QR nota.
4. Jalankan:

   ```powershell
   npm install
   npm run db:generate
   npm run db:deploy
   npm run dev
   ```

5. Buka `http://localhost:3000/admin`. Passcode awal adalah `121413`, atau nilai `ADMIN_INITIAL_PASSCODE` pada saat admin pertama kali diinisialisasi. Ganti melalui Pengaturan bila diperlukan. Mengubah variabel lingkungan setelah inisialisasi tidak mengganti passcode yang sudah disimpan.

Referensi resmi: [koneksi Prisma di Supabase](https://supabase.com/docs/guides/database/prisma), [Prisma PostgreSQL](https://www.prisma.io/docs/v7/prisma-orm/quickstart/postgresql).

## Mencoba sebelum membuat Supabase

```powershell
npm run dev:nota
```

Perintah ini menjalankan PostgreSQL lokal khusus proyek, menerapkan migrasi, dan membuka server pengembangan di `http://localhost:3100/admin`. Passcode awal `121413`. Data disimpan di `.nota-local/development/`, terpisah dari Supabase, dan tetap ada setelah server dihentikan. Hentikan dengan Ctrl+C. Tidak perlu mengisi `.env` untuk cara ini. Data lokal belum bisa diakses customer melalui internet dan tidak otomatis dipindahkan ke Supabase.

## Hosting

Tambahkan `DATABASE_URL`, `DIRECT_URL`, `ADMIN_INITIAL_PASSCODE`, dan `NEXT_PUBLIC_SITE_URL` ke environment hosting. Jalankan `npm run db:deploy` terhadap database tujuan sekali sebelum mengaktifkan fitur. Build menjalankan Prisma generate tanpa memerlukan koneksi database. Jangan menjalankan migrasi pengujian pada database operasional.

Tabel nota berada pada schema PostgreSQL **nota**, terpisah dari `public`. Jangan menambahkan schema `nota` ke exposed schemas Supabase Data API atau memberi role `anon`/`authenticated` akses ke schema ini. Seluruh akses customer melalui server aplikasi yang hanya membaca nota dengan token acak. Kunci Supabase publishable/anon/service-role tidak diperlukan di browser maupun aplikasi ini.

## Penggunaan

- Admin membuat nota berisi customer, WhatsApp, perangkat, seri/IMEI, keluhan, tindakan, biaya, diskon, DP, garansi, dan catatan. Catatan internal hanya tampil untuk admin.
- Nomor nota `SIB-000001` dan tautan acak dibuat otomatis. Nomor urut dapat memiliki celah; nomor tidak digunakan sebagai kunci akses customer.
- Setelah disimpan, admin dapat membuka nota, menyalin tautan, atau membuka WhatsApp dengan pesan siap kirim. Pengiriman pesan tetap dilakukan oleh admin di WhatsApp.
- Pembayaran lanjutan dicatat terpisah sebagai riwayat. Jumlah pembayaran tidak boleh melebihi sisa tagihan. Tidak ada penghapusan pembayaran melalui UI.
- Perubahan status dicatat dengan waktu WIB. Customer dapat menekan Perbarui atau memuat ulang halaman untuk melihat status terbaru.
- Pengaturan mencakup identitas setiap brand, logo raster maksimal 200 KB, warna, rekening, catatan kaki, layanan, tambahan status, dan ukuran cetak. Identitas dan ketentuan disalin saat nota dibuat; nota lama mempertahankan pengaturan saat diterbitkan.
- Cetak tersedia untuk A4, 80 mm, dan 58 mm. Pilih ukuran yang sama pada pengaturan printer. Unduh PDF menghasilkan file langsung dari server, tanpa layanan PDF pihak ketiga. Logo WebP tampil pada website/cetak browser; gunakan PNG/JPG bila logo juga harus tampil di PDF.
- Tautan nota bersifat pribadi: siapa pun yang memiliki tautannya dapat melihat nota tersebut. IMEI dan WhatsApp disamarkan. Jangan membagikan tautan ke pihak lain.

## Autentikasi dan konsistensi

Passcode disimpan sebagai hash scrypt bersalt. Cookie sesi HttpOnly, SameSite Strict, Secure saat produksi, kedaluwarsa setelah 12 jam. Token sesi di database berupa hash. Ganti passcode mengakhiri semua sesi. Percobaan masuk dibatasi melalui database sehingga berlaku lintas instance hosting. Penulisan memeriksa origin dan sesi. API serta nota memakai no-store/noindex dan referrer policy no-referrer. Halaman nota/admin tidak memuat analytics atau script iklan website.

Pembaruan nota dan pembayaran menggunakan transaksi serta versi nota. Jika dua tab menyunting versi yang sama, permintaan kedua ditolak dan admin diminta memuat ulang. Harga menggunakan bilangan bulat Rupiah dengan batas total Rp100 juta.

## Pemeriksaan

```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run test:nota
```

Pengujian browser memerlukan database **khusus pengujian**, bukan database toko:

```powershell
$env:NOTA_TEST_DATABASE_URL = 'postgresql://...database-pengujian...'
npm run test:nota:e2e
```

Gunakan database kosong khusus pengujian. Untuk menjalankan pengujian browser lengkap dengan PostgreSQL lokal baru secara otomatis, jalankan `npx playwright install chromium` sekali, lalu `npm run test:nota:e2e:local`. Aplikasi pengujian memakai port 3107. Database lokal pengujian tersimpan di `.nota-local/test-*/`. File PDF dan tangkapan layar pengujian tersimpan di `test-results/` yang diabaikan Git.

Jika Turbopack tersendat pada filesystem Windows, jalankan pengujian dengan `$env:NOTA_WEBPACK = '1'` agar build pengujian memakai Webpack. Build produksi dengan Webpack juga tersedia melalui `npm run build -- --webpack`. Aplikasi tetap menggunakan Next.js yang sama.

## Backup

Aktifkan backup pada penyedia database sesuai paket dan kebutuhan toko. Salin `.env` ke pengelola kredensial yang aman. Backup data operasional dan uji pemulihan secara berkala; folder kode saja bukan backup data nota.
