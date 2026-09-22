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
  | "close";

export interface Faq {
  question: string;
  answer: string;
}

/** Kunci harga yang tersedia di price book. */
export type PriceKey = "baterai" | "lcd" | "charger" | "kamera";

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
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  relatedServiceSlug: string;
  sections: BlogSection[];
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}
