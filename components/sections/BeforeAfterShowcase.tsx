"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface CaseItem {
  id: string;
  title: string;
  category: string;
  model: string;
  duration: string;
  warranty: string;
  beforeDescription: string;
  afterDescription: string;
  beforeImage: string;
  afterImage: string;
  beforeBadge: string;
  afterBadge: string;
  statusHighlight: string;
}

const repairCases: CaseItem[] = [
  {
    id: "lcd-iphone13",
    title: "Ganti Layar OLED & Pemulihan True Tone",
    category: "Layar / LCD",
    model: "iPhone 13",
    duration: "25 Menit",
    warranty: "18 Bulan (OLED)",
    beforeDescription:
      "Kaca layar retak parah akibat terjatuh, muncul garis hijau vertikal (green line), dan area sentuh tidak responsif.",
    afterDescription:
      "Panel OLED Super Retina baru terpasang presisi, True Tone aktif 100%, tampilan jernih tanpa cacat.",
    beforeImage: "/images/showcase/screen-before.jpg",
    afterImage: "/images/showcase/screen-after.jpg",
    beforeBadge: "Sebelum Servis",
    afterBadge: "Hasil Servis Flow",
    statusHighlight: "True Tone Aktif • Warna 100% Akurat",
  },
  {
    id: "backglass-iphone14pro",
    title: "Penggantian Backglass dengan Mesin Laser Presisi",
    category: "Bodi & Kaca Belakang",
    model: "iPhone 14 Pro",
    duration: "45 Menit",
    warranty: "60 Hari",
    beforeDescription:
      "Kaca bodi belakang pecah seribu hingga serpihan terlepas di sekitar modul kamera MagSafe.",
    afterDescription:
      "Kaca dibersihkan mesin laser tanpa bongkar mesin utama, kaca matte baru terpasang rapat presisi pabrikan.",
    beforeImage: "/images/showcase/back-before.jpg",
    afterImage: "/images/showcase/back-after.jpg",
    beforeBadge: "Sebelum Servis",
    afterBadge: "Hasil Servis Flow",
    statusHighlight: "Finishing Matte Rapat Tanpa Celah",
  },
  {
    id: "kamera-iphone12",
    title: "Ganti Kaca Lensa Kamera & Pembersihan Sensor",
    category: "Kamera",
    model: "iPhone 12",
    duration: "20 Menit",
    warranty: "60 Hari",
    beforeDescription:
      "Kaca pelindung lensa kamera retak bolong, debu masuk membuat jepretan foto buram dan silau flare.",
    afterDescription:
      "Sensor dibersihkan ultrasonik antistatik, kaca sapphire baru terpasang jernih anti-pantulan.",
    beforeImage: "/images/showcase/cam-before.jpg",
    afterImage: "/images/showcase/cam-after.jpg",
    beforeBadge: "Sebelum Servis",
    afterBadge: "Hasil Servis Flow",
    statusHighlight: "Lensa Sapphire Jernih • Fokus Presisi",
  },
];

