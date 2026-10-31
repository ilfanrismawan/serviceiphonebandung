import type { BlogPost } from "@/types";
import { getDetailedPrice } from "@/data/prices";
import { formatRupiah } from "@/lib/format";

/**
 * Target: "biaya service iphone mati total", "service iphone mati total berapa",
 * "biaya service iphone 11 mati total", "service iphone mati total bandung".
 * Riset: docs/riset-topik-halaman-1-2026-10-31.md
 *
 * Harga part diambil dari data/prices.ts supaya artikel ikut ter-update saat pricelist berubah.
 */
function partPrice(modelSlug: string, field: "battery" | "charger") {
  const value = getDetailedPrice(modelSlug)?.[field];
  return value ? formatRupiah(value) : "hubungi kami";
}

const iphone11 = { battery: partPrice("iphone-11", "battery"), charger: partPrice("iphone-11", "charger") };

export const biayaServiceMatiTotalPost: BlogPost = {
  slug: "biaya-service-iphone-mati-total-bandung",
  title: "Biaya Service iPhone Mati Total di Bandung: Penyebab dan Kisaran Harganya",
  seoTitle: "Biaya Service iPhone Mati Total Bandung",
  description:
    "Biaya service iPhone mati total di Bandung tergantung penyebabnya: baterai, port charger, software, atau mesin. Cek kisaran harga part dan cara cek sendiri.",
  image: "/images/blog/biaya-service-iphone-mati-total-bandung.webp",
  imageAlt: "Ilustrasi iPhone mati total dengan layar hitam dan ikon daya",
  publicationApproved: true,
  publishedAt: "2026-10-31",
  updatedAt: "2026-10-31",
  readingMinutes: 6,
  relatedServiceSlug: "service-iphone-mati-total",
  sources: [
    { title: "Apple Support: Jika iPhone tidak mau menyala atau layarnya mati", url: "https://support.apple.com/id-id/116940" },
    { title: "Apple Support: Memulai ulang iPhone secara paksa (Force Restart)", url: "https://support.apple.com/id-id/guide/iphone/iph8903c3ee6/ios" },
    { title: "Apple Support: Jika iPhone tidak dapat mengisi daya", url: "https://support.apple.com/id-id/108967" },
  ],
  faqs: [
    {
      question: "Berapa biaya service iPhone mati total?",
      answer: `Tergantung penyebabnya. Kalau masalahnya baterai, biayanya mengikuti harga part baterai (iPhone 11 mulai ${iphone11.battery}). Kalau port charger, mengikuti harga part port (iPhone 11 mulai ${iphone11.charger}). Kerusakan mesin baru bisa ditentukan biayanya setelah diagnosa. Harga part belum termasuk pemasangan.`,
    },
    {
      question: "Berapa lama service iPhone mati total?",
      answer:
        "Ganti baterai atau port charger umumnya bisa ditunggu selama part tersedia. Kerusakan mesin atau bekas kena air butuh pemeriksaan lebih dalam, jadi waktunya kami kabarkan setelah diagnosa.",
    },
    {
      question: "Apakah iPhone mati total masih bisa hidup lagi?",
      answer:
        "Banyak kasus mati total ternyata hanya baterai habis total, kabel atau adaptor rusak, atau iOS yang macet, dan bisa hidup lagi tanpa ganti mesin. Kepastiannya baru bisa diketahui setelah pemeriksaan.",
    },
    {
      question: "Apakah data di iPhone mati total hilang?",
      answer:
        "Ganti baterai atau port charger tidak menghapus data. Untuk kerusakan mesin, peluang data selamat tergantung penyebabnya dan tidak bisa dijamin. Hindari memilih Pulihkan (Restore) di komputer sebelum data dicadangkan, karena Restore menghapus isi iPhone.",
    },
  ],
  sections: [
    {
      heading: "Berapa biaya service iPhone mati total?",
      paragraphs: [
        "Tidak ada satu harga pasti untuk service iPhone mati total, karena \"mati total\" adalah gejala, bukan jenis kerusakan. iPhone yang layarnya hitam dan tidak merespons bisa disebabkan baterai yang habis total, port charger yang kotor atau rusak, iOS yang macet, sampai kerusakan di mesin (logic board). Biayanya mengikuti penyebab tersebut.",
        `Sebagai gambaran dari pricelist kami, untuk iPhone 11 harga part baterai mulai ${iphone11.battery} dan part port charger mulai ${iphone11.charger}, belum termasuk biaya pemasangan. Kalau ternyata cukup diatasi dengan restart paksa atau pembaruan iOS, sering kali tidak perlu ganti part sama sekali.`,
      ],
    },
    {
      heading: "Coba 3 langkah ini sebelum dibawa service",
      paragraphs: [
        "Langkah berikut aman dilakukan sendiri dan mengikuti panduan Apple. Kalau iPhone menyala setelah salah satunya, kamu tidak perlu biaya service.",
      ],
      list: [
        "Cas minimal 1 jam dengan kabel dan adaptor lain yang dipastikan berfungsi. Baterai yang benar-benar kosong bisa butuh waktu sebelum logo atau ikon pengisian muncul.",
        "Lakukan restart paksa. Untuk iPhone 8 ke atas: tekan lalu lepas tombol volume atas, tekan lalu lepas tombol volume bawah, lalu tahan tombol samping sampai logo Apple muncul.",
        "Kalau iPhone stuck di logo Apple, sambungkan ke komputer dan pilih Perbarui (Update), bukan Pulihkan (Restore), supaya iOS dipasang ulang tanpa menghapus data.",
      ],
      links: [{ label: "Panduan iPhone stuck logo Apple", href: "/blog/iphone-stuck-logo-apple-cara-mengatasi" }],
    },
    {
      heading: "Penyebab iPhone mati total dan kisaran biayanya",
      paragraphs: [
        "Berikut penyebab yang paling sering kami temui pada iPhone mati total, dari yang paling ringan sampai yang paling berat.",
      ],
      list: [
        "Software atau iOS macet: biasanya cukup restart paksa atau update ulang iOS, tanpa ganti part.",
        `Baterai rusak atau drop: iPhone mati padahal sudah dicas, atau hanya hidup saat kabel tertancap. Biaya mengikuti harga part baterai (iPhone 11 mulai ${iphone11.battery}, iPhone XR mulai ${partPrice("iphone-xr", "battery")}, iPhone 13 mulai ${partPrice("iphone-13", "battery")}).`,
        `Port charger kotor atau rusak: iPhone tidak mengisi daya sama sekali sehingga baterai habis total. Kadang cukup dibersihkan, kadang perlu ganti port (iPhone 11 mulai ${iphone11.charger}).`,
        "Kena air: korosi bisa merusak jalur daya di mesin. Semakin cepat diperiksa, semakin besar peluang tertolong.",
        "Kerusakan mesin (logic board): misalnya setelah jatuh atau korsleting saat dicas. Biayanya baru bisa ditentukan setelah diagnosa karena tergantung komponen yang rusak.",
      ],
      links: [
        { label: "iPhone tidak bisa dicas? Cek penyebabnya", href: "/blog/iphone-tidak-bisa-dicas-penyebab-dan-solusi" },
        { label: "iPhone kena air: langkah pertama", href: "/blog/iphone-kena-air-langkah-pertama" },
      ],
    },
    {
      heading: "iPhone 11 mati total: penyebab yang paling sering",
      paragraphs: [
        "iPhone 11 rilis tahun 2019, jadi banyak unit yang masih memakai baterai bawaan pabrik. Pada iPhone 11 yang mati total tanpa riwayat jatuh atau kena air, penyebab paling umum adalah baterai yang sudah sangat lemah dan port Lightning yang tersumbat kotoran. Keduanya termasuk perbaikan ringan dengan biaya part yang jelas.",
        "Kalau iPhone 11 mati setelah jatuh, terkena air, atau terasa panas di satu titik saat dicas, kemungkinan masalahnya ada di mesin dan perlu diagnosa lebih dalam.",
      ],
      links: [{ label: "Harga ganti baterai iPhone 11 di Bandung", href: "/layanan/ganti-baterai-iphone/iphone-11" }],
    },
    {
      heading: "Yang perlu dihindari saat iPhone mati total",
      paragraphs: ["Beberapa kebiasaan justru bisa menambah kerusakan atau membuat data hilang."],
      list: [
        "Memilih Pulihkan (Restore) di komputer sebelum mencoba Perbarui (Update), karena Restore menghapus seluruh data.",
        "Mengeringkan iPhone kena air dengan hair dryer atau memasukkannya ke beras.",
        "Membongkar sendiri tanpa alat, karena kabel fleksibel layar dan baterai mudah sobek.",
        "Terus mengecas iPhone yang terasa sangat panas atau bodinya menggembung.",
      ],
    },
    {
      heading: "Service iPhone mati total di Bandung: alurnya di workshop kami",
      paragraphs: [
        "Di workshop Service iPhone Bandung (Jl. Dipati Ukur No. 86, Bandung), iPhone mati total didiagnosa lebih dulu tanpa biaya. Setelah penyebabnya ketemu, kami sampaikan pilihan perbaikan, harga, dan perkiraan waktunya. Pengerjaan baru dimulai setelah kamu setuju.",
        "Kalau ingin tanya dulu sebelum datang, kirim model iPhone dan kronologi kejadian (jatuh, kena air, setelah update, atau mati tiba-tiba) lewat WhatsApp.",
      ],
      links: [
        { label: "Layanan service iPhone mati total Bandung", href: "/layanan/service-iphone-mati-total" },
        { label: "Daftar harga service iPhone", href: "/harga" },
      ],
    },
  ],
};
