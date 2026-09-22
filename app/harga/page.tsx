import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CostEstimator } from "@/components/sections/CostEstimator";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { PriceTable } from "@/components/sections/PriceTable";
import { siteConfig } from "@/config/site";
import { PRICE_DISCLAIMER } from "@/data/prices";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Harga Service iPhone ${siteConfig.address.city}`,
  description:
    "Daftar harga service iPhone di Bandung: ganti baterai, LCD, port charger, dan kamera untuk semua model dari iPhone XR sampai iPhone 16.",
  path: "/harga",
  keywords: ["harga service iphone bandung", "biaya ganti lcd iphone bandung", "harga ganti baterai iphone bandung"],
});

const priceFaqs = [
  {
    question: "Kenapa ada tulisan “Hubungi kami” di beberapa harga?",
    answer:
      "Beberapa kombinasi model dan jenis kerusakan perlu dicek langsung karena ketersediaan part bisa berubah. Kirim pesan WhatsApp untuk estimasi tercepat.",
  },
  {
    question: "Apakah harga ini final?",
    answer:
      "Harga di halaman ini adalah estimasi mulai dari untuk model dasar. Harga final disampaikan setelah diagnosa dan hanya dikerjakan setelah kamu setuju.",
  },
];

export default function HargaPage() {
  return (
    <>
      <div className="pt-10">
        <Container>
          <Breadcrumbs items={[{ name: "Harga", href: "/harga" }]} />
        </Container>
      </div>

      <section className="pb-12 sm:pb-16">
        <Container>
          <SectionHeading
            as="h1"
            title="Daftar harga service iPhone"
            description={PRICE_DISCLAIMER}
          />
        </Container>
      </section>

      <CostEstimator />

      <Section tone="white" className="pt-0 sm:pt-0">
        <PriceTable />
      </Section>

      <FaqSection faqs={priceFaqs} title="Tentang harga" />
      <CtaBanner title="Butuh estimasi lebih pasti?" description="Kirim model iPhone dan keluhannya, kami balas cepat." />
    </>
  );
}