export function BeforeAfterShowcase() {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const activeCase = repairCases[activeCaseIndex];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  return (
    <Section tone="white" labelledBy="before-after-heading" id="hasil-servis">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end mb-8 sm:mb-12">
        <SectionHeading
          id="before-after-heading"
          title="Buktikan Kerapian Hasil Servis Kami"
          description="Geser slider ke kiri dan kanan untuk membandingkan foto nyata iPhone sebelum dan sesudah diperbaiki di meja teknisi kami."
          className="mb-0 max-w-2xl"
        />

        {/* Tab switchers — Liquid Glass style */}
        <div className="glass-pill flex flex-wrap gap-1 rounded-2xl p-1.5 self-stretch sm:self-auto shadow-sm">
          {repairCases.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(index);
                setSliderPosition(50);
              }}
              className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-tight transition-all duration-200 ${
                activeCaseIndex === index
                  ? "bg-accent text-white shadow-[0_2px_8px_rgba(0,113,227,0.35)]"
                  : "text-ink/70 hover:bg-black/5 hover:text-ink"
              }`}
            >
              {item.model}
            </button>
          ))}
        </div>
      </div>

      {/* Main Showcase Card */}
      <div className="glass-card grid grid-cols-1 overflow-hidden rounded-3xl lg:grid-cols-12 shadow-2xl">
        {/* Left Side: Interactive Slider Canvas */}
        <div className="relative min-h-[380px] sm:min-h-[460px] select-none overflow-hidden lg:col-span-7 bg-zinc-950 p-4 sm:p-8 flex items-center justify-center">
          {/* Decorative ambient backdrop */}
          <div className="pointer-events-none absolute inset-0 bg-radial from-accent/15 via-transparent to-transparent blur-3xl" />

          {/* Interactive slider area */}
          <div
            className="relative aspect-[4/3] w-full max-w-lg cursor-ew-resize overflow-hidden rounded-2xl border border-white/20 shadow-2xl ring-1 ring-black/40"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              handleSliderMove(e.clientX, rect);
            }}
          >
            {/* After (Right Layer - Base) */}
            <div className="absolute inset-0">
              <Image
                src={activeCase.afterImage}
                alt={`${activeCase.title} - Kondisi Setelah Servis`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Subtle top & bottom vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />

              {/* Overlaid badges */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="liquid-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-emerald-300 shadow-sm border border-emerald-400/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {activeCase.afterBadge}
                  </span>
                  <span className="rounded-full bg-black/50 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white/80 border border-white/10">
                    {activeCase.model}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/90 font-medium">
                  <span className="rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    Garansi: {activeCase.warranty}
                  </span>
                  <span className="rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    Pengerjaan: {activeCase.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Before (Left Layer - Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={activeCase.beforeImage}
                alt={`${activeCase.title} - Kondisi Sebelum Servis`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />

              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="liquid-glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-rose-300 shadow-sm border border-rose-400/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                    {activeCase.beforeBadge}
                  </span>
                  <span className="rounded-full bg-black/50 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white/80 border border-white/10">
                    {activeCase.model}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/90 font-medium">
                  <span className="rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    Kondisi Awal Rusak
                  </span>
                  <span className="rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    Diagnosa 100% Gratis
                  </span>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-[0_4px_16px_rgba(0,0,0,0.35)] ring-2 ring-white/60">
                <span className="text-xs font-bold select-none">⇄</span>
              </div>
            </div>
          </div>

          {/* Hint under slider */}
          <p className="absolute bottom-3 text-center text-[12px] font-medium tracking-tight text-white/50">
            Geser pemisah ke kiri / kanan untuk membandingkan foto asli
          </p>
        </div>

        {/* Right Side: Details & Action */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-5 bg-white">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <span>{activeCase.category}</span>
              <span>•</span>
              <span>{activeCase.model}</span>
            </div>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {activeCase.title}
            </h3>

            {/* Highlight Banner */}
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-700">
              <Icon name="check" size={16} className="shrink-0 text-emerald-600" />
              <span>{activeCase.statusHighlight}</span>
            </div>

            {/* Before vs After Summary */}
            <div className="mt-6 space-y-3.5">
              <div className="rounded-2xl border border-red-200/60 bg-red-50/40 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Kondisi Masuk Servis
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/80">
                  {activeCase.beforeDescription}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Hasil Pengerjaan Flow Service
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/80">
                  {activeCase.afterDescription}
                </p>
              </div>
            </div>

            {/* Spec Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-black/5 pt-5 text-xs">
              <div>
                <p className="text-muted">Estimasi Waktu</p>
                <p className="mt-0.5 font-semibold text-ink sm:text-sm">{activeCase.duration}</p>
              </div>
              <div>
                <p className="text-muted">Masa Garansi</p>
                <p className="mt-0.5 font-semibold text-emerald-600 sm:text-sm">{activeCase.warranty}</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 border-t border-black/5 pt-6">
            <Button
              href={buildWhatsAppUrl(
                `Halo Flow Service, saya ingin konsultasi servis ${activeCase.category} untuk ${activeCase.model}. Apakah part-nya ready?`
              )}
              external
              icon="whatsapp"
              size="lg"
              className="w-full"
            >
              Konsultasikan {activeCase.model} Kamu
            </Button>
            <p className="mt-2 text-center text-[11px] text-muted">
              Pengecekan awal selalu gratis • Bisa ditunggu
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
