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
      <div className="relative overflow-hidden flex flex-col items-start gap-8 rounded-[2.5rem] glass-dark px-8 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-14">
        {/* Subtle decorative background glows */}
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/25 blur-3xl pointer-events-none liquid-glow-pulse" />
        <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl pointer-events-none liquid-glow-pulse" />

        <div className="relative z-10 max-w-lg">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Teknisi Siap Melayani di Bandung</span>
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-white/70">
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
