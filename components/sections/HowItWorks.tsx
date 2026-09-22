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
        description="Empat langkah, tidak ada biaya kejutan di tengah jalan."
      />
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative rounded-3xl border border-black/5 bg-mist/60 p-7 transition-all duration-300 hover:bg-mist hover:shadow-sm"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white shadow-sm">
              {`0${i + 1}`}
            </span>
            <p className="mt-5 text-lg font-semibold text-ink">{step.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
