export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  model: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Rian Pratama",
    role: "Mahasiswa ITB",
    location: "Dago, Bandung",
    model: "iPhone 13",
    service: "Ganti LCD OLED",
    rating: 5,
    date: "1 minggu lalu",
    comment:
      "Layar iPhone 13 saya retak parah gara-gara jatuh di kampus. Dicek dulu gratis, dijelaskan pilihan layarnya dengan jujur tanpa dipaksa. Pengerjaan cuma 25 menit sambil saya tunggu. True Tone dan display normal lagi seperti baru!",
  },
  {
    id: "2",
    name: "drg. Nadia Saraswati",
    role: "Dokter Gigi",
    location: "Buah Batu, Bandung",
    model: "iPhone 12 Pro",
    service: "Ganti Baterai Health",
    rating: 5,
    date: "2 minggu lalu",
    comment:
      "Awalnya takut data pasien dan foto hilang kalau ganti baterai. Tapi teknisinya sangat profesional, tidak minta password Apple ID dan pengerjaan bisa ditonton langsung di meja servis. Sekarang baterai awet seharian lagi.",
  },
  {
    id: "3",
    name: "Fajar Nugraha",
    role: "Content Creator",
    location: "Antapani, Bandung",
    model: "iPhone 14 Pro",
    service: "Service Kamera Belakang",
    rating: 5,
    date: "3 minggu lalu",
    comment:
      "Kamera belakang getar dan tidak bisa fokus setelah dipasang di holder motor. Di tempat lain disuruh ganti satu set modul mahal banget. Di sini dicek teliti dulu, biayanya jauh lebih masuk akal dan ada garansi 90 hari. Sangat recommended di Bandung!",
  },
  {
    id: "4",
    name: "Kevin Ardiansyah",
    role: "Karyawan Swasta",
    location: "Dipatiukur, Bandung",
    model: "iPhone 11",
    service: "Port Charger & Mati Total",
    rating: 5,
    date: "1 bulan lalu",
    comment:
      "iPhone tiba-tiba tidak mau dicas dan mati total. Sempat panik dikira mesinnya jebol. Ternyata teknisinya ramah banget, dicek cuma kotoran padat di port dan baterai habis. Dibersihkan tanpa biaya aneh-aneh. Bengkel servis yang jujur dan langka.",
  },
];
