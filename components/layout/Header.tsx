import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-30 glass-nav border-b border-black/5 bg-white/75 backdrop-blur-2xl transition-all">
      <div className="relative mx-auto flex h-16 max-w-[1080px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="text-[16px] font-bold tracking-[-0.025em] text-ink hover:opacity-85 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Navigasi utama" className="hidden sm:block">
          <ul className="flex items-center gap-1.5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative overflow-hidden flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13.5px] font-medium tracking-tight text-ink/75 transition-all hover:bg-white/80 hover:text-ink hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <Icon
                    name={item.icon}
                    size={14}
                    className="text-muted/80 transition-colors group-hover:text-accent"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden sm:block">
          <Button href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)} external size="md" icon="whatsapp">
            Chat WhatsApp
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
