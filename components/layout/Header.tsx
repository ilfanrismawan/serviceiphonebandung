import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-3.5 z-40 mx-auto max-w-[1080px] px-3 sm:px-6 transition-all">
      <div className="glass-card flex h-14 items-center justify-between rounded-full px-5 sm:px-6 border border-white/80 bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <Link
          href="/"
          className="text-[15px] font-bold tracking-[-0.025em] text-ink hover:opacity-85 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Navigasi utama" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative overflow-hidden flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium tracking-tight text-ink/75 transition-all hover:bg-black/[0.05] hover:text-ink"
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
