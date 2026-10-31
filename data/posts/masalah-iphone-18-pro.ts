import type { BlogPost } from "@/types";

/**
 * Target utama: "masalah iphone 18 pro", "iphone 18 pro panas", "iphone 18 pro restart sendiri",
 * "cat iphone 18 pro pudar", "iphone 18 pro burgundy luntur".
 * Riset: docs/riset-artikel-masalah-iphone-18-pro-2026-10-31.md
 *
 * Halaman 1 saat riset diisi media berita (satu masalah per artikel). Sudut artikel ini:
 * satu panduan lengkap yang memisahkan mana yang normal, mana yang sudah diperbaiki update,
 * dan mana yang perlu diklaim garansi.
 */
export const masalahIphone18ProPost: BlogPost = {
  slug: "masalah-iphone-18-pro-panas-restart-cat-pudar",
  title: "Masalah iPhone 18 Pro: Panas, Restart Sendiri, dan Cat Pudar. Mana yang Normal?",
  seoTitle: "Masalah iPhone 18 Pro: Panas, Restart, Cat Pudar",
  description:
    "iPhone 18 Pro panas, restart sendiri setelah Face ID gagal, atau cat pudar? Cek mana yang normal, sudah diperbaiki iOS 27.0.1, dan kapan harus klaim garansi.",
  image: "/images/hero-repair.webp",
  imageAlt: "Teknisi memeriksa iPhone di meja servis untuk mengecek masalah panas dan restart",
  publicationApproved: true,
  publishedAt: "2026-10-31",
  updatedAt: "2026-10-31",
  readingMinutes: 7,
  relatedServiceSlug: "ganti-baterai-iphone",
  sources: [
    { title: "MacRumors: Apple merilis iOS 27.0.1 dengan perbaikan bug Face ID (28 September 2026)", url: "https://www.macrumors.com/2026/09/28/apple-releases-ios-27-0-1/" },
    { title: "Macworld: iOS 27.0.1 memperbaiki bug restart iPhone 18 Pro", url: "https://www.macworld.com/article/3245812/ios-27-0-1-is-out-now-to-fix-iphone-18-pro-restart-bug.html" },
    { title: "Engadget: iOS 27.0.1 memperbaiki Face ID dan layar sentuh tidak responsif", url: "https://www.engadget.com/2272713/ios-27-0-1-iphone-update-face-id-touchscreen-issue-fixes/" },
    { title: "Telset: Bug Face ID bikin iPhone 18 Pro restart sendiri", url: "https://telset.id/news/bug-face-id-bikin-iphone-18-pro-restart-sendiri-apple-siapkan-perbaikan" },
    { title: "CNBC Indonesia: Baru sebentar beli iPhone 18 Pro, warnanya sudah pudar", url: "https://www.cnbcindonesia.com/tech/20261006163838-37-773848/baru-sebentar-beli-iphone-18-pro-baru-warnanya-sudah-pudar" },
    { title: "Uzone: iPhone 18 Pro dikeluhkan nge-hang, Face ID error, sampai bodi panas", url: "https://uzone.id/iphone-18-pro-dikeluhkan-nge-hang-face-id-error-sampai-bodi-panas" },
    { title: "Mac Observer: iPhone panas setelah iOS 27, apa yang sudah dan belum dipublikasikan Apple", url: "https://www.macobserver.com/tips/round-ups/iphone-overheating-after-ios-27-update-what-apple-published/" },
    { title: "Apple Support: Jika iPhone atau iPad terlalu panas atau terlalu dingin", url: "https://support.apple.com/118431" },
    { title: "Kompas TV: iPhone 18 Pro resmi masuk Indonesia, harga mulai Rp27,49 juta", url: "https://www.kompas.tv/info-publik/694610/iphone-18-pro-resmi-masuk-indonesia-harga-mulai-rp27-49-juta?page=all" },
  ],
  faqs: [
    {
      question: "Apakah iPhone 18 Pro panas itu normal?",
      answer:
        "Panas di 1–3 hari pertama umumnya normal karena iPhone sedang memindahkan data, mengunduh foto dari iCloud, dan mengindeks isi perangkat di latar belakang. Kalau setelah sekitar 3–4 hari iPhone tetap panas saat dipakai ringan, sering memunculkan peringatan suhu, atau mati sendiri, sebaiknya diperiksakan.",
    },
    {
      question: "Kenapa iPhone 18 Pro restart sendiri setelah Face ID gagal?",
      answer:
        "Itu bug software yang diakui Apple. Catatan rilis iOS 27.0.1 (28 September 2026) menyebut iPhone 18 Pro dan 18 Pro Max bisa restart tak terduga setelah autentikasi Face ID gagal, dan update tersebut memperbaikinya. Pastikan iPhone sudah memakai iOS 27.0.1 atau yang lebih baru.",
    },
    {
      question: "Apakah cat iPhone 18 Pro yang pudar ditanggung garansi?",
      answer:
        "Belum ada kebijakan resmi Apple khusus untuk kasus ini. Garansi terbatas Apple umumnya tidak menanggung kerusakan kosmetik seperti baret dan penyok, kecuali akibat cacat bahan atau pengerjaan. Pudar tanpa pernah jatuh lebih kuat diajukan sebagai cacat. Foto kondisinya secara berkala dan bawa ke pusat servis resmi selama masih garansi.",
    },
    {
      question: "Apakah iPhone 18 Pro yang bermasalah bisa diservis di luar?",
      answer:
        "Selama masih garansi resmi, klaim dulu ke pusat servis resmi karena membuka unit di servis independen bisa membuat klaim garansi ditolak. Servis independen relevan untuk kerusakan di luar garansi, seperti layar pecah karena jatuh atau kena air.",
    },
  ],
  sections: [
    {
      heading: "Ringkasan: masalah iPhone 18 Pro yang paling banyak dikeluhkan",
      paragraphs: [
        "iPhone 18 Pro dan 18 Pro Max resmi dijual di Indonesia sejak 16 Oktober 2026 dengan harga mulai Rp27.499.000. Sejak rilis global pada September, ada empat keluhan yang paling sering muncul di forum dan media: bodi terasa panas, iPhone restart sendiri setelah Face ID gagal, warna foto aneh di zoom 2x, serta cat yang memudar atau mengelupas.",
        "Kabar baiknya, tidak semua keluhan itu berarti unit Anda cacat. Sebagian adalah perilaku normal iPhone baru, sebagian sudah diperbaiki Apple lewat update, dan hanya sebagian kecil yang perlu dibawa ke pusat servis. Berikut cara membedakannya.",
      ],
      list: [
        "Panas di hari-hari pertama: umumnya normal, tunggu 3–4 hari.",
        "Restart sendiri setelah Face ID gagal: bug software, sudah diperbaiki di iOS 27.0.1.",
        "Warna aneh di foto zoom 2x: bug software, sudah diperbaiki di iOS 27.0.1.",
        "Layar macet saat Notification Center dan Control Center dibuka bersamaan: bug iOS 27, sudah diperbaiki di iOS 27.0.1.",
        "Cat pudar atau mengelupas: belum ada perbaikan atau penjelasan resmi, dokumentasikan dan klaim selama masih garansi.",
      ],
    },
    {
      heading: "1. iPhone 18 Pro panas: normal di hari pertama, waspada kalau berlanjut",
      paragraphs: [
        "Keluhan panas paling sering muncul saat setup awal. Ketika memindahkan data dari iPhone lama, memulihkan cadangan iCloud, atau mengunduh ribuan foto, iPhone bekerja keras di latar belakang selama berjam-jam sampai beberapa hari. Selama proses ini bodi hangat dan baterai lebih boros adalah hal wajar. Hal yang sama terjadi setelah update besar seperti iOS 27.",
        "Sampai artikel ini ditulis, Apple belum mengeluarkan pernyataan khusus soal iPhone 18 Pro panas. Panduan umum Apple menyebut iPhone dirancang untuk dipakai di suhu ruang 0–35 °C. Di atas itu, iPhone akan memperlambat atau menghentikan pengisian daya, meredupkan layar, dan bisa menampilkan peringatan suhu sampai perangkat dingin kembali. Di Bandung yang relatif sejuk, panas berlebih lebih sering dipicu kebiasaan pemakaian daripada cuaca.",
      ],
      list: [
        "Biarkan iPhone terhubung ke Wi-Fi dan charger semalaman di hari pertama agar proses latar belakang cepat selesai.",
        "Lepas casing tebal saat mengecas, terutama saat memakai MagSafe atau charger nirkabel.",
        "Jangan main game berat atau merekam video 4K sambil mengecas.",
        "Jangan tinggalkan iPhone di dasbor mobil atau di bawah sinar matahari langsung.",
        "Cek Pengaturan > Baterai untuk melihat aplikasi yang paling banyak memakai daya, lalu perbarui atau batasi aplikasi tersebut.",
      ],
      links: [
        { label: "iPhone panas: wajar atau rusak?", href: "/blog/iphone-panas-wajar-atau-rusak-kapan-perlu-servis" },
        { label: "Baterai boros setelah update iOS 27? Cek ini", href: "/blog/baterai-iphone-boros-setelah-update-ios-27" },
      ],
    },
    {
      heading: "Kapan iPhone 18 Pro panas perlu diperiksakan?",
      paragraphs: [
        "Panas yang wajar akan hilang sendiri setelah proses latar belakang selesai. Segera hubungi pusat servis resmi kalau Anda menemukan salah satu tanda berikut setelah lewat 3–4 hari pemakaian:",
      ],
      list: [
        "iPhone tetap panas walau hanya dipakai chat atau membuka media sosial.",
        "Peringatan suhu muncul berulang padahal iPhone dipakai di ruangan sejuk.",
        "iPhone mati sendiri saat panas, atau persentase baterai turun drastis dalam hitungan menit.",
        "Panas terpusat di satu titik dan terasa menyengat, bukan hangat merata.",
        "Bodi atau layar terlihat menggembung. Kalau ini terjadi, hentikan pengisian daya.",
      ],
    },
    {
      heading: "2. iPhone 18 Pro restart sendiri setelah Face ID gagal (sudah diperbaiki)",
      paragraphs: [
        "Ini keluhan yang paling ramai di minggu-minggu pertama. Beberapa pemilik iPhone 18 Pro dan 18 Pro Max melaporkan layar membeku dan tidak merespons sentuhan setelah Face ID gagal mengenali wajah, misalnya saat membuka aplikasi yang dikunci, lalu iPhone restart sendiri beberapa detik kemudian. Sebagian pengguna juga melaporkan restart saat memakai Apple Pay atau membuka Wallet.",
        "Apple mengonfirmasi ini bug software. Catatan rilis iOS 27.0.1 yang keluar pada 28 September 2026 menyebut update tersebut memperbaiki masalah iPhone 18 Pro dan iPhone 18 Pro Max yang bisa restart tak terduga setelah autentikasi Face ID gagal. Jadi kalau Anda mengalaminya, langkah pertamanya adalah update, bukan langsung membawanya ke servis.",
      ],
      list: [
        "Buka Pengaturan > Umum > Pembaruan Perangkat Lunak, lalu pasang iOS 27.0.1 atau versi yang lebih baru.",
        "Setelah update, atur ulang Face ID di Pengaturan > Face ID & Kode Sandi > Atur Ulang Face ID.",
        "Kalau iPhone masih restart sendiri setelah update, catat kapan terjadinya, lalu buka Pengaturan > Privasi & Keamanan > Analisis & Peningkatan > Data Analisis. Banyaknya file bernama 'panic' menjadi bukti kuat saat klaim garansi.",
      ],
      links: [{ label: "Face ID tidak berfungsi? Cek penyebab TrueDepth", href: "/blog/face-id-iphone-tidak-berfungsi-penyebab-dan-solusi" }],
    },
    {
      heading: "3. Warna aneh di foto zoom 2x dan layar macet (sudah diperbaiki)",
      paragraphs: [
        "iOS 27.0.1 juga memperbaiki dua masalah lain. Pertama, artefak warna pada foto zoom 2x di kondisi pencahayaan tertentu yang hanya dialami sebagian kecil iPhone 18 Pro. Kedua, layar sentuh yang tidak responsif ketika Notification Center dan Control Center dibuka bersamaan. Masalah kedua ini bug iOS 27 yang bisa terjadi di semua iPhone, bukan hanya iPhone 18 Pro.",
        "Kalau warna foto tetap aneh atau kamera bergetar setelah update, kemungkinan masalahnya ada di modul kamera dan perlu diperiksa langsung.",
      ],
      links: [{ label: "Kamera iPhone bergetar & bunyi? Ini penyebabnya", href: "/blog/kamera-belakang-iphone-bergetar-dan-bunyi" }],
    },
    {
      heading: "4. Cat iPhone 18 Pro pudar atau mengelupas, terutama Burgundy",
      paragraphs: [
        "Keluhan ini belum ada perbaikannya. Sejak awal Oktober 2026, sejumlah pemilik melaporkan warna bodi belakang dan bingkai iPhone 18 Pro perlahan memudar, terutama di sekitar modul kamera, meskipun ponsel tidak pernah jatuh. Varian Burgundy paling sering disebut, dan beberapa unit Black dilaporkan mengalami hal serupa. Varian berwarna terang belum banyak dikeluhkan.",
        "Penyebabnya belum dipastikan. Bingkai aluminium memang lebih mudah tergores dibanding titanium yang dipakai iPhone 15 Pro dan 16 Pro, dan kasus serupa pernah muncul di iPhone 17 Pro warna oranye tahun lalu. Apple belum mengeluarkan pernyataan resmi soal cat iPhone 18 Pro, dan belum ada data berapa banyak unit yang terdampak.",
      ],
      list: [
        "Foto bodi iPhone dari beberapa sudut dengan cahaya yang sama setiap 1–2 minggu. Foto bertanggal ini menjadi bukti kalau warnanya berubah tanpa benturan.",
        "Simpan nota pembelian dan kardus. Unit resmi Indonesia mendapat garansi 1 tahun dari Apple.",
        "Pakai casing dan hindari menjemur iPhone di bawah matahari langsung terlalu lama.",
        "Kalau pudar mulai terlihat, bawa ke pusat servis resmi selama masih garansi. Garansi terbatas Apple umumnya tidak menanggung baret atau penyok akibat pemakaian, tetapi perubahan warna tanpa benturan bisa diajukan sebagai cacat bahan atau pengerjaan.",
      ],
    },
    {
      heading: "Masih garansi? Klaim ke resmi dulu, jangan dibongkar",
      paragraphs: [
        "Semua masalah di atas sebaiknya diselesaikan lewat jalur resmi selama iPhone 18 Pro Anda masih dalam masa garansi. Membuka unit di luar pusat servis resmi bisa membuat klaim garansi ditolak, dan untuk masalah software seperti bug Face ID, perbaikannya memang datang dari update Apple, bukan dari bengkel.",
        "Sebagai servis independen, kami jujur menyarankan hal ini. Servis independen baru relevan untuk kerusakan yang memang tidak ditanggung garansi, misalnya layar pecah karena jatuh, iPhone kena air, atau unit yang garansinya sudah habis.",
      ],
    },
    {
      heading: "Checklist cepat untuk pemilik iPhone 18 Pro",
      paragraphs: ["Simpan daftar ini dan cek satu per satu di minggu pertama pemakaian:"],
      list: [
        "iOS sudah versi 27.0.1 atau lebih baru.",
        "Panas mereda setelah 3–4 hari pemakaian normal.",
        "Face ID berfungsi dan tidak ada restart mendadak.",
        "Foto zoom 2x tampak normal di berbagai kondisi cahaya.",
        "Bodi dan bingkai bebas baret, penyok, atau warna tidak rata sejak dikeluarkan dari kardus. Kalau ada, laporkan ke tempat pembelian secepatnya.",
        "Nota, kardus, dan foto kondisi unit tersimpan untuk klaim garansi.",
      ],
    },
    {
      heading: "Butuh pemeriksaan iPhone di Bandung?",
      paragraphs: [
        "Kalau iPhone Anda sudah di luar garansi atau mengalami kerusakan yang tidak ditanggung, seperti layar pecah, baterai drop, atau kena air, Anda bisa datang ke workshop Service iPhone Bandung di Jl. Dipati Ukur No. 86. Diagnosa dilakukan lebih dulu tanpa biaya, lalu kami sampaikan penyebab, pilihan perbaikan, dan harganya sebelum pengerjaan dimulai.",
        "Ragu apakah masalah iPhone Anda normal atau kerusakan? Kirim model iPhone dan gejalanya lewat WhatsApp. Kami bantu jelaskan dulu, termasuk kalau jawabannya cukup update iOS atau klaim garansi resmi.",
      ],
      links: [
        { label: "Layanan ganti baterai iPhone Bandung", href: "/layanan/ganti-baterai-iphone" },
        { label: "Daftar harga service iPhone", href: "/harga" },
      ],
    },
  ],
};
