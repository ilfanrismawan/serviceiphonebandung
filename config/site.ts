import type { IconName } from "@/types";

/**
 * SATU-SATUNYA tempat untuk mengubah identitas bisnis.
 * Semua komponen, metadata SEO, dan JSON-LD membaca dari sini.
 * Ganti semua nilai bertanda TODO sebelum go-live.
 */
export const siteConfig = {
  // TODO: ganti dengan nama brand kamu
  name: "Flow Service",
  legalName: "Flow Service",
  tagline: "Service iPhone di Bandung",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://flowservice.id",
  locale: "id_ID",
  language: "id",
  description:
    "Service iPhone di Bandung: ganti baterai, LCD, port charger, kamera, iPhone mati total dan kena air. Diagnosa gratis, harga jelas sebelum dikerjakan, bergaransi.",

  contact: {
    // TODO: nomor WhatsApp format internasional tanpa + atau spasi
    whatsapp: "6287860002347",
    phoneDisplay: "0878-6000-2347",
    email: "",
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
    geo: { lat: -6.890842983641312, lng: 107.61699082594095 },
    mapsUrl: "https://maps.google.com/?q=Flow+Service+Bandung",
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
      closes: "22:00",
    },
  ],
  hoursLabel: "Setiap hari, 10.00 – 22.00 WIB",

  social: {
    instagram: "https://www.instagram.com/flowservice_",
    tiktok: "https://www.tiktok.com/@fixwithflow",
  },

  nav: [
    { label: "Layanan", href: "/layanan", icon: "wrench" as const, description: "Semua jenis servis iPhone" },
    { label: "Harga", href: "/harga", icon: "receipt" as const, description: "Estimasi biaya transparan" },
    { label: "Blog", href: "/blog", icon: "newspaper" as const, description: "Tips & panduan perawatan" },
    { label: "Kontak", href: "/kontak", icon: "phone" as const, description: "Hubungi teknisi kami" },
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
