/**
 * Data video edukasi untuk pelanggan.
 * Tambahkan item baru di sini saat ada video baru di /public/videos/.
 */
export interface EducationVideo {
  id: string;
  title: string;
  description: string;
  /** Path relatif dari /public */
  src: string;
  /** Thumbnail opsional (jpg/webp). Jika kosong, browser render frame pertama. */
  poster?: string;
  /** Durasi tayang untuk label UI, mis. "2:30" */
  duration: string;
  tag: string;
}

export const educationVideos: EducationVideo[] = [
  {
    id: "ganti-lcd",
    title: "Perbedaan Kualitas LCD",
    description:
      "Lihat langsung bagaimana Perbedaan Kualitas LCD iPhone.",
    src: "/videos/lcd.mp4",
    duration: "1:00",
    tag: "Ganti LCD",
  },
  // {
  //   id: "ganti-lcd",
  //   title: "Proses Ganti LCD iPhone",
  //   description:
  //     "Lihat langsung bagaimana teknisi kami mengganti layar iPhone yang pecah — mulai dari pembongkaran hingga pemasangan dengan alat presisi, rapi dan bergaransi.",
  //   src: "/videos/lcd.mp4",
  //   duration: "1:00",
  //   tag: "Ganti LCD",
  // },
  // Tambahkan video berikutnya di sini:
  // {
  //   id: "ganti-baterai",
  //   title: "Proses Ganti Baterai iPhone",
  //   description: "...",
  //   src: "/videos/baterai.mp4",
  //   duration: "0:45",
  //   tag: "Ganti Baterai",
  // },
];
