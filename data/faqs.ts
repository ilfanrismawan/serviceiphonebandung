import type { Faq } from "@/types";

/** FAQ umum untuk beranda. FAQ spesifik ada di data/services.ts. */
export const generalFaqs: Faq[] = [
  {
    question: "Apakah diagnosa kerusakan benar-benar gratis?",
    answer:
      "Ya. Kamu bisa datang atau konsultasi lewat WhatsApp lebih dulu. Pengecekan awal gratis dan kamu tidak wajib melanjutkan servis.",
  },
  {
    question: "Bagaimana kalau ternyata biayanya berbeda dari estimasi?",
    answer:
      "Estimasi di website adalah harga mulai dari. Harga final disampaikan setelah diagnosa dan hanya dikerjakan setelah kamu setuju.",
  },
  {
    question: "Apakah bisa ditunggu?",
    answer:
      "Servis umum seperti ganti baterai, LCD, dan port charger biasanya bisa ditunggu. Kerusakan yang perlu diagnosa lebih dalam, seperti mati total atau kena air, membutuhkan waktu lebih lama.",
  },
  {
    question: "Apakah ada garansi setelah servis?",
    answer:
      "Ada. Ketentuan garansi dijelaskan sebelum pengerjaan sehingga kamu tahu apa saja yang ditanggung.",
  },
  {
    question: "Apakah ini service center resmi Apple?",
    answer:
      "Bukan. Kami tempat servis independen. Untuk perbaikan di bawah garansi resmi Apple atau AppleCare, gunakan Apple Authorized Service Provider.",
  },
  {
    question: "Model iPhone apa saja yang dilayani?",
    answer:
      "Kami melayani iPhone XR hingga seri terbaru. Untuk model lain, tanyakan lewat WhatsApp.",
  },
];
