import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-20">
      {/* Ambient aurora glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400/25 via-cyan-300/15 to-transparent blur-3xl liquid-aurora" />
      <div className="pointer-events-none absolute -top-20 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-gradient-to-bl from-indigo-400/20 via-accent/15 to-transparent blur-3xl liquid-aurora-delayed" />
      <div className="pointer-events-none absolute top-1/4 right-1/3 h-[420px] w-[420px] rounded-full bg-gradient-to-b from-amber-400/15 via-orange-300/10 to-transparent blur-3xl liquid-aurora-slow" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-400/15 to-transparent blur-3xl liquid-aurora-slow" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7">
            {/* Location badge — glass pill */}
            <div className="glass-pill inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-semibold text-accent shadow-xs border border-accent/25">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>{siteConfig.address.city}, {siteConfig.address.region} • Spesialis Servis iPhone</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-ink sm:text-6xl sm:leading-[1.04]">
              Service iPhone Bandung, tanpa tebak-tebakan harga.
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg sm:leading-relaxed">
              Diagnosa dulu, baru diputuskan. Kami cek kerusakan iPhone kamu secara gratis dan konfirmasi harganya sebelum mulai dikerjakan — mulai dari ganti baterai, LCD, port charger, kamera, hingga perbaikan mati total dan kena air.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={buildWhatsAppUrl(DEFAULT_WA_MESSAGE)} external size="lg" icon="whatsapp">
                Konsultasi via WhatsApp
              </Button>
              <Button href="/harga" variant="glass" size="lg">
                Lihat daftar harga
              </Button>
            </div>

            {/* Trust points */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-black/8 pt-6 sm:gap-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon name="check" size={15} />
                </div>
                <span className="text-xs font-medium tracking-tight text-ink sm:text-sm">Diagnosa 100% Gratis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon name="shield" size={15} />
                </div>
                <span className="text-xs font-medium tracking-tight text-ink sm:text-sm">Garansi Resmi Toko</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon name="clock" size={15} />
                </div>
                <span className="text-xs font-medium tracking-tight text-ink sm:text-sm">Bisa Ditunggu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/25 via-blue-300/10 to-transparent blur-3xl -z-10" />

              {/* Main Image Frame — glass border */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/80 bg-mist shadow-2xl ring-1 ring-black/5 sm:aspect-[4/3]">
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
                {/* Specular top-edge highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              </div>

              {/* Floating Badge 1: Warranty — glass-card style */}
              <div className="glass-card liquid-float absolute -right-3 -top-4 rounded-2xl p-3.5 sm:-right-5 sm:top-4 sm:p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="liquid-icon-glow flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon name="shield" size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted">Garansi Servis</p>
                    <p className="text-sm font-semibold tracking-tight text-ink sm:text-base">Hingga 90 Hari</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Quick service — glass-card style */}
              <div className="glass-card liquid-float-delayed absolute -bottom-5 -left-3 rounded-2xl p-3.5 sm:-bottom-5 sm:left-4 sm:p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="liquid-icon-glow flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Icon name="clock" size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted">Pengerjaan Langsung</p>
                    <p className="text-sm font-semibold tracking-tight text-ink sm:text-base">15 – 30 Menit</p>
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
