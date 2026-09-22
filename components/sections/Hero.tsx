import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>{siteConfig.address.city}, {siteConfig.address.region} • Spesialis Servis iPhone</span>
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl sm:leading-[1.05]">
              Service iPhone Bandung, tanpa tebak-tebakan harga.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              Diagnosa dulu, baru diputuskan. Kami cek kerusakan iPhone kamu secara gratis dan konfirmasi harganya sebelum mulai dikerjakan — mulai dari ganti baterai, LCD, port charger, kamera, hingga perbaikan mati total dan kena air.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)} external size="lg" icon="whatsapp">
                Konsultasi via WhatsApp
              </Button>
              <Button href="/harga" variant="secondary" size="lg">
                Lihat daftar harga
              </Button>
            </div>

            {/* Trust points */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-black/10 pt-6 sm:gap-6">
              <div className="flex items-center gap-2">
                <Icon name="check" size={18} className="shrink-0 text-accent" />
                <span className="text-xs font-medium text-ink sm:text-sm">Diagnosa 100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" size={18} className="shrink-0 text-accent" />
                <span className="text-xs font-medium text-ink sm:text-sm">Garansi Resmi Toko</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="clock" size={18} className="shrink-0 text-accent" />
                <span className="text-xs font-medium text-ink sm:text-sm">Bisa Ditunggu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent/20 to-transparent blur-2xl -z-10" />

              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-black/10 bg-mist shadow-2xl sm:aspect-[4/3]">
                <Image
                  src="/images/hero-repair.webp"
                  alt="Teknisi profesional membongkar dan memperbaiki iPhone dengan alat presisi di Bandung"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Warranty (top-right / floating) */}
              <div className="absolute -right-3 -top-4 rounded-2xl border border-black/10 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:-right-5 sm:top-4 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon name="shield" size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted">Garansi Servis</p>
                    <p className="text-sm font-semibold text-ink sm:text-base">Hingga 90 Hari</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Quick service (bottom-left / floating) */}
              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-black/10 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:-bottom-5 sm:left-4 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Icon name="clock" size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted">Pengerjaan Langsung</p>
                    <p className="text-sm font-semibold text-ink sm:text-base">15 – 30 Menit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
