"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface LcdTier {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  warranty: string;
  panel: string;
  trueTone: string;
  touchResponse: string;
  iosNotification: string;
  bestFor: string;
  highlight?: boolean;
}

const lcdTiers: LcdTier[] = [
  {
    id: "hd",
    name: "Tipe HD+",
    tag: "Paling Hemat",
    tagColor: "bg-zinc-100 text-zinc-700 border-zinc-200",
    warranty: "2–3 Bulan (konfirmasi per layanan)",
    panel: "IPS LCD Standar",
    trueTone: "Bisa dipindahkan",
    touchResponse: "60Hz Standar",
    iosNotification: "Ada pesan informasi part",
    bestFor: "Budget hemat atau iPhone seri lama untuk pemakaian harian.",
  },
  {
    id: "fhd",
    name: "Tipe FHD",
    tag: "Value Terbaik",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    warranty: "2–3 Bulan (konfirmasi per layanan)",
    panel: "IPS LCD High Density",
    trueTone: "Mendukung True Tone",
    touchResponse: "Presisi & Halus (60Hz)",
    iosNotification: "Ada pesan informasi part",
    bestFor: "Kualitas visual tajam dengan rasio harga & garansi paling pas.",
  },
  {
    id: "oled",
    name: "Tipe OLED Super Retina",
    tag: "Paling Populer ★",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    warranty: "2–3 Bulan (konfirmasi per layanan)",
    panel: "OLED Tipis Kontras Tinggi",
    trueTone: "True Tone Aktif 100%",
    touchResponse: "Support 120Hz ProMotion",
    iosNotification: "Ada pesan informasi part",
    bestFor: "Kualitas warna pekat, bezel tipis setara bawaan pabrik. Pilihan favorit pelanggan.",
    highlight: true,
  },
  {
    id: "genuine",
    name: "Diagnostic Genuine",
    tag: "Standar Resmi",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warranty: "2–3 Bulan (konfirmasi per layanan)",
    panel: "Original Apple Module",
    trueTone: "Sistem Resmi Apple",
    touchResponse: "100% Standar Pabrikan",
    iosNotification: "Terverifikasi Komponen Asli Apple",
    bestFor: "Pengguna yang ingin riwayat part tercatat resmi di iOS tanpa pop-up peringatan.",
  },
];

interface BatteryTier {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  warranty: string;
  cellQuality: string;
  batteryHealth: string;
  iosNotification: string;
  bestFor: string;
  highlight?: boolean;
}

const batteryTiers: BatteryTier[] = [
  {
    id: "premium",
    name: "Premium High-Capacity Cell",
    tag: "Pilihan Ekonomis",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    warranty: "2–3 Bulan (konfirmasi per layanan)",
    cellQuality: "Cobalt Cell Kapasitas Murni 100%",
    batteryHealth: "Health terbaca via software diagnostic",
    iosNotification: "Pesan informasi part di iOS Setting (bisa dipindah chip)",
    bestFor: "Solusi cepat untuk baterai drop/kembung dengan daya tahan seharian penuh.",
    highlight: true,
  },
  {
    id: "genuine",
    name: "Diagnostic Genuine Battery",
    tag: "Standar Resmi Apple",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warranty: "2–3 Bulan (konfirmasi per layanan)",
    cellQuality: "Original Cell Apple",
    batteryHealth: "Battery Health 100% resmi di Pengaturan iOS",
    iosNotification: "Terkalibrasi Resmi (Tanpa Pesan Peringatan)",
    bestFor: "Bebas dari pesan penting baterai dan status kesehatan terbaca 100% langsung di iOS.",
  },
];

