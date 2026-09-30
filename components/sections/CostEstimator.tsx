"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { models } from "@/data/models";
import { getDetailedPrice, priceBook } from "@/data/prices";
import { formatRupiah } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { PriceKey } from "@/types";

interface IssueOption {
  id: PriceKey | "kena-air" | "mati-total";
  name: string;
  duration: string;
  warranty: string;
  description: string;
}

const issueOptions: IssueOption[] = [
  {
    id: "lcd",
    name: "Ganti Layar / LCD (Pecah/Garis/Blank)",
    duration: "20 – 45 Menit",
    warranty: "Garansi Toko",
    description: "Tersedia 3 opsi kualitas: LCD Grade A, LCD OLED Plus, dan LCD Genuine / Asli.",
  },
  {
    id: "baterai",
    name: "Ganti Baterai (Boros/Drop/Kembung)",
    duration: "15 – 30 Menit",
    warranty: "Garansi Toko",
    description: "Penggantian cell baterai baru berkapasitas 100% stabil dan bergaransi.",
  },
  {
    id: "charger",
    name: "Konektor Charger (Tidak Mengisi/Longgar)",
    duration: "20 – 40 Menit",
    warranty: "60 Hari",
    description: "Pembersihan jalur pin atau penggantian flexibel konektor charger baru.",
  },
  {
    id: "kamera",
    name: "Kamera Belakang (Getar / Buram / Blank)",
    duration: "30 – 60 Menit",
    warranty: "60 Hari",
    description: "Penggantian modul sensor kamera belakang bergaransi resmi toko.",
  },
  {
    id: "speaker",
    name: "Speaker Atas / Bawah (Kresek / Mati / Kecil)",
    duration: "20 – 40 Menit",
    warranty: "60 Hari",
    description: "Pembersihan mesh atau penggantian modul speaker earpiece dan buzzer bawah.",
  },
  {
    id: "kena-air",
    name: "Terkena Air / Hujan (Water Damage)",
    duration: "1 – 3 Jam",
    warranty: "30 – 60 Hari",
    description: "Pembersihan ultrasonic kimia antikorosi dan pengeringan jalur sirkuit PCB.",
  },
  {
    id: "mati-total",
    name: "Mati Total / Stuck Logo Apple / Konslet",
    duration: "Diagnosa 1 – 2 Jam",
    warranty: "60 Hari",
    description: "Pemeriksaan jalur tegangan IC power, NAND flash, dan micro-soldering mesin.",
  },
];

