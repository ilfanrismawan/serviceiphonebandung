import type { ModelServicePage } from "@/types";

/**
 * Halaman per model hanya untuk kombinasi yang terbukti dicari di Google
 * (lihat docs/riset-keyword-longtail-2026-10-26.md). Jangan generate semua
 * model sekaligus: halaman tanpa isi khusus berisiko dianggap doorway page.
 *
 * Fakta Parts and Service History: https://support.apple.com/en-us/102658
 * Siklus baterai 500x (iPhone 14 ke bawah): https://support.apple.com/en-us/101575
 */
export const modelServicePages: ModelServicePage[] = [
  {
    serviceSlug: "ganti-baterai-iphone",
    modelSlug: "iphone-11",
    summary: "Bisa ditunggu, kondisi baterai lama dicek dulu sebelum diganti.",
    intro:
      "iPhone 11 rilis tahun 2019, jadi banyak unit yang baterainya sudah melewati ratusan siklus pengisian. Kalau Kesehatan Baterai sudah di bawah 80% atau iPhone mati sendiri padahal persentase masih ada, ganti baterai biasanya jauh lebih hemat daripada ganti unit. Kami cek baterai dan port charger dulu supaya yang diganti memang sumber masalahnya.",
    notes: [
      "Apple menyebut baterai iPhone 14 ke bawah, termasuk iPhone 11, dirancang mempertahankan hingga 80% kapasitas awal setelah 500 siklus pengisian penuh.",
      "Di iPhone 11 dengan iOS 15.2 ke atas, menu Pengaturan > Umum > Mengenai mencatat penggantian baterai dan layar. Baterai non-Apple dapat tercatat sebagai Unknown Part dan angka Kesehatan Baterai bisa tidak tampil.",
      "iPhone 11 Pro dan 11 Pro Max memakai baterai yang berbeda, jadi harganya juga berbeda. Lihat tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-11", "iphone-11-pro", "iphone-11-pro-max"],
    relatedPostSlug: "kapan-baterai-iphone-perlu-diganti",
    keywords: ["ganti baterai iphone 11 bandung", "harga ganti baterai iphone 11 bandung", "ganti baterai iphone 11 di bandung"],
    faqs: [
      {
        question: "Berapa harga ganti baterai iPhone 11 di Bandung?",
        answer:
          "Harga part baterai iPhone 11 saat ini {battery}, belum termasuk biaya pemasangan. Total biaya kami sampaikan lewat WhatsApp atau saat kamu datang, dan baru dikerjakan setelah kamu setuju.",
      },
      {
        question: "Apa bedanya dengan ganti baterai di servis resmi Apple?",
        answer:
          "Penyedia servis resmi Apple memakai part dan proses Apple dengan harga tersendiri. Kami toko servis independen, bukan bagian dari Apple. Jenis part yang dipakai dan kemungkinan pesan Unknown Part kami jelaskan sebelum pengerjaan supaya kamu bisa membandingkan.",
      },
      {
        question: "Berapa lama ganti baterai iPhone 11?",
        answer:
          "Umumnya bisa ditunggu selama part tersedia. Konfirmasikan stok lewat WhatsApp sebelum berangkat supaya tidak bolak-balik.",
      },
    ],
  },
  {
    serviceSlug: "ganti-baterai-iphone",
    modelSlug: "iphone-13",
    summary: "Kesehatan Baterai dicek dulu, bisa ditunggu, harga disepakati di awal.",
    intro:
      "iPhone 13 masih banyak dipakai harian, dan keluhan yang paling terasa biasanya baterai cepat turun atau iPhone mati mendadak. Sebelum mengganti, kami cek Kesehatan Baterai dan memastikan borosnya bukan sekadar efek sementara setelah update iOS, supaya kamu tidak membayar part yang belum perlu diganti.",
    notes: [
      "iPhone 13 termasuk model yang dirancang mempertahankan hingga 80% kapasitas awal setelah 500 siklus pengisian penuh.",
      "Mulai iPhone 12, menu Pengaturan > Umum > Mengenai mencatat penggantian baterai, layar, kamera, dan papan logika. Baterai non-Apple dapat tercatat sebagai Unknown Part.",
      "iPhone 13 mini, 13 Pro, dan 13 Pro Max memakai baterai yang berbeda. Harga masing-masing ada di tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-13-mini", "iphone-13", "iphone-13-pro", "iphone-13-pro-max"],
    relatedPostSlug: "kapan-baterai-iphone-perlu-diganti",
    keywords: ["ganti baterai iphone 13 bandung", "harga ganti baterai iphone 13 bandung", "ganti baterai iphone 13 di bandung"],
    faqs: [
      {
        question: "Berapa harga ganti baterai iPhone 13 di Bandung?",
        answer:
          "Harga part baterai iPhone 13 saat ini {battery}, belum termasuk biaya pemasangan. Total biaya dikonfirmasi sebelum pengerjaan.",
      },
      {
        question: "Apakah ganti baterai iPhone 13 bisa gratis?",
        answer:
          "Penggantian tanpa biaya hanya berlaku lewat Apple atau penyedia servis resmi bila unit masih tercakup garansi Apple atau AppleCare+ dan kapasitas baterainya di bawah 80%. Status cakupan bisa dicek di checkcoverage.apple.com. Di toko kami, ganti baterai berbayar dengan harga yang disepakati di awal.",
      },
      {
        question: "Baterai iPhone 13 kembung, masih aman dipakai?",
        answer:
          "Sebaiknya jangan dipakai atau dicas lagi, lalu segera diperiksa. Baterai kembung bisa menekan layar sampai terangkat dan merusak komponen lain.",
      },
    ],
  },
  {
    serviceSlug: "ganti-baterai-iphone",
    modelSlug: "iphone-xr",
    summary: "Cocok untuk XR yang cepat habis atau mati sendiri. Bisa ditunggu.",
    intro:
      "iPhone XR rilis tahun 2018, sehingga sebagian besar unit yang masih dipakai sekarang sudah menjalani banyak siklus pengisian. Tandanya antara lain persentase turun cepat, iPhone mati sendiri sebelum baterai habis, atau muncul rekomendasi servis di menu Kesehatan Baterai.",
    notes: [
      "Di halaman Parts and Service History Apple, iPhone XR tercatat untuk komponen baterai. Baterai non-Apple dapat memunculkan pesan bahwa baterai tidak dapat diverifikasi.",
      "Kalau XR kamu juga sering panas atau charging putus-putus, kami cek port charger dan kabel sekalian, karena gejalanya bisa mirip baterai lemah.",
      "Harga part baterai iPhone XR di daftar kami sama dengan iPhone X, tetapi bentuk baterainya berbeda sehingga tidak bisa saling tukar.",
    ],
    relatedModelSlugs: ["iphone-xr", "iphone-xs", "iphone-xs-max", "iphone-x"],
    relatedPostSlug: "kapan-baterai-iphone-perlu-diganti",
    keywords: ["ganti baterai iphone xr bandung", "harga ganti baterai iphone xr bandung", "ganti baterai iphone xr di bandung"],
    faqs: [
      {
        question: "Berapa harga ganti baterai iPhone XR di Bandung?",
        answer:
          "Harga part baterai iPhone XR saat ini {battery}, belum termasuk biaya pemasangan. Total biaya kami sampaikan sebelum pengerjaan.",
      },
      {
        question: "Setelah ganti baterai, apakah Battery Health iPhone XR tetap muncul?",
        answer:
          "Tergantung jenis baterai. Dengan baterai non-Apple, iOS dapat menampilkan pesan bahwa baterai tidak dapat diverifikasi dan angka Kesehatan Baterai bisa tidak tampil, walau fungsi baterai tetap normal. Tanyakan pilihan part sebelum pengerjaan.",
      },
      {
        question: "Berapa lama ganti baterai iPhone XR?",
        answer: "Umumnya bisa ditunggu selama part tersedia. Konfirmasikan stok lewat WhatsApp sebelum datang.",
      },
    ],
  },
  {
    serviceSlug: "ganti-baterai-iphone",
    modelSlug: "iphone-12",
    summary: "Harga jelas di awal, bisa ditunggu, data tidak dihapus.",
    intro:
      "Kalau iPhone 12 kamu harus dicas lebih dari sekali sehari padahal pola pemakaian tidak berubah, atau Kesehatan Baterai sudah di bawah 80%, baterainya layak diperiksa. Kami cek dulu apakah penyebabnya memang baterai, bukan aplikasi yang boros atau port charger yang bermasalah.",
    notes: [
      "iPhone 12 dirancang mempertahankan hingga 80% kapasitas awal setelah 500 siklus pengisian penuh.",
      "Mulai iPhone 12, menu Pengaturan > Umum > Mengenai mencatat penggantian baterai, layar, kamera, dan papan logika. Baterai non-Apple dapat tercatat sebagai Unknown Part.",
      "Di daftar kami, harga part baterai iPhone 12 dan iPhone 12 Pro sama. iPhone 12 mini dan 12 Pro Max berbeda.",
    ],
    relatedModelSlugs: ["iphone-12-mini", "iphone-12", "iphone-12-pro", "iphone-12-pro-max"],
    relatedPostSlug: "kapan-baterai-iphone-perlu-diganti",
    keywords: ["ganti baterai iphone 12 bandung", "harga ganti baterai iphone 12 bandung", "ganti baterai iphone 12 di bandung"],
    faqs: [
      {
        question: "Berapa harga ganti baterai iPhone 12 di Bandung?",
        answer:
          "Harga part baterai iPhone 12 saat ini {battery}, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Apakah ganti baterai iPhone 12 menghapus data?",
        answer:
          "Tidak. Ganti baterai tidak menyentuh data di iPhone. Meski begitu, cadangkan lewat iCloud atau komputer lebih dulu sebagai langkah aman.",
      },
      {
        question: "Bisa ditunggu?",
        answer: "Umumnya bisa ditunggu selama part tersedia. Kabari kami lewat WhatsApp sebelum datang untuk cek stok.",
      },
    ],
  },
  {
    serviceSlug: "ganti-baterai-iphone",
    modelSlug: "iphone-x",
    summary: "Solusi hemat untuk iPhone X yang baterainya sudah drop.",
    intro:
      "iPhone X rilis tahun 2017, jadi kalau baterainya belum pernah diganti, kapasitasnya kemungkinan besar sudah jauh berkurang. Selama layar, Face ID, dan kamera masih normal, ganti baterai adalah cara paling murah untuk membuatnya nyaman dipakai lagi.",
    notes: [
      "iPhone X tidak termasuk model yang tercantum di halaman Parts and Service History Apple. Daftar tersebut dimulai dari iPhone XR dan XS.",
      "Harga part baterai iPhone X di daftar kami sama dengan iPhone XR, tetapi bentuk baterainya berbeda sehingga tidak bisa saling tukar.",
      "Kalau Face ID ikut bermasalah, penyebabnya bukan baterai. Sampaikan saat konsultasi supaya dicek terpisah.",
    ],
    relatedModelSlugs: ["iphone-x", "iphone-xr", "iphone-xs", "iphone-xs-max"],
    relatedPostSlug: "kapan-baterai-iphone-perlu-diganti",
    keywords: ["ganti baterai iphone x bandung", "harga ganti baterai iphone x bandung"],
    faqs: [
      {
        question: "Berapa harga ganti baterai iPhone X di Bandung?",
        answer:
          "Harga part baterai iPhone X saat ini {battery}, belum termasuk biaya pemasangan. Total biaya dikonfirmasi sebelum pengerjaan.",
      },
      {
        question: "Masih layak ganti baterai iPhone X?",
        answer:
          "Kalau layar, Face ID, dan kamera masih normal, ganti baterai jauh lebih murah daripada ganti unit. Perlu diingat iPhone X hanya mendapat pembaruan sampai iOS 16, jadi pertimbangkan juga aplikasi yang kamu butuhkan.",
      },
      {
        question: "Berapa lama ganti baterai iPhone X?",
        answer: "Umumnya bisa ditunggu selama part tersedia. Konfirmasikan stok lewat WhatsApp sebelum datang.",
      },
    ],
  },
  {
    serviceSlug: "ganti-baterai-iphone",
    modelSlug: "iphone-14-pro",
    summary: "Dicek dulu apakah borosnya dari baterai atau pengaturan layar.",
    intro:
      "iPhone 14 Pro memakai layar Always-On dan ProMotion 120Hz, jadi pola pemakaian dayanya berbeda dari iPhone biasa. Kalau baterai habis jauh lebih cepat dari biasanya, cek dulu pengaturan layar. Kalau Kesehatan Baterai sudah di bawah 80% atau iPhone mati sendiri, penggantian baterai layak dipertimbangkan.",
    notes: [
      "Apple menyebut baterai iPhone 14 ke bawah dirancang mempertahankan hingga 80% kapasitas awal setelah 500 siklus pengisian penuh.",
      "Mulai iPhone 12, menu Pengaturan > Umum > Mengenai mencatat penggantian baterai, layar, kamera, dan papan logika. Baterai non-Apple dapat tercatat sebagai Unknown Part.",
      "iPhone 14 Pro Max memakai baterai yang lebih besar dengan harga part berbeda. Lihat tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-14", "iphone-14-plus", "iphone-14-pro", "iphone-14-pro-max"],
    relatedPostSlug: "kapan-baterai-iphone-perlu-diganti",
    keywords: ["ganti baterai iphone 14 pro bandung", "harga ganti baterai iphone 14 pro bandung"],
    faqs: [
      {
        question: "Berapa harga ganti baterai iPhone 14 Pro di Bandung?",
        answer:
          "Harga part baterai iPhone 14 Pro saat ini {battery}, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Apakah layar Always-On bikin baterai iPhone 14 Pro cepat habis?",
        answer:
          "Layar Always-On tetap memakai daya walau kecil. Coba matikan opsinya di Pengaturan > Layar & Kecerahan untuk membandingkan. Kalau baterai tetap cepat habis dan Kesehatan Baterai rendah, baterainya perlu diperiksa.",
      },
      {
        question: "Bisa ditunggu?",
        answer: "Umumnya bisa ditunggu selama part tersedia. Kabari kami lewat WhatsApp sebelum datang untuk cek stok.",
      },
    ],
  },
  {
    serviceSlug: "ganti-baterai-iphone",
    modelSlug: "iphone-15",
    summary: "Siklus dan Kesehatan Baterai dicek dulu, pilihan part dijelaskan di awal.",
    intro:
      "iPhone 15 adalah generasi pertama yang baterainya dirancang bertahan hingga 1.000 siklus pengisian penuh sebelum turun ke 80%. Jadi kalau baterai iPhone 15 kamu sudah terasa sangat boros, cek dulu jumlah siklus dan Kesehatan Baterai. Bisa jadi penyebabnya aplikasi atau pengaturan, bukan baterainya. Kalau memang perlu diganti, kami jelaskan pilihan part dan konsekuensinya sebelum dikerjakan.",
    notes: [
      "Apple menyebut baterai iPhone 15 dan yang lebih baru dirancang mempertahankan 80% kapasitas awal setelah 1.000 siklus pengisian penuh, dua kali lipat dari model sebelumnya.",
      "Di iPhone 15, jumlah siklus baterai bisa dilihat langsung di Pengaturan > Umum > Mengenai atau di menu Baterai, tanpa perlu komputer.",
      "Baterai non-Apple dapat memunculkan Pesan Baterai Penting dan tercatat sebagai Suku Cadang Tidak Dikenal di Riwayat Suku Cadang dan Servis.",
      "iPhone 15 Plus, 15 Pro, dan 15 Pro Max memakai baterai yang berbeda dengan harga part berbeda. Lihat tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-15", "iphone-15-plus", "iphone-15-pro", "iphone-15-pro-max"],
    relatedPostSlug: "pesan-baterai-penting-iphone-setelah-ganti-baterai",
    keywords: ["ganti baterai iphone 15 bandung", "harga ganti baterai iphone 15 bandung", "ganti baterai iphone 15 pro bandung"],
    faqs: [
      {
        question: "Berapa harga ganti baterai iPhone 15 di Bandung?",
        answer:
          "Harga part baterai iPhone 15 saat ini mulai {battery}, belum termasuk biaya pemasangan. Total biaya kami sampaikan sebelum pengerjaan dan baru dikerjakan setelah kamu setuju.",
      },
      {
        question: "iPhone 15 saya masih garansi, sebaiknya ganti di mana?",
        answer:
          "Kalau masih tercakup garansi Apple atau AppleCare+ dan kapasitas baterainya di bawah 80%, cek dulu cakupannya di checkcoverage.apple.com dan ajukan lewat Apple atau penyedia servis resmi. Kami toko servis independen, bukan bagian dari Apple.",
      },
      {
        question: "Setelah ganti baterai, apakah muncul Pesan Baterai Penting?",
        answer:
          "Dengan baterai non-Apple, pesan itu bisa muncul dan angka Kesehatan Baterai bisa tidak tampil, walau iPhone tetap bisa dipakai normal. Kami jelaskan kemungkinan ini untuk tiap pilihan part sebelum pengerjaan.",
      },
    ],
  },
  {
    serviceSlug: "ganti-baterai-iphone",
    modelSlug: "iphone-16",
    summary: "Dicek dulu penyebab borosnya, harga part disepakati di awal.",
    intro:
      "iPhone 16 masih tergolong baru, jadi baterai yang terasa cepat habis belum tentu sudah aus. Penyebabnya sering dari proses indeks setelah update iOS, aplikasi yang berjalan di latar belakang, atau suhu. Kami cek jumlah siklus, Kesehatan Baterai, dan port USB-C dulu, supaya kamu tidak membayar baterai baru yang belum diperlukan.",
    notes: [
      "Baterai iPhone 16 dirancang mempertahankan 80% kapasitas awal setelah 1.000 siklus pengisian penuh.",
      "Jumlah siklus baterai iPhone 16 bisa dilihat di Pengaturan > Umum > Mengenai atau di menu Baterai.",
      "Unit yang masih dalam masa garansi Apple sebaiknya dicek cakupannya dulu di checkcoverage.apple.com sebelum dibuka di servis independen.",
      "iPhone 16 Plus, 16 Pro, dan 16 Pro Max memakai baterai yang berbeda dengan harga part berbeda. Lihat tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-16", "iphone-16-plus", "iphone-16-pro", "iphone-16-pro-max"],
    relatedPostSlug: "pesan-baterai-penting-iphone-setelah-ganti-baterai",
    keywords: ["ganti baterai iphone 16 bandung", "harga ganti baterai iphone 16 bandung", "ganti baterai iphone 16 pro bandung"],
    faqs: [
      {
        question: "Berapa harga ganti baterai iPhone 16 di Bandung?",
        answer:
          "Harga part baterai iPhone 16 saat ini mulai {battery}, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Baterai iPhone 16 boros setelah update iOS, harus ganti?",
        answer:
          "Belum tentu. Setelah update besar, iPhone butuh beberapa hari untuk menyelesaikan proses di latar belakang dan baterai bisa terasa lebih boros sementara. Kalau setelah sekitar seminggu tetap boros dan Kesehatan Baterai rendah, baru baterainya perlu diperiksa.",
      },
      {
        question: "Apakah ganti baterai iPhone 16 menghapus data?",
        answer:
          "Tidak. Ganti baterai tidak menyentuh data, tetapi tetap cadangkan iPhone lewat iCloud atau komputer lebih dulu sebagai langkah aman.",
      },
    ],
  },
  {
    serviceSlug: "ganti-lcd-iphone",
    modelSlug: "iphone-15",
    summary: "Lima pilihan kualitas layar, perbedaannya ditunjukkan sebelum dipasang.",
    intro:
      "iPhone 15 memakai layar OLED Super Retina XDR 6,1 inci dengan Dynamic Island. Di daftar kami, pilihan layar penggantinya cukup lengkap, dari Grade A sampai Genuine, dengan selisih harga yang besar. Kami tunjukkan perbedaan kecerahan, warna, dan dukungan fitur tiap pilihan supaya kamu bisa memilih sesuai kebutuhan dan budget.",
    notes: [
      "Di iPhone 15, penggantian layar tercatat di Pengaturan > Umum > Mengenai. Layar yang tidak dapat diverifikasi bisa tercatat sebagai Suku Cadang Tidak Dikenal.",
      "Tanyakan apakah True Tone bisa dipertahankan untuk jenis layar yang kamu pilih sebelum pengerjaan.",
      "Kalau Dynamic Island atau Face ID bermasalah setelah jatuh, kerusakannya bisa ada di modul kamera depan, bukan di layar. Kami cek terpisah.",
      "iPhone 15 Pro dan 15 Pro Max tidak tersedia pilihan Grade A di daftar kami. Lihat tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-15", "iphone-15-plus", "iphone-15-pro", "iphone-15-pro-max"],
    relatedPostSlug: "layar-iphone-pecah-segera-diganti",
    keywords: ["ganti lcd iphone 15 bandung", "harga ganti lcd iphone 15 bandung", "ganti layar iphone 15 bandung"],
    faqs: [
      {
        question: "Berapa harga ganti LCD iPhone 15 di Bandung?",
        answer:
          "Harga part layar iPhone 15 saat ini mulai {lcdGradeA} untuk Grade A, {lcdOled} untuk Oled Plus, dan {lcdGenuine} untuk Genuine/Asli, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Layar iPhone 15 ada garis hijau, harus ganti?",
        answer:
          "Garis hijau pada layar OLED bisa berasal dari panel yang rusak atau konektor yang bermasalah. Kami cek dulu sebelum menyarankan ganti layar.",
      },
      {
        question: "Apakah data hilang saat ganti layar iPhone 15?",
        answer: "Tidak. Ganti layar tidak menghapus data, tetapi tetap cadangkan iPhone lebih dulu sebagai langkah aman.",
      },
    ],
  },
  {
    serviceSlug: "ganti-lcd-iphone",
    modelSlug: "iphone-16",
    summary: "Pilihan Oled Plus, BPT, atau Genuine, dicek dulu sebelum dipasang.",
    intro:
      "iPhone 16 memakai layar OLED Super Retina XDR 6,1 inci dengan Dynamic Island. Di daftar kami, pilihan layar penggantinya Oled Plus, BPT, dan Genuine. Untuk unit yang masih baru, kami sarankan cek dulu apakah masih tercakup AppleCare+, karena biaya klaim layar di sana bisa jauh lebih murah.",
    notes: [
      "Di iPhone 16, penggantian layar tercatat di Pengaturan > Umum > Mengenai. Layar yang tidak dapat diverifikasi bisa tercatat sebagai Suku Cadang Tidak Dikenal.",
      "Cek status AppleCare+ di checkcoverage.apple.com sebelum memutuskan servis di luar Apple.",
      "Tanyakan apakah True Tone bisa dipertahankan untuk jenis layar yang kamu pilih sebelum pengerjaan.",
      "iPhone 16 Plus belum tersedia pilihan Genuine di daftar kami. Lihat tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-16", "iphone-16-plus", "iphone-16-pro", "iphone-16-pro-max"],
    relatedPostSlug: "layar-iphone-pecah-segera-diganti",
    keywords: ["ganti lcd iphone 16 bandung", "harga ganti lcd iphone 16 bandung", "ganti layar iphone 16 bandung"],
    faqs: [
      {
        question: "Berapa harga ganti LCD iPhone 16 di Bandung?",
        answer:
          "Harga part layar iPhone 16 saat ini mulai {lcdOled} untuk Oled Plus dan {lcdGenuine} untuk Genuine/Asli, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Layar iPhone 16 retak sedikit, perlu langsung ganti?",
        answer:
          "Retak halus cenderung menyebar dan bisa membuat touchscreen error atau memunculkan garis. Kalau masih ada AppleCare+, ajukan klaim dulu. Kalau tidak, periksakan sebelum kerusakannya melebar.",
      },
      {
        question: "Apakah data hilang saat ganti layar iPhone 16?",
        answer: "Tidak. Ganti layar tidak menghapus data, tetapi tetap cadangkan iPhone lebih dulu sebagai langkah aman.",
      },
    ],
  },
  {
    serviceSlug: "ganti-lcd-iphone",
    modelSlug: "iphone-11",
    summary: "Pilihan Grade A atau Genuine, dicek dulu sebelum dikerjakan.",
    intro:
      "iPhone 11 memakai layar LCD Liquid Retina 6,1 inci, bukan OLED. Karena itu pilihan penggantinya adalah layar Grade A atau Genuine, tanpa opsi OLED. Layar pecah yang touchscreen-nya masih normal tetap sebaiknya diperiksa sebelum retakan menyebar.",
    notes: [
      "Di iPhone 11 dengan iOS 15.2 ke atas, menu Pengaturan > Umum > Mengenai mencatat penggantian layar. Layar yang tidak dapat diverifikasi bisa tercatat sebagai Unknown Part.",
      "Tanyakan apakah True Tone bisa dipertahankan untuk jenis layar yang kamu pilih sebelum pengerjaan.",
      "iPhone 11 Pro dan 11 Pro Max memakai layar OLED, jadi pilihan dan harganya berbeda. Lihat tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-11", "iphone-11-pro", "iphone-11-pro-max"],
    relatedPostSlug: "layar-iphone-pecah-segera-diganti",
    keywords: ["ganti lcd iphone 11 bandung", "harga ganti lcd iphone 11 bandung", "ganti layar iphone 11 bandung"],
    faqs: [
      {
        question: "Berapa harga ganti LCD iPhone 11 di Bandung?",
        answer:
          "Harga part LCD iPhone 11 saat ini {lcdGradeA} untuk Grade A dan {lcdGenuine} untuk Genuine/Asli, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Apa bedanya LCD Grade A dan Genuine untuk iPhone 11?",
        answer:
          "Perbedaannya ada di kecerahan, akurasi warna, dan respons sentuh. Kami tunjukkan perbedaan dan selisih harganya sebelum pengerjaan supaya kamu bisa memilih.",
      },
      {
        question: "Apakah data hilang saat ganti LCD iPhone 11?",
        answer:
          "Tidak. Ganti layar tidak menghapus data, tetapi cadangkan iPhone lewat iCloud atau komputer lebih dulu sebagai langkah aman.",
      },
    ],
  },
  {
    serviceSlug: "ganti-lcd-iphone",
    modelSlug: "iphone-xr",
    summary: "Untuk layar pecah, bergaris, atau touchscreen error. Dicek dulu.",
    intro:
      "iPhone XR memakai layar LCD Liquid Retina 6,1 inci. Pilihan penggantinya Grade A atau Genuine. Kerusakan yang bisa ditangani antara lain layar pecah, muncul garis atau bercak, layar blank padahal iPhone menyala, dan touchscreen yang bergerak sendiri.",
    notes: [
      "Di halaman Parts and Service History Apple, iPhone XR hanya tercatat untuk komponen baterai, bukan layar.",
      "iPhone XR, XS, dan 11 sering tertukar. Cek nama model di Pengaturan > Umum > Mengenai sebelum konsultasi supaya part yang disiapkan tepat.",
      "Garis atau layar blank tidak selalu berarti panelnya rusak. Konektor layar yang longgar juga bisa menjadi penyebab, jadi kami cek dulu.",
    ],
    relatedModelSlugs: ["iphone-xr", "iphone-xs", "iphone-xs-max", "iphone-x"],
    relatedPostSlug: "layar-iphone-blank-hitam-tapi-nyala",
    keywords: ["ganti lcd iphone xr bandung", "harga ganti lcd iphone xr bandung", "ganti layar iphone xr bandung"],
    faqs: [
      {
        question: "Berapa harga ganti LCD iPhone XR di Bandung?",
        answer:
          "Harga part LCD iPhone XR saat ini {lcdGradeA} untuk Grade A dan {lcdGenuine} untuk Genuine/Asli, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Layar iPhone XR bergaris tapi masih bisa disentuh, harus ganti?",
        answer:
          "Belum tentu. Garis bisa berasal dari panel atau dari konektor layar. Kami cek dulu, dan kalau penyebabnya konektor, kamu tidak perlu membayar layar baru.",
      },
      {
        question: "Apakah data hilang saat ganti LCD iPhone XR?",
        answer: "Tidak. Ganti layar tidak menghapus data, tetapi tetap cadangkan iPhone lebih dulu sebagai langkah aman.",
      },
    ],
  },
  {
    serviceSlug: "ganti-lcd-iphone",
    modelSlug: "iphone-xs",
    summary: "Pilihan Grade A atau Oled Plus, perbedaannya dijelaskan dulu.",
    intro:
      "iPhone XS memakai layar OLED Super Retina HD 5,8 inci. Di daftar kami, pilihan penggantinya Grade A atau Oled Plus dengan selisih harga yang cukup jauh. Perbedaan keduanya kami jelaskan sebelum pengerjaan supaya kamu bisa memilih sesuai kebutuhan dan budget.",
    notes: [
      "Di halaman Parts and Service History Apple, iPhone XS hanya tercatat untuk komponen baterai, bukan layar.",
      "Layar OLED yang retak bisa memunculkan garis hijau atau bercak hitam yang makin lebar, jadi sebaiknya tidak ditunda terlalu lama.",
      "iPhone XS Max memakai layar 6,5 inci dengan harga part berbeda. Lihat tabel di bawah.",
    ],
    relatedModelSlugs: ["iphone-xs", "iphone-xs-max", "iphone-x", "iphone-xr"],
    relatedPostSlug: "layar-iphone-pecah-segera-diganti",
    keywords: ["ganti lcd iphone xs bandung", "harga ganti lcd iphone xs bandung", "ganti layar iphone xs bandung"],
    faqs: [
      {
        question: "Berapa harga ganti LCD iPhone XS di Bandung?",
        answer:
          "Harga part layar iPhone XS saat ini {lcdGradeA} untuk Grade A dan {lcdOled} untuk Oled Plus, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Apa bedanya Grade A dan Oled Plus untuk iPhone XS?",
        answer:
          "Keduanya layar pengganti dengan jenis panel dan harga berbeda. Perbedaan kecerahan, warna, dan konsumsi daya kami tunjukkan langsung sebelum kamu memutuskan.",
      },
      {
        question: "Apakah data hilang saat ganti layar iPhone XS?",
        answer: "Tidak. Ganti layar tidak menghapus data, tetapi tetap cadangkan iPhone lebih dulu sebagai langkah aman.",
      },
    ],
  },
  {
    serviceSlug: "ganti-lcd-iphone",
    modelSlug: "iphone-x",
    summary: "Grade A atau Oled Plus, dicek dulu sebelum ganti layar.",
    intro:
      "iPhone X adalah iPhone pertama dengan layar OLED Super Retina HD 5,8 inci dan tanpa tombol Home. Di daftar kami, harga part layarnya sama dengan iPhone XS, dengan pilihan Grade A atau Oled Plus. Kami cek dulu apakah kerusakannya di panel atau di konektor sebelum menyarankan ganti layar.",
    notes: [
      "iPhone X tidak termasuk model yang tercantum di halaman Parts and Service History Apple.",
      "Kalau layar normal tetapi Face ID tidak berfungsi setelah jatuh, kerusakannya bisa ada di modul kamera depan, bukan di layar.",
      "Layar OLED yang retak bisa memunculkan garis hijau atau bercak hitam yang makin lebar, jadi sebaiknya tidak ditunda terlalu lama.",
    ],
    relatedModelSlugs: ["iphone-x", "iphone-xs", "iphone-xs-max", "iphone-xr"],
    relatedPostSlug: "layar-iphone-pecah-segera-diganti",
    keywords: ["ganti lcd iphone x bandung", "harga ganti lcd iphone x bandung", "ganti layar iphone x bandung"],
    faqs: [
      {
        question: "Berapa harga ganti LCD iPhone X di Bandung?",
        answer:
          "Harga part layar iPhone X saat ini {lcdGradeA} untuk Grade A dan {lcdOled} untuk Oled Plus, belum termasuk biaya pemasangan. Total biaya disepakati sebelum dikerjakan.",
      },
      {
        question: "Layar iPhone X ada garis hijau, harus ganti?",
        answer:
          "Garis hijau pada layar OLED bisa berasal dari panel yang rusak atau konektor yang bermasalah. Kami cek dulu sebelum menyarankan ganti layar.",
      },
      {
        question: "Apakah data hilang saat ganti layar iPhone X?",
        answer: "Tidak. Ganti layar tidak menghapus data, tetapi tetap cadangkan iPhone lebih dulu sebagai langkah aman.",
      },
    ],
  },
];

export function getModelServicePage(serviceSlug: string, modelSlug: string) {
  return modelServicePages.find((p) => p.serviceSlug === serviceSlug && p.modelSlug === modelSlug);
}

export function getModelServicePages(serviceSlug: string) {
  return modelServicePages.filter((p) => p.serviceSlug === serviceSlug);
}
