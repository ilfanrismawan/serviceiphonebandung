import type { BlogPost } from "@/types";

/**
 * Target utama: "service iphone duo bandung", "servis iphone duo", "biaya service iphone duo",
 * "ganti baterai iphone duo", "ganti layar luar iphone duo", "engsel iphone duo".
 * Riset: docs/riset-artikel-service-iphone-duo-2026-11-20.md
 *
 * Sudut artikel: panduan memilih jalur servis iPhone Duo di Bandung (garansi resmi vs servis independen),
 * daftar biaya acuan per komponen, dan apa yang bisa dikonsultasikan di workshop. Tidak menjanjikan
 * stok part atau harga tetap karena part resmi iPhone Duo belum dijual di Indonesia.
 */
export const serviceIphoneDuoBandungPost: BlogPost = {
  slug: "service-iphone-duo-bandung",
  title: "Service iPhone Duo di Bandung: Pilih Jalur Garansi atau Servis Luar, Biaya per Komponen, dan Cara Konsultasi",
  seoTitle: "Service iPhone Duo Bandung: Biaya & Panduan",
  description:
    "Panduan service iPhone Duo di Bandung: kapan wajib klaim garansi Apple, biaya acuan ganti layar dalam, layar luar, baterai, dan kaca belakang, serta cara konsultasi sebelum perbaikan.",
  image: "/images/blog/service-iphone-duo-bandung.webp",
  imageAlt: "Ilustrasi iPhone lipat terbuka dengan ikon obeng dan engsel, menggambarkan service iPhone Duo di Bandung",
  publicationApproved: true,
  publishedAt: "2026-11-20",
  updatedAt: "2026-11-20",
  readingMinutes: 8,
  relatedServiceSlug: "ganti-lcd-iphone",
  sources: [
    { title: "9to5Mac: Apple menanggapi laporan layar dalam iPhone Duo retak (26 Oktober 2026)", url: "https://9to5mac.com/2026/10/26/apple-responds-to-reports-of-iphone-duos-inner-display-cracking/" },
    { title: "iFixit: Teardown iPhone Duo", url: "https://www.ifixit.com/News/119895/iphone-duo-teardown" },
    { title: "The Register: iFixit membongkar iPhone Duo", url: "https://www.theregister.com/personal-tech/2026/10/26/ifixit-dismantles-apples-duo-youd-better-baby-that-screen/5305296" },
    { title: "Notebookcheck: Biaya perbaikan iPhone Duo dari Apple", url: "https://www.notebookcheck.net/iPhone-Duo-repair-costs-revealed-a-999-screen-fix-isn-t-even-the-worst-part.1424225.0.html" },
    { title: "Digital Trends: Kerusakan iPhone Duo bisa menelan biaya hingga US$1.499", url: "https://digitaltrends.com/phones/breaking-your-iphone-duo-could-cost-up-to-1499-so-think-twice-before-skipping-applecare/" },
    { title: "MacRumors: Apple mulai menjual part perbaikan iPhone Duo (17 November 2026)", url: "https://www.macrumors.com/2026/11/17/apple-now-sells-iphone-duo-repair-parts/" },
    { title: "TechRepublic: Harga part Self Service Repair iPhone Duo", url: "https://www.techrepublic.com/article/news-apple-iphone-duo-self-service-repair-parts-prices/" },
    { title: "AppleInsider: Program Self Service Repair kini mencakup iPhone Duo", url: "https://appleinsider.com/articles/26/11/17/you-can-use-apples-self-repair-program-for-iphone-duo-now" },
    { title: "Media Indonesia: Biaya servis iPhone Duo tanpa AppleCare capai Rp27 juta", url: "https://mediaindonesia.com/teknologi/945148/biaya-servis-iphone-duo-tanpa-applecare-capai-rp27-juta-ini-rinciannya" },
    { title: "Jagat Gadget: Biaya reparasi iPhone Duo bisa tembus Rp26 juta", url: "https://gadget.jagatreview.com/2026/10/biaya-reparasi-iphone-duo/" },
    { title: "Kompas Tekno: iPhone Duo resmi di Indonesia, harga dan spesifikasi", url: "https://tekno.kompas.com/read/2026/10/30/09150087/iphone-duo-resmi-di-indonesia-ini-harga-dan-spesifikasi-lengkapnya?page=all" },
    { title: "Apple: Cari penyedia servis resmi", url: "https://locate.apple.com/id/en/" },
  ],
  faqs: [
    {
      question: "Di mana service iPhone Duo di Bandung?",
      answer:
        "Untuk iPhone Duo yang masih garansi, terutama layar dalam yang retak tanpa jatuh, ajukan klaim ke Apple atau penyedia servis resmi Apple. Cek lokasi resminya lewat situs Apple. Untuk kerusakan di luar garansi atau sekadar konsultasi, Anda bisa datang ke workshop Service iPhone Bandung di Jl. Dipati Ukur No. 86. Unit didiagnosa dulu tanpa biaya, dan harga disampaikan sebelum pengerjaan.",
    },
    {
      question: "Berapa biaya service iPhone Duo?",
      answer:
        "Tarif resmi Apple di Amerika Serikat (di luar garansi): layar dalam US$999, layar luar US$379, kaca belakang US$199, baterai US$229, kamera belakang US$229, dan kerusakan lain hingga US$1.499. Apple belum mengumumkan tarif resmi Indonesia. Media lokal melaporkan biaya perbaikan layar dalam bisa sekitar Rp26–27 juta. Biaya servis independen baru bisa dipastikan setelah unit diperiksa dan ketersediaan part dicek.",
    },
    {
      question: "Apakah layar dalam iPhone Duo yang retak di engsel gratis diganti?",
      answer:
        "Apple menyatakan menyadari masalah layar dalam pada sebagian kecil unit dan meminta pemilik yang terdampak menghubungi AppleCare untuk penggantian. Menurut laporan media, AppleCare+ tidak diperlukan untuk kasus ini. Apple belum merinci syarat dan lama penggantiannya, jadi sampaikan kronologi selengkapnya saat klaim.",
    },
    {
      question: "Apakah servis di luar Apple membuat garansi iPhone Duo hangus?",
      answer:
        "Membongkar ponsel di luar jalur resmi bisa membuat klaim garansi ditolak jika kerusakan dianggap akibat pembongkaran itu. Selama iPhone Duo masih bergaransi dan kerusakannya mungkin cacat pabrik, utamakan klaim resmi lebih dulu.",
    },
    {
      question: "Apakah part resmi iPhone Duo bisa dibeli di Indonesia?",
      answer:
        "Sejak 17 November 2026 Apple menjual part dan alat perbaikan iPhone Duo lewat Self Service Repair untuk Amerika Serikat, Kanada, dan Eropa. Indonesia belum termasuk, sehingga ketersediaan part untuk servis independen di sini perlu dicek kasus per kasus.",
    },
  ],
  sections: [
    {
      heading: "Service iPhone Duo di Bandung: kenapa berbeda dari iPhone biasa",
      paragraphs: [
        "iPhone Duo adalah iPhone lipat pertama Apple, dengan layar luar 5,4 inci, layar dalam lipat 7,6 inci, dan engsel titanium. Di Indonesia, iPhone Duo dijual resmi sejak 30 Oktober 2026 dengan harga mulai Rp45.678.910 untuk varian 256 GB.",
        "Karena desainnya lipat, servis iPhone Duo tidak bisa disamakan dengan ganti layar atau baterai iPhone biasa. Ada dua layar, satu engsel, dan lebih banyak kabel fleksibel yang melewati area lipatan. Biaya part resminya juga jauh lebih tinggi. Sebelum memilih tempat servis di Bandung, pahami dulu jalur mana yang paling menguntungkan untuk kerusakan Anda.",
      ],
    },
    {
      heading: "Langkah pertama: cek apakah iPhone Duo Anda masih bisa klaim resmi",
      paragraphs: [
        "Semua iPhone Duo yang beredar resmi di Indonesia masih berumur kurang dari satu tahun, sehingga masih dalam garansi standar Apple. Garansi ini menanggung cacat pabrik, bukan kerusakan karena jatuh, tertekan, atau kena air. Gunakan panduan berikut:",
      ],
      list: [
        "Layar dalam retak atau bergaris di area lipatan tanpa pernah jatuh: klaim ke Apple. Pada 26 Oktober 2026 Apple mengakui masalah layar dalam pada sebagian kecil unit dan mengarahkan pemilik ke AppleCare untuk penggantian.",
        "Engsel berbunyi kasar, berpasir, atau tidak menutup rata: hentikan buka-tutup dan periksakan ke jalur resmi selama masih garansi.",
        "Kerusakan karena jatuh, tertekan benda, atau kena air: tidak ditanggung garansi standar. Jika punya AppleCare+, klaim tetap lebih murah lewat jalur resmi.",
        "Di luar garansi atau unit dari luar negeri yang tidak bisa diklaim di Indonesia: bandingkan biaya resmi dengan servis independen setelah unit diperiksa.",
      ],
      links: [
        { label: "Layar iPhone Duo retak di engsel: cara klaim dan biaya", href: "/blog/iphone-duo-layar-retak-garansi-biaya-ganti-layar" },
      ],
    },
    {
      heading: "Biaya service iPhone Duo per komponen",
      paragraphs: [
        "Apple belum mengumumkan tarif servis iPhone Duo untuk Indonesia. Angka berikut adalah tarif resmi Apple di Amerika Serikat untuk perbaikan di luar garansi tanpa AppleCare+. Gunakan sebagai gambaran skala biaya, bukan harga pasti di Indonesia:",
      ],
      list: [
        "Layar dalam (lipat): US$999.",
        "Layar luar: US$379.",
        "Layar luar sekaligus kaca belakang: US$509.",
        "Kaca belakang: US$199.",
        "Baterai: US$229.",
        "Kamera belakang: US$229.",
        "Lapisan pelindung layar dalam (cover layer): US$49.",
        "Kerusakan lain: hingga US$1.499.",
      ],
      subsections: [
        {
          heading: "Gambaran biaya di Indonesia",
          paragraphs: [
            "Media lokal seperti Media Indonesia dan Jagat Gadget melaporkan biaya perbaikan iPhone Duo tanpa AppleCare+ bisa mencapai sekitar Rp26–27 juta untuk kerusakan berat. Angka ini hasil konversi dan perkiraan media, bukan daftar harga resmi. Untuk biaya pasti lewat jalur resmi, tanyakan langsung ke penyedia servis resmi Apple setelah unit diperiksa.",
          ],
        },
      ],
    },
    {
      heading: "Part resmi iPhone Duo mulai dijual, tapi belum untuk Indonesia",
      paragraphs: [
        "Pada 17 November 2026 Apple mulai menjual part dan alat perbaikan iPhone Duo lewat program Self Service Repair. Program ini baru berlaku di Amerika Serikat, Kanada, dan Eropa. Harga yang dilaporkan antara lain baterai US$119 (sekitar US$61,88 setelah kredit pengembalian part lama), layar luar US$379, dan rakitan layar dalam US$999. Alat perbaikan bisa disewa US$49 selama tujuh hari.",
        "Artinya, part resmi iPhone Duo belum bisa dipesan langsung dari Indonesia. Servis independen di Bandung perlu mengecek ketersediaan part untuk setiap kasus. Kalau ada tempat servis yang menjanjikan 'layar dalam iPhone Duo original ready stock', tanyakan asal part dan garansinya sebelum setuju.",
      ],
    },
    {
      heading: "Seberapa sulit iPhone Duo diperbaiki?",
      paragraphs: [
        "iFixit memberi iPhone Duo skor kemudahan perbaikan sementara 5/10, tertinggi untuk ponsel lipat yang pernah mereka nilai. Beberapa temuan dari teardown mereka relevan untuk calon pelanggan servis:",
      ],
      list: [
        "Baterai memakai lem yang bisa dilepas dengan arus listrik, sehingga penggantian baterai relatif lebih mudah dibanding ponsel lipat lain.",
        "Melepas layar dalam butuh pemanasan dan alat congkel, dan prosesnya jauh dari mudah. Layar dalam adalah perbaikan paling berisiko dan paling mahal.",
        "Uji debu iFixit menemukan serbuk bisa masuk ke mekanisme engsel dan membuatnya berbunyi kasar, meski iPhone Duo bersertifikat IP68.",
        "Kerusakan layar dalam yang dilaporkan berada sedikit di bawah jalur kabel layar di engsel, di titik tempat beberapa tepi bertemu dan menopang layar saat ditekuk.",
      ],
    },
    {
      heading: "Keluhan iPhone Duo yang bisa dikonsultasikan di workshop kami",
      paragraphs: [
        "Service iPhone Bandung adalah servis independen, bukan penyedia servis resmi Apple. Untuk iPhone Duo, kami memeriksa unit lebih dulu, menjelaskan apakah kerusakannya sebaiknya diklaim ke Apple, lalu menyampaikan pilihan dan biaya sebelum ada pengerjaan. Keluhan yang bisa Anda konsultasikan antara lain:",
      ],
      list: [
        "Baterai cepat habis, kesehatan baterai turun, atau ponsel mati sebelum 0%.",
        "Layar luar pecah, bergaris, atau tidak responsif.",
        "Kaca belakang retak.",
        "Tidak bisa dicas atau port charger longgar.",
        "Kamera buram, bergetar, atau tidak bisa dibuka.",
        "iPhone Duo mati total, bootloop, atau stuck di logo Apple setelah update iOS.",
        "Masalah software: cadangkan data, pulihkan iOS, dan pindah data ke ponsel baru.",
      ],
      subsections: [
        {
          heading: "Yang kami sarankan lewat jalur resmi",
          paragraphs: [
            "Layar dalam retak di area lipatan tanpa riwayat jatuh dan keluhan engsel pada unit yang masih garansi sebaiknya diklaim ke Apple. Apple sudah mengakui masalah layar dalam, dan membongkar unit di luar jalur resmi bisa mempersulit klaim. Kami akan menyampaikan ini terus terang saat konsultasi.",
          ],
        },
      ],
    },
    {
      heading: "Cara konsultasi service iPhone Duo di Bandung",
      paragraphs: [
        "Supaya konsultasi cepat dan biaya bisa diperkirakan sejak awal, siapkan beberapa hal berikut sebelum menghubungi kami:",
      ],
      list: [
        "Foto atau video kerusakan dari beberapa sudut, termasuk kondisi bodi dan engsel.",
        "Kronologi singkat: kapan mulai terjadi, pernah jatuh atau kena air atau tidak, dan setelah update iOS atau tidak.",
        "Status garansi dan AppleCare+, serta nota pembelian jika ada.",
        "Cadangan data ke iCloud atau komputer selama ponsel masih bisa menyala.",
        "Kirim semuanya lewat WhatsApp, atau bawa unit langsung ke workshop di Jl. Dipati Ukur No. 86, Coblong. Buka setiap hari pukul 10.00–22.00 WIB.",
      ],
      links: [
        { label: "Layanan ganti LCD iPhone Bandung", href: "/layanan/ganti-lcd-iphone" },
        { label: "Layanan ganti baterai iPhone Bandung", href: "/layanan/ganti-baterai-iphone" },
        { label: "Panduan memilih tempat service iPhone di Bandung", href: "/blog/panduan-service-iphone-bandung" },
      ],
    },
    {
      heading: "Tips agar iPhone Duo tidak cepat masuk servis",
      paragraphs: [
        "Sebagian besar biaya servis iPhone Duo bisa dihindari dengan kebiasaan sederhana:",
      ],
      list: [
        "Jangan mengelupas lapisan bawaan pabrik di layar dalam, dan jangan memasang tempered glass kaku di sana.",
        "Pastikan tidak ada benda di antara kedua sisi layar saat menutup, seperti kartu, koin, atau butiran pasir.",
        "Jauhkan dari debu dan pasir karena engsel bisa kemasukan serbuk meski bersertifikat IP68.",
        "Pakai casing yang dirancang khusus untuk iPhone Duo agar engsel ikut terlindungi saat jatuh.",
        "Pertimbangkan AppleCare+. Satu kali perbaikan layar dalam di luar garansi bisa jauh lebih mahal dari harga perlindungannya.",
      ],
    },
  ],
};
