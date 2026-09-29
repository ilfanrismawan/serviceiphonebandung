import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Konsultasi",
    text: "Ceritakan kerusakannya lewat WhatsApp atau datang langsung ke toko.",
  },
  {
    title: "Diagnosa gratis",
    text: "Teknisi memeriksa iPhone kamu dan menjelaskan penyebabnya.",
  },
  {
    title: "Konfirmasi harga",
    text: "Kamu terima estimasi biaya dan waktu pengerjaan sebelum setuju.",
  },
  {
    title: "Pengerjaan",
    text: "Servis dikerjakan setelah kamu setuju, dengan garansi yang dijelaskan di awal.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="white" labelledBy="how-heading">
      <SectionHeading
        id="how-heading"
        title="Prosesnya sederhana"
        description="Empat langkah praktis, tanpa biaya kejutan di tengah jalan."
      />
      <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative overflow-hidden rounded-3xl glass-card p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="liquid-step-badge inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-xs font-bold text-white shadow-xs">
              {`0${i + 1}`}
            </span>
            <p className="mt-4 text-[17px] font-bold tracking-tight text-ink">{step.title}</p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted/90">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
