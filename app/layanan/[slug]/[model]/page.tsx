import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Table } from "@/components/ui/Table";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getModel } from "@/data/models";
import { getModelServicePage, modelServicePages } from "@/data/modelServices";
import { getPost } from "@/data/posts";
import { getDetailedPrice, PROMO_SUBTITLE, type DetailedPrice } from "@/data/prices";
import { getService } from "@/data/services";
import { formatRupiah } from "@/lib/format";
import { isPublishedPost } from "@/lib/publication";
import { modelServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface PageProps {
  params: Promise<{ slug: string; model: string }>;
}

// Hanya kombinasi di data/modelServices.ts; model lain 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return modelServicePages.map((p) => ({ slug: p.serviceSlug, model: p.modelSlug }));
}

type PriceField = "battery" | "lcdGradeA" | "lcdOled" | "lcdGenuine";

const priceOptions: Record<"baterai" | "lcd", { field: PriceField; label: string }[]> = {
  baterai: [{ field: "battery", label: "Baterai" }],
  lcd: [
    { field: "lcdGradeA", label: "LCD (Grade A)" },
    { field: "lcdOled", label: "LCD (Oled Plus)" },
    { field: "lcdGenuine", label: "LCD (Genuine/Asli)" },
  ],
};

const appleSources = {
  partsHistory: { title: "Apple — iPhone Parts and Service History", url: "https://support.apple.com/en-us/102658" },
  battery: { title: "Apple — iPhone battery and performance", url: "https://support.apple.com/en-us/101575" },
};

/** Ganti placeholder {battery}, {lcdGradeA}, dst. dengan harga terformat. */
function fillPrices(text: string, price: DetailedPrice) {
  return text.replace(/\{(battery|lcdGradeA|lcdOled|lcdGenuine)\}/g, (_, field: PriceField) => {
    const value = price[field];
    return value ? formatRupiah(value) : "hubungi kami";
  });
}

function resolve(slug: string, modelSlug: string) {
  const page = getModelServicePage(slug, modelSlug);
  const service = getService(slug);
  const model = getModel(modelSlug);
  const price = getDetailedPrice(modelSlug);
  const priceKey = service?.priceKey;
  if (!page || !service || !model || !price || (priceKey !== "baterai" && priceKey !== "lcd")) return undefined;

  const options = priceOptions[priceKey]
    .map((o) => ({ ...o, value: price[o.field] }))
    .filter((o): o is typeof o & { value: number } => typeof o.value === "number" && o.value > 0);
  const title = service.title.replace("iPhone", model.name);
  const priceText =
    priceKey === "baterai"
      ? formatRupiah(options[0].value)
      : options.map((o) => `${o.label.replace(/^LCD \((.*)\)$/, "$1")} ${formatRupiah(o.value)}`).join(", ");
  const description = `${service.shortTitle} ${model.name} di Bandung, harga part ${priceText}, belum termasuk pemasangan. ${page.summary}`;

  return { page, service, model, price, priceKey, options, title, description, path: `/layanan/${slug}/${modelSlug}` };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, model } = await params;
  const data = resolve(slug, model);
  if (!data) return {};

  const minPrice = Math.min(...data.options.map((o) => o.value));
  return buildMetadata({
    title: `${data.title}, Harga Part ${data.priceKey === "lcd" ? "Mulai " : ""}${formatRupiah(minPrice)}`,
    description: data.description,
    path: data.path,
    keywords: data.page.keywords,
  });
}

