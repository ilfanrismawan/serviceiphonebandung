import type { BlogPost } from "@/types";

/**
 * Target long-tail: "iphone panas saat dicas", "iphone panas tidak wajar",
 * "iphone panas padahal tidak dipakai", "iphone panas kapan harus servis".
 * Head term "iphone cepat panas" dikuasai media besar (CNN Indonesia, Bisnis, Liputan6);
 * artikel ini mengambil sudut diagnosa: panas wajar vs tanda kerusakan.
 */
export const iphonePanasPost: BlogPost = {
  slug: "iphone-panas-wajar-atau-rusak-kapan-perlu-servis",
  title: "iPhone Panas: Masih Wajar atau Tanda Rusak? Cara Membedakan dan Kapan Perlu Servis",
  seoTitle: "iPhone Panas Wajar atau Rusak? Cek Tandanya",
  description:
    "iPhone panas saat dicas atau padahal tidak dipakai? Bedakan panas wajar dan tanda baterai, port charger, atau mesin bermasalah, plus kapan harus dibawa servis.",
  image: "/images/blog/baterai.webp",
  imageAlt: "iPhone yang sedang dicas di atas meja",
  publicationApproved: true,
  publishedAt: "2026-10-31",
  updatedAt: "2026-10-31",
  readingMinutes: 6,
  relatedServiceSlug: "ganti-baterai-iphone",
  sources: [
    { title: "Apple Support: Jika iPhone menjadi terlalu panas atau dingin", url: "https://support.apple.com/id-id/118431" },
    { title: "Apple Support: Baterai dan kinerja iPhone", url: "https://support.apple.com/id-id/101575" },
    { title: "Apple Support: Jika iPhone tidak dapat mengisi daya", url: "https://support.apple.com/id-id/108967" },
  ],
  faqs: [
    {
      question: "Apakah normal iPhone panas saat dicas?",
      answer:
        "Hangat saat dicas itu normal, apalagi saat fast charging atau dicas sambil dipakai. Yang tidak normal adalah panas sampai sulit dipegang, muncul peringatan suhu, atau panas meski iPhone tidak dipakai dan tidak dicas.",
    },
    {
      question: "Kenapa iPhone panas padahal tidak dipakai?",
      answer:
        "Bisa karena proses di latar belakang, misalnya setelah update iOS atau saat mencadangkan ke iCloud. Kalau panasnya terus berlangsung berjam-jam, terasa di satu titik, dan baterai cepat habis, kemungkinan ada masalah di baterai atau mesin dan perlu diperiksa.",
    },
    {
      question: "Apakah iPhone panas bisa merusak baterai?",
      answer:
        "Ya. Apple menyebut suhu tinggi dapat mengurangi kapasitas baterai secara permanen. Itu sebabnya iPhone akan memperlambat atau menghentikan pengisian daya ketika suhunya terlalu tinggi.",
    },
    {
      question: "Bolehkah iPhone panas didinginkan di kulkas atau depan AC?",
      answer:
        "Jangan. Perubahan suhu yang mendadak bisa memunculkan embun di dalam iPhone. Matikan iPhone, lepas casing, dan biarkan dingin di tempat teduh bersuhu ruang.",
    },
  ],
  sections: [
    {
      heading: "Panas wajar vs panas tidak wajar",
      paragraphs: [
        "iPhone terasa hangat itu biasa, terutama saat dicas, saat bermain game, merekam video, memakai GPS, atau dipakai di bawah matahari. Apple menyebut iPhone bekerja paling baik pada suhu lingkungan 0–35°C, dan iPhone punya pengaman: kalau terlalu panas, pengisian daya diperlambat, layar meredup, atau muncul peringatan suhu sampai iPhone dingin kembali.",
        "Yang perlu diwaspadai adalah panas yang tidak sebanding dengan pemakaian. Gunakan daftar di bawah untuk membedakannya.",
      ],
      list: [
        "Wajar: hangat saat dicas cepat, saat game atau video call lama, atau setelah dipakai di luar ruangan, lalu dingin lagi setelah aktivitas berhenti.",
        "Wajar sementara: hangat beberapa hari setelah update iOS atau memulihkan dari cadangan, karena iPhone masih mengindeks data di latar belakang.",
        "Tidak wajar: panas padahal layar mati, tidak dicas, dan tidak ada aplikasi berat.",
        "Tidak wajar: panas di satu titik yang sama setiap kali, disertai baterai turun cepat.",
        "Tidak wajar: muncul peringatan suhu di ruangan biasa, atau bodi dan layar mulai terangkat.",
      ],
    },
    {
      heading: "Langkah pertama saat iPhone terasa panas",
      paragraphs: ["Lakukan ini dulu sebelum menyimpulkan ada kerusakan."],
      list: [
        "Lepas casing dan cabut charger, lalu pindahkan iPhone ke tempat teduh.",
        "Tutup aplikasi berat, turunkan kecerahan, atau matikan iPhone sebentar sampai suhunya normal.",
        "Jangan masukkan ke kulkas atau taruh di depan AC, karena perubahan suhu mendadak bisa memunculkan embun.",
        "Cek Pengaturan > Baterai untuk melihat aplikasi yang paling banyak memakai daya, dan perbarui iOS serta aplikasi.",
      ],
    },
    {
      heading: "Lokasi panas bisa jadi petunjuk",
      paragraphs: [
        "Teknisi biasanya memperhatikan di mana panas terasa dan kapan munculnya. Ini bukan diagnosa pasti, tetapi membantu menceritakan gejala saat konsultasi.",
      ],
      list: [
        "Panas merata di bodi belakang saat dicas atau dipakai berat: umumnya wajar, berasal dari pengisian daya dan prosesor.",
        "Panas di sekitar port charger, kabel atau kepala charger ikut panas, atau pengisian putus-putus: cek kabel, adaptor, dan port charger yang kotor atau rusak.",
        "Panas di area tengah belakang disertai baterai cepat habis atau mati mendadak: baterai kemungkinan sudah drop atau rusak.",
        "Panas di satu titik di bagian atas dekat kamera padahal iPhone tidak dipakai: bisa menandakan korsleting di mesin (logic board), apalagi setelah jatuh atau kena air.",
        "Layar atau bodi terangkat: kemungkinan baterai kembung. Hentikan pemakaian dan pengisian daya.",
      ],
    },
    {
      heading: "Kapan iPhone panas harus dibawa ke servis",
      paragraphs: ["Segera periksakan iPhone kalau mengalami salah satu kondisi berikut."],
      list: [
        "Panas terus-menerus padahal sudah mengikuti langkah di atas.",
        "Kesehatan Baterai di bawah 80%, atau iPhone mati sendiri saat persentase masih ada.",
        "iPhone panas dan tidak mau mengisi daya, atau hanya menyala saat dicas.",
        "Layar atau bodi mulai terangkat (tanda baterai kembung).",
        "Panas muncul setelah iPhone jatuh atau terkena air.",
        "Tercium bau terbakar atau terlihat asap. Jauhkan iPhone dari benda mudah terbakar dan jangan dicas lagi.",
      ],
      links: [
        { label: "Kapan baterai iPhone perlu diganti?", href: "/blog/kapan-baterai-iphone-perlu-diganti" },
        { label: "iPhone tidak bisa dicas? Cek penyebabnya", href: "/blog/iphone-tidak-bisa-dicas-penyebab-dan-solusi" },
      ],
    },
    {
      heading: "Kebiasaan yang membuat iPhone cepat panas",
      paragraphs: ["Beberapa kebiasaan sehari-hari ikut memicu panas berlebih dan mempercepat penurunan baterai."],
      list: [
        "Mengecas sambil bermain game atau di bawah bantal dan selimut.",
        "Meninggalkan iPhone di dasbor mobil atau di bawah matahari langsung.",
        "Memakai charger atau kabel rusak dan tidak bersertifikat.",
        "Memakai casing tebal saat fast charging atau pengisian nirkabel.",
      ],
    },
    {
      heading: "Cek iPhone panas di Bandung",
      paragraphs: [
        "Kalau iPhone kamu panas tidak wajar, bawa ke workshop Service iPhone Bandung di Jl. Dipati Ukur No. 86. Kami cek Kesehatan Baterai, port charger, dan kondisi unit untuk mencari sumber panasnya. Diagnosa tanpa biaya, dan harga perbaikan kami sampaikan sebelum dikerjakan.",
      ],
      links: [
        { label: "Layanan ganti baterai iPhone Bandung", href: "/layanan/ganti-baterai-iphone" },
        { label: "Service port charger iPhone Bandung", href: "/layanan/service-port-charger-iphone" },
      ],
    },
  ],
};
