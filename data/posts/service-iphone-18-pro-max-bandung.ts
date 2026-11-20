import type { BlogPost } from "@/types";

/**
 * Target utama: "service iphone 18 pro max bandung", "ganti layar iphone 18 pro max",
 * "ganti baterai iphone 18 pro max", "biaya service iphone 18 pro max".
 * Riset: docs/riset-artikel-service-iphone-18-pro-max-bandung-2026-11-20.md
 *
 * iPhone 18 Pro Max baru dijual resmi di Indonesia sejak 16 Oktober 2026, jadi hampir semua unit
 * masih bergaransi. Sudut artikel: kapan ke jalur resmi, kapan servis independen masuk akal,
 * apa kata teardown soal komponen yang mudah/sulit diperbaiki, dan cara memeriksa hasil servis.
 * Pricelist situs belum memuat iPhone 18 Pro Max, jadi artikel tidak menyebut harga toko.
 */
export const serviceIphone18ProMaxBandungPost: BlogPost = {
  slug: "service-iphone-18-pro-max-bandung",
  title: "Service iPhone 18 Pro Max di Bandung: Garansi, Komponen, dan Kisaran Biaya",
  seoTitle: "Service iPhone 18 Pro Max Bandung: Panduan Biaya",
  description:
    "Layar iPhone 18 Pro Max pecah, baterai drop, atau kena air? Pahami jalur garansi, komponen yang mudah dan sulit diperbaiki, kisaran biaya, serta cara cek hasil servis di Bandung.",
  image: "/images/blog/service-iphone-18-pro-max-bandung.webp",
  imageAlt: "Ilustrasi iPhone dengan menu Riwayat Komponen menunjukkan layar, baterai, dan kamera berstatus asli",
  publicationApproved: true,
  publishedAt: "2026-11-20",
  updatedAt: "2026-11-20",
  readingMinutes: 8,
  relatedServiceSlug: "ganti-lcd-iphone",
  sources: [
    { title: "iFixit: Inside the Tiny Unfixable Eye, teardown iPhone 18 Pro dan Pro Max", url: "https://www.ifixit.com/News/119329/inside-the-tiny-unfixable-eye-iphone-18-pro-and-pro-max-teardown" },
    { title: "PhoneArena: Teardown iPhone 18 Pro Max mengonfirmasi kapasitas baterai", url: "https://www.phonearena.com/news/iphone-18-pro-max-teardown-confirms-its-battery-and-exposes-a-fragile-flaw_id183530" },
    { title: "Mac Observer: Apple menetapkan biaya servis baterai iPhone 18 Pro US$129", url: "https://www.macobserver.com/news/iphone-18-pro-repair-prices-battery-service-129/" },
    { title: "Android Headlines: Biaya ganti layar iPhone 18 Pro Max US$379", url: "https://www.androidheadlines.com/2026/10/iphone-18-pro-max-screen-repair-cost.html" },
    { title: "Medcom: Biaya servis iPhone 18 Pro dan Pro Max bisa tembus Rp16 jutaan", url: "https://www.medcom.id/teknologi/news-teknologi/GKdGBqpk-biaya-servis-iphone-18-pro-dan-pro-max-bisa-tembus-rp16-jutaan-ini-rinciannya" },
    { title: "detikInet: iPhone 18 Pro dan Pro Max resmi dijual di Indonesia", url: "https://inet.detik.com/consumer/d-8709348/iphone-18-pro-dan-pro-max-resmi-dijual-di-ri-ini-harganya" },
    { title: "Apple Support: Spesifikasi iPhone 18 Pro Max", url: "https://support.apple.com/id-id/148591" },
    { title: "Apple Support: Tentang pembaruan iOS 27", url: "https://support.apple.com/en-us/149076" },
    { title: "Apple Support: Riwayat Komponen dan Servis iPhone", url: "https://support.apple.com/id-id/102658" },
    { title: "Apple Support: Mempersiapkan iPhone untuk jadwal servis", url: "https://support.apple.com/id-id/109519" },
  ],
  faqs: [
    {
      question: "Berapa biaya ganti layar iPhone 18 Pro Max?",
      answer:
        "Apple belum mengumumkan tarif servis iPhone 18 Pro Max dalam rupiah untuk Indonesia. Sebagai acuan, tarif resmi Apple di Amerika Serikat untuk layar iPhone 18 Pro Max di luar garansi adalah US$379, atau sekitar Rp6,8 juta menurut konversi media, belum termasuk pajak. Biaya di servis independen bergantung pada jenis dan ketersediaan layar pengganti, jadi minta penawaran tertulis setelah diagnosa.",
    },
    {
      question: "Apakah layar pecah iPhone 18 Pro Max ditanggung garansi Apple?",
      answer:
        "Umumnya tidak. Garansi terbatas Apple menanggung cacat bahan dan pengerjaan, bukan kerusakan akibat jatuh atau terkena cairan. Kerusakan seperti ini tetap bisa diperbaiki lewat jalur resmi dengan biaya di luar garansi, atau di servis independen.",
    },
    {
      question: "Apakah servis di luar membuat garansi iPhone 18 Pro Max hangus?",
      answer:
        "Kerusakan yang muncul akibat pembongkaran atau komponen pihak ketiga bisa membuat klaim garansi untuk bagian terkait ditolak. Karena itu, kalau masalahnya berupa cacat pabrik atau bug software, selesaikan dulu lewat jalur resmi. Servis independen paling masuk akal untuk kerusakan yang memang tidak ditanggung garansi.",
    },
    {
      question: "Bagaimana cara mengecek komponen iPhone 18 Pro Max setelah diservis?",
      answer:
        "Buka Pengaturan > Umum > Mengenai, lalu lihat bagian Riwayat Komponen dan Servis. Di sana tercatat komponen yang pernah diganti beserta statusnya, misalnya komponen Apple asli atau komponen tidak dikenal. Periksa juga True Tone, Face ID, kamera, sentuhan, dan pengisian daya sebelum meninggalkan tempat servis.",
    },
    {
      question: "Apakah baterai iPhone 18 Pro Max sulit diganti?",
      answer:
        "Menurut teardown iFixit, baki baterai iPhone 18 Pro dan Pro Max ditahan 13 sekrup tanpa lem baterai, sehingga pelepasannya relatif mudah. Tantangannya ada di layar yang dilem, karena hampir semua perbaikan harus melewati layar lebih dulu.",
    },
  ],
  sections: [
    {
      heading: "iPhone 18 Pro Max baru sebulan dijual, lalu kenapa butuh servis?",
      paragraphs: [
        "iPhone 18 Pro Max resmi dijual di Indonesia sejak 16 Oktober 2026 dengan harga mulai sekitar Rp29,5 juta untuk kapasitas 256 GB. Usianya memang masih muda, tetapi kerusakan karena jatuh, terbentur, atau terkena cairan bisa terjadi sejak hari pertama. Layar 6,9 inci yang lebar dan bodi yang lebih berat membuat ponsel ini mudah terlepas dari genggaman saat dipakai satu tangan.",
        "Artikel ini membahas kapan iPhone 18 Pro Max sebaiknya dibawa ke jalur resmi, kapan servis independen di Bandung masuk akal, komponen mana yang mudah dan sulit diperbaiki menurut teardown, kisaran biaya sebagai acuan, dan cara memeriksa hasil servis. Tujuannya membantu Anda mengambil keputusan, bukan sekadar mencari tempat termurah.",
      ],
      list: [
        "Masih garansi dan masalahnya cacat atau bug software: klaim ke jalur resmi.",
        "Layar pecah, bodi penyok, atau kena air: tidak ditanggung garansi, bisa lewat resmi berbayar atau servis independen.",
        "Restart sendiri setelah Face ID gagal: update ke iOS 27.0.1 atau lebih baru sebelum ke servis.",
        "Setelah diservis di mana pun: cek menu Riwayat Komponen dan Servis serta uji semua fungsi sebelum pulang.",
      ],
    },
    {
      heading: "Masih garansi? Tentukan dulu jenis kerusakannya",
      paragraphs: [
        "Hampir semua iPhone 18 Pro Max yang beredar di Indonesia masih dalam masa garansi resmi. Garansi ini menanggung cacat bahan dan pengerjaan, misalnya komponen yang gagal berfungsi tanpa sebab yang jelas. Kerusakan karena kecelakaan, seperti layar pecah akibat jatuh atau iPhone terendam air, umumnya tidak termasuk.",
        "Perbedaan ini penting karena membuka unit di luar jalur resmi bisa membuat klaim garansi untuk masalah lain ditolak. Jadi urutannya: kalau keluhannya muncul tanpa benturan atau cairan, klaim dulu ke resmi. Kalau kerusakannya jelas akibat kecelakaan, Anda bebas membandingkan biaya resmi dan servis independen.",
      ],
      subsections: [
        {
          heading: "Keluhan yang sebaiknya diselesaikan lewat update atau jalur resmi",
          paragraphs: [
            "Beberapa keluhan iPhone 18 Pro Max sudah diakui Apple sebagai bug software. Catatan rilis iOS 27.0.1 menyebut perbaikan untuk iPhone 18 Pro dan Pro Max yang bisa restart tak terduga setelah Face ID gagal, serta artefak warna pada sebagian foto zoom 2x. Pastikan iPhone sudah memakai versi iOS terbaru sebelum menyimpulkan ada kerusakan perangkat keras.",
          ],
          list: [
            "Restart mendadak, layar membeku, atau Face ID bermasalah tanpa riwayat jatuh.",
            "Panas berlebih yang terus berlanjut setelah beberapa hari pemakaian normal.",
            "Cat atau warna bodi memudar tanpa benturan.",
            "Komponen mati sendiri, misalnya speaker, mikrofon, atau kamera, padahal unit tidak pernah jatuh atau basah.",
          ],
        },
      ],
      links: [
        { label: "Masalah iPhone 18 Pro: mana yang normal?", href: "/blog/masalah-iphone-18-pro-panas-restart-cat-pudar" },
        { label: "Ganti baterai di resmi vs servis luar", href: "/blog/ganti-baterai-iphone-resmi-vs-servis-luar" },
      ],
    },
    {
      heading: "Apa kata teardown soal perbaikan iPhone 18 Pro Max",
      paragraphs: [
        "iFixit membongkar iPhone 18 Pro dan Pro Max dan memberi skor perbaikan sementara 7 dari 10, sama dengan dua generasi sebelumnya. Temuan teardown ini berguna untuk memahami kenapa biaya dan risiko tiap jenis perbaikan berbeda.",
      ],
      subsections: [
        {
          heading: "Yang relatif mudah",
          paragraphs: [
            "Baki baterai ditahan 13 sekrup tanpa lem baterai, sehingga baterai tidak perlu dicungkil. Baterai versi eSIM iPhone 18 Pro Max tercatat 21,751 Wh atau sekitar 5.567 mAh. Modul kamera belakang dan susunan kamera depan juga mudah dilepas.",
          ],
        },
        {
          heading: "Yang perlu kehati-hatian ekstra",
          paragraphs: [
            "Hampir semua perbaikan harus melewati layar yang direkatkan dengan lem. iFixit juga mencatat bingkai plastik layar retak pada tiga dari empat unit yang mereka buka, meskipun empat unit terlalu sedikit untuk menyimpulkan tingkat kegagalan. Artinya, membuka layar iPhone 18 Pro Max membutuhkan alat pemanas, pembuka yang tepat, dan teknisi yang sabar. Port USB-C juga disebut repot untuk diganti.",
            "Kamera utama dengan bukaan variabel memakai enam bilah setipis rambut yang praktis tidak bisa diperbaiki di tingkat komponen. Kalau mekanisme ini rusak, solusi realistisnya adalah mengganti seluruh modul kamera, yang biayanya tidak murah.",
          ],
        },
      ],
    },
    {
      heading: "Kisaran biaya service iPhone 18 Pro Max sebagai acuan",
      paragraphs: [
        "Sampai artikel ini ditulis, Apple belum mengumumkan tarif servis iPhone 18 Pro Max dalam rupiah untuk Indonesia. Acuan yang tersedia adalah tarif resmi Apple di Amerika Serikat untuk perbaikan di luar garansi, belum termasuk pajak. Angka rupiah dari media hanyalah konversi kurs, bukan tarif servis Indonesia.",
      ],
      list: [
        "Layar: US$379 (sekitar Rp6,8 juta menurut konversi media).",
        "Layar sekaligus kaca belakang: US$469.",
        "Kaca belakang: US$159.",
        "Kamera belakang: US$249.",
        "Baterai: US$129, naik US$10 dari tarif iPhone Pro sebelumnya. Apple menyebutnya estimasi dan biaya akhir ditentukan setelah pemeriksaan.",
      ],
      subsections: [
        {
          heading: "Kenapa harga di servis independen belum bisa dipatok",
          paragraphs: [
            "Untuk model yang baru sebulan beredar, pasokan komponen pengganti dari pihak ketiga masih sangat terbatas dan harganya cepat berubah. Itu sebabnya daftar harga kami belum mencantumkan iPhone 18 Pro Max. Daripada memberi angka yang belum pasti, kami memeriksa unit lebih dulu, mengecek ketersediaan komponen, lalu menyampaikan pilihan dan harganya sebelum pengerjaan dimulai.",
            "Waspadai tawaran ganti layar iPhone 18 Pro Max yang jauh lebih murah dari acuan di atas tanpa penjelasan jenis layarnya. Tanyakan apakah layarnya komponen asli, bekas pakai, atau pengganti pihak ketiga, dan bagaimana dampaknya pada True Tone, kecerahan, serta menu Riwayat Komponen dan Servis.",
          ],
        },
      ],
      links: [{ label: "Daftar harga service iPhone", href: "/harga" }],
    },
    {
      heading: "Kerusakan iPhone 18 Pro Max yang paling mungkin dibawa ke servis",
      paragraphs: [
        "Uji jatuh PhoneBuff menunjukkan kaca belakang iPhone 18 Pro Max retak setelah dijatuhkan dari ketinggian satu meter ke permukaan seperti trotoar, dan bingkai aluminiumnya penyok saat jatuh di sudut. Layar bertahan pada satu uji, tetapi retak pada jatuhan 1,5 meter. Dari pola ini, berikut keluhan yang paling relevan untuk servis di luar garansi:",
      ],
      list: [
        "Layar retak atau bergaris setelah jatuh. Kalau sentuhan masih normal, cadangkan data secepatnya sebelum retakan menjalar.",
        "Kaca belakang pecah. Retakan di sekitar modul kamera bisa membuat debu atau air masuk lebih mudah.",
        "Kena air atau minuman. Matikan iPhone, jangan dicas, dan jangan dikeringkan dengan hair dryer atau beras.",
        "Kamera belakang buram atau bergetar setelah benturan, terutama jika bukaan variabel tidak lagi berfungsi.",
        "Port USB-C longgar atau tidak mengisi daya. Bersihkan kotoran lebih dulu dengan hati-hati sebelum menyimpulkan port rusak.",
      ],
      links: [
        { label: "Layanan ganti LCD iPhone Bandung", href: "/layanan/ganti-lcd-iphone" },
        { label: "Service iPhone kena air", href: "/layanan/service-iphone-kena-air" },
        { label: "Service kamera iPhone", href: "/layanan/service-kamera-iphone" },
        { label: "Service port charger iPhone", href: "/layanan/service-port-charger-iphone" },
      ],
    },
    {
      heading: "Riwayat Komponen dan Servis: cara cek hasil perbaikan",
      paragraphs: [
        "iPhone 18 Pro Max mencatat komponen yang pernah diganti di Pengaturan > Umum > Mengenai > Riwayat Komponen dan Servis. Setiap komponen bisa berstatus komponen Apple asli, komponen bekas, atau komponen tidak dikenal. Status tidak dikenal tidak selalu berarti komponennya palsu, tetapi menandakan iPhone tidak bisa memverifikasi atau mengkalibrasi komponen tersebut.",
        "Status ini terlihat oleh siapa saja yang memegang iPhone, termasuk calon pembeli saat Anda menjualnya nanti. Karena itu, sepakati sejak awal jenis komponen yang dipakai, dan minta tempat servis menuliskannya di nota.",
      ],
      list: [
        "Cek menu Riwayat Komponen dan Servis setelah perbaikan.",
        "Uji True Tone, kecerahan maksimum, dan sentuhan di seluruh area layar.",
        "Coba Face ID, kamera depan dan belakang di semua lensa, termasuk zoom.",
        "Tes speaker, mikrofon, panggilan telepon, Wi-Fi, dan sinyal seluler.",
        "Colokkan kabel USB-C dan coba pengisian nirkabel atau MagSafe.",
      ],
      links: [{ label: "Pesan baterai penting setelah ganti baterai", href: "/blog/pesan-baterai-penting-iphone-setelah-ganti-baterai" }],
    },
    {
      heading: "Persiapan sebelum membawa iPhone 18 Pro Max ke servis",
      paragraphs: [
        "Persiapan sederhana mencegah kehilangan data dan mempercepat diagnosa, baik di jalur resmi maupun di servis independen.",
      ],
      list: [
        "Cadangkan data ke iCloud atau komputer selama iPhone masih bisa dinyalakan.",
        "Ingat kode sandi iPhone dan kata sandi Apple Account. Jangan menyerahkan kata sandi Apple Account kepada siapa pun.",
        "Catat gejala: kapan mulai muncul, apakah pernah jatuh atau basah, dan apakah baru update iOS.",
        "Lepas casing dan pelindung layar yang retak agar kondisi unit bisa difoto dan dicatat di nota.",
        "Simpan kardus dan nota pembelian untuk keperluan klaim garansi.",
      ],
      links: [{ label: "Panduan memilih tempat service iPhone di Bandung", href: "/blog/panduan-service-iphone-bandung" }],
    },
    {
      heading: "Service iPhone 18 Pro Max di Bandung bersama kami",
      paragraphs: [
        "Kalau iPhone 18 Pro Max Anda mengalami kerusakan yang tidak ditanggung garansi, seperti layar pecah, kaca belakang retak, atau kena air, Anda bisa datang ke workshop Service iPhone Bandung di Jl. Dipati Ukur No. 86 Lt. 2, Lebakgede, Coblong. Kami buka setiap hari pukul 10.00–22.00 WIB.",
        "Diagnosa dilakukan lebih dulu tanpa biaya. Setelah itu kami jelaskan penyebab kerusakan, pilihan komponen yang tersedia beserta dampaknya pada Riwayat Komponen dan Servis, serta harga sebelum pengerjaan dimulai. Kalau masalahnya lebih tepat diselesaikan lewat update iOS atau klaim garansi resmi, kami sampaikan apa adanya.",
        "Kirim foto kerusakan dan ceritakan gejalanya lewat WhatsApp untuk konsultasi awal. Penjelasan lewat chat belum menggantikan pemeriksaan langsung, tetapi membantu Anda tahu apa yang perlu disiapkan sebelum datang.",
      ],
      links: [
        { label: "Alamat dan petunjuk lokasi Dipati Ukur", href: "/lokasi/dipatiukur" },
        { label: "Hubungi kami", href: "/kontak" },
      ],
    },
  ],
};
