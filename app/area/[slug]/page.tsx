import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { getArea, areas } from "@/data/areas";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return buildMetadata({
    title: `Service iPhone ${area.name} — ${siteConfig.address.city}`,
    description: `Service iPhone terdekat untuk pelanggan di ${area.name} dan sekitarnya. ${area.intro}`,
    path: `/area/${area.slug}`,
    noIndex: true, // Preserve URLs while withholding thin area templates from indexing.
    keywords: [`service iphone ${area.name.toLowerCase()}`, `service iphone dekat ${area.name.toLowerCase()}`],
  });
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <div className="pt-10">
        <Container>
          <Breadcrumbs items={[{ name: area.name, href: `/area/${area.slug}` }]} />
        </Container>
      </div>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Service iPhone {area.name}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">{area.intro}</p>
            <p className="mt-3 text-[15px] text-muted">
              Area sekitar: {area.landmarks.join(", ")}.
            </p>
            <div className="mt-8">
              <Button href={buildWhatsAppUrl(`Halo, saya dari sekitar ${area.name}, mau tanya service iPhone. `)} external icon="whatsapp">
                Chat via WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ServiceGrid services={services} tone="mist" />
      <CtaBanner />
    </>
  );
}
