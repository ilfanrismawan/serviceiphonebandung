"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

/** Menu mobile dengan icon dan deskripsi per item. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={open ? "Tutup menu" : "Buka menu"}
      >
        <Icon name={open ? "close" : "menu"} size={22} />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 z-30 glass-card rounded-none rounded-b-3xl border-t-0 px-4 pb-5 pt-3 shadow-2xl"
        >
          <nav aria-label="Navigasi utama">
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition-all hover:bg-accent/5"
                  >
                    {/* Icon container */}
                    <div className="liquid-icon-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon name={item.icon} size={20} />
                    </div>
                    {/* Label + description */}
                    <div>
                      <p className="text-[15px] font-semibold text-ink">{item.label}</p>
                      <p className="text-xs text-muted">{item.description}</p>
                    </div>
                    {/* Chevron */}
                    <Icon
                      name="chevron"
                      size={16}
                      className="ml-auto text-muted/50 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* WhatsApp CTA di bawah menu */}
          <div className="mt-3 border-t border-black/5 pt-3">
            <a
              href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-5 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-[#22c55e] hover:shadow-md active:scale-[0.98]"
            >
              <Icon name="whatsapp" size={19} />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
