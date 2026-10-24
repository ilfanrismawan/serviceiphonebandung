import type { IconName } from "@/types";
import { getSiteOrigin } from "./origin";

/**
 * SATU-SATUNYA tempat untuk mengubah identitas bisnis.
 * Semua komponen, metadata SEO, dan JSON-LD membaca dari sini.
 * Ganti semua nilai bertanda TODO sebelum go-live.
 */
export const siteConfig = {
  // Owner-confirmed brand name, 2026-10-25.
  name: "Service iPhone Bandung",
  legalName: "Service iPhone Bandung",
  tagline: "Service iPhone di Bandung",
  url: getSiteOrigin(),
  locale: "id_ID",
  language: "id",
  description:
    "Service iPhone di Bandung: ganti baterai, LCD, port charger, kamera, iPhone mati total dan kena air. Diagnosa gratis, harga jelas sebelum dikerjakan, bergaransi.",

  contact: {
    // Owner-confirmed WhatsApp, international format without + or spaces.
    whatsapp: "6287860002347",
    phoneDisplay: "0878-6000-2347",
    email: "",
  },

  address: {
    // Owner-confirmed No.86 address, 2026-10-13.
    street: "Jl. Dipati Ukur No.86 Lt 2, Lebakgede",
    district: "Coblong",
    city: "Bandung",
    region: "Jawa Barat",
    postalCode: "", // TODO(owner): verify postcode; do not infer a replacement.
    country: "ID",
    // TODO: koordinat asli (klik kanan di Google Maps > salin koordinat)
    geo: { lat: -6.890842983641312, lng: 107.61699082594095 },
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Jl.%20Dipati%20Ukur%20No.86%20Lebakgede%20Coblong%20Bandung",
    mapsListingUrl: "https://share.google/QbGeqpEWGPLHdoigW", // Owner supplied 2026-10-13.
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
