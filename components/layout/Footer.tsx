import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/60 bg-mist/80 backdrop-blur-sm">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[17px] font-semibold text-ink">{siteConfig.name}</p>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-muted">
              {siteConfig.tagline}. Melayani {siteConfig.address.city} dan sekitarnya.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Layanan</p>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/layanan/${s.slug}`}
                    className="text-sm text-muted hover:text-ink hover:underline"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Perusahaan</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/harga" className="text-sm text-muted hover:text-ink hover:underline">
                  Daftar harga
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted hover:text-ink hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-muted hover:text-ink hover:underline">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Kontak</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Icon name="pin" size={16} className="mt-0.5 shrink-0" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}
                </span>
              </li>
              <li>{siteConfig.hoursLabel}</li>
              <li>{siteConfig.contact.phoneDisplay}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Bukan Apple Authorized Service Provider.
          </p>
          <p>Semua merek dagang adalah milik pemiliknya masing-masing.</p>
        </div>
      </Container>
    </footer>
  );
}
