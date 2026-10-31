import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ServicePriceTable } from "@/components/sections/ServicePriceTable";
import { JsonLd } from "@/components/seo/JsonLd";
import { getModel } from "@/data/models";
import { getModelServicePages } from "@/data/modelServices";
import { posts } from "@/data/posts";
import { isPublishedPost } from "@/lib/publication";
import { PRICE_DISCLAIMER } from "@/data/prices";
import { getService, services } from "@/data/services";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { priceLabels } from "@/data/prices";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/layanan/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const modelPages = getModelServicePages(service.slug);
  const relatedPosts = posts.filter((p) => p.relatedServiceSlug === service.slug && isPublishedPost(p)).slice(0, 4);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <div className="pt-10">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Layanan", href: "/layanan" },
              { name: service.shortTitle, href: `/layanan/${service.slug}` },
            ]}
          />
        </Container>
      </div>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Icon name={service.icon} size={28} />
              </div>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
                {service.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={buildWhatsAppUrl(`Halo, saya mau tanya ${service.shortTitle.toLowerCase()}. `)} external icon="whatsapp">
                  Tanya via WhatsApp
                </Button>
                <Button href="/harga" variant="secondary">
                  Lihat semua harga
                </Button>
              </div>
              <p className="mt-5 text-muted">Kunjungi toko independen kami di <Link href="/lokasi/dipatiukur" className="text-accent underline">Jl. Dipati Ukur No.86 lantai 2, Bandung</Link>. Konfirmasikan model iPhone, stok komponen dan jadwal sebelum datang.</p>
            </div>

            {service.image && (
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-black/10 bg-mist shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <Section tone="mist">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-medium text-ink">Tanda-tanda kerusakan</h2>
            <ul className="mt-5 space-y-3">
              {service.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-3 text-muted">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium text-ink">Estimasi waktu</h2>
            <p className="mt-5 leading-relaxed text-muted">{service.duration}</p>
          </div>
        </div>
      </Section>

      {service.priceKey && (
        <Section tone="white">
          <SectionHeading
            title={`Harga ${priceLabels[service.priceKey].toLowerCase()}`}
            description={PRICE_DISCLAIMER}
          />
          <ServicePriceTable priceKey={service.priceKey} label={priceLabels[service.priceKey]} serviceSlug={service.slug} />
          {modelPages.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-ink">Detail harga per model</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {modelPages.map((p) => (
                  <li key={p.modelSlug}>
                    <Link
                      href={`/layanan/${service.slug}/${p.modelSlug}`}
                      className="glass-pill inline-flex rounded-full px-4 py-2 text-sm text-ink hover:text-accent"
                    >
                      {service.shortTitle} {getModel(p.modelSlug)?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      )}

      {relatedPosts.length > 0 && (
        <Section tone="white">
          <SectionHeading title="Artikel terkait" />
          <ul className="space-y-3">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-lg font-medium text-accent underline underline-offset-4">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <FaqSection faqs={service.faqs} title="Pertanyaan seputar layanan ini" />

      <ServiceGrid
        services={related}
        title="Layanan lain yang mungkin kamu perlukan"
        description=""
        tone="mist"
      />

      <CtaBanner
        title={`Butuh ${service.shortTitle.toLowerCase()} sekarang?`}
        whatsappMessage={`Halo, saya mau tanya ${service.shortTitle.toLowerCase()}. `}
      />
    </>
  );
}
