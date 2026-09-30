import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ServiceItem } from "@/types";

interface ServiceGridProps {
  services: ServiceItem[];
  title?: string;
  description?: string;
  tone?: "white" | "mist";
}

export function ServiceGrid({
  services,
  title = "Layanan yang kami tangani",
  description = "Setiap kerusakan dicek dulu sebelum ada tindakan atau biaya.",
  tone = "white",
}: ServiceGridProps) {
  return (
    <Section tone={tone} labelledBy="services-heading">
      <SectionHeading id="services-heading" title={title} description={description} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug} href={`/layanan/${service.slug}`} tone="glass">
            {service.image && (
              <div className="relative mb-5 -mx-1 -mt-1 aspect-[16/10] overflow-hidden rounded-2xl bg-black/5 border border-white/60 shadow-inner">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="liquid-glass-pill absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl text-accent shadow-md">
                  <Icon name={service.icon} size={18} />
                </div>
              </div>
            )}
            {!service.image && <Icon name={service.icon} size={24} className="text-accent" />}
            <p className="mt-2 text-[17px] font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
              {service.shortTitle}
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted line-clamp-2">
              {service.tagline}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-tight text-accent">
              Lihat detail &amp; estimasi
              <Icon name="chevron" size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