export default async function ModelServicePage({ params }: PageProps) {
  const { slug, model: modelSlug } = await params;
  const data = resolve(slug, modelSlug);
  if (!data) notFound();

  const { page, service, model, price, priceKey, options, title, description, path } = data;
  // "Ganti LCD" -> "ganti LCD": kecilkan huruf pertama saja agar singkatan tetap kapital.
  const action = service.shortTitle.charAt(0).toLowerCase() + service.shortTitle.slice(1);
  const waMessage = `Halo, saya mau ${action} ${model.name}. `;
  const faqs = page.faqs.map((f) => ({ ...f, answer: fillPrices(f.answer, price) }));
  const relatedPost = page.relatedPostSlug ? getPost(page.relatedPostSlug) : undefined;
  const sources = priceKey === "baterai" ? [appleSources.partsHistory, appleSources.battery] : [appleSources.partsHistory];

  const familyRows = page.relatedModelSlugs.flatMap((s) => {
    const p = getDetailedPrice(s);
    if (!p) return [];
    const hasPage = Boolean(getModelServicePage(service.slug, s));
    const name =
      s === model.slug ? (
        <span>{p.name} (halaman ini)</span>
      ) : hasPage ? (
        <Link href={`/layanan/${service.slug}/${s}`} className="text-accent underline">
          {p.name}
        </Link>
      ) : (
        p.name
      );
    return [[name, ...priceOptions[priceKey].map((o) => (p[o.field] ? formatRupiah(p[o.field] as number) : "—"))]];
  });

  const otherPages = modelServicePages.filter(
    (p) => !(p.serviceSlug === service.slug && p.modelSlug === model.slug) && (p.serviceSlug === service.slug || p.modelSlug === model.slug),
  );

  return (
    <>
      <JsonLd data={modelServiceSchema(service, { name: title, description, path })} />
      <div className="pt-10">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Layanan", href: "/layanan" },
              { name: service.shortTitle, href: `/layanan/${service.slug}` },
              { name: model.name, href: path },
            ]}
          />
        </Container>
      </div>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Icon name={service.icon} size={28} />
              </div>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">{page.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={buildWhatsAppUrl(waMessage)} external icon="whatsapp">
                  Tanya stok & total biaya
                </Button>
                <Button href={`/layanan/${service.slug}`} variant="secondary">
                  {service.shortTitle} model lain
                </Button>
              </div>
              <p className="mt-5 text-muted">
                Kunjungi toko independen kami di{" "}
                <Link href="/lokasi/dipatiukur" className="text-accent underline">
                  Jl. Dipati Ukur No.86 lantai 2, Bandung
                </Link>
                . Konfirmasikan stok komponen dan jadwal sebelum datang.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl glass-card border border-white/80 p-6 shadow-xl sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">Harga part {model.name}</p>
                <dl className="mt-4 divide-y divide-black/5">
                  {options.map((o) => (
                    <div key={o.field} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-ink">{o.label}</dt>
                      <dd className="text-xl font-semibold tabular-nums text-ink">{formatRupiah(o.value)}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <Icon name="receipt" size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>Harga part, belum termasuk biaya pemasangan. Total biaya disampaikan dan disetujui sebelum dikerjakan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{service.duration}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{PROMO_SUBTITLE}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="mist">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-medium text-ink">Tanda {model.name} perlu {action}</h2>
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
            <h2 className="text-xl font-medium text-ink">Yang perlu kamu tahu tentang {model.name}</h2>
            <ul className="mt-5 space-y-3">
              {page.notes.map((n) => (
                <li key={n} className="flex items-start gap-3 text-muted">
                  <Icon name="search" size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">
              Sumber:{" "}
              {sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && "; "}
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
                    {s.title}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          title={`Harga ${action} ${model.name} dan model sekeluarga`}
          description="Harga part, belum termasuk biaya pemasangan. Stok bisa berubah, konfirmasikan lewat WhatsApp."
        />
        <Table
          caption={`Harga part ${action} ${model.name} dan model sekeluarga di Bandung`}
          headers={["Model iPhone", ...priceOptions[priceKey].map((o) => o.label)]}
          rows={familyRows}
        />
        {relatedPost && isPublishedPost(relatedPost) && (
          <p className="mt-8 text-muted">
            Baca juga:{" "}
            <Link href={`/blog/${relatedPost.slug}`} className="text-accent underline">
              {relatedPost.title}
            </Link>
          </p>
        )}
      </Section>

      <FaqSection faqs={faqs} title={`Pertanyaan seputar ${action} ${model.name}`} />

      {otherPages.length > 0 && (
        <Section tone="white">
          <h2 className="text-xl font-medium text-ink">Halaman harga per model lainnya</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {otherPages.map((p) => {
              const s = getService(p.serviceSlug);
              const m = getModel(p.modelSlug);
              if (!s || !m) return null;
              return (
                <li key={`${p.serviceSlug}/${p.modelSlug}`}>
                  <Link
                    href={`/layanan/${p.serviceSlug}/${p.modelSlug}`}
                    className="glass-pill inline-flex rounded-full px-4 py-2 text-sm text-ink hover:text-accent"
                  >
                    {s.shortTitle} {m.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      <CtaBanner title={`Mau ${action} ${model.name}?`} whatsappMessage={waMessage} />
    </>
  );
}