export function SparepartGuide() {
  // TODO(owner): verify tier specifications and sourcing; warranty confirmed as 2–3 months.
  const [activeTab, setActiveTab] = useState<"lcd" | "baterai">("lcd");

  return (
    <Section tone="mist" labelledBy="sparepart-heading" id="panduan-sparepart">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end mb-10 sm:mb-12">
        <SectionHeading
          id="sparepart-heading"
          title="Panduan Transparan Kualitas Sparepart"
          description="Kami jelaskan perbedaan tiap opsi layar dan baterai secara jujur sebelum kamu memutuskan. Tidak ada rahasia atau istilah yang ditutupi."
          className="mb-0 max-w-2xl"
        />

        {/* Tab Switcher */}
        <div className="glass-pill flex gap-1 rounded-2xl p-1.5 self-stretch sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("lcd")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === "lcd"
                ? "bg-accent text-white shadow-xs"
                : "text-ink/70 hover:bg-black/5 hover:text-ink"
            }`}
          >
            <Icon name="screen" size={14} />
            Layar / LCD (4 Opsi)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("baterai")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === "baterai"
                ? "bg-accent text-white shadow-xs"
                : "text-ink/70 hover:bg-black/5 hover:text-ink"
            }`}
          >
            <Icon name="battery" size={14} />
            Baterai iPhone (2 Opsi)
          </button>
        </div>
      </div>

      {/* Content for LCD */}
      {activeTab === "lcd" && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lcdTiers.map((tier) => (
            <div
              key={tier.id}
              className={`glass-card liquid-shimmer relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight ? "ring-2 ring-accent/40 shadow-lg liquid-iridescent" : ""
              }`}
            >
              {/* Specular top line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${tier.tagColor}`}
                  >
                    {tier.tag}
                  </span>
                  <span className="text-xs font-bold text-accent">Garansi {tier.warranty}</span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-ink">{tier.name}</h3>

                <div className="mt-5 space-y-3 text-xs">
                  <div className="border-b border-black/5 pb-2">
                    <p className="text-muted">Tipe Panel</p>
                    <p className="font-semibold text-ink mt-0.5">{tier.panel}</p>
                  </div>
                  <div className="border-b border-black/5 pb-2">
                    <p className="text-muted">Dukungan True Tone</p>
                    <p className="font-semibold text-ink mt-0.5">{tier.trueTone}</p>
                  </div>
                  <div className="border-b border-black/5 pb-2">
                    <p className="text-muted">Sensitivitas Sentuh</p>
                    <p className="font-semibold text-ink mt-0.5">{tier.touchResponse}</p>
                  </div>
                  <div className="border-b border-black/5 pb-2">
                    <p className="text-muted">Status di Pengaturan iOS</p>
                    <p className="font-semibold text-ink mt-0.5">{tier.iosNotification}</p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted italic">
                  &ldquo;{tier.bestFor}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5">
                <Button
                  href={buildWhatsAppUrl(
                    `Halo Flow Service, saya ingin tanya harga ganti layar tipe ${tier.name} untuk iPhone saya.`
                  )}
                  external
                  variant={tier.highlight ? "primary" : "secondary"}
                  size="md"
                  className="w-full text-xs"
                >
                  Pilih {tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content for Battery */}
      {activeTab === "baterai" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {batteryTiers.map((tier) => (
            <div
              key={tier.id}
              className={`glass-card liquid-shimmer relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight ? "ring-2 ring-accent/40 shadow-lg liquid-iridescent" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${tier.tagColor}`}
                  >
                    {tier.tag}
                  </span>
                  <span className="text-xs font-bold text-accent">Garansi {tier.warranty}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-ink">{tier.name}</h3>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="border-b border-black/5 pb-3">
                    <p className="text-xs text-muted">Kualitas Cell & Ketahanan</p>
                    <p className="font-semibold text-ink mt-0.5">{tier.cellQuality}</p>
                  </div>
                  <div className="border-b border-black/5 pb-3">
                    <p className="text-xs text-muted">Indikator Battery Health</p>
                    <p className="font-semibold text-ink mt-0.5">{tier.batteryHealth}</p>
                  </div>
                  <div className="border-b border-black/5 pb-3">
                    <p className="text-xs text-muted">Notifikasi Sistem iOS</p>
                    <p className="font-semibold text-ink mt-0.5">{tier.iosNotification}</p>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-muted italic">
                  &ldquo;{tier.bestFor}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5">
                <Button
                  href={buildWhatsAppUrl(
                    `Halo Flow Service, saya ingin konsultasi ganti baterai tipe ${tier.name} untuk iPhone saya.`
                  )}
                  external
                  variant={tier.highlight ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                >
                  Pilih Baterai {tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Info Box */}
      <div className="mt-10 rounded-2xl border border-accent/20 bg-white/70 p-5 backdrop-blur-md text-center max-w-3xl mx-auto">
        <p className="text-xs text-ink/80 leading-relaxed">
          <span className="font-semibold text-accent">Catatan Kejujuran Teknisi:</span> Semua pemasangan layar OLED di Flow Service sudah termasuk pemindahan fitur <strong>True Tone</strong> tanpa biaya tambahan. Untuk baterai, kesehatan 100% dipastikan sebelum iPhone diserahkan ke pelanggan.
        </p>
      </div>
    </Section>
  );
}
