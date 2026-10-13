import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const guarantees = [
  {
    icon: "shield" as const,
    title: "Privasi Data 100% Aman",
    description:
      "Data foto, video, dan chat pribadi kamu tidak akan disentuh atau di-reset. Kami tidak meminta passcode lockscreen jika pengerjaan tidak membutuhkannya.",
    tag: "Aman & Rahasia",
  },
  {
    icon: "search" as const,
    title: "Meja Servis Transparan",
    description:
      "Pengerjaan bisa ditonton langsung di depan mata. Tidak ada part yang ditukar atau diutak-atik di luar kesepakatan awal.",
    tag: "Bisa Ditunggu",
  },
  {
    icon: "check" as const,
    title: "Garansi Servis 2–3 Bulan",
    description:
      "Garansi 2–3 bulan. Konfirmasikan durasi, cakupan dan pengecualian untuk jenis perbaikan Anda sebelum pengerjaan.",
    tag: "Garansi 2–3 Bulan",
  },
  {
    icon: "tag" as const,
    title: "No Fix, No Fee (Diagnosa Rp 0)",
    description:
      "Semua pengecekan awal gratis. Jika setelah dicek kamu memutuskan tidak lanjut servis atau kerusakan tidak terselesaikan, biaya tetap Rp 0.",
    tag: "100% Free Diagnosa",
  },
];

export function WarrantyGuarantee() {
  return (
    <Section tone="mist" labelledBy="guarantee-heading">
      <SectionHeading
        id="guarantee-heading"
        title="4 Jaminan Kepastian untuk iPhone Kamu"
        description="Kami mengerti kekhawatiran kamu saat menyerahkan iPhone ke tempat servis. Ini komitmen tertulis kami."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guarantees.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between rounded-3xl glass-card liquid-shimmer overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="liquid-icon-glow flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon name={item.icon} size={24} />
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                  {item.tag}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>

            <div className="mt-6 flex items-center gap-1.5 border-t border-black/5 pt-4 text-xs font-semibold text-accent">
              <Icon name="check" size={15} />
              <span>Komitmen Resmi Toko</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
