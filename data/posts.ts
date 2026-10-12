import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    slug: "cara-cek-iphone-bekas-sebelum-beli-di-bandung",
    title: "Panduan Lengkap Cek iPhone Bekas Sebelum Beli di Bandung (Anti Boncos)",
    description:
      "Mau beli iPhone second di Bandung? Cek poin penting ini: True Tone, Face ID, cek IMEI Bea Cukai/Kemenperin, baterai suntikan, dan keaslian layar LCD.",
    image: "/images/workshop-bandung.webp",
    publishedAt: "2026-10-22",
    updatedAt: "2026-10-22",
    readingMinutes: 6,
    relatedServiceSlug: "ganti-lcd-iphone",
    sources: [
      { title: "Apple Support: Riwayat suku cadang dan servis iPhone", url: "https://support.apple.com/id-id/102658" },
      { title: "Kemenperin: Pengecekan IMEI Ponsel Resmi", url: "https://imei.kemenperin.go.id/" },
      { title: "Bea Cukai RI: Pengecekan Pendaftaran IMEI HKT", url: "https://www.beacukai.go.id/cek-imei.html" },
    ],
    sections: [
      {
        heading: "Membeli iPhone bekas di Bandung: Peluang vs Risiko",
        paragraphs: [
          "Pasar jual beli iPhone second di Bandung sangat hidup, mulai dari pusat perbelanjaan elektronik seperti BEC, toko gawai independen, hingga transaksi COD antara sesama mahasiswa di sekitar Dago, Buah Batu, dan Jatinangor.",
          "Membeli iPhone bekas memang menjadi cara cerdas mendapatkan ponsel flagship dengan harga separuh dari harga barunya. Namun, di balik tawaran harga murah, ada risiko tersembunyi yang sering merugikan pembeli: mulai dari unit bypass sinyal (ex-inter tidak bayar pajak), layar KW berkualitas rendah, hingga persentase baterai hasil manipulasi (baterai suntikan).",
          "Berikut adalah panduan pengecekan lengkap yang wajib Anda praktikkan sebelum mentransfer uang ke penjual.",
        ],
      },
      {
        heading: "1. Cek status IMEI dan kestabilan sinyal seluler",
        paragraphs: [
          "Langkah pertama yang paling krusial di Indonesia adalah memastikan nomor IMEI tidak terblokir oleh aturan CEIR.",
        ],
        list: [
          "Bawa minimal dua kartu SIM dari operator seluler berbeda (misalnya Telkomsel dan Indosat/XL) saat bertransaksi.",
          "Ketik *#06# pada papan telepon untuk memunculkan nomor IMEI fisik, lalu cocokkan dengan nomor IMEI di menu Pengaturan > Umum > Mengenai dan pada baki SIM (SIM tray).",
          "Buka situs resmi Kemenperin atau Bea Cukai untuk memverifikasi apakah IMEI terdaftar secara permanen. Hindari unit dengan embel-embel 'all operator sementara' atau garansi sinyal hanya beberapa bulan, karena unit tersebut berisiko hilang sinyal sewaktu-waktu.",
        ],
      },
      {
        heading: "2. Cek keaslian layar: True Tone, akurasi sentuhan, dan respon panel",
        paragraphs: [
          "Layar pengganti non-original sering kali memiliki sudut pandang sempit, warna pucat kebiruan, dan konsumsi daya baterai yang jauh lebih boros.",
        ],
        list: [
          "Periksa fitur True Tone: Buka Pusat Kontrol, tekan dan tahan penggeser kecerahan. Jika ikon True Tone tidak ada, kemungkinan besar layar pernah diganti tanpa memindahkan serial data dari layar aslinya.",
          "Tes sentuhan menyeluruh: Tekan dan tahan salah satu ikon aplikasi hingga bergoyang, lalu seret ikon tersebut mengelilingi seluruh sudut dan tepi layar. Jika ikon terlepas sendiri di titik tertentu, berarti ada area 'dead zone' pada touchscreen.",
          "Cek respon kecerahan otomatis: Tutup sensor atas layar dengan tangan untuk memastikan layar merespons perubahan cahaya lingkungan secara halus.",
        ],
      },
      {
        heading: "3. Periksa riwayat komponen (Parts and Service History)",
        paragraphs: [
          "Pada iPhone yang menjalankan iOS 15.2 ke atas, Apple menyediakan menu riwayat servis resmi di Pengaturan > Umum > Mengenai.",
          "Jika ada komponen yang pernah diganti oleh pihak ketiga tanpa kalibrasi, sistem akan menampilkan status 'Komponen Tidak Dikenal' (Unknown Part) pada bagian Baterai, Layar, atau Kamera. Adanya keterangan ini bukan berarti ponsel rusak, namun menjadi kartu negosiasi penting untuk menawar harga ponsel lebih murah.",
        ],
      },
      {
        heading: "4. Waspadai baterai 'suntikan' (Battery Health Reset)",
        paragraphs: [
          "Jangan langsung percaya jika iPhone keluaran 3–4 tahun lalu (seperti iPhone 11 atau iPhone 12) masih menunjukkan Battery Health 98% atau 100%.",
          "Banyak penjual nakal menggunakan alat programmer baterai murah untuk mereset persentase Battery Health tanpa mengganti sel baterai fisiknya. Saat dites menggunakan laptop dengan software diagnostik (seperti 3uTools), siklus pengisian (cycle count) sudah menyentuh 800+ kali. Baterai hasil manipulasi seperti ini biasanya akan anjlok drastis setelah beberapa minggu Anda gunakan.",
        ],
      },
      {
        heading: "5. Uji seluruh sensor hardware: Face ID, Kamera, dan Mikrofon",
        paragraphs: [
          "Pastikan Face ID dapat mendeteksi wajah dengan lancar. Modul TrueDepth yang rusak membutuhkan perbaikan mikrosolder yang cukup rumit.",
          "Buka aplikasi Kamera, uji lensa utama (1x), ultrawide (0.5x), dan telephoto. Pastikan tidak ada bintik hitam (kamera jamur/sensor spot) dan tidak ada getaran liar.",
          "Rekam video menggunakan kamera depan dan belakang sambil berbicara pelan, lalu dengarkan hasilnya untuk memastikan ketiga mikrofon iPhone bekerja normal.",
        ],
      },
      {
        heading: "Layanan General Check-up Unit di Flow Service Bandung",
        paragraphs: [
          "Ingin janjian COD di area Bandung tetapi ragu memeriksa kondisinya sendiri? Bawa unit pilihan Anda ke workshop Flow Service Bandung.",
          "Teknisi kami siap membantu melakukan pemeriksaan menyeluruh (general check-up): membaca riwayat pengisian baterai asli lewat komputer diagnostik, menguji tegangan mesin, hingga memeriksa keaslian modul display secara transparan di hadapan Anda sebelum Anda menyelesaikan pembayaran dengan pihak penjual.",
        ],
      },
      {
        heading: "Pertanyaan yang sering diajukan (FAQ)",
        paragraphs: [
          "Apakah iPhone yang pernah ganti LCD masih layak dibeli? Masih layak, asalkan kualitas layar penggantinya adalah tipe grade original (OLED) dan dipasang oleh teknisi berpengalaman, serta harga belinya disesuaikan.",
          "Apa bedanya unit resmi iBox dengan unit inter? Unit resmi iBox memiliki garansi IMEI permanen seumur hidup terdaftar di Kemenperin. Unit inter harus dipastikan telah membayar pajak resmi di Bea Cukai agar sinyal operator Indonesia tidak terblokir.",
        ],
      },
    ],
  },
  {
    slug: "suara-speaker-dan-earpiece-iphone-kecil-atau-kresek",
    title: "Suara Speaker & Earpiece iPhone Kecil atau Kresek? Cek Solusinya",
    description:
      "Suara lawan bicara saat telepon sangat kecil atau speaker musik bawah sember dan kresek? Coba trik pembersihan jaring mesh sebelum servis.",
    image: "/images/services/charging.webp",
    publishedAt: "2026-10-19",
    updatedAt: "2026-10-19",
    readingMinutes: 4,
    relatedServiceSlug: "service-port-charger-iphone",
    sources: [
      { title: "Apple Support: Jika Anda tidak dapat mendengar suara dari speaker iPhone", url: "https://support.apple.com/id-id/102482" },
      { title: "Apple Support: Membersihkan speaker dan mikrofon iPhone", url: "https://support.apple.com/id-id/108765" },
    ],
    sections: [
      {
        heading: "Keluhan suara telepon kecil dan speaker sember pada iPhone",
        paragraphs: [
          "Banyak pengguna iPhone mengeluhkan bahwa saat menerima panggilan telepon biasa, suara lawan bicara terdengar sangat redup dan nyaris tidak terdengar, sehingga terpaksa harus mengaktifkan mode loudspeaker atau menggunakan earphone.",
          "Masalah lain yang kerap muncul adalah suara speaker bagian bawah yang terdengar pecah, sember, atau mengeluarkan bunyi kresek saat memutar musik pada volume tinggi. Sebelum menyimpulkan speaker Anda jebol dan harus diganti, kenali dulu sumber penyebabnya.",
        ],
      },
      {
        heading: "1. Bersihkan jaring pelindung (Mesh Grill) earpiece atas",
        paragraphs: [
          "Pada 80% kasus suara telepon kecil, penyebab utamanya bukanlah komponen speaker yang rusak, melainkan jaring mikro (mesh grill) earpiece yang tersumbat oleh kotoran padat.",
          "Jaring mikro atas iPhone berada tepat di area telinga yang sering bersentuhan dengan minyak alami kulit wajah, keringat, sisa bedak kosmetik, dan debu kantong celana. Penumpukan lapisan minyak ini mengering dan menyumbat lubang mikro speaker hingga kedap suara.",
        ],
        list: [
          "Gunakan sikat gigi bekas berbulu sangat halus (tipe ultra-soft atau mikro) yang bersih dan kering.",
          "Celupkan ujung bulu sikat ke sedikit cairan alkohol isopropil 90%+ (cukup lembap, jangan sampai menetes).",
          "Sikat bagian celah jaring earpiece dengan gerakan memutar dan miring perlahan agar serpihan kotoran terangkat keluar. Hindari menekan bulu sikat terlalu dalam.",
          "PENTING: Jangan pernah menusuk jaring speaker menggunakan peniti, jarum, atau tiupan kompresor udara bertekanan tinggi karena dapat merobek membran suara di baliknya.",
        ],
      },
      {
        heading: "2. Periksa pengaturan audio dan koneksi Bluetooth",
        paragraphs: [
          "Kadang masalah audio dipicu oleh kekeliruan pengaturan aksesibilitas sistem iOS.",
        ],
        list: [
          "Buka Pengaturan > Aksesibilitas > Audio & Visual. Periksa penggeser 'Keseimbangan' (Balance) audio apakah berada tepat di tengah (0.00).",
          "Nonaktifkan fitur 'Peredam Kebisingan Telepon' (Phone Noise Cancellation) untuk menguji apakah suara menjadi lebih lantang.",
          "Pastikan iPhone tidak sedang terhubung secara otomatis ke perangkat earphone TWS atau speaker Bluetooth di ruangan lain yang membuat output suara berpindah.",
        ],
      },
      {
        heading: "3. Gunakan gelombang suara pembersih air (Water Eject)",
        paragraphs: [
          "Jika suara speaker mendadak kresek atau teredam setelah iPhone terkena hujan atau cipratan air, kemungkinan besar terdapat lapisan cairan yang menempel pada membran getar speaker.",
          "Anda dapat memanfaatkan shortcut iOS 'Water Eject' atau memutar video nada frekuensi resonansi audio (sekitar 165 Hz) di YouTube dengan volume maksimal. Getaran frekuensi rendah ini akan mendorong butiran air keluar melalui lubang rongga speaker secara alami.",
        ],
      },
      {
        heading: "4. Kapan modul fisik speaker harus diganti?",
        paragraphs: [
          "Jika jaring mesh sudah bersih total dan pengaturan audio normal namun suara tetap distorsi berat, sember saat volume 70% ke atas, atau mati total, kemungkinan besar membran konus speaker telah robek atau kumparan magnetiknya terbakar.",
          "Penggantian modul speaker iPhone (baik earpiece atas maupun buzzer bawah) adalah pengerjaan modular yang cepat dan tidak mengganggu data perangkat.",
        ],
      },
      {
        heading: "Pemeriksaan dan servis speaker di Flow Service Bandung",
        paragraphs: [
          "Di workshop Flow Service Bandung, teknisi kami menyediakan layanan pembersihan jaring earpiece menggunakan larutan khusus dan kuas antistatis tanpa biaya jika Anda datang berkonsultasi.",
          "Bila pengujian menunjukkan modul speaker fisik memang sudah robek, kami menyediakan suku cadang modul speaker berkualitas tinggi dengan pengerjaan cepat sekitar 20 hingga 30 menit yang bisa ditunggu langsung di tempat.",
        ],
      },
      {
        heading: "Pertanyaan yang sering diajukan (FAQ)",
        paragraphs: [
          "Apakah ganti speaker earpiece atas mempengaruhi Face ID? Pada model iPhone X hingga 12 series, modul earpiece terhubung dengan sensor sensor flood illuminator Face ID. Karena itu, perbaikan earpiece harus dikerjakan oleh teknisi ahli agar sensor Face ID bawaan tetap aman dipindahkan.",
          "Berapa biaya pembersihan speaker iPhone? Pemeriksaan awal dan pembersihan debu ringan di tempat kami tidak dipungut biaya (gratis).",
        ],
      },
    ],
  },
  {
    slug: "face-id-iphone-tidak-berfungsi-penyebab-dan-solusi",
    title: "Face ID iPhone Tidak Berfungsi? Cek Penyebab TrueDepth Bermasalah",
    description:
      "Muncul notifikasi 'Face ID Dinonaktifkan' atau kamera TrueDepth tidak dapat mendeteksi wajah? Kenali pemicu kerusakan dan langkah perbaikannya.",
    image: "/images/services/matot.webp",
    publishedAt: "2026-10-16",
    updatedAt: "2026-10-16",
    readingMinutes: 5,
    relatedServiceSlug: "service-iphone-mati-total",
    sources: [
      { title: "Apple Support: Jika Face ID tidak berfungsi di iPhone atau iPad Pro", url: "https://support.apple.com/id-id/108343" },
      { title: "Apple Support: Tentang kamera TrueDepth dan Face ID", url: "https://support.apple.com/id-id/102377" },
    ],
    sections: [
      {
        heading: "Gejala umum Face ID rusak dan pesan error di layar",
        paragraphs: [
          "Fitur pemindai wajah Face ID adalah salah satu sistem otentikasi paling nyaman pada iPhone modern. Namun, ketika modul kamera TrueDepth mengalami kendala, pengguna biasanya menjumpai beberapa gejala khas:",
          "Kamera meminta pengguna untuk 'Pindahkan iPhone sedikit lebih tinggi atau lebih rendah' secara terus-menerus tanpa pernah mengunci wajah, lingkaran pendaftaran wajah tidak mau berputar, menu Face ID di Pengaturan berwarna abu-abu (greyed out), atau muncul jendela notifikasi 'Terdeteksi Masalah Pada Kamera TrueDepth: Face ID telah dinonaktifkan'.",
        ],
      },
      {
        heading: "Penyebab utama: Sensor Dot Projector, cairan, dan benturan",
        paragraphs: [
          "Sistem kamera TrueDepth bukan sekadar kamera selfie biasa. Di area notch atau Dynamic Island, terdapat kombinasi empat sensor canggih: Kamera Inframerah, Lampu Penerang (Flood Illuminator), Kamera Depan, dan Proyektor Titik (Dot Projector) yang memancarkan 30.000 titik inframerah tak terlihat ke wajah Anda.",
          "Titik terlemah dari modul ini adalah sensor Dot Projector. Prisma kaca mikroskopis pada dot projector sangat sensitif terhadap kelembapan cairan (keringat saat berolahraga atau uap air hujan yang masuk lewat celah speaker telinga) serta benturan keras saat iPhone terjatuh.",
          "Jika chip sensor mendeteksi ketidaksesuaian arus listrik, sistem keamanan iOS akan langsung mematikan Face ID secara otomatis untuk mencegah emisi sinar inframerah yang berisiko bagi mata pengguna.",
        ],
      },
      {
        heading: "1. Langkah penanganan mandiri yang dapat dicoba",
        paragraphs: [
          "Sebelum memastikan kerusakan hardware, lakukan pemeriksaan sederhana berikut:",
        ],
        list: [
          "Bersihkan permukaan kaca notch atau Dynamic Island: Pastikan tidak ada minyak wajah atau gelembung pelindung layar (tempered glass) yang menghalangi jendela sensor inframerah.",
          "Periksa pembaruan iOS: Bug minor pada sistem operasi kadang membuat driver TrueDepth freeze. Buka Pengaturan > Umum > Pembaruan Perangkat Lunak.",
          "Atur Ulang Face ID: Buka Pengaturan > Face ID & Kode Sandi, lalu pilih 'Atur Ulang Face ID'. Coba daftarkan kembali wajah Anda di ruangan dengan pencahayaan alami yang cukup.",
        ],
      },
      {
        heading: "2. Mengapa modul Face ID tidak bisa asal ganti part sembarangan?",
        paragraphs: [
          "Berbeda dari komponen modular seperti baterai atau layar, sensor Face ID dipasangkan secara kriptografis (cryptographic hardware pairing) satu-ke-satu dengan prosesor Bionic iPhone Anda sejak pertama kali dirakit di pabrik Apple.",
          "Jika modul kamera depan diganti begitu saja dengan komponen copotan dari iPhone lain, Face ID akan tetap mati permanen karena chip Secure Enclave menolak kunci enkripsi yang berbeda.",
          "Oleh sebab itu, perbaikan Face ID membutuhkan keahlian teknisi mikrosolder spesialis yang menggunakan alat programmer chip khusus (seperti pemindahan chip IC dot projector ke fleksibel modifikasi tag-on) untuk mempertahankan serial data enkripsi asli pabrik.",
        ],
      },
      {
        heading: "Layanan perbaikan Face ID di Flow Service Bandung",
        paragraphs: [
          "Di workshop Flow Service Bandung, teknisi kami memiliki pengalaman dan instrumen programmer TrueDepth terkini untuk memperbaiki sensor Face ID yang mati akibat korsleting cairan atau benturan tanpa menghilangkan keamanan perangkat.",
          "Kami melakukan pembacaan log diagnosa awal secara gratis di hadapan Anda untuk mengonfirmasi apakah komponen dot projector atau flood illuminator yang membutuhkan perbaikan.",
        ],
      },
      {
        heading: "Pertanyaan yang sering diajukan (FAQ)",
        paragraphs: [
          "Apakah Face ID yang mati karena kemasukan air masih bisa diselamatkan? Sebagian besar kasus masih bisa diperbaiki asalkan prisma dot projector tidak retak fisik dan segera ditangani sebelum korosi menyebar parah.",
          "Apakah data di iPhone aman saat servis Face ID? Proses perbaikan sensor TrueDepth tidak menyentuh chip penyimpanan NAND, sehingga seluruh data pribadi, foto, dan aplikasi Anda tetap aman.",
        ],
      },
    ],
  },
  {
    slug: "layar-iphone-green-screen-white-screen-solusi",
    title: "Layar iPhone Green Screen / White Screen? Solusi Hemat Tanpa Ganti LCD",
    description:
      "Layar iPhone 13 Pro atau 14 Pro tiba-tiba berubah hijau pekat atau putih polos (WSOD)? Pahami penyebab jalur fleksibel putus dan solusi jumper tanpa ganti LCD.",
    image: "/images/services/lcd.webp",
    publishedAt: "2026-10-14",
    updatedAt: "2026-10-14",
    readingMinutes: 5,
    relatedServiceSlug: "ganti-lcd-iphone",
    sources: [
      { title: "Apple Support: Jika layar iPhone tidak merespons atau berubah warna", url: "https://support.apple.com/id-id/102555" },
      { title: "Apple Community: Kasus layar putih/hijau pada iPhone 13 Pro Series", url: "https://discussions.apple.com/thread/254432109" },
    ],
    sections: [
      {
        heading: "Fenomena Green Screen of Death (WSOD) pada iPhone",
        paragraphs: [
          "Salah satu kendala paling menghebohkan yang kerap dialami para pengguna iPhone seri flagship (khususnya iPhone 13 Pro, iPhone 13 Pro Max, iPhone 14 Pro, dan 14 Pro Max) adalah fenomena White Screen of Death (WSOD) atau Green Screen of Death.",
          "Kondisi ini terjadi ketika layar ponsel yang tadinya normal mendadak berubah menjadi satu warna penuh putih terang atau hijau stabil tanpa ada tampilan gambar menu sama sekali. Uniknya, mesin ponsel masih tetap hidup normal, suara notifikasi pesan masih terdengar, dan ponsel masih bisa menerima panggilan masuk.",
        ],
      },
      {
        heading: "Apakah layar kaca fisik atau panel OLED-nya pecah?",
        paragraphs: [
          "Banyak pengguna mengira layar mereka pecah atau rusak total. Faktanya, dalam mayoritas kasus WSOD, kaca luar ponsel masih mulus 100% tanpa ada retakan benturan.",
          "Penyebab sebenarnya terletak pada panel layar Super Retina XDR OLED ProMotion 120Hz yang mengalami putus jalur tembaga mikroskopis pada sirkuit fleksibel internal display. Jalur sinyal pengatur frekuensi gambar (display clock) atau jalur suplai tegangan panel (jalur VGH/VGL) mengalami kelelahan logam mikro atau terputus akibat lonjakan suhu termal saat proses update iOS atau pengisian daya cepat.",
        ],
      },
      {
        heading: "1. Solusi perbaikan dengan teknik Jumper Fleksibel (Hemat hingga 70%)",
        paragraphs: [
          "Jika Anda membawa iPhone dengan kasus ini ke pusat servis resmi, solusi standar mereka adalah mewajibkan penggantian modul layar utuh dengan biaya yang bisa mencapai 4 hingga 5 juta rupiah.",
          "Namun di dunia servis independen profesional, kini tersedia metode perbaikan presisi tinggi yang disebut jumper flexible display. Teknisi mikrosolder menyambungkan kembali jalur daya display yang terputus menggunakan kawat tembaga isolasi berdiameter 0.02 mm langsung di bawah mikroskop stereoskopik berkekuatan tinggi.",
        ],
        list: [
          "Hemat biaya signifikan: Biaya teknik jumper hanya sekitar 20% hingga 35% dibandingkan harga beli modul layar baru satu set.",
          "Kualitas tetap original: Karena panel layar bawaan pabrik tidak diganti, akurasi warna Apple OLED dan fitur refresh rate adaptif ProMotion 120Hz tetap bekerja 100% seperti semula.",
          "Fitur True Tone tetap aktif tanpa perlu khawatir munculnya peringatan riwayat komponen tidak dikenal.",
        ],
      },
      {
        heading: "2. Kapan penggantian modul layar LCD/OLED tetap diperlukan?",
        paragraphs: [
          "Meskipun teknik jumper memiliki tingkat keberhasilan tinggi (di atas 90% pada seri iPhone 13 Pro/Max), ada beberapa kondisi di mana layar tetap harus diganti:",
          "Jika jalur fleksibel internal sudah terbakar parah (gosong) atau panel matriks OLED mengalami garis ungu/hijau permanen (pixel line damage) akibat benturan keras, maka penggantian modul layar baru menjadi opsi yang direkomendasikan.",
        ],
      },
      {
        heading: "Pengerjaan jumper layar iPhone di Flow Service Bandung",
        paragraphs: [
          "Di Flow Service Bandung, teknisi kami telah menangani puluhan kasus layar putih dan hijau pada seri iPhone 13 Pro dan 14 Pro dengan peralatan mikrosolder modern.",
          "Kami memberikan diagnosa gratis di tempat. Jika unit Anda memenuhi syarat untuk dilakukan teknik jumper jalur, pengerjaan dapat selesai dalam hitungan jam dan dilengkapi dengan masa garansi pengerjaan untuk ketenangan pikiran Anda.",
        ],
      },
      {
        heading: "Pertanyaan yang sering diajukan (FAQ)",
        paragraphs: [
          "Apakah layar yang sudah di-jumper awet untuk pemakaian lama? Berdasarkan pengalaman teknisi kami, layar yang diperbaiki dengan jumper jalur yang presisi dan diisolasi dengan lem UV berkualitas memiliki ketahanan yang sangat baik untuk pemakaian harian.",
          "Apakah data pribadi akan hilang saat pengerjaan layar green screen? Sama sekali tidak. Proses mikrosolder hanya berfokus pada modul fleksibel layar display tanpa menyentuh chip memori data iPhone Anda.",
        ],
      },
    ],
  },
  {
    slug: "layar-iphone-blank-hitam-tapi-nyala",
    title: "Layar iPhone Blank Hitam Tapi Masih Nyala? Ini Penyebab & Solusinya",
    description:
      "Layar iPhone tiba-tiba hitam padahal masih bunyi, bergetar, atau bisa ditelepon? Pelajari penyebab Black Screen of Death dan cara mengatasinya sebelum ganti LCD.",
    image: "/images/services/lcd.webp",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 5,
    relatedServiceSlug: "ganti-lcd-iphone",
    sources: [
      { title: "Apple Support: Jika layar iPhone atau iPad tidak berfungsi", url: "https://support.apple.com/id-id/102555" },
      { title: "Apple Support: Memulai ulang iPhone secara paksa (Force Restart)", url: "https://support.apple.com/id-id/guide/iphone/iph8903c3ee6/ios" },
      { title: "Apple Support: Jika iPhone tidak mau menyala atau layarnya mati", url: "https://support.apple.com/id-id/116940" },
    ],
    sections: [
      {
        heading: "Kenapa layar iPhone hitam padahal mesin masih hidup?",
        paragraphs: [
          "Kondisi ketika layar iPhone mati atau blank hitam total, tetapi ponsel masih mengeluarkan suara notifikasi, bergetar saat digeser switch hening, atau bahkan berdering saat ditelepon, sering disebut sebagai Black Screen of Death.",
          "Kabar baiknya: kondisi ini membuktikan bahwa mesin utama (logic board) iPhone Anda masih hidup. Anda tidak perlu langsung menyimpulkan bahwa ponsel mati total atau data di dalamnya hilang.",
          "Masalah ini umumnya dipicu oleh salah satu dari dua faktor: kegagalan sistem perangkat lunak (software crash yang membekukan tampilan grafik) atau kerusakan perangkat keras (konektor fleksibel layar longgar, backlight mati, panel OLED rusak, atau IC Display bermasalah). Sebelum membawanya ke meja servis, ada beberapa langkah pemeriksaan mandiri yang aman untuk dicoba.",
        ],
      },
      {
        heading: "1. Lakukan Force Restart (Restart Paksa) sesuai tipe iPhone",
        paragraphs: [
          "Langkah pertama dan paling efektif jika penyebabnya adalah crash pada iOS atau driver grafis adalah melakukan restart paksa. Berbeda dari restart biasa, kombinasi tombol ini memutus daya ke prosesor sesaat untuk memulai ulang perangkat tanpa menghapus data Anda.",
        ],
        list: [
          "iPhone 8, X, XR, XS, 11, 12, 13, 14, 15, 16 dan seri lebih baru: Tekan dan lepaskan tombol Volume Atas dengan cepat. Segera tekan dan lepaskan tombol Volume Bawah dengan cepat. Lalu tekan dan tahan tombol Samping (Power) selama 10–15 detik hingga logo Apple muncul di layar, baru lepaskan.",
          "iPhone 7 dan 7 Plus: Tekan dan tahan tombol Samping (Power) bersamaan dengan tombol Volume Bawah secara terus-menerus sampai logo Apple muncul di layar.",
          "iPhone 6s, 6s Plus, dan iPhone SE (Generasi ke-1): Tekan dan tahan tombol Home bersamaan dengan tombol Atas (atau Samping) hingga logo Apple muncul.",
        ],
      },
      {
        heading: "2. Sambungkan ke charger original minimal 30 menit",
        paragraphs: [
          "Terkadang daya baterai berada pada tingkat kritis atau terjadi lonjakan voltase yang membuat layar tidak mampu menampilkan gambar, meskipun sistem getar haptic masih bereaksi samar saat switch hening digerakkan.",
          "Gunakan adaptor charger dan kabel original atau bersertifikasi MFi yang dipastikan berfungsi normal. Biarkan iPhone mengisi daya tanpa diganggu selama 20 hingga 30 menit. Setelah itu, ulangi langkah Force Restart di atas saat iPhone masih terhubung ke kabel charger.",
        ],
      },
      {
        heading: "3. Lakukan Flashlight Test (Tes Sorot Senter)",
        paragraphs: [
          "Ini adalah trik diagnosis cepat yang sering digunakan teknisi untuk membedakan antara kerusakan modul gambar dan kerusakan lampu latar (backlight).",
          "Bawa iPhone ke ruangan yang agak redup atau gelap. Nyalakan lampu senter (flashlight) dari ponsel lain, lalu sorotkan cahaya dari jarak dekat dengan sudut miring langsung ke permukaan layar iPhone yang blank.",
          "Jika Anda dapat melihat bayangan samar ikon jam, menu lock screen, atau siluet logo Apple di balik kegelapan layar, artinya mesin dan panel gambar LCD sebenarnya masih bekerja normal, tetapi lampu latar atau jalur backlight-nya yang terputus.",
        ],
      },
      {
        heading: "4. Hubungkan ke komputer (Finder di Mac atau iTunes di Windows)",
        paragraphs: [
          "Sambungkan iPhone ke komputer atau laptop menggunakan kabel data. Buka aplikasi Finder (pada macOS terbaru) atau iTunes (pada Windows/macOS versi lama).",
          "Jika komputer mengeluarkan nada deteksi perangkat baru dan iPhone terbaca di layar komputer, ini adalah konfirmasi pasti bahwa mesin iPhone Anda sehat dan sistem operasinya aktif. Bila diminta konfirmasi keamanan, ini pertanda jelas bahwa masalah 100% berada pada sektor layar display atau fleksibelnya.",
          "Jika Anda memiliki backup data, Anda juga dapat mencoba opsi Update (Pembaruan) melalui Finder/iTunes untuk memperbarui sistem tanpa menghapus data pribadi.",
        ],
      },
      {
        heading: "5. Kenali tanda kerusakan hardware: kapan harus ke tempat servis?",
        paragraphs: [
          "Jika semua langkah mandiri di atas tidak membuahkan hasil (layar tetap hitam pekat meski ponsel terus berdering atau bergetar), masalah hampir dipastikan berada pada perangkat keras. Hal ini kerap terjadi setelah:",
        ],
        list: [
          "iPhone terjatuh atau terbentur (bisa membuat soket fleksibel LCD di dalam mesin terlepas atau pin konektor retak, meskipun kaca luar tidak pecah).",
          "iPhone terkena air atau cairan (cairan merembes ke konektor display atau area backlight sehingga terjadi korsleting jalur lampu).",
          "Panel OLED/LCD rusak internal (matriks warna padam total).",
          "Kerusakan komponen IC Display atau jalur kelistrikan layar pada motherboard (logic board).",
        ],
      },
      {
        heading: "Pemeriksaan di workshop Flow Service Bandung",
        paragraphs: [
          "Jika Anda berada di Bandung dan sekitarnya, tidak perlu buru-buru membeli layar LCD baru sebelum dicek penyebab aslinya. Banyak kasus di mana layar blank hitam hanya disebabkan oleh soket fleksibel yang terlepas akibat benturan ringan.",
          "Di workshop Flow Service Bandung, teknisi kami menyediakan diagnosa gratis di tempat. Kami membuka perangkat di depan Anda untuk memastikan apakah cukup dengan pemasangan ulang soket fleksibel, penanganan jalur, atau memang membutuhkan pergantian unit LCD baru. Seluruh estimasi biaya dikonfirmasi terlebih dahulu sebelum pengerjaan dimulai.",
        ],
      },
      {
        heading: "Pertanyaan yang sering diajukan (FAQ)",
        paragraphs: [
          "Apakah data saya akan hilang jika ganti layar LCD? Tidak. Penggantian modul layar LCD atau penanganan soket display tidak memengaruhi chip penyimpanan memori (NAND Flash) iPhone Anda, sehingga semua foto, chat WhatsApp, dan aplikasi tetap aman.",
          "Berapa lama proses pengecekan layar blank hitam? Pengecekan awal dengan tes tegangan dan modul layar pengganti umumnya hanya membutuhkan waktu 15 hingga 30 menit dan bisa ditunggu langsung di workshop kami.",
          "Apakah layar blank hitam pasti harus ganti LCD satu set? Belum tentu. Jika hasil tes senter menunjukkan siluet gambar atau masalah ada pada soket fleksibel yang longgar, perbaikan bisa jauh lebih terjangkau daripada mengganti unit layar utuh.",
        ],
      },
    ],
  },
  {
    slug: "iphone-tidak-bisa-dicas-penyebab-dan-solusi",
    title: "Kenapa iPhone Tidak Bisa Dicas? Cek Penyebab & Cara Mengatasinya",
    description:
      "iPhone tidak mau mengisi daya, dicas putus-putus, atau persentase malah berkurang? Ikuti cara pembersihan port yang benar dan diagnosa penyebabnya.",
    image: "/images/services/charging.webp",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 4,
    relatedServiceSlug: "service-port-charger-iphone",
    sources: [
      { title: "Apple Support: Jika iPhone atau iPod touch tidak dapat mengisi daya", url: "https://support.apple.com/id-id/108967" },
      { title: "Apple Support: Membersihkan iPhone", url: "https://support.apple.com/id-id/108765" },
    ],
    sections: [
      {
        heading: "Gejala umum masalah pengisian daya iPhone",
        paragraphs: [
          "Masalah charging pada iPhone tidak selalu berarti baterai atau port charger langsung rusak total. Gejala yang dialami pengguna biasanya bervariasi: kabel harus ditekuk atau ditekan pada sudut tertentu, proses charging putus-nyambung berulang kali, muncul notifikasi 'Aksesori Mungkin Tidak Didukung', atau baterai justru semakin berkurang padahal indikator petir menyala.",
          "Sebelum memutuskan untuk mengganti suku cadang, memahami sumber masalahnya dapat menghemat biaya perbaikan yang tidak perlu.",
        ],
      },
      {
        heading: "1. Bersihkan kotoran dan serat kain di port charger",
        paragraphs: [
          "Penyebab nomor satu dari konektor charger yang longgar atau tidak terdeteksi adalah tumpukan serat kain (lint) dari saku celana atau debu halus yang memadat di bagian dasar port.",
          "Ketika debu memadat, kepala kabel Lightning atau USB-C tidak bisa masuk hingga mengunci sempurna ('klik'), sehingga pin tembaga tidak saling menyentuh.",
        ],
        list: [
          "Gunakan penerangan senter terang untuk mengintip ke dalam lubang port charger.",
          "Gunakan alat non-logam yang aman, seperti tusuk gigi kayu halus atau sikat antistatis kering. Korek secara perlahan di sepanjang dinding dan dasar port.",
          "PENTING: Jangan gunakan jarum pentul, peniti, atau benda logam runcing karena dapat menggores pin konektor kuningan dan memicu korsleting listrik.",
        ],
      },
      {
        heading: "2. Cek kabel, adaptor, dan stopkontak",
        paragraphs: [
          "Kabel charger iPhone rentan mengalami putus serabut tembaga di dekat leher konektor. Kerusakan internal ini sering kali tidak tampak dari luar.",
          "Coba gunakan kabel dan adaptor charger lain yang dipastikan berfungsi normal dan memiliki sertifikasi resmi Apple (MFi). Coba juga stopkontak dinding lain untuk memastikan arus listrik stabil.",
        ],
      },
      {
        heading: "3. Periksa peringatan suhu dan Pengisian Daya Ditangguhkan",
        paragraphs: [
          "Pada pembaruan iOS terkini, Apple menyematkan fitur proteksi termal. Jika iPhone terlalu panas saat digunakan sambil dicas, sistem akan memunculkan status 'Pengisian Daya Ditangguhkan: Pengisian daya akan dilanjutkan jika suhu iPhone kembali normal'.",
          "Jika ini terjadi, lepaskan casing pelindung, hentikan bermain game atau merekam video, dan letakkan iPhone di tempat yang sejuk tanpa paparan sinar matahari langsung.",
        ],
      },
      {
        heading: "4. Bedakan kerusakan port fisik vs kerusakan IC Charger (Tristar/Hydra)",
        paragraphs: [
          "Jika port sudah bersih dan kabel dalam kondisi prima namun iPhone tetap tidak mau dicas, ada dua kemungkinan kerusakan hardware:",
          "Pertama, fleksibel port charger aus atau pin konektor patah/korosi karena cairan. Kedua, kerusakan pada chip pengatur daya di logic board (dikenal sebagai IC Tristar/Hydra atau U2 IC). Kerusakan IC Charger umumnya terjadi akibat pemakaian charger mobil berkualitas rendah atau charger tiruan tanpa penstabil tegangan.",
        ],
      },
      {
        heading: "Pemeriksaan gratis di Flow Service Bandung",
        paragraphs: [
          "Di workshop Flow Service Bandung, teknisi kami selalu memulai dengan pembersihan port mendalam menggunakan alat khusus dan pengujian ampere meter. Jika kendalanya hanya tumpukan kotoran, kami bantu bersihkan tanpa harus mengganti part apa pun.",
          "Bila memang diperlukan penggantian fleksibel port charger atau penanganan IC mesin, kami jelaskan rincian biaya terlebih dahulu secara transparan dan pengerjaan port charger umumnya dapat ditunggu.",
        ],
      },
      {
        heading: "Pertanyaan yang sering diajukan (FAQ)",
        paragraphs: [
          "Apakah pembersihan port charger berisiko merusak iPhone? Jika dilakukan oleh teknisi dengan alat khusus non-konduktif, proses ini sepenuhnya aman dan mengembalikan respons charging seperti semula.",
          "Berapa lama perbaikan port charger iPhone? Penggantian modul fleksibel port charger original umumnya memakan waktu 30 hingga 60 menit.",
          "Kenapa iPhone dicas malah persentasenya berkurang? Gejala ini biasanya menandakan 'fake charging', di mana sistem mendeteksi kabel tetapi arus daya tidak diteruskan ke baterai, sering kali berkaitan dengan IC charger atau kesehatan baterai yang sudah kritis.",
        ],
      },
    ],
  },
  {
    slug: "iphone-stuck-logo-apple-cara-mengatasi",
    title: "iPhone Stuck Logo Apple (Bootloop)? Cara Mengatasi Tanpa Kehilangan Data",
    description:
      "iPhone mentok di logo Apple atau restart terus-menerus? Pelajari penyebab mulai dari memori penuh hingga update gagal, dan cara memperbaikinya.",
    image: "/images/services/matot.webp",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 5,
    relatedServiceSlug: "service-iphone-mati-total",
    sources: [
      { title: "Apple Support: Jika iPhone menyala tetapi terhenti saat proses mulai", url: "https://support.apple.com/id-id/118430" },
      { title: "Apple Support: Mengembalikan pengaturan pabrik pada iPhone", url: "https://support.apple.com/id-id/118107" },
    ],
    sections: [
      {
        heading: "Kenapa iPhone tiba-tiba stuck di logo Apple?",
        paragraphs: [
          "Situasi di mana iPhone menyala menampilkan logo Apple, kemudian mati kembali, atau layar tetap diam pada logo Apple tanpa pernah masuk ke menu utama, dikenal dengan istilah bootloop atau stuck logo Apple.",
          "Kondisi ini umumnya disebabkan oleh kegagalan sistem saat memuat berkas sistem inti (kernel). Kabar baiknya, sebagian besar kasus bootloop yang dipicu masalah perangkat lunak masih bisa diselamatkan tanpa perlu menghapus foto atau riwayat chat penting Anda.",
        ],
      },
      {
        heading: "1. Lakukan Force Restart sesuai seri iPhone",
        paragraphs: [
          "Sering kali bootloop hanya terjadi karena sistem operasi mengalami freeze saat memproses tugas latar belakang. Mulailah dengan restart paksa:",
        ],
        list: [
          "iPhone 8 hingga iPhone 16 series: Tekan dan lepaskan cepat tombol Volume Atas, tekan dan lepaskan cepat tombol Volume Bawah, lalu tahan tombol Samping (Power) hingga layar mati dan logo Apple muncul kembali.",
          "iPhone 7 dan 7 Plus: Tahan tombol Samping bersamaan dengan tombol Volume Bawah hingga muncul logo Apple.",
          "iPhone 6s ke bawah: Tahan tombol Home bersamaan dengan tombol Power/Samping hingga layar reboot.",
        ],
      },
      {
        heading: "2. Masuk ke Recovery Mode dan pilih opsi Perbarui (Update)",
        paragraphs: [
          "Jika restart paksa tidak menyelesaikan masalah, sambungkan iPhone ke Mac (lewat Finder) atau PC Windows (lewat iTunes atau aplikasi Apple Devices).",
          "Posisikan iPhone ke Recovery Mode (ikuti kombinasi tombol Force Restart di atas, tetapi tetap tahan tombol Power meskipun logo Apple sudah muncul, sampai di layar tampil ikon kabel dan komputer).",
          "Pada jendela komputer, akan muncul pilihan antara 'Perbarui' (Update) atau 'Pulihkan' (Restore). Sangat disarankan memilih UPDATE terlebih dahulu. Opsi ini akan menginstal ulang iOS versi stabil tanpa menghapus berkas data Anda.",
        ],
      },
      {
        heading: "3. Waspada bootloop akibat memori penyimpanan penuh (Storage Full)",
        paragraphs: [
          "Salah satu penyebab bootloop paling umum di Indonesia adalah memori internal (NAND Storage) yang terisi hingga 100% (0 bytes free space).",
          "Ketika iPhone kehabisan ruang untuk membuat file cache saat proses booting, iOS akan crash dan terjebak di logo Apple (dikenal di kalangan teknisi sebagai error 1110). Jika Anda memaksakan update biasa, sistem bisa menolak karena tidak ada sisa ruang untuk mengunduh berkas firmware.",
        ],
      },
      {
        heading: "4. Kapan stuck logo Apple disebabkan oleh hardware?",
        paragraphs: [
          "Jika proses instal ulang selalu gagal dengan kode error tertentu (misalnya error 9, 4013, atau 4014), masalahnya berpindah ke hardware:",
        ],
        list: [
          "Sensor earpiece/proximity atau Face ID terkena kelembapan cairan sehingga mengganggu jalur komunikasi data I2C ke prosesor.",
          "Baterai sudah rusak total sehingga tidak mampu menyuplai arus awal saat booting.",
          "Kerusakan pada chip memori NAND atau chip baseband di motherboard (logic board).",
        ],
      },
      {
        heading: "Penanganan iPhone bootloop di workshop Flow Service Bandung",
        paragraphs: [
          "Jika Anda khawatir kehilangan data atau iPhone tetap tidak bisa menyala setelah dicoba di rumah, teknisi Flow Service Bandung siap membantu.",
          "Prioritas kami adalah menyelamatkan data pengguna (data-first recovery). Kami memeriksa kondisi jalur mesin, menguji pelepasan sensor earpiece sementara, dan mendiagnosa sumber bootloop dengan software diagnosa profesional secara transparan di hadapan Anda.",
        ],
      },
      {
        heading: "Pertanyaan yang sering diajukan (FAQ)",
        paragraphs: [
          "Apakah data di iPhone saya pasti hilang jika bootloop? Belum tentu. Jika masalahnya adalah crash sistem iOS biasa, metode Recovery Mode Update mempertahankan seluruh data Anda.",
          "Berapa lama proses pengerjaan perbaikan bootloop? Untuk penanganan software biasanya memakan waktu 30 hingga 60 menit. Jika berkaitan dengan jalur mesin (hardware), teknisi kami akan mengabari estimasi waktu setelah diagnosa awal.",
        ],
      },
    ],
  },
  {
    slug: "kamera-belakang-iphone-bergetar-dan-bunyi",
    title: "Kamera Belakang iPhone Bergetar & Bunyi Kresek? Ini Penyebab & Solusinya",
    description:
      "Kamera iPhone bergetar hebat, gambar bergelombang, atau mengeluarkan suara dengung dan kresek? Pahami penyebab kerusakan OIS dan solusinya.",
    image: "/images/services/camera.webp",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 4,
    relatedServiceSlug: "service-kamera-iphone",
    sources: [
      { title: "Apple Support: Paparan getaran dari sepeda motor dapat memengaruhi kamera iPhone", url: "https://support.apple.com/id-id/102175" },
      { title: "Apple Support: Jika kamera atau lampu kilat di iPhone tidak berfungsi", url: "https://support.apple.com/id-id/102523" },
    ],
    sections: [
      {
        heading: "Gejala kamera iPhone bergetar dan tidak fokus",
        paragraphs: [
          "Pernahkah Anda membuka aplikasi kamera iPhone dan melihat tampilan layar bergelombang hebat seperti gempa bumi, disertai suara getaran mekanik atau desis kresek halus di dekat modul kamera belakang? Kamera juga biasanya kehilangan kemampuan mengunci fokus objek dekat.",
          "Gejala ini merupakan indikasi khas bahwa mekanisme penstabil gambar optik (Optical Image Stabilization / OIS) atau sistem autofokus pada lensa kamera belakang mengalami gangguan mekanis.",
        ],
      },
      {
        heading: "Penyebab utama: Kerusakan sensor OIS akibat getaran motor dan benturan",
        paragraphs: [
          "Apple secara resmi merilis panduan bahwa getaran berfrekuensi tinggi dan bervolume besar—terutama dari mesin sepeda motor berkekuatan besar atau motor matik yang dipasangi holder ponsel langsung pada stang tanpa peredam khusus—dapat merusak pegas gyro mikro dan magnet suspensi pada modul kamera.",
          "Selain getaran motor, benturan keras saat iPhone terjatuh juga dapat membuat posisi lensa meleset dari sumbu magnetik OIS, sehingga kumparan motor terus berusaha mengoreksi posisi secara liar dan menimbulkan bunyi getar.",
        ],
      },
      {
        heading: "1. Uji mandiri: Bedakan kerusakan lensa utama vs lensa ultrawide",
        paragraphs: [
          "Untuk memastikan apakah kerusakan terjadi pada hardware OIS atau sekadar bug software, lakukan pengujian sederhana berikut:",
        ],
        list: [
          "Buka aplikasi Kamera bawaan iPhone pada mode Foto (1x). Perhatikan apakah gambar bergetar dan terdengar bunyi dengung.",
          "Ganti lensa ke mode Ultrawide (0.5x). Pada sebagian besar model, lensa 0.5x tidak memiliki motor gyro OIS mekanik. Jika pada 0.5x tampilan gambar tenang dan stabil tetapi pada 1x bergetar hebat, ini adalah bukti pasti kerusakan mekanis pada modul lensa utama.",
          "Coba restart iPhone dan bersihkan kaca luar lensa untuk memastikan tidak ada kotoran yang menutupi sensor LiDAR atau sensor fokus.",
        ],
      },
      {
        heading: "2. Bolehkah memakai trik magnet untuk menghentikan getaran?",
        paragraphs: [
          "Di internet banyak beredar tutorial menempelkan potongan magnet kecil di samping lensa kamera belakang iPhone. Meskipun medan magnet eksternal dapat memaksa pegas OIS terkunci diam dan menghentikan getaran seketika, trik ini memiliki dampak buruk.",
          "Menempelkan magnet akan mematikan fitur autofokus secara permanen, membuat foto jarak jauh buram, dan dapat mengacaukan sensor kompas serta magnetik internal perangkat Anda. Oleh karena itu, trik magnet tidak disarankan untuk pemakaian jangka panjang.",
        ],
      },
      {
        heading: "3. Langkah penanganan dan perbaikan di Flow Service Bandung",
        paragraphs: [
          "Solusi paling aman dan tuntas untuk mengatasi kamera iPhone yang bergetar adalah melakukan penggantian modul kamera belakang yang sesuai dengan tipe perangkat Anda.",
          "Di Flow Service Bandung, teknisi kami menyediakan suku cadang modul kamera berkualitas tinggi. Kami melakukan pengecekan fungsi autofokus, zoom optik, flash, dan hasil foto setelah pemasangan untuk memastikan performa fotografi kembali sempurna seperti semula.",
        ],
      },
      {
        heading: "Tips mencegah kamera iPhone rusak kembali",
        paragraphs: [
          "Agar kamera iPhone baru Anda awet dan tidak mengalami masalah serupa:",
        ],
        list: [
          "Hindari memasang iPhone langsung pada stang motor tanpa holder khusus yang memiliki vibration dampener (peredam getaran).",
          "Simpan iPhone di dalam kantong jaket atau tas selempang saat sedang berkendara motor.",
          "Gunakan casing pelindung yang memiliki bibir pelindung (raised lip) di sekeliling bingkai modul kamera untuk meredam benturan langsung.",
        ],
      },
      {
        heading: "Pertanyaan yang sering diajukan (FAQ)",
        paragraphs: [
          "Berapa lama proses ganti kamera iPhone? Pengerjaan penggantian modul kamera umumnya berlangsung cepat, sekitar 30 sampai 45 menit dan bisa ditunggu langsung di workshop kami.",
          "Apakah ganti kamera akan memunculkan pesan 'Komponen Tidak Dikenal'? Pada model iPhone tertentu (iPhone 12 ke atas), sistem iOS dapat menampilkan pemberitahuan riwayat komponen pada menu Pengaturan > Umum > Mengenai. Namun seluruh fungsi pengambilan foto, video 4K, dan Cinematic Mode tetap bekerja secara optimal.",
        ],
      },
    ],
  },
  {
    slug: "baterai-iphone-boros-setelah-update-ios-27",
    title: "Baterai iPhone Boros Setelah Update iOS 27? Cek Sebelum Ganti",
    description:
      "Baterai iPhone boros atau cepat panas setelah update iOS 27? Bedakan efek sementara update dan masalah baterai, lalu cek langkah penanganannya.",
    image: "/images/blog/baterai.webp",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 4,
    relatedServiceSlug: "ganti-baterai-iphone",
    sources: [
      { title: "Apple: rilis iOS 27 pada 14 September 2026", url: "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/" },
      { title: "Apple: dampak pembaruan terhadap baterai dan suhu", url: "https://support.apple.com/en-us/125039" },
      { title: "Apple: jika daya baterai iPhone habis terlalu cepat", url: "https://support.apple.com/id-id/120745" },
      { title: "Apple: jika iPhone menjadi terlalu panas atau dingin", url: "https://support.apple.com/id-id/118431" },
    ],
    sections: [
      {
        heading: "Apakah baterai boros setelah update iOS 27 berarti rusak?",
        paragraphs: [
          "Belum tentu. Jika baterai iPhone boros setelah update iOS 27, lihat kapan keluhan mulai muncul dan apakah terus berulang. Mengalami penurunan daya setelah pembaruan saja belum cukup untuk menentukan bahwa baterai perlu diganti.",
          "Apple merilis iOS 27 pada 14 September 2026. Menurut panduan pembaruan Apple, proses penyiapan masih bisa berjalan setelah instalasi selesai, termasuk pengindeksan data, pengunduhan aset, dan pembaruan aplikasi. Aktivitas ini dapat memengaruhi daya tahan baterai serta suhu untuk sementara.",
          "Panduan ini membantu pemeriksaan awal. Penyebab pada satu perangkat tetap perlu dinilai dari pola penggunaan dan kondisinya, bukan dari versi iOS saja.",
        ],
      },
      {
        heading: "1. Periksa aktivitas update di menu Baterai",
        paragraphs: [
          "Buka Pengaturan > Baterai. Jika muncul informasi Pembaruan iOS Sedang Berlangsung, ada pekerjaan update di latar belakang. Apple menyarankan menunggu beberapa hari lalu mengevaluasi kembali daya tahan baterai.",
          "Catat tanggal update, kapan mulai terasa boros, dan aktivitas saat keluhan muncul. Catatan singkat ini akan lebih berguna saat konsultasi daripada hanya menyebut baterai cepat habis.",
        ],
      },
      {
        heading: "2. Cari aplikasi dan koneksi yang memakai banyak daya",
        paragraphs: [
          "Di Pengaturan > Baterai, periksa aplikasi dengan konsumsi terbesar dan aktivitas latar belakangnya. Sinyal lemah juga dapat meningkatkan pemakaian daya. Gunakan Wi-Fi atau koneksi dengan sinyal kuat bila tersedia.",
          "Bandingkan hari dengan kegiatan serupa. Hari yang dipakai untuk navigasi, merekam video, atau bermain game kurang tepat dibandingkan dengan hari yang hanya dipakai berkirim pesan. Ambil tangkapan layar penggunaan baterai agar perubahan lebih mudah dibandingkan.",
        ],
      },
      {
        heading: "3. Gunakan Mode Daya Rendah saat membutuhkan baterai lebih lama",
        paragraphs: [
          "Aktifkan Mode Daya Rendah lewat menu Baterai atau Pusat Kontrol. Fitur ini mengurangi sebagian aktivitas untuk menghemat daya. Ikuti juga saran baterai yang muncul, seperti mengurangi kecerahan layar.",
          "Mode hemat daya bisa membantu menjalani hari, tetapi hasilnya tidak membuktikan komponen baterai sehat atau rusak. Evaluasi kembali keluhan dalam penggunaan normal.",
        ],
      },
      {
        heading: "4. iPhone panas setelah update: kapan harus berhenti dipakai?",
        paragraphs: [
          "Apple menjelaskan bahwa iPhone dapat terasa hangat setelah pembaruan besar. Kehangatan saat proses berlangsung berbeda dari peringatan suhu pada layar.",
          "Jika muncul peringatan suhu, matikan iPhone, pindahkan ke tempat lebih sejuk yang jauh dari sinar matahari langsung, lalu tunggu suhunya turun. Panas juga dapat membuat pengisian daya melambat atau berhenti sementara.",
          "Apabila panas terus berulang saat penggunaan ringan, catat aplikasi yang sedang dibuka dan apakah perangkat sedang dicas. Jangan langsung menyimpulkan penyebabnya adalah iOS 27 atau satu komponen tertentu.",
        ],
      },
      {
        heading: "5. Cek Battery Health sebelum memutuskan ganti baterai",
        paragraphs: [
          "Periksa Kesehatan Baterai di menu Baterai; pada model lama namanya Kesehatan & Pengisian Daya Baterai. Jika muncul keterangan Servis, Apple menyarankan mempertimbangkan penggantian.",
          "Sampaikan hasil pemeriksaan ini bersama pola keluhan. Persentase kesehatan baterai dan pengalaman pemakaian memberi konteks berbeda, sehingga keputusan servis sebaiknya mempertimbangkan keduanya.",
        ],
      },
      {
        heading: "Masih boros setelah beberapa hari? Siapkan ini untuk pemeriksaan",
        paragraphs: [
          "Jika keluhan tidak membaik, pemeriksaan dapat membantu menentukan langkah berikutnya. Hindari mencoba banyak perubahan sekaligus karena hasilnya sulit dibandingkan.",
          "Untuk konsultasi di Flow Service Bandung, siapkan informasi berikut agar keluhan lebih mudah ditelusuri. Penggantian baterai sebaiknya diputuskan setelah kondisi perangkat diperiksa.",
        ],
        list: [
          "Model iPhone, versi iOS, dan tanggal pembaruan.",
          "Tangkapan layar penggunaan baterai serta Kesehatan Baterai.",
          "Contoh kejadian: daya turun saat layar mati, saat aplikasi tertentu dibuka, atau saat dicas.",
          "Riwayat mati mendadak, jatuh, terkena cairan, atau penggantian komponen sebelumnya.",
        ],
      },
      {
        heading: "Pertanyaan umum tentang baterai setelah update iOS 27",
        paragraphs: [
          "Apakah semua iPhone pasti boros setelah update? Tidak. Panduan Apple menjelaskan kemungkinan dampak sementara; kondisi tersebut bukan bukti bahwa setiap perangkat mengalami masalah yang sama.",
          "Apakah harus langsung ganti baterai? Tidak ada dasar untuk memutuskan hanya dari keluhan setelah update. Periksa aktivitas sistem, pola pemakaian, dan kesehatan baterai terlebih dahulu.",
          "Apakah reset pabrik perlu jadi langkah pertama? Mulailah dengan pemeriksaan yang tidak menghapus data di atas. Jika kemudian diperlukan tindakan yang menghapus data, siapkan cadangan dan pahami langkahnya sebelum melanjutkan.",
        ],
      },
    ],
  },
  {
    slug: "iphone-kena-air-langkah-pertama",
    title: "iPhone Kena Air: Langkah Pertama yang Benar Sebelum Dibawa Service",
    description:
      "Panduan pertolongan pertama iPhone kena air atau hujan: apa yang harus dilakukan, apa yang harus dihindari, dan kapan perlu segera ke tempat service.",
    image: "/images/blog/kena-air.webp",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    readingMinutes: 4,
    relatedServiceSlug: "service-iphone-kena-air",
    sections: [
      {
        heading: "Lakukan ini segera",
        paragraphs: [
          "Kecepatan menentukan. Cairan yang dibiarkan di dalam iPhone bisa memicu korosi pada jalur dan konektor, dan kerusakannya berkembang dari waktu ke waktu.",
        ],
        list: [
          "Lepas iPhone dari charger dan kabel bila sedang terhubung.",
          "Lepas casing dan aksesori lain.",
          "Keringkan bagian luar dengan kain lembut yang bersih.",
          "Ketuk pelan iPhone dengan port charger menghadap ke bawah agar cairan keluar.",
          "Taruh di tempat kering dengan sirkulasi udara baik.",
        ],
      },
      {
        heading: "Hindari ini",
        paragraphs: [
          "Beberapa kebiasaan yang beredar justru memperburuk keadaan. Apple sendiri tidak menyarankan memasukkan iPhone ke dalam beras, karena butiran kecil dapat masuk dan merusak port.",
        ],
        list: [
          "Jangan mengisi daya iPhone yang masih basah.",
          "Jangan memakai hair dryer, udara panas, atau udara bertekanan.",
          "Jangan memasukkan kapas, tisu, atau benda apa pun ke port.",
          "Jangan menyalakan dan mematikan berulang kali untuk mengetes.",
        ],
      },
      {
        heading: "Bukankah iPhone tahan air?",
        paragraphs: [
          "iPhone modern memang tahan cipratan, air, dan debu, tetapi bukan kedap air permanen. Ketahanan ini bisa menurun akibat pemakaian sehari-hari, dan kerusakan karena cairan umumnya tidak ditanggung garansi resmi.",
        ],
      },
      {
        heading: "Kapan harus segera ke tempat service",
        paragraphs: [
          "Jika iPhone mati, layar bergaris, speaker atau mikrofon bermasalah, atau ada peringatan cairan di port charger, segera periksakan. Semakin cepat dicek, semakin kecil peluang korosi menyebar. Diagnosa awal di tempat kami gratis.",
        ],
      },
    ],
  },
  {
    slug: "kapan-baterai-iphone-perlu-diganti",
    title: "Kapan Baterai iPhone Perlu Diganti? Cek Battery Health dan Tandanya",
    description:
      "Cara mengecek Battery Health iPhone, batas 80% menurut Apple, dan tanda baterai yang sudah waktunya diganti, termasuk baterai kembung.",
    image: "/images/blog/baterai.webp",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    readingMinutes: 4,
    relatedServiceSlug: "ganti-baterai-iphone",
    sections: [
      {
        heading: "Cara cek Battery Health",
        paragraphs: [
          "Buka Pengaturan, pilih Baterai, lalu Kesehatan Baterai dan Pengisian Daya (Battery Health & Charging). Di sana terlihat Kapasitas Maksimum, yaitu perbandingan kapasitas baterai saat ini dengan saat masih baru.",
        ],
      },
      {
        heading: "Batas 80% menurut Apple",
        paragraphs: [
          "Apple menyebut baterai iPhone dirancang mempertahankan hingga 80% kapasitas awal setelah 500 siklus pengisian penuh. Untuk iPhone 15 dan yang lebih baru, angkanya 1.000 siklus. Di bawah batas itu, baterai wajar terasa lebih boros.",
        ],
      },
      {
        heading: "Tanda baterai perlu diganti",
        paragraphs: [
          "Angka Battery Health hanya satu petunjuk. Perhatikan juga gejala yang kamu rasakan sehari-hari.",
        ],
        list: [
          "Baterai turun cepat, bahkan saat iPhone jarang dipakai.",
          "iPhone mati sendiri saat persentase masih tersisa.",
          "Persentase loncat dari angka tinggi ke rendah.",
          "iPhone terasa panas berlebihan saat dicas atau dipakai ringan.",
          "Layar terangkat atau bodi menggembung.",
        ],
      },
      {
        heading: "Jika baterai kembung",
        paragraphs: [
          "Baterai kembung sebaiknya tidak lagi dipakai atau diisi daya. Kembung bisa menekan layar dan komponen di sekitarnya, jadi menunda hanya menambah biaya. Segera periksakan.",
        ],
      },
    ],
  },
  {
    slug: "layar-iphone-pecah-segera-diganti",
    title: "Layar iPhone Pecah: Boleh Ditunda atau Harus Segera Diganti?",
    description:
      "Retak halus atau pecah besar, ini pertimbangan sebelum ganti LCD iPhone: risiko jika ditunda, pilihan kualitas layar, dan hal yang perlu disiapkan.",
    image: "/images/blog/layar-pecah.webp",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    readingMinutes: 3,
    relatedServiceSlug: "ganti-lcd-iphone",
    sections: [
      {
        heading: "Risiko menunda",
        paragraphs: [
          "Retak halus sering terlihat sepele, tetapi kerusakannya cenderung menyebar. Ada tiga risiko yang umum.",
        ],
        list: [
          "Retakan melebar sehingga touchscreen mulai tidak responsif.",
          "Serpihan kaca melukai jari.",
          "Debu dan cairan lebih mudah masuk ke bagian dalam.",
        ],
      },
      {
        heading: "Pilihan kualitas layar",
        paragraphs: [
          "Layar pengganti tersedia dalam beberapa tingkat kualitas dengan harga berbeda. Perbedaannya ada di kecerahan, akurasi warna, dan dukungan fitur seperti True Tone. Minta penjelasan pilihan dan selisih harganya sebelum setuju.",
        ],
      },
      {
        heading: "Sebelum datang",
        paragraphs: [
          "Cadangkan iPhone lebih dulu lewat iCloud atau komputer jika layar masih bisa dipakai. Setelah servis, pasang pelindung layar dan casing agar layar baru lebih awet.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
