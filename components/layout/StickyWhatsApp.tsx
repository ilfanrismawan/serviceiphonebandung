import { Icon } from "@/components/ui/Icon";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

/** Tombol WhatsApp mengambang, selalu terlihat di semua halaman. */
export function StickyWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:bottom-8 sm:right-8"
      aria-label="Chat via WhatsApp"
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
}
