import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    slug: "ganti-lcd-iphone",
    title: "Ganti LCD iPhone Bandung",
    shortTitle: "Ganti LCD",
    tagline: "Layar pecah, bergaris, atau touch tidak responsif.",
    description:
      "Layanan ganti LCD iPhone di Bandung untuk layar pecah, bergaris, bercak, blank, dan touchscreen yang tidak responsif. Diagnosa gratis dan harga dikonfirmasi sebelum dikerjakan.",
    icon: "screen",
    image: "/images/services/lcd.webp",
    priceKey: "lcd",
    symptoms: [
      "Layar retak atau pecah",
      "Muncul garis atau bercak warna",
      "Touchscreen tidak responsif atau bergerak sendiri",
      "Layar blank padahal iPhone menyala",
    ],
    duration: "Umumnya selesai dalam hitungan jam, tergantung ketersediaan part.",
    keywords: ["ganti lcd iphone bandung", "service lcd iphone bandung", "layar iphone pecah bandung"],
    faqs: [
      {
        question: "Apakah data hilang saat ganti LCD iPhone?",
        answer:
          "Ganti LCD tidak menghapus data di iPhone. Meski begitu, sebaiknya cadangkan iPhone lebih dulu lewat iCloud atau komputer sebagai langkah aman.",
      },
      {
        question: "Apa bedanya kualitas LCD iPhone?",
        answer:
          "Ada beberapa tingkat kualitas layar, mulai dari layar original bekas pakai hingga layar pengganti. Perbedaannya ada di kecerahan, warna, dan fitur seperti True Tone. Kami jelaskan pilihan dan selisih harganya sebelum pengerjaan.",
      },
      {
        question: "Layar retak tapi masih normal, perlu langsung diganti?",
        answer:
          "Retak halus sering makin parah seiring pemakaian, dan serpihan kaca bisa melukai jari. Debu dan air juga lebih mudah masuk. Sebaiknya diperiksa sebelum kerusakan menyebar ke touchscreen.",
      },
    ],
  },
  {
    slug: "ganti-baterai-iphone",
    title: "Ganti Baterai iPhone Bandung",
    shortTitle: "Ganti baterai",
    tagline: "Baterai boros, iPhone mati sendiri, atau kembung.",
    description:
      "Ganti baterai iPhone di Bandung untuk baterai cepat habis, mati sendiri, persentase loncat, atau kembung. Bisa ditunggu, harga jelas, dan bergaransi.",
    icon: "battery",
    image: "/images/services/battery.webp",
    priceKey: "baterai",
    symptoms: [
      "Baterai cepat habis atau turun drastis",
      "iPhone mati sendiri walau persentase masih ada",
      "Battery Health sudah di bawah 80%",
      "Layar terangkat atau bodi menggembung",
    ],
    duration: "Umumnya bisa ditunggu.",
    keywords: ["ganti baterai iphone bandung", "service baterai iphone bandung", "baterai iphone kembung bandung"],
    faqs: [
      {
        question: "Kapan baterai iPhone perlu diganti?",
        answer:
          "Apple menyebut baterai dirancang mempertahankan hingga 80% kapasitas awal setelah 500 siklus pengisian penuh (1.000 siklus untuk iPhone 15 dan yang lebih baru). Jika Battery Health di bawah 80% dan iPhone terasa boros, penggantian layak dipertimbangkan.",
      },
      {
        question: "Baterai kembung, apakah bahaya?",
        answer:
          "Baterai kembung sebaiknya tidak dipakai atau diisi daya lagi, lalu segera diperiksa. Kembung bisa menekan layar dan komponen lain sehingga kerusakan melebar.",
      },
      {
        question: "Apakah Battery Health tetap tampil setelah ganti baterai?",
        answer:
          "Pada sebagian model iPhone terbaru, baterai non-Apple dapat memunculkan pesan part tidak dikenal di Pengaturan dan info Battery Health bisa tidak tampil. Fungsi dasarnya tidak terganggu. Tanyakan opsi part kami sebelum servis.",
      },
    ],
  },
  {
    slug: "service-port-charger-iphone",
    title: "Service Port Charger iPhone Bandung",
    shortTitle: "Port charger",
    tagline: "iPhone tidak bisa dicas atau harus ditekuk dulu.",
    description:
      "Service port charger iPhone di Bandung untuk iPhone tidak mengisi daya, charging putus-putus, dan konektor longgar. Dicek dulu penyebabnya sebelum ganti part.",
    icon: "plug",
    image: "/images/services/charging.webp",
    priceKey: "charger",
    symptoms: [
      "iPhone tidak mengisi daya",
      "Charging putus-putus atau harus ditekuk",
      "Konektor terasa longgar",
      "Charger tidak terdeteksi",
    ],
    duration: "Umumnya bisa ditunggu.",
    keywords: ["service port charger iphone bandung", "iphone tidak bisa dicas bandung"],
    faqs: [
      {
        question: "Kenapa iPhone tidak bisa dicas?",
        answer:
          "Penyebab paling umum adalah kotoran di dalam port, kabel atau adaptor rusak, port charger aus, atau baterai bermasalah. Kami cek dari yang paling sederhana dulu supaya kamu tidak membayar part yang sebenarnya tidak perlu diganti.",
      },
      {
        question: "Apakah port charger perlu diganti kalau hanya kotor?",
        answer:
          "Tidak. Jika penyebabnya hanya kotoran di port, cukup dibersihkan. Penggantian dilakukan hanya bila komponennya memang rusak.",
      },
    ],
  },
  {
    slug: "service-iphone-mati-total",
    title: "Service iPhone Mati Total Bandung",
    shortTitle: "Mati total",
    tagline: "Layar hitam, tidak merespons, atau stuck logo Apple.",
    description:
      "Service iPhone mati total di Bandung: layar hitam, tidak merespons charger, stuck logo Apple, atau restart terus. Diagnosa gratis untuk mencari penyebabnya.",
    icon: "power",
    image: "/images/services/matot.webp",
    symptoms: [
      "Layar hitam dan tidak ada respons",
      "Tidak ada tanda charging",
      "Stuck di logo Apple",
      "Restart terus menerus",
    ],
    duration: "Bergantung pada penyebab. Kami kabari setelah diagnosa.",
    keywords: ["service iphone mati total bandung", "iphone stuck logo apple bandung", "iphone bootloop bandung"],
    faqs: [
      {
        question: "Apa penyebab iPhone mati total?",
        answer:
          "Penyebabnya beragam: baterai habis total atau rusak, port charger bermasalah, kegagalan update iOS, benturan, atau kerusakan pada mesin (logic board). Karena itu diagnosa dilakukan lebih dulu.",
      },
      {
        question: "Apakah data di iPhone mati total bisa diselamatkan?",
        answer:
          "Tergantung penyebabnya dan tidak bisa dijamin. Kami sampaikan kemungkinannya setelah diagnosa, sebelum ada tindakan lanjutan.",
      },
    ],
  },
  {
    slug: "service-iphone-kena-air",
    title: "Service iPhone Kena Air Bandung",
    shortTitle: "Kena air",
    tagline: "Terkena hujan, terendam, atau tumpahan minuman.",
    description:
      "Service iPhone kena air di Bandung. Semakin cepat diperiksa, semakin kecil risiko korosi menyebar. Diagnosa gratis dan langkah pertolongan pertama yang benar.",
    icon: "droplet",
    image: "/images/services/water-damage.webp",
    symptoms: [
      "Mati setelah terkena air atau hujan",
      "Layar bergaris atau flicker setelah basah",
      "Speaker atau mikrofon tidak berfungsi",
      "Muncul peringatan cairan di port charger",
    ],
    duration: "Bergantung pada tingkat kerusakan. Kami kabari setelah diagnosa.",
    keywords: ["service iphone kena air bandung", "iphone jatuh ke air bandung", "iphone mati kena air"],
    faqs: [
      {
        question: "Apa yang harus dilakukan saat iPhone kena air?",
        answer:
          "Lepas dari charger, jangan dinyalakan berulang kali, ketuk pelan dengan port menghadap bawah, lalu taruh di tempat kering dengan sirkulasi udara. Jangan pakai hair dryer dan jangan dimasukkan ke beras. Langkah lengkapnya ada di artikel blog kami.",
      },
      {
        question: "Bukankah iPhone tahan air?",
        answer:
          "iPhone modern tahan cipratan, air, dan debu, tetapi tidak kedap air permanen. Ketahanannya bisa menurun karena pemakaian, dan kerusakan akibat cairan umumnya tidak ditanggung garansi Apple.",
      },
    ],
  },
  {
    slug: "service-kamera-iphone",
    title: "Service Kamera iPhone Bandung",
    shortTitle: "Kamera",
    tagline: "Foto buram, kamera hitam, atau bergetar.",
    description:
      "Service kamera iPhone di Bandung: foto buram, kamera hitam, lensa retak, atau kamera belakang bergetar. Dicek dulu sebelum ganti part.",
    icon: "camera",
    image: "/images/services/camera.webp",
    priceKey: "kamera",
    symptoms: [
      "Foto buram atau tidak bisa fokus",
      "Aplikasi Kamera hitam",
      "Lensa retak",
      "Kamera bergetar atau berbunyi",
    ],
    duration: "Bergantung pada jenis kerusakan. Kami kabari setelah diagnosa.",
    keywords: ["service kamera iphone bandung", "ganti kamera iphone bandung", "kamera iphone getar"],
    faqs: [
      {
        question: "Kenapa kamera belakang iPhone bergetar?",
        answer:
          "Kamera belakang bergetar sering terkait stabilisasi optik (OIS) yang terganggu, misalnya akibat benturan atau getaran terus menerus. Apple juga mengingatkan agar iPhone tidak dipasang pada holder magnetik bergetaran tinggi seperti di motor.",
      },
      {
        question: "Lensa retak, apakah harus ganti seluruh kamera?",
        answer:
          "Tidak selalu. Jika hanya kaca lensa yang retak dan modul kameranya normal, kadang cukup kaca lensanya yang diganti. Kami cek dulu sebelum menentukan.",
      },
    ],
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
