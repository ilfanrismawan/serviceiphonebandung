import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `Layanan Service iPhone ${siteConfig.address.city}`,
  description:
    "Semua layanan service iPhone di Bandung: ganti baterai, LCD, port charger, kamera, iPhone mati total, dan kena air. Diagnosa gratis sebelum dikerjakan.",
  path: "/layanan",
});

export default function LayananPage() {
  return (
    <>
      <div className="pt-10">
        <Container>
          <Breadcrumbs items={[{ name: "Layanan", href: "/layanan" }]} />
        </Container>
      </div>
      <ServiceGrid
        services={services}
        title="Layanan Service iPhone Bandung"
        headingAs="h1"
        description="Pilih jenis kerusakan iPhone kamu untuk lihat detail, gejala, dan estimasi harga."
        tone="white"
      />
      <CtaBanner />
    </>
  );
}
