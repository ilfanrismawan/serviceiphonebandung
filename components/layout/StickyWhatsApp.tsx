import { Icon } from "@/components/ui/Icon";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

/** Tombol WhatsApp mengambang, selalu terlihat di semua halaman. */
export function StickyWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full p-1.5 glass-pill liquid-float-slow shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_rgba(37,211,102,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:bottom-8 sm:right-8"
      aria-label="Chat via WhatsApp"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform group-hover:rotate-6">
        <Icon name="whatsapp" size={24} />
      </div>
      <span className="hidden pr-3 text-xs font-semibold text-ink sm:inline-block">
        Tanya Teknisi
      </span>
    </a>
  );
}
