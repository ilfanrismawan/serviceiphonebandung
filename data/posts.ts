import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
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
