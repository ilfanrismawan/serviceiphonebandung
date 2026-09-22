import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function Highlights() {
  return (
    <Section tone="mist" labelledBy="highlights-heading">
      <h2 id="highlights-heading" className="sr-only">
        Kenapa memilih {siteConfig.name}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Icon name={item.icon} size={24} />
            </div>
            <p className="mt-5 text-lg font-semibold text-ink">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
