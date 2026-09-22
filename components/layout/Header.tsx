import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-[1080px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="text-[17px] font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Navigasi utama" className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-ink/80 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden sm:block">
          <Button href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)} external icon="whatsapp">
            Chat WhatsApp
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
