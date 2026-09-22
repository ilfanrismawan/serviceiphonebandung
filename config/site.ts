import type { IconName } from "@/types";

/**
 * SATU-SATUNYA tempat untuk mengubah identitas bisnis.
 * Semua komponen, metadata SEO, dan JSON-LD membaca dari sini.
 * Ganti semua nilai bertanda TODO sebelum go-live.
 */
export const siteConfig = {
  // TODO: ganti dengan nama brand kamu
  name: "iServis Bandung",
  legalName: "iServis Bandung",
  tagline: "Service iPhone di Bandung",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://serviceiphonebandung.com",
  locale: "id_ID",
  language: "id",
  description:
    "Service iPhone di Bandung: ganti baterai, LCD, port charger, kamera, iPhone mati total dan kena air. Diagnosa gratis, harga jelas sebelum dikerjakan, bergaransi.",

  contact: {
    // TODO: nomor WhatsApp format internasional tanpa + atau spasi
    whatsapp: "6285924045726",
    phoneDisplay: "0859-2404-5726",
    email: "halo@serviceiphonebandung.com",
  },

  address: {
    // TODO: alamat asli toko
    street: "Jl. Dipati Ukur No.51 Lt 2, Lebakgede",
    district: "Coblong",
    city: "Bandung",
    region: "Jawa Barat",
    postalCode: "42315",
    country: "ID",
    // TODO: koordinat asli (klik kanan di Google Maps > salin koordinat)
    geo: { lat: -6.9175, lng: 107.6191 },
    mapsUrl: "https://maps.google.com/?q=Bandung",
  },

  /** Jam buka. `days` memakai nama hari schema.org. */
  hours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  hoursLabel: "Setiap hari, 10.00 – 20.00 WIB",

  social: {
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
  },

  nav: [
    { label: "Layanan", href: "/layanan" },
    { label: "Harga", href: "/harga" },
    { label: "Blog", href: "/blog" },
    { label: "Kontak", href: "/kontak" },
  ],

  /** Keunggulan yang tampil di beranda. Sesuaikan dengan kondisi bisnis sebenarnya. */
  highlights: [
    {
      icon: "search",
      title: "Diagnosa gratis",
      text: "Kerusakan dicek dulu tanpa biaya. Kamu tahu masalahnya sebelum memutuskan.",
    },
    {
      icon: "tag",
      title: "Harga jelas di awal",
      text: "Estimasi disampaikan sebelum pengerjaan. Tidak ada biaya tambahan tanpa persetujuan.",
    },
    {
      icon: "clock",
      title: "Bisa ditunggu",
      text: "Servis umum seperti baterai dan LCD dikerjakan selagi kamu menunggu.",
    },
    {
      icon: "shield",
      title: "Bergaransi",
      text: "Setiap servis mendapat garansi. Ketentuannya dijelaskan sebelum pengerjaan.",
    },
  ] satisfies { icon: IconName; title: string; text: string }[],
} as const;

export type SiteConfig = typeof siteConfig;
