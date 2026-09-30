import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { areas } from "@/data/areas";
import { siteConfig } from "@/config/site";

export function AreaGrid() {
  return (
    <Section tone="mist" labelledBy="areas-heading">
      <SectionHeading
        id="areas-heading"
        title={`Melayani seluruh ${siteConfig.address.city}`}
        description="Konsultasi lewat WhatsApp lebih dulu, dari mana pun lokasi kamu."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {areas.map((area) => (
          <Card key={area.slug} href={`/area/${area.slug}`} tone="glass" className="p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="liquid-icon-glow flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name="pin" size={16} />
              </div>
              <span className="text-[14px] sm:text-[15px] font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                {area.name}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
