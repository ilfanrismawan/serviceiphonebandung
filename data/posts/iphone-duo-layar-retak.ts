import type { BlogPost } from "@/types";

/**
 * Target utama: "iphone duo layar retak", "biaya ganti layar iphone duo", "harga ganti layar iphone duo",
 * "iphone duo garansi", "applecare iphone duo", "cara merawat iphone duo".
 * Riset: docs/riset-artikel-iphone-duo-2026-10-31.md
 *
 * Halaman 1 saat riset diisi berita (retak saja, atau biaya saja, atau AppleCare saja). Sudut artikel ini:
 * satu panduan untuk pemilik/calon pembeli di Indonesia: apa yang terjadi, cara klaim, biaya, dan cara merawat.
 */
export const iphoneDuoLayarRetakPost: BlogPost = {
  slug: "iphone-duo-layar-retak-garansi-biaya-ganti-layar",
  title: "Layar iPhone Duo Retak di Engsel: Garansi, Biaya Ganti Layar, dan Cara Merawatnya",
  seoTitle: "Layar iPhone Duo Retak: Garansi & Biaya Ganti",
  description:
    "Layar iPhone Duo retak di area engsel? Apple sudah mengakuinya. Cek cara klaim garansi, biaya ganti layar, perlu AppleCare+ atau tidak, dan tips merawatnya.",
  image: "/images/blog/layar-pecah.webp",
  imageAlt: "Layar iPhone retak yang sedang diperiksa teknisi di meja servis",
  publicationApproved: true,
  publishedAt: "2026-10-31",
  updatedAt: "2026-10-31",
  readingMinutes: 7,
  relatedServiceSlug: "ganti-lcd-iphone",
  sources: [
    { title: "CNBC: Apple menanggapi laporan layar iPhone Duo rusak (26 Oktober 2026)", url: "https://www.cnbc.com/2026/10/26/apple-responds-to-user-reports-of-broken-iphone-duo-screens.html" },
    { title: "Tom's Guide: Pemilik iPhone Duo melaporkan layar retak di engsel", url: "https://www.tomsguide.com/phones/iphones/the-iphone-duo-just-came-out-and-owners-are-already-seeing-screens-crack-at-the-hinge" },
    { title: "iFixit: Teardown iPhone Duo", url: "https://www.ifixit.com/News/119895/iphone-duo-teardown" },
    { title: "iFixit: Perbandingan biaya perbaikan iPhone Duo", url: "https://www.ifixit.com/News/119797/how-the-iphone-duos-crazy-repair-prices-compare" },
    { title: "Android Authority: Uji ketahanan lipatan layar iPhone Duo", url: "https://www.androidauthority.com/apple-iphone-duo-foldable-display-crease-durability-tests-3726691/" },
    { title: "Telset: Apple buka suara soal layar iPhone Duo retak", url: "https://telset.id/how-to/apple-buka-suara-soal-layar-iphone-duo-retak-tawarkan-penggantian-applecare" },
    { title: "detikINET: Harga iPhone Duo di Indonesia mulai Rp45.678.910", url: "https://inet.detik.com/consumer/d-8720082/harga-iphone-duo-di-indonesia-mulai-dari-rp-45-678-910" },
    { title: "detikINET: Beli iPhone Duo Rp45 juta, perlukah AppleCare+?", url: "https://inet.detik.com/consumer/d-8725559/beli-iphone-duo-rp-45-juta-perlukah-applecare" },
    { title: "Kompas Tekno: iPhone Duo resmi di Indonesia, harga dan spesifikasi", url: "https://tekno.kompas.com/read/2026/10/30/09150087/iphone-duo-resmi-di-indonesia-ini-harga-dan-spesifikasi-lengkapnya?page=all" },
    { title: "CNBC Indonesia: AppleCare+ resmi di Indonesia", url: "https://cnbcindonesia.com/tech/20260213120059-37-710947/applecare--resmi-di-indonesia-cek-syarat-ganti-baterai-iphone-gratis" },
    { title: "Mac Observer: Bolehkah memasang pelindung layar di iPhone Duo?", url: "https://www.macobserver.com/tips/round-ups/iphone-duo-screen-protector-inner-display-what-apple-says/" },
  ],
  faqs: [
    {
      question: "Apakah layar iPhone Duo yang retak ditanggung garansi?",
      answer:
        "Apple sudah mengakui ada masalah layar dalam pada sebagian kecil unit iPhone Duo dan meminta pemilik yang terdampak menghubungi AppleCare untuk penggantian. Kalau layar retak di area lipatan tanpa jatuh atau tertekan benda, ajukan klaim garansi resmi. Kerusakan karena jatuh tidak ditanggung garansi standar, kecuali Anda memiliki AppleCare+.",
    },
    {
      question: "Berapa biaya ganti layar iPhone Duo di luar garansi?",
      answer:
        "Di Amerika Serikat, Apple mematok US$999 (sekitar Rp18 juta) untuk layar dalam dan US$379 untuk layar luar. Untuk Indonesia, media melaporkan biaya perbaikan layar dalam bisa mencapai sekitar Rp27 juta. Tarif resmi Indonesia sebaiknya dikonfirmasi langsung ke Apple atau penyedia servis resmi.",
    },
    {
      question: "Perlukah membeli AppleCare+ untuk iPhone Duo?",
      answer:
        "Untuk ponsel seharga Rp45 juta dengan biaya ganti layar dalam belasan sampai puluhan juta rupiah, AppleCare+ layak dipertimbangkan. AppleCare+ tersedia di Indonesia sejak Februari 2026 lewat jaringan resmi seperti iBox dan Digimap. Untuk iPhone umumnya harganya mulai Rp1.599.000 untuk 2 tahun. Tanyakan harga khusus iPhone Duo dan biaya klaim per kerusakan di gerai.",
    },
    {
      question: "Bolehkah memasang tempered glass di layar dalam iPhone Duo?",
      answer:
        "Jangan memasang tempered glass kaku di layar dalam karena layar harus bisa terlipat. Jangan pula mengelupas lapisan bawaan pabrik di layar dalam. Kalau ingin memakai pelindung, pilih produk yang secara jelas dinyatakan kompatibel dengan iPhone Duo.",
    },
  ],
  sections: [
    {
      heading: "Apa yang terjadi dengan layar iPhone Duo?",
      paragraphs: [
        "iPhone Duo, iPhone lipat pertama Apple, dirilis global pada 23 Oktober 2026. Hanya dalam beberapa hari, sejumlah pemilik di berbagai negara melaporkan layar dalam (7,6 inci) retak memanjang di area lipatan dekat engsel. Sebagian mengaku retak muncul hanya beberapa jam setelah unboxing, dan ada yang mendengar bunyi 'krek' saat membuka ponsel sebelum garis retak terlihat.",
        "Pada 26 Oktober 2026, Apple mengonfirmasi kepada CNBC bahwa mereka mengetahui masalah layar dalam pada sebagian kecil unit iPhone Duo dan meminta pemilik yang terdampak menghubungi AppleCare untuk penggantian. Apple tidak menyebut jumlah unit yang terdampak dan belum menjelaskan penyebabnya.",
      ],
    },
    {
      heading: "Penyebab layar iPhone Duo retak: apa yang sudah diketahui",
      paragraphs: [
        "Penyebab resminya belum diumumkan. Ada beberapa temuan dari pihak independen yang patut diketahui, tetapi semuanya masih dugaan:",
      ],
      list: [
        "Toleransi engsel. Dari hasil teardown, iFixit menduga ada masalah toleransi pada batang penyangga tengah engsel yang bisa menekan layar di area lipatan.",
        "Debu masuk ke engsel. Meski bersertifikat IP68, uji ketahanan JerryRigEverything menemukan debu bisa masuk ke engsel dari beberapa celah. iFixit menilai debu berpotensi mengganggu mekanisme engsel dan memberi tekanan pada layar.",
        "Lipatan makin dalam seiring pemakaian. Uji lipat otomatis menunjukkan engsel titanium tetap kokoh setelah puluhan ribu kali lipat, tetapi garis lipatan di layar dalam semakin dalam setelah ribuan kali buka-tutup.",
      ],
    },
    {
      heading: "Harga iPhone Duo di Indonesia",
      paragraphs: [
        "iPhone Duo membuka pre-order di Indonesia pada 23 Oktober 2026 dan mulai dijual resmi pada 30 Oktober 2026 lewat jaringan resmi seperti iBox, Digimap, dan Urban Republic, dengan pilihan warna Night Sky dan Star White. Berikut harga resminya:",
      ],
      list: [
        "iPhone Duo 256 GB: Rp45.678.910",
        "iPhone Duo 512 GB: Rp51.999.000",
        "iPhone Duo 1 TB: Rp61.999.000",
        "iPhone Duo 2 TB: Rp75.999.000",
      ],
    },
    {
      heading: "Layar iPhone Duo retak? Lakukan ini untuk klaim garansi",
      paragraphs: [
        "Kalau layar dalam iPhone Duo Anda retak, muncul garis, atau berbunyi aneh di area lipatan tanpa pernah jatuh, ikuti langkah berikut:",
      ],
      list: [
        "Berhenti membuka-tutup ponsel. Lipatan yang terus dipakai bisa membuat retak menjalar.",
        "Foto dan rekam kondisi layar dari beberapa sudut, termasuk kondisi bodi yang mulus tanpa bekas benturan. Bukti ini penting untuk menunjukkan kerusakan bukan karena jatuh.",
        "Cadangkan data ke iCloud atau komputer selama layar luar masih berfungsi.",
        "Hubungi AppleCare atau bawa ke penyedia servis resmi Apple dengan nota pembelian. Sebutkan bahwa Apple sudah mengakui masalah layar dalam iPhone Duo.",
        "Jangan membawanya ke servis tidak resmi atau membongkarnya sendiri selama masih garansi, karena bisa membuat klaim ditolak.",
      ],
    },
    {
      heading: "Biaya ganti layar iPhone Duo di luar garansi",
      paragraphs: [
        "Kalau kerusakan tidak ditanggung garansi, misalnya karena jatuh atau tertekan benda, biayanya jauh lebih mahal dibanding iPhone biasa. Ini daftar tarif yang sudah diumumkan:",
      ],
      list: [
        "Layar dalam (lipat), Amerika Serikat: US$999, sekitar Rp18 juta.",
        "Layar luar, Amerika Serikat: US$379.",
        "Layar dalam, India: ₹149.900, sekitar Rp28 juta.",
        "Indonesia: media melaporkan biaya perbaikan layar dalam bisa mencapai sekitar Rp27 juta tanpa perlindungan tambahan. Tarif resmi sebaiknya dikonfirmasi langsung ke Apple atau penyedia servis resmi.",
      ],
    },
    {
      heading: "Perlu AppleCare+ untuk iPhone Duo?",
      paragraphs: [
        "Garansi standar Apple hanya menanggung cacat pabrik selama 1 tahun, bukan kerusakan karena jatuh atau kena air. AppleCare+ menambah perlindungan untuk kerusakan tidak disengaja dengan biaya klaim yang jauh lebih rendah dibanding tarif normal. Di Amerika Serikat, biaya klaim layar dalam iPhone Duo dengan AppleCare+ dilaporkan sekitar US$99.",
        "AppleCare+ sudah tersedia di Indonesia sejak Februari 2026 lewat gerai resmi seperti iBox dan Digimap, dengan harga untuk iPhone mulai Rp1.599.000 untuk 2 tahun. Untuk iPhone Duo, menurut kami ini salah satu tambahan yang paling masuk akal. Satu kali klaim layar dalam saja sudah jauh melebihi harga perlindungannya. Tanyakan harga AppleCare+ khusus iPhone Duo dan biaya klaim per kerusakan sebelum membeli.",
      ],
    },
    {
      heading: "Cara merawat layar lipat iPhone Duo",
      paragraphs: [
        "Apple belum menerbitkan panduan perawatan khusus layar lipat iPhone Duo. Tips berikut berasal dari prinsip umum perawatan ponsel lipat yang juga berlaku untuk iPhone Duo:",
      ],
      list: [
        "Jangan mengelupas lapisan bawaan pabrik di layar dalam. Lapisan itu bukan plastik pengiriman.",
        "Jangan memasang tempered glass kaku di layar dalam. Pakai pelindung hanya yang jelas dinyatakan kompatibel dengan iPhone Duo.",
        "Pastikan tidak ada benda di antara kedua sisi layar saat menutup, seperti kartu, koin, kunci, atau butiran pasir.",
        "Buka dan tutup dengan wajar. Jangan memutar kedua sisi atau menekan layar dalam dengan kuku atau stylus.",
        "Jauhkan dari pasir dan debu, misalnya jangan taruh di saku yang kotor atau di atas pasir pantai. Sertifikat IP68 tidak menjamin debu tidak masuk ke engsel.",
        "Kalau engsel berbunyi berpasir atau kasar, hentikan buka-tutup dan periksakan ke servis resmi.",
        "Bersihkan dengan kain mikrofiber lembut yang kering atau sedikit lembap. Hindari cairan pembersih kaca dan alkohol di layar dalam.",
      ],
    },
    {
      heading: "Sebaiknya beli iPhone Duo sekarang atau tunggu?",
      paragraphs: [
        "Ulasan media internasional umumnya memuji iPhone Duo. Lipatannya nyaris tidak terlihat dalam pemakaian normal, dan iFixit memberinya skor kemudahan perbaikan 5/10, tertinggi untuk ponsel lipat yang pernah mereka nilai. Namun, generasi pertama produk baru hampir selalu membawa masalah awal, dan Apple belum menjelaskan penyebab layar retak maupun perbaikannya di jalur produksi.",
        "Kalau Anda tidak terburu-buru, menunggu beberapa minggu sampai penyebabnya jelas adalah pilihan aman. Kalau sudah membeli atau ingin membeli sekarang, beli unit resmi Indonesia, simpan nota, pertimbangkan AppleCare+, dan cek layar dalam dengan teliti di hari pertama.",
      ],
      links: [
        { label: "Masalah iPhone 18 Pro: panas, restart, cat pudar", href: "/blog/masalah-iphone-18-pro-panas-restart-cat-pudar" },
      ],
    },
    {
      heading: "Konsultasi kerusakan layar iPhone di Bandung",
      paragraphs: [
        "Untuk iPhone Duo yang masih baru dan bergaransi, jalur terbaik adalah klaim resmi ke Apple. Kami menyarankan ini dengan jujur walaupun kami servis independen. Untuk iPhone lain yang layarnya pecah, bergaris, atau blank, Anda bisa datang ke workshop Service iPhone Bandung di Jl. Dipati Ukur No. 86. Diagnosa dilakukan lebih dulu tanpa biaya, dan harga disampaikan sebelum pengerjaan.",
        "Ragu apakah kerusakan iPhone Anda masuk garansi atau tidak? Kirim foto dan kronologinya lewat WhatsApp, kami bantu jelaskan pilihan terbaiknya.",
      ],
      links: [
        { label: "Layar iPhone pecah: boleh ditunda atau harus segera diganti?", href: "/blog/layar-iphone-pecah-segera-diganti" },
        { label: "Layanan ganti LCD iPhone Bandung", href: "/layanan/ganti-lcd-iphone" },
      ],
    },
  ],
};
