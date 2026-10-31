import type { BlogPost } from "@/types";
import { getDetailedPrice } from "@/data/prices";
import { formatRupiah } from "@/lib/format";

/**
 * Target: "ganti baterai iphone resmi atau tidak", "harga ganti baterai iphone di ibox",
 * "ganti baterai iphone original vs biasa", "ganti baterai iphone di servis resmi".
 * Riset: docs/riset-topik-halaman-1-2026-10-31.md
 *
 * Tarif Apple dikutip dalam USD sesuai sumber berita; JANGAN dikonversi ke rupiah
 * (kurs berubah dan harga penyedia resmi di Indonesia berbeda-beda).
 * Harga toko diambil dari data/prices.ts.
 */
const models = [
  ["iPhone 11", "iphone-11"],
  ["iPhone 12", "iphone-12"],
  ["iPhone 13", "iphone-13"],
  ["iPhone 14", "iphone-14"],
  ["iPhone 15", "iphone-15"],
  ["iPhone 16", "iphone-16"],
] as const;

const priceLines = models.map(([name, slug]) => {
  const p = getDetailedPrice(slug);
  const base = p?.battery ? `mulai ${formatRupiah(p.battery)}` : "hubungi kami";
  const genuine = p?.batteryGenuine ? `, pilihan Genuine ${formatRupiah(p.batteryGenuine)}` : "";
  return `${name}: part baterai ${base}${genuine}.`;
});

const iphone13 = getDetailedPrice("iphone-13")?.battery;