export function CostEstimator() {
  const [selectedModelSlug, setSelectedModelSlug] = useState<string>("iphone-13");
  const [selectedIssueId, setSelectedIssueId] = useState<IssueOption["id"]>("lcd");

  const selectedModel = useMemo(
    () => models.find((m) => m.slug === selectedModelSlug) ?? models[0],
    [selectedModelSlug]
  );

  const selectedIssue = useMemo(
    () => issueOptions.find((i) => i.id === selectedIssueId) ?? issueOptions[0],
    [selectedIssueId]
  );

  const detail = useMemo(() => getDetailedPrice(selectedModelSlug), [selectedModelSlug]);

  // Determine estimated price
  const estimatedPrice = useMemo(() => {
    if (selectedIssueId === "kena-air") {
      return "Mulai Rp 200.000";
    }
    if (selectedIssueId === "mati-total") {
      return "Diagnosa Gratis (Biaya setelah cek)";
    }

    const price = priceBook[selectedModelSlug]?.[selectedIssueId as PriceKey];
    if (price) {
      return `Mulai ${formatRupiah(price)}`;
    }
    return "Hubungi Teknisi";
  }, [selectedModelSlug, selectedIssueId]);

  const whatsappMessage = `Halo Flow Service Bandung, saya mau konsultasi servis ${selectedModel.name} untuk keluhan ${selectedIssue.name}. Estimasi biaya: ${estimatedPrice}. Apakah part-nya ready?`;

  return (
    <Section tone="white" labelledBy="estimator-heading">
      <SectionHeading
        id="estimator-heading"
        title="Kalkulator Estimasi Biaya & Waktu"
        description="Pilih tipe iPhone dan kerusakan kamu untuk melihat perkiraan harga dan lama pengerjaan secara instan."
      />

      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl glass-card shadow-xl lg:grid lg:grid-cols-12">
        {/* Left Column: Input Selectors */}
        <div className="p-6 sm:p-10 lg:col-span-7">
          <div className="space-y-6">
            {/* Step 1: Model Selection */}
            <div>
              <label htmlFor="model-select" className="block text-sm font-semibold text-ink">
                1. Pilih Model iPhone Kamu
              </label>
              <div className="relative mt-2">
                <select
                  id="model-select"
                  value={selectedModelSlug}
                  onChange={(e) => setSelectedModelSlug(e.target.value)}
                  className="w-full appearance-none rounded-2xl liquid-input px-4 py-3.5 pr-10 text-base font-medium text-ink transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  {models.map((m) => (
                    <option key={m.slug} value={m.slug}>
                      {m.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-muted">
                  <Icon name="chevron" size={18} className="rotate-90" />
                </div>
              </div>
            </div>

            {/* Step 2: Issue Selection */}
            <div>
              <label htmlFor="issue-select" className="block text-sm font-semibold text-ink">
                2. Pilih Masalah / Kerusakan
              </label>
              <div className="relative mt-2">
                <select
                  id="issue-select"
                  value={selectedIssueId}
                  onChange={(e) => setSelectedIssueId(e.target.value as IssueOption["id"])}
                  className="w-full appearance-none rounded-2xl liquid-input px-4 py-3.5 pr-10 text-base font-medium text-ink transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  {issueOptions.map((issue) => (
                    <option key={issue.id} value={issue.id}>
                      {issue.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-muted">
                  <Icon name="chevron" size={18} className="rotate-90" />
                </div>
              </div>
            </div>

            {/* Issue quick note */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-4">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider">Detail Penanganan</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/80">{selectedIssue.description}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Output Estimasi Card */}
        <div className="flex flex-col justify-between border-t border-black/8 bg-white/80 backdrop-blur-xl p-6 sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Diagnosa Awal Gratis
            </span>

            <p className="mt-4 text-xs font-medium text-muted">Estimasi Biaya Servis</p>
            <p className="mt-1 text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
              {estimatedPrice}
            </p>

            {selectedIssueId === "lcd" && detail && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {detail.lcdGradeA && (
                  <span className="rounded-lg bg-mist px-2.5 py-1 text-[11px] font-medium text-ink">
                    Grade A: {formatRupiah(detail.lcdGradeA)}
                  </span>
                )}
                {detail.lcdOled && (
                  <span className="rounded-lg bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                    OLED Plus: {formatRupiah(detail.lcdOled)}
                  </span>
                )}
                {detail.lcdGenuine && (
                  <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    Genuine: {formatRupiah(detail.lcdGenuine)}
                  </span>
                )}
              </div>
            )}

            {selectedIssueId === "baterai" && detail && detail.battery && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg bg-mist px-2.5 py-1 text-[11px] font-medium text-ink">
                  Baterai: {formatRupiah(detail.battery)}
                </span>
              </div>
            )}

            {selectedIssueId === "kamera" && detail && detail.cameraBack && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg bg-mist px-2.5 py-1 text-[11px] font-medium text-ink">
                  Kamera Belakang: {formatRupiah(detail.cameraBack)}
                </span>
              </div>
            )}

            {selectedIssueId === "charger" && detail && detail.charger && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg bg-mist px-2.5 py-1 text-[11px] font-medium text-ink">
                  Konektor Charger: {formatRupiah(detail.charger)}
                </span>
              </div>
            )}

            {selectedIssueId === "speaker" && detail && detail.speaker && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg bg-mist px-2.5 py-1 text-[11px] font-medium text-ink">
                  Speaker: {formatRupiah(detail.speaker)}
                </span>
              </div>
            )}

            <div className="mt-6 space-y-3.5 border-t border-black/10 pt-5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted">
                  <Icon name="clock" size={16} className="text-accent" />
                  Waktu Pengerjaan
                </span>
                <span className="font-semibold text-ink">{selectedIssue.duration}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted">
                  <Icon name="shield" size={16} className="text-accent" />
                  Garansi Toko
                </span>
                <span className="font-semibold text-ink">{selectedIssue.warranty}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted">
                  <Icon name="check" size={16} className="text-accent" />
                  Keamanan Data
                </span>
                <span className="font-semibold text-emerald-600">Tanpa Reset iPhone</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              href={buildWhatsAppUrl(whatsappMessage)}
              external
              size="lg"
              className="w-full justify-center"
              icon="whatsapp"
            >
              Klaim Estimasi via WA
            </Button>
            <p className="mt-2.5 text-center text-[11px] text-muted leading-tight">
              Biaya pasti disepakati di awal sebelum alat dibongkar. Tanpa biaya tersembunyi.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
