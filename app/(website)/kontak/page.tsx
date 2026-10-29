import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontak & Lokasi Dipati Ukur, Bandung",
  description: `Alamat, jam buka, dan kontak WhatsApp ${siteConfig.name} di ${siteConfig.address.city}.`,
  path: "/kontak",
});

const rows: { icon: "pin" | "clock" | "whatsapp"; label: string; value: string; href?: string }[] = [
  {
    icon: "pin",
    label: "Alamat",
    value: `${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
    href: siteConfig.address.mapsUrl,
  },
  { icon: "clock", label: "Jam buka", value: siteConfig.hoursLabel },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: siteConfig.contact.phoneDisplay,
    href: buildWhatsAppUrl(DEFAULT_WA_MESSAGE),
  },
];

export default function KontakPage() {
  return (
    <section className="pb-20 pt-10 sm:pb-28">
      <Container>
        <Breadcrumbs items={[{ name: "Kontak", href: "/kontak" }]} />

        <div className="mt-4 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Kontak &amp; lokasi
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
              Konsultasi dulu lewat WhatsApp, atau datang langsung ke toko servis kami di Bandung. Tim teknisi kami siap membantu cek kondisi iPhone kamu.
            </p>

            <dl className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {rows.map((row) => (
                <div key={row.label} className="flex items-start gap-4 py-5">
                  <Icon name={row.icon} size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-sm text-muted">{row.label}</dt>
                    {row.href ? (
                      <dd className="mt-1">
                        <a
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-ink hover:text-accent hover:underline"
                        >
                          {row.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="mt-1 text-lg font-medium text-ink">{row.value}</dd>
                    )}
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <Button href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)} external size="lg" icon="whatsapp">
                Chat via WhatsApp
              </Button>
              <div className="mt-4"><Button href={siteConfig.address.mapsUrl} external icon="pin">Petunjuk arah ke toko</Button></div>
              <p className="mt-4 text-muted">Jam buka perlu konfirmasi pemilik. <a href="/lokasi/dipatiukur" className="text-accent underline">Panduan kunjungan ke Dipatiukur</a>.</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-mist shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/workshop-bandung.webp"
                  alt="Workshop dan ruang servis teknisi iPhone di Bandung"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>{siteConfig.hoursLabel} (perlu konfirmasi)</span>
                </div>
                <p className="mt-2 text-sm text-muted">
                  Ruang tunggu nyaman dengan meja periksa transparan. Kamu bisa melihat langsung proses pengecekan gadget kamu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
