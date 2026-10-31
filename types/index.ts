export type IconName =
  | "battery"
  | "screen"
  | "plug"
  | "power"
  | "droplet"
  | "camera"
  | "shield"
  | "clock"
  | "search"
  | "tag"
  | "whatsapp"
  | "pin"
  | "check"
  | "chevron"
  | "menu"
  | "close"
  | "wrench"
  | "receipt"
  | "newspaper"
  | "phone";

export interface Faq {
  question: string;
  answer: string;
}

/** Kunci harga yang tersedia di price book. */
export type PriceKey = "baterai" | "lcd" | "charger" | "kamera" | "speaker";

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: IconName;
  image?: string;
  /** Jika ada, halaman layanan menampilkan tabel harga per model. */
  priceKey?: PriceKey;
  symptoms: string[];
  duration: string;
  faqs: Faq[];
  keywords: string[];
}

/**
 * Halaman layanan khusus satu model, mis. /layanan/ganti-baterai-iphone/iphone-11.
 * Teks boleh memuat placeholder harga {battery}, {lcdGradeA}, {lcdOled}, {lcdGenuine}
 * yang diisi dari data/prices.ts saat render.
 */
export interface ModelServicePage {
  serviceSlug: string;
  modelSlug: string;
  /** Satu kalimat pelengkap meta description setelah harga. */
  summary: string;
  intro: string;
  notes: string[];
  /** Model satu keluarga untuk tabel pembanding harga (termasuk model ini). */
  relatedModelSlugs: string[];
  relatedPostSlug?: string;
  keywords: string[];
  faqs: Faq[];
}

export interface IPhoneModel {
  slug: string;
  name: string;
  /** Varian yang tercakup dalam satu halaman (mis. Pro, Pro Max). */
  variants: string[];
  year: number;
  port: "Lightning" | "USB-C";
}

export interface Area {
  slug: string;
  name: string;
  intro: string;
  landmarks: string[];
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  links?: { label: string; href: string }[];
}

export interface BlogPost {
  imageAlt?: string;
  imageCaption?: string;
  /** Explicit editorial approval for an individual post beyond the frozen cutoff. */
  publicationApproved?: boolean;
  slug: string;
  title: string;
  /** Judul pendek untuk <title> dan hasil Google (±45 karakter, sebelum akhiran nama situs). H1 tetap memakai `title`. */
  seoTitle?: string;
  description: string;
  /** Tanya-jawab di akhir artikel, dirender dengan FAQPage schema. */
  faqs?: Faq[];
  image?: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  relatedServiceSlug: string;
  sections: BlogSection[];
  sources?: { title: string; url: string }[];
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}
