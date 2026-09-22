import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqSchema } from "@/lib/schema";
import type { Faq } from "@/types";

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
  description?: string;
  tone?: "white" | "mist";
}

export function FaqSection({
  faqs,
  title = "Pertanyaan yang sering ditanyakan",
  description,
  tone = "mist",
}: FaqSectionProps) {
  return (
    <Section tone={tone} labelledBy="faq-heading" size="narrow">
      <JsonLd data={faqSchema(faqs)} />
      <SectionHeading id="faq-heading" title={title} description={description} />
      <Accordion items={faqs} />
    </Section>
  );
}
