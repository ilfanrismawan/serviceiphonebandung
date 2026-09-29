import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function Highlights() {
  return (
    <Section tone="mist" labelledBy="highlights-heading">
      <h2 id="highlights-heading" className="sr-only">
        Kenapa memilih {siteConfig.name}
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.highlights.map((item) => (
          <div
            key={item.title}
            className="glass-card liquid-shimmer relative overflow-hidden rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Specular top line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="liquid-icon-glow flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Icon name={item.icon} size={22} />
            </div>
            <p className="mt-4 text-[17px] font-bold tracking-tight text-ink">{item.title}</p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted/90">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
