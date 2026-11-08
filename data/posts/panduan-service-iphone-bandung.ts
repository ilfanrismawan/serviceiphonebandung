import type { BlogPost } from "@/types";
import { siteConfig } from "@/config/site";

export const panduanServiceBandungPost: BlogPost = {
  slug: "panduan-service-iphone-bandung",
  title: "Service iPhone Bandung: Panduan Memilih Tempat, Biaya, dan Persiapan",
  seoTitle: "Service iPhone Bandung: Panduan Biaya & Servis",
  description: "Panduan service iPhone Bandung: pahami diagnosis, bandingkan biaya dan komponen, cek garansi, serta siapkan data sebelum datang ke tempat servis.",
  publicationApproved: true,
  publishedAt: "2026-11-09",
  updatedAt: "2026-11-09",
  readingMinutes: 8,
  image: "/images/hero-repair.webp",
  imageAlt: "iPhone dengan layar retak, komponen, dan peralatan perbaikan di atas alas kerja",
  imageCaption: "Gambar pendukung dari aset website; bukan dokumentasi kasus pelanggan dalam artikel ini.",
  relatedServiceSlug: "ganti-baterai-iphone",
  sources: [
    { title: "Apple: Mempersiapkan iPhone atau iPad untuk jadwal servis", url: "https://support.apple.com/id-id/109519" },
    { title: "Apple: Riwayat Komponen dan Servis iPhone", url: "https://support.apple.com/id-id/102658" },
    { title: "Apple: Perbaikan dan pemeriksaan status perbaikan", url: "https://support.apple.com/id-id/repair" },
  ],
  sections: [
    {
      heading: "Mencari service iPhone Bandung: mulai dari keluhan dan lokasi",
      paragraphs: [
        "Jika Anda mencari service iPhone Bandung, mulailah dengan tempat yang dapat menjelaskan hasil diagnosis, rincian biaya, pilihan komponen, dan ketentuan garansi sebelum pengerjaan. Pastikan alamatnya dapat dikunjungi dan tanyakan apakah model serta keluhan iPhone Anda bisa diperiksa. Harga awal saja belum cukup untuk membandingkan dua tempat servis.",
        "Panduan ini membantu Anda menentukan pertanyaan yang perlu diajukan, menyiapkan data, dan memeriksa perangkat setelah perbaikan. Untuk kebutuhan kunjungan, tersedia tautan layanan, daftar harga, dan lokasi toko di bagian terkait agar Anda dapat melanjutkan sesuai keluhan.",
      ],
      subsections: [{
        heading: "Informasi yang perlu dikirim sebelum datang",
        paragraphs: [
          "Sebutkan model iPhone, gejala utama, kapan masalah mulai muncul, dan apakah perangkat pernah jatuh, terkena cairan, diperbaiki, atau diperbarui iOS. Jika masih bisa digunakan, sertakan foto atau video gejalanya tanpa menampilkan pesan pribadi. Informasi ini membantu konsultasi awal, tetapi belum menggantikan pemeriksaan perangkat.",
          "Contoh pesan: ‘iPhone 11 saya masih berbunyi saat ditelepon, tetapi layarnya gelap setelah jatuh. Apakah bisa diperiksa? Mohon jelaskan biaya pemeriksaan, pilihan perbaikan, dan perkiraan waktunya.’ Keluhan yang spesifik lebih berguna daripada hanya menulis ‘HP rusak’.",
        ],
      }],
      links: [{ label: "Lihat jenis layanan iPhone", href: "/layanan" }],
    },
    {
      heading: "Jenis kerusakan dan pemeriksaan yang perlu dipahami",
      paragraphs: ["Gejala adalah titik awal pemeriksaan, bukan kepastian komponen yang rusak. Dua perangkat dengan keluhan serupa dapat membutuhkan tindakan berbeda. Minta teknisi menjelaskan temuan yang mendasari usulan perbaikan."],
      subsections: [
        {
          heading: "Baterai, layar, dan pengisian daya",
          paragraphs: [
            "Untuk keluhan baterai cepat habis, ceritakan pola pemakaian dan apakah iPhone sering mati mendadak. Jika tersedia pada perangkat, informasi kesehatan baterai dapat menjadi bahan pemeriksaan, tetapi jangan menjadikannya satu-satunya dasar penggantian. Tanyakan apa yang sudah diperiksa dan mengapa baterai dinilai perlu diganti.",
            "Pada layar retak atau sentuhan bermasalah, jelaskan apakah gambar masih muncul, ada garis, atau bagian tertentu tidak merespons. Sebelum menyetujui layar pengganti, minta penjelasan jenis panel, fungsi yang dapat dipertahankan, dan garansinya. Hindari menyamakan semua penawaran berlabel ‘LCD’ tanpa rincian komponennya.",
            "Untuk iPhone yang tidak mengisi daya, catat kabel dan adaptor yang digunakan serta apakah masalah muncul terus-menerus atau hanya saat posisi kabel tertentu. Minta pemeriksaan jalur pengisian sebelum menyimpulkan bahwa port harus diganti. Jangan memaksa konektor masuk atau membongkar port sendiri.",
          ],
        },
        {
          heading: "Mati total, terkena cairan, kamera, dan Face ID",
          paragraphs: [
            "‘Mati total’ menggambarkan perangkat yang tidak tampak menyala, bukan diagnosis kerusakan logic board. Sampaikan apakah sebelumnya perangkat sempat panas, jatuh, atau bermasalah saat diisi daya. Minta penjelasan tahap pemeriksaan, kemungkinan tindakan, dan risiko terhadap data sebelum menyetujui pekerjaan pada mesin.",
            "Jika ada riwayat paparan cairan, beri tahu teknisi meskipun perangkat sempat berfungsi kembali. Untuk kamera atau Face ID, jelaskan pesan yang muncul dan kondisi saat fitur gagal. Jangan menganggap penggantian satu modul pasti memulihkan seluruh fungsi; hasilnya perlu dinilai sesuai model, kondisi perangkat, dan proses perbaikan yang tersedia.",
          ],
        },
      ],
      links: [
        { label: "Layanan ganti layar", href: "/layanan/ganti-lcd-iphone" },
        { label: "Pemeriksaan port charger", href: "/layanan/service-port-charger-iphone" },
        { label: "Pemeriksaan iPhone mati total", href: "/layanan/service-iphone-mati-total" },
        { label: "Penanganan iPhone kena air", href: "/layanan/service-iphone-kena-air" },
      ],
    },
    {
      heading: "Cara menilai biaya dan waktu pengerjaan",
      paragraphs: ["Tidak ada satu harga servis yang berlaku untuk semua iPhone. Model, kerusakan yang ditemukan, pilihan komponen, dan lingkup pekerjaan menentukan penawaran. Gunakan halaman harga sebagai acuan awal, lalu minta konfirmasi sesuai perangkat Anda; artikel ini tidak memberikan nominal atau janji durasi yang belum diverifikasi."],
      subsections: [
        {
          heading: "Bandingkan penawaran dengan lingkup yang sama",
          paragraphs: ["Misalnya, Anda menerima dua penawaran untuk layar iPhone. Sebelum memilih yang lebih murah, pastikan keduanya menjelaskan jenis panel, biaya pemasangan, fungsi yang diuji, dan ketentuan garansi. Penawaran dengan komponen atau cakupan berbeda tidak dapat dibandingkan hanya dari angka akhirnya."],
          list: [
            "Tanyakan apakah ada biaya diagnosis atau pembatalan bila perbaikan tidak dilanjutkan.",
            "Minta rincian komponen, jasa, dan biaya lain yang mungkin berlaku.",
            "Pastikan tambahan tindakan dan biaya harus mendapat persetujuan Anda terlebih dahulu.",
            "Tanyakan perkiraan selesai, ketersediaan komponen, dan cara menerima pembaruan pengerjaan.",
          ],
        },
        {
          heading: "Mengapa estimasi bisa berubah setelah diagnosis",
          paragraphs: [
            "Konsultasi lewat pesan hanya menggunakan gejala yang Anda ceritakan. Setelah pemeriksaan, teknisi mungkin menemukan masalah lain yang belum terlihat dari luar. Jika lingkup pekerjaan berubah, minta penjelasan temuan dan penawaran baru sebelum melanjutkan, bukan sekadar menerima tagihan tambahan saat pengambilan.",
            "Kepastian waktu juga bergantung pada antrean, stok, pemeriksaan lanjutan, dan pengujian. Bila iPhone dipakai untuk pekerjaan atau komunikasi penting, tanyakan sejak awal apakah perangkat perlu ditinggal dan siapkan cara komunikasi pengganti.",
          ],
        },
      ],
      links: [{ label: "Lihat acuan harga per model", href: "/harga" }],
    },
    {
      heading: "Memilih penyedia servis dan komponen pengganti",
      paragraphs: ["Pilih berdasarkan penjelasan yang dapat diperiksa: status penyedia, pilihan perbaikan, dokumen transaksi, dan mekanisme klaim. Istilah promosi seperti ‘original’ atau ‘bergaransi’ perlu diperjelas sebelum Anda menyerahkan perangkat."],
      subsections: [
        {
          heading: "Jalur resmi Apple dan servis independen",
          paragraphs: [
            "Untuk mengetahui apakah suatu tempat merupakan Penyedia Servis Resmi Apple, gunakan jalur verifikasi pada situs dukungan Apple. Nama toko, penggunaan logo, atau pernyataan di media sosial saja belum membuktikan status tersebut. Jika perangkat masih memiliki perlindungan layanan, periksa pilihan yang berlaku untuk perangkat Anda sebelum memilih tindakan.",
            "Saat mempertimbangkan servis independen, tanyakan kemampuan menangani keluhan Anda, asal dan kondisi komponen, proses pengujian, serta tanggung jawab setelah perbaikan. Website ini tidak menyatakan dirinya sebagai Penyedia Servis Resmi Apple. Anda dapat memakai kriteria yang sama untuk menilai penawaran secara terbuka.",
          ],
        },
        {
          heading: "Periksa komponen, riwayat servis, dan ketentuan garansi",
          paragraphs: [
            "Minta penjelasan apakah komponen baru atau bekas dan apa dasar klaim keasliannya. Apple menyediakan Riwayat Komponen dan Servis melalui Pengaturan > Umum > Mengenai pada perangkat yang mendukung. Informasi yang tersedia berbeda menurut model dan versi iOS; menu ini bukan daftar lengkap semua kemungkinan perbaikan.",
            "Dokumentasi Apple menjelaskan bahwa label Tidak Dikenal dapat memiliki beberapa penyebab, termasuk komponen yang tidak asli, tidak bekerja semestinya, atau belum diverifikasi dan ditautkan setelah perbaikan. Jadi, jangan menyimpulkan penyebabnya hanya dari label. Minta penjelasan status yang mungkin muncul sebelum tindakan dan periksa hasilnya setelah pengerjaan.",
            "Untuk garansi servis, mintalah ketentuan tertulis: bagian yang ditanggung, masa berlaku, syarat klaim, pengecualian, dan bukti yang perlu dibawa. Bedakan garansi dari penyedia servis dengan perlindungan dari Apple. Jangan berasumsi bahwa semua kerusakan berikutnya otomatis ditanggung.",
          ],
        },
      ],
    },
    {
      heading: "Persiapan data dan perangkat sebelum servis",
      paragraphs: ["Sebelum datang, persiapkan perangkat sejauh kondisinya memungkinkan. Apple menyarankan pencadangan sebagai bagian dari persiapan servis. Jika iPhone tidak dapat menyala, sampaikan bahwa pencadangan belum bisa dilakukan dan diskusikan prioritas data sebelum menyetujui tindakan."],
      subsections: [
        {
          heading: "Cadangkan data dan jaga akses akun",
          paragraphs: [
            "Buat cadangan melalui iCloud atau komputer sesuai petunjuk Apple, lalu periksa bahwa prosesnya selesai. Jika data belum tersimpan di tempat lain, jangan menyetujui penghapusan atau pemulihan sistem tanpa memahami konsekuensinya. Tidak semua jenis perbaikan memerlukan penghapusan data, tetapi tidak ada alasan untuk menganggap data pasti aman tanpa cadangan.",
            "Jangan membagikan kata sandi Apple Account atau kode verifikasi. Bila ada pengujian yang memerlukan akses perangkat, tanyakan tujuannya dan lakukan sendiri saat Anda hadir jika memungkinkan. Ikuti petunjuk persiapan penyedia yang dipilih, termasuk tindakan pada fitur Lacak bila diminta melalui proses servis yang sah, sambil tetap memegang kendali akun Anda.",
          ],
        },
        {
          heading: "Catat kondisi awal pada nota servis",
          paragraphs: ["Minta nota yang mencatat model perangkat, keluhan, kondisi fisik, aksesori yang dititipkan, lingkup pekerjaan yang disetujui, dan kontak pengambilan. Jika ada fungsi yang tidak bisa diuji karena perangkat mati, catat juga keterbatasan tersebut. Dokumentasi ini membantu kedua pihak membedakan kondisi awal dengan hasil pengerjaan."],
        },
      ],
    },
    {
      heading: "Pemeriksaan saat iPhone diserahkan kembali",
      paragraphs: ["Sebelum meninggalkan tempat servis, cocokkan tindakan pada nota dengan penjelasan teknisi. Minta kesempatan menguji keluhan awal dan fungsi lain yang relevan. Pemeriksaan langsung membantu menyampaikan masalah secara spesifik jika hasilnya belum sesuai."],
      subsections: [{
        heading: "Uji fungsi sesuai keluhan dan simpan dokumen",
        paragraphs: ["Contohnya, setelah perbaikan layar, uji sentuhan sampai tepi, tampilan, dan kecerahan. Setelah pekerjaan pengisian daya, coba pengisian bersama teknisi. Untuk pekerjaan yang berkaitan dengan kamera atau sensor, uji fitur yang disebut dalam kesepakatan. Catat fungsi yang belum pulih dan tindak lanjut yang disepakati."],
        list: [
          "Periksa panggilan, speaker, mikrofon, kamera, dan Face ID bila tersedia dan dapat diuji.",
          "Buka riwayat komponen pada perangkat yang mendukung dan minta penjelasan jika ada pesan baru.",
          "Simpan nota, rincian komponen, serta ketentuan dan kontak klaim garansi.",
          "Jika keluhan muncul lagi, dokumentasikan gejala dan hubungi penyedia sesuai prosedur klaim.",
        ],
      }],
    },
    {
      heading: "Konsultasi dan kunjungan ke Dipati Ukur, Bandung",
      paragraphs: [
        `Lokasi yang tercantum pada website Service iPhone Bandung adalah ${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city}. Jam operasional yang tercantum: ${siteConfig.hoursLabel}. Konfirmasikan jadwal dan kesiapan pemeriksaan sebelum berangkat, terutama bila datang khusus untuk model atau keluhan tertentu.`,
      ],
      subsections: [{
        heading: "Konfirmasi kebutuhan melalui WhatsApp",
        paragraphs: [
          `Hubungi WhatsApp ${siteConfig.contact.phoneDisplay} dengan model iPhone, gejala, dan riwayat masalah. Tanyakan kebutuhan pemeriksaan, pilihan komponen, acuan biaya, serta kemungkinan perangkat harus ditinggal. Keputusan pengerjaan sebaiknya dibuat setelah hasil diagnosis dan penawarannya jelas.`,
          "Jika belum yakin jenis layanan yang dibutuhkan, mulai dari konsultasi keluhan. Anda tidak perlu menebak nama komponen yang rusak atau memesan penggantian komponen sebelum perangkat diperiksa.",
        ],
      }],
      links: [
        { label: "Alamat dan petunjuk lokasi Dipati Ukur", href: "/lokasi/dipatiukur" },
        { label: "Hubungi untuk konsultasi", href: "/kontak" },
      ],
    },
  ],
  faqs: [
    { question: "Berapa biaya service iPhone di Bandung?", answer: "Biaya bergantung pada model, hasil diagnosis, komponen, dan lingkup pekerjaan. Gunakan daftar harga sebagai acuan awal dan minta rincian penawaran untuk perangkat Anda sebelum pengerjaan." },
    { question: "Apakah service iPhone bisa ditunggu?", answer: "Tanyakan berdasarkan keluhan, antrean, dan stok komponen saat konsultasi. Pemeriksaan mesin atau kerusakan yang membutuhkan pengujian lanjutan dapat memerlukan perangkat ditinggal; jangan menganggap semua servis selesai dalam satu kunjungan." },
    { question: "Apakah data iPhone pasti aman saat servis?", answer: "Tidak ada jaminan umum untuk semua kondisi dan tindakan. Cadangkan data jika perangkat masih dapat diakses, lalu diskusikan risiko sebelum menyetujui pemulihan sistem atau pekerjaan lain yang dapat memengaruhi data." },
    { question: "Apakah Service iPhone Bandung merupakan servis resmi Apple?", answer: "Website ini tidak menyatakan sebagai Penyedia Servis Resmi Apple. Verifikasi status resmi suatu penyedia melalui situs dukungan Apple bila status tersebut menjadi pertimbangan Anda." },
  ],
};
