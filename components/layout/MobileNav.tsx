"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

/** Menu mobile minimal: satu checkbox tersembunyi mengatur state buka/tutup. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={open ? "Tutup menu" : "Buka menu"}
      >
        <Icon name={open ? "close" : "menu"} size={22} />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 z-30 border-t border-black/5 bg-white/95 px-5 py-6 backdrop-blur"
        >
          <nav aria-label="Navigasi utama">
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-lg font-medium text-ink hover:bg-mist"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
