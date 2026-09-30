import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

interface CtaBannerProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
}

export function CtaBanner({
  title = "iPhone kamu bermasalah?",
  description = "Kirim foto atau ceritakan gejalanya, kami bantu cek dulu tanpa biaya.",
  whatsappMessage = DEFAULT_WA_MESSAGE,
}: CtaBannerProps) {
  return (
    <Section tone="white">
      <div className="glass-dark liquid-shimmer-dark relative overflow-hidden flex flex-col items-start gap-8 rounded-[2.5rem] border border-white/20 p-8 sm:p-14 sm:flex-row sm:items-center sm:justify-between shadow-2xl">
        {/* Specular top rim */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Subtle decorative background glows */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl liquid-glow-pulse" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl liquid-glow-pulse" />

        <div className="relative z-10 max-w-lg">
          <div className="glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-white/95 mb-4 border border-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Teknisi Siap Melayani di Bandung</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-pretty text-[15px] sm:text-base leading-relaxed text-white/80">
            {description}
          </p>
        </div>

        <div className="relative z-10">
          <Button href={buildWhatsAppUrl(whatsappMessage)} external variant="inverse" size="lg" icon="whatsapp">
            Chat sekarang
          </Button>
        </div>
      </div>
    </Section>
  );
}
