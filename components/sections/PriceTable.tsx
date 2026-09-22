"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { detailedPricelist, type DetailedPrice } from "@/data/prices";
import { formatRupiah } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type CategoryTab = "all" | "lcd" | "battery" | "camera";

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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-900 to-ink p-6 text-white sm:p-8 shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>PROMO SEPTEMBER • DISKON S.D 20%</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-white">
              Pricelist Sparepart &amp; Servis iPhone Bandung
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Bisa klaim garansi di seluruh cabang. Garansi resmi layar LCD hingga 36 bulan (3 tahun)!
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href={buildWhatsAppUrl("Halo iServis Bandung, saya mau tanya ketersediaan promo part iPhone.")}
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
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-accent text-white shadow-sm"
                : "bg-mist text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            Semua Komponen
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("lcd")}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === "lcd"
                ? "bg-accent text-white shadow-sm"
                : "bg-mist text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            🖥️ LCD / Layar (4 Pilihan Kualitas)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("battery")}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === "battery"
                ? "bg-accent text-white shadow-sm"
                : "bg-mist text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            🔋 Baterai &amp; Genuine
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("camera")}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === "camera"
                ? "bg-accent text-white shadow-sm"
                : "bg-mist text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            📷 Kamera (Depan / Belakang)
          </button>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <input
            type="text"
            placeholder="Cari seri iPhone (misal: 11, 13 Pro)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-black/15 bg-white py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted">
            <Icon name="search" size={16} />
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-black/10 bg-mist/70 text-xs text-ink font-semibold">
              <tr>
                <th className="py-4 px-5 sticky left-0 z-10 bg-mist/95 backdrop-blur-sm">
                  Model iPhone
                </th>

                {(activeTab === "all" || activeTab === "lcd") && (
                  <>
                    <th className="py-4 px-4 whitespace-nowrap">
                      LCD HD+
                      <span className="block text-[10px] font-normal text-muted">Garansi 6 Bulan</span>
                    </th>
                    <th className="py-4 px-4 whitespace-nowrap">
                      LCD FHD
                      <span className="block text-[10px] font-normal text-muted">Garansi 12 Bulan</span>
                    </th>
                    <th className="py-4 px-4 whitespace-nowrap">
                      LCD OLED
                      <span className="block text-[10px] font-normal text-accent font-semibold">Garansi 18 Bulan</span>
                    </th>
                    <th className="py-4 px-4 whitespace-nowrap">
                      Diagnostic Genuine
                      <span className="block text-[10px] font-normal text-emerald-600 font-semibold">Garansi 36 Bulan</span>
                    </th>
                  </>
                )}

                {(activeTab === "all" || activeTab === "battery") && (
                  <>
                    <th className="py-4 px-4 whitespace-nowrap">
                      Baterai
                      <span className="block text-[10px] font-normal text-muted">Premium Cell</span>
                    </th>
                    <th className="py-4 px-4 whitespace-nowrap">
                      Baterai Genuine
                      <span className="block text-[10px] font-normal text-emerald-600 font-semibold">Original Apple Part</span>
                    </th>
                  </>
                )}

                {(activeTab === "all" || activeTab === "camera") && (
                  <>
                    <th className="py-4 px-4 whitespace-nowrap">
                      Kamera Depan
                      <span className="block text-[10px] font-normal text-muted">TrueDepth / Face ID</span>
                    </th>
                    <th className="py-4 px-4 whitespace-nowrap">
                      Kamera Belakang
                      <span className="block text-[10px] font-normal text-muted">Sensor &amp; OIS</span>
                    </th>
                  </>
                )}

                <th className="py-4 px-4 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-black/5">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-muted">
                    Model &ldquo;{search}&rdquo; tidak ditemukan. Silakan hubungi kami untuk seri lainnya.
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
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.lcdHd)}</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.lcdFhd)}</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.lcdOled)}</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.lcdGenuine)}</td>
                      </>
                    )}

                    {(activeTab === "all" || activeTab === "battery") && (
                      <>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.battery)}</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.batteryGenuine)}</td>
                      </>
                    )}

                    {(activeTab === "all" || activeTab === "camera") && (
                      <>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.cameraFront)}</td>
                        <td className="py-3.5 px-4 whitespace-nowrap">{renderPrice(row.cameraBack)}</td>
                      </>
                    )}

                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <a
                        href={buildWhatsAppUrl(`Halo iServis Bandung, saya mau servis ${row.name}. Apakah part-nya ready?`)}
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
        <h3 className="text-sm font-bold text-ink">Catatan &amp; Ketentuan Promo:</h3>
        <ul className="mt-3 space-y-1.5 text-xs text-muted leading-relaxed">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span><strong>Harga belum termasuk biaya pemasangan:</strong> Pemasangan dikerjakan langsung oleh teknisi berpengalaman di tempat dengan garansi resmi toko.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span><strong>Garansi resmi:</strong> Hanya berlaku jika pemasangan langsung dilakukan di workshop iServis Bandung.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span><strong>Metode pembayaran promo:</strong> Berlaku untuk pembayaran non-tunai (QRIS, Transfer Bank, Debit, &amp; Kartu Kredit).</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span><strong>Garansi LCD:</strong> Kualitas HD+ (6 Bulan), FHD (12 Bulan), OLED (18 Bulan), Diagnostic Genuine (36 Bulan / 3 Tahun).</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
