import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section tone="white" labelledBy="testimonials-heading">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end mb-10 sm:mb-14">
        <SectionHeading
          id="testimonials-heading"
          title="Dipercaya Ratusan Pengguna iPhone di Bandung"
          description="Ulasan nyata dari pelanggan yang sudah membuktikan kecepatan dan kejujuran servis kami."
          className="mb-0 max-w-2xl"
        />

        {/* Google Rating Badge */}
        <div className="inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-mist px-4 py-3 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xs font-bold text-lg text-amber-500">
            ★
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-ink">4.9 / 5.0</span>
              <span className="text-xs text-muted">(350+ Ulasan)</span>
            </div>
            <p className="text-xs font-medium text-muted">Google Maps Bandung</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-3xl border border-black/5 bg-mist/50 p-6 shadow-xs transition-all duration-300 hover:bg-mist hover:shadow-sm"
          >
            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-base">★</span>
                ))}
              </div>

              {/* Service & Model Pill */}
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                <span>{item.model}</span>
                <span>•</span>
                <span>{item.service}</span>
              </div>

              {/* Comment */}
              <p className="mt-3 text-sm leading-relaxed text-ink/90 italic">
                &ldquo;{item.comment}&rdquo;
              </p>
            </div>

            {/* Author details */}
            <div className="mt-6 border-t border-black/5 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-ink">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}, {item.location}</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600" title="Pelanggan Terverifikasi">
                  <Icon name="check" size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
