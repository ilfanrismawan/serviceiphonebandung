"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { detailedPricelist } from "@/data/prices";
import { formatRupiah } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type CategoryTab = "all" | "lcd" | "battery" | "camera" | "charger" | "speaker";

export function PriceTable() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<CategoryTab>("all");

  const filteredList = useMemo(() => {
    return detailedPricelist.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const renderPrice = (val?: number) => {
    if (!val) return <span className="text-muted/40 font-normal">—</span>;
    return <span className="font-semibold text-ink">{formatRupiah(val)}</span>;
  };

  return (
    <div className="space-y-6">
      {/* Promo Banner Card */}
      <div className="relative overflow-hidden rounded-3xl glass-dark liquid-shimmer-dark p-6 text-white sm:p-8 shadow-2xl border border-white/15">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="glass-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-400/30">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DAFTAR HARGA UPDATE • GARANSI RESMI TOKO</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-white">
              Pricelist Sparepart &amp; Servis iPhone Bandung
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Transparan dan bergaransi. Suku cadang berkualitas mulai dari Grade A, OLED Plus, hingga Genuine Apple.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href={buildWhatsAppUrl("Halo Service iPhone Bandung, saya mau tanya ketersediaan stok sparepart iPhone.")}
              external
              variant="inverse"
              icon="whatsapp"
            >
              Tanya Stok Part
            </Button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Tabs */}
        <div className="glass-pill flex flex-wrap gap-1 p-1.5 rounded-2xl shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all ${
              activeTab === "all"
                ? "bg-accent text-white shadow-xs"
                : "text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            Semua Komponen
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("lcd")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all ${
              activeTab === "lcd"
                ? "bg-accent text-white shadow-xs"
                : "text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            🖥️ Layar / LCD
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("battery")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all ${
              activeTab === "battery"
                ? "bg-accent text-white shadow-xs"
                : "text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            🔋 Baterai
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("camera")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all ${
              activeTab === "camera"
                ? "bg-accent text-white shadow-xs"
                : "text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            📷 Kamera Belakang
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("charger")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all ${
              activeTab === "charger"
                ? "bg-accent text-white shadow-xs"
                : "text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            ⚡ Konektor Charger
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("speaker")}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all ${
              activeTab === "speaker"
                ? "bg-accent text-white shadow-xs"
                : "text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            🔊 Speaker
          </button>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <input
            type="text"
            placeholder="Cari seri iPhone (misal: 11, 13 Pro)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="liquid-input w-full rounded-2xl py-2 pl-10 pr-4 text-xs font-medium text-ink placeholder:text-muted"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted">
            <Icon name="search" size={15} />
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="overflow-hidden rounded-3xl glass-card border border-white/80 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-black/8 bg-white/70 backdrop-blur-md text-xs text-ink font-semibold">
              <tr>
                <th className="py-4 px-5 sticky left-0 z-10 bg-white/95 backdrop-blur-md font-semibold text-ink">
                  Tipe iPhone
                </th>

                {(activeTab === "all" || activeTab === "lcd") && (
                  <>
                    <th className="py-4 px-4 whitespace-nowrap">
                      LCD (Grade A)
                      <span className="block text-[10px] font-normal text-muted">Ekonomis</span>
                    </th>
                    <th className="py-4 px-4 whitespace-nowrap">
                      LCD (Oled Plus)
                      <span className="block text-[10px] font-normal text-accent font-semibold">Warna Tajam</span>
                    </th>
                    <th className="py-4 px-4 whitespace-nowrap">
                      LCD (Genuine/Asli)
                      <span className="block text-[10px] font-normal text-emerald-600 font-semibold">Original Apple</span>
                    </th>
                  </>
                )}

                {(activeTab === "all" || activeTab === "battery") && (
                  <th className="py-4 px-4 whitespace-nowrap">
                    Baterai
                    <span className="block text-[10px] font-normal text-muted">Kapasitas 100%</span>
                  </th>
                )}

                {(activeTab === "all" || activeTab === "camera") && (
                  <th className="py-4 px-4 whitespace-nowrap">
                    Kamera Belakang
                    <span className="block text-[10px] font-normal text-muted">Sensor &amp; OIS</span>
                  </th>
                )}

                {(activeTab === "all" || activeTab === "charger") && (
                  <th className="py-4 px-4 whitespace-nowrap">
                    Konektor Charger
                    <span className="block text-[10px] font-normal text-muted">Port Charging</span>
                  </th>
                )}

                {(activeTab === "all" || activeTab === "speaker") && (
                  <th className="py-4 px-4 whitespace-nowrap">
                    Speaker Atas/Bawah
                    <span className="block text-[10px] font-normal text-muted">Earpiece / Buzzer</span>
                  </th>
                )}

                <th className="py-4 px-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-black/5">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-muted">
                    Model &ldquo;{search}&rdquo; tidak ditemukan. Silakan hubungi kami untuk informasi ketersediaan part.
                  </td>
                </tr>
              ) : (
                filteredList.map((row) => (
                  <tr key={row.slug} className="transition-colors hover:bg-mist/40">
                    <td className="py-3.5 px-5 font-semibold text-ink sticky left-0 z-10 bg-white/95 backdrop-blur-sm whitespace-nowrap">
                      {row.name}
                    </td>

                    {(activeTab === "all" || activeTab === "lcd") && (
                      <>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.lcdGradeA)}</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.lcdOled)}</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.lcdGenuine)}</td>
                      </>
                    )}

                    {(activeTab === "all" || activeTab === "battery") && (
                      <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.battery)}</td>
                    )}

                    {(activeTab === "all" || activeTab === "camera") && (
                      <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.cameraBack)}</td>
                    )}

                    {(activeTab === "all" || activeTab === "charger") && (
                      <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.charger)}</td>
                    )}

                    {(activeTab === "all" || activeTab === "speaker") && (
                      <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.speaker)}</td>
                    )}

                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <a
                        href={buildWhatsAppUrl(`Halo Service iPhone Bandung, saya mau servis ${row.name}. Apakah part-nya ready?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-xl bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-white transition-all"
                      >
                        <Icon name="whatsapp" size={14} />
                        <span>Konsul</span>
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notes and Badges Footer */}
      <div className="rounded-3xl border border-black/10 bg-mist/60 p-6 sm:p-7">
        <h3 className="text-sm font-bold text-ink">Catatan &amp; Ketentuan Servis:</h3>
        <ul className="mt-3 space-y-1.5 text-xs text-muted leading-relaxed">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span><strong>Harga belum termasuk biaya pemasangan:</strong> Pemasangan dikerjakan langsung oleh teknisi berpengalaman di tempat dengan garansi resmi toko.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span><strong>Garansi resmi:</strong> Berlaku jika pemasangan langsung dilakukan di workshop Service iPhone Bandung.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span><strong>Metode pembayaran:</strong> Menerima pembayaran tunai dan non-tunai (QRIS, Transfer Bank, Debit, &amp; Kartu Kredit).</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span><strong>Pilihan Kualitas LCD:</strong> Tersedia Grade A (ekonomis terjangkau), OLED Plus (kontras tinggi tajam), dan Genuine/Asli (Original bawaan Apple).</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
