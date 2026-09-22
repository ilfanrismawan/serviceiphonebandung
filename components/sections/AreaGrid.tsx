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
          <Card key={area.slug} href={`/area/${area.slug}`} tone="white" className="p-6">
            <div className="flex items-center gap-2">
              <Icon name="pin" size={18} className="text-accent" />
              <span className="font-medium text-ink">{area.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
