import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
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
