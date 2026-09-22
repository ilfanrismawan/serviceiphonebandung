import type { Area } from "@/types";

/**
 * Halaman area hanya dibuat untuk wilayah yang benar-benar kamu layani.
 * Tambahkan info nyata (jarak, akses, landmark) agar halaman tidak tipis
 * dan tidak dianggap doorway page oleh Google.
 */
export const areas: Area[] = [
  {
    slug: "dago",
    name: "Dago",
    intro:
      "Pelanggan dari Dago, Cihampelas, dan sekitar kampus ITB bisa datang langsung atau konsultasi lewat WhatsApp terlebih dahulu.",
    landmarks: ["ITB", "Simpang Dago", "Cihampelas"],
  },
  {
    slug: "buah-batu",
    name: "Buah Batu",
    intro:
      "Melayani pelanggan dari Buah Batu, Kiaracondong, dan sekitar Telkom University. Kirim foto kerusakan lewat WhatsApp untuk estimasi awal.",
    landmarks: ["Telkom University", "Buah Batu", "Kiaracondong"],
  },
  {
    slug: "antapani",
    name: "Antapani",
    intro:
      "Dari Antapani, Ujungberung, dan sekitarnya, kamu bisa konsultasi dulu lewat WhatsApp sebelum memutuskan datang.",
    landmarks: ["Antapani", "Arcamanik", "Ujungberung"],
  },
  {
    slug: "cimahi",
    name: "Cimahi",
    intro:
      "Pelanggan dari Cimahi dan Bandung Barat bisa mengirim foto kerusakan lebih dulu agar kunjungan lebih efisien.",
    landmarks: ["Cimahi", "Padalarang", "Lembang"],
  },
  {
    slug: "jatinangor",
    name: "Jatinangor",
    intro:
      "Mahasiswa dan warga Jatinangor dapat konsultasi lewat WhatsApp, lalu datang setelah jadwal dan estimasi jelas.",
    landmarks: ["Unpad Jatinangor", "ITB Jatinangor", "IPDN"],
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