export const gantiBateraiResmiVsLuarPost: BlogPost = {
  slug: "ganti-baterai-iphone-resmi-vs-servis-luar",
  title: "Ganti Baterai iPhone di Servis Resmi Apple atau Servis Luar? Ini Bedanya",
  seoTitle: "Ganti Baterai iPhone: Resmi vs Servis Luar",
  description:
    "Bandingkan ganti baterai iPhone di servis resmi Apple dan servis independen: tarif, status Suku Cadang, Kesehatan Baterai, garansi, dan kapan pilih yang mana.",
  image: "/images/blog/baterai.webp",
  imageAlt: "Baterai iPhone pengganti di meja servis",
  publicationApproved: true,
  publishedAt: "2026-10-31",
  updatedAt: "2026-10-31",
  readingMinutes: 6,
  relatedServiceSlug: "ganti-baterai-iphone",
  sources: [
    { title: "Bisnis.com: Apple naikkan harga ganti baterai iPhone mulai 2023", url: "https://teknologi.bisnis.com/read/20230105/280/1615485/apple-naikan-harga-ganti-baterai-iphone-mulai-2023-ini-perinciannya" },
    { title: "detikINET: Harga ganti baterai iPhone makin mahal", url: "https://inet.detik.com/consumer/d-6500264/harga-ganti-baterai-iphone-makin-mahal-apple-naikkan-harga" },
    { title: "detikINET: Biaya ganti baterai iPhone 16 Pro makin mahal", url: "https://inet.detik.com/consumer/d-7544053/biaya-ganti-baterai-iphone-16-pro-makin-mahal" },
    { title: "Apple Support: Riwayat suku cadang dan servis iPhone", url: "https://support.apple.com/id-id/102658" },
  ],
  faqs: [
    {
      question: "Lebih baik ganti baterai iPhone di servis resmi atau servis luar?",
      answer:
        "Pilih servis resmi kalau iPhone masih bergaransi atau AppleCare+, atau kalau kamu ingin baterai tercatat sebagai suku cadang asli Apple. Pilih servis independen kalau ingin biaya lebih hemat dan bisa ditunggu, dengan catatan status baterai bisa tidak terverifikasi di iOS.",
    },
    {
      question: "Berapa harga ganti baterai iPhone di servis resmi Apple?",
      answer:
        "Di Amerika Serikat, Apple mematok US$89 untuk iPhone 13 ke bawah dan US$99 untuk iPhone 14 dan 15 di luar garansi. Di Indonesia tidak ada Apple Store, sehingga penggantian dilakukan lewat penyedia servis resmi Apple dengan tarif masing-masing. Tanyakan harga langsung ke gerai yang kamu tuju.",
    },
    {
      question: "Apakah ganti baterai di servis luar membuat garansi Apple hangus?",
      answer:
        "Kerusakan akibat perbaikan oleh pihak yang bukan Apple atau penyedia resminya bisa tidak ditanggung garansi Apple. Kalau iPhone masih bergaransi, cek dulu cakupannya di checkcoverage.apple.com sebelum dibuka di servis independen.",
    },
    {
      question: "Apakah ganti baterai di iBox termasuk servis resmi?",
      answer:
        "Tergantung gerainya. Pastikan gerai yang kamu datangi terdaftar sebagai penyedia servis resmi Apple (Apple Authorized Service Provider) lewat situs dukungan Apple sebelum datang.",
    },
  ],
  sections: [
    {
      heading: "Jawaban singkat",
      paragraphs: [
        "Servis resmi Apple memberi kepastian part asli dan status baterai yang terverifikasi di iOS, tetapi tarifnya lebih tinggi dan umumnya perlu antre atau ditinggal. Servis independen biasanya jauh lebih hemat dan bisa ditunggu, dengan konsekuensi baterai bisa tercatat sebagai Suku Cadang Tidak Dikenal. Mana yang lebih tepat tergantung status garansi iPhone dan prioritasmu.",
      ],
    },
    {
      heading: "Tarif ganti baterai di servis resmi Apple",
      paragraphs: [
        "Apple tidak punya Apple Store di Indonesia, jadi penggantian resmi dilakukan lewat penyedia servis resmi Apple (Apple Authorized Service Provider). Banyak orang mencarinya dengan kata kunci \"ganti baterai iPhone di iBox\". Pastikan dulu gerai yang dituju memang terdaftar sebagai penyedia servis resmi, karena tarif dan antreannya bisa berbeda di tiap tempat.",
        "Sebagai acuan, tarif resmi Apple di Amerika Serikat untuk iPhone di luar garansi adalah US$89 untuk iPhone 13 ke bawah dan US$99 untuk iPhone 14 dan 15. iPhone 16 Pro dan 16 Pro Max lebih mahal dari itu. Tarif di Indonesia bisa berbeda, jadi minta harga tertulis dari gerai sebelum setuju.",
      ],
    },
    {
      heading: "Harga part baterai di servis independen (pricelist kami)",
      paragraphs: [
        "Berikut harga part baterai dari pricelist Service iPhone Bandung untuk model yang paling sering ditanyakan. Harga belum termasuk biaya pemasangan, dan total biaya kami sampaikan sebelum pengerjaan.",
      ],
      list: priceLines,
      links: [{ label: "Lihat harga semua model", href: "/layanan/ganti-baterai-iphone" }],
    },
    {
      heading: "Perbedaan yang perlu kamu ketahui",
      paragraphs: ["Selain harga, ada beberapa hal yang membedakan hasil penggantian di kedua tempat."],
      list: [
        "Status di iOS: penggantian resmi tercatat sebagai Suku Cadang Asli Apple. Baterai dari servis independen bisa tercatat sebagai Suku Cadang Tidak Dikenal dan memunculkan Pesan Baterai Penting.",
        "Angka Kesehatan Baterai: dengan baterai yang tidak terverifikasi, angka Kapasitas Maksimum bisa tidak tampil di Pengaturan.",
        "Garansi Apple: kalau iPhone masih bergaransi atau punya AppleCare+, penggantian resmi bisa lebih murah atau gratis bila kapasitas di bawah 80%. Membuka iPhone di servis luar bisa memengaruhi klaim garansi.",
        "Waktu: servis independen umumnya bisa ditunggu selama part tersedia. Servis resmi bisa memerlukan unit ditinggal.",
        "Pilihan part: servis independen biasanya punya beberapa tingkat kualitas dengan harga berbeda. Tanyakan beda tiap pilihan dan garansinya.",
      ],
      links: [{ label: "Arti Pesan Baterai Penting di iPhone", href: "/blog/pesan-baterai-penting-iphone-setelah-ganti-baterai" }],
    },
    {
      heading: "Kapan sebaiknya pilih servis resmi, kapan servis independen",
      paragraphs: [
        "Pilih servis resmi Apple kalau iPhone masih dalam garansi atau AppleCare+, kalau kamu berencana menjual iPhone dan ingin riwayat part tetap \"asli\", atau kalau ada kerusakan lain yang masih ditanggung Apple.",
        iphone13
          ? `Pilih servis independen kalau iPhone sudah di luar garansi dan kamu ingin biaya lebih hemat. Misalnya, part baterai iPhone 13 di pricelist kami mulai ${formatRupiah(iphone13)}. Pastikan tempat servisnya menjelaskan jenis part, kemungkinan pesan di iOS, dan garansi sebelum mengerjakan.`
          : "Pilih servis independen kalau iPhone sudah di luar garansi dan kamu ingin biaya lebih hemat. Pastikan tempat servisnya menjelaskan jenis part, kemungkinan pesan di iOS, dan garansi sebelum mengerjakan.",
      ],
    },
    {
      heading: "Ganti baterai iPhone di Bandung",
      paragraphs: [
        "Service iPhone Bandung adalah toko servis independen di Jl. Dipati Ukur No. 86, bukan bagian dari Apple. Sebelum mengganti baterai, kami cek dulu Kesehatan Baterai dan port charger, lalu jelaskan pilihan part, harga, dan kemungkinan pesan yang muncul di iOS. Pengerjaan dimulai setelah kamu setuju.",
      ],
      links: [
        { label: "Layanan ganti baterai iPhone Bandung", href: "/layanan/ganti-baterai-iphone" },
        { label: "Kapan baterai iPhone perlu diganti?", href: "/blog/kapan-baterai-iphone-perlu-diganti" },
      ],
    },
  ],
};
