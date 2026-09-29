import type { Metadata } from "next";
import { AreaGrid } from "@/components/sections/AreaGrid";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CostEstimator } from "@/components/sections/CostEstimator";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BeforeAfterShowcase } from "@/components/sections/BeforeAfterShowcase";
import { SparepartGuide } from "@/components/sections/SparepartGuide";
import { VideoEducation } from "@/components/sections/VideoEducation";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { WarrantyGuarantee } from "@/components/sections/WarrantyGuarantee";
import { siteConfig } from "@/config/site";
import { generalFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — Service iPhone Bandung Bergaransi`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "service iphone bandung",
    "servis iphone bandung",
    "ganti baterai iphone bandung",
    "ganti lcd iphone bandung",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <CostEstimator />
      <SparepartGuide />
      <ServiceGrid services={services} />
      <WarrantyGuarantee />
      <HowItWorks />
      <VideoEducation />
      <BeforeAfterShowcase />
      <Testimonials />
      <AreaGrid />
      <BlogPreview />
      <FaqSection faqs={generalFaqs} />
      <CtaBanner />
    </>
  );
}
