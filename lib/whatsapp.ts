import { siteConfig } from "@/config/site";

/** Membuat link WhatsApp dengan pesan yang sudah terisi. */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WA_MESSAGE =
  "Halo, saya mau tanya service iPhone. ";
