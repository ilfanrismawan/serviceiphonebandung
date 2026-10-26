import Link from "next/link";
import { Table } from "@/components/ui/Table";
import { getModelServicePage } from "@/data/modelServices";
import { detailedPricelist, getPrice } from "@/data/prices";
import { formatRupiah } from "@/lib/format";
import type { PriceKey } from "@/types";

/**
 * Tabel harga untuk satu jenis servis di seluruh model. Dipakai di halaman layanan.
 * Jika `serviceSlug` diisi, nama model yang punya halaman khusus menjadi link.
 */
export function ServicePriceTable({ priceKey, label, serviceSlug }: { priceKey: PriceKey; label: string; serviceSlug?: string }) {
  const fmt = (val?: number) => (val ? formatRupiah(val) : "—");
  const modelName = (item: { name: string; slug: string }) =>
    serviceSlug && getModelServicePage(serviceSlug, item.slug) ? (
      <Link href={`/layanan/${serviceSlug}/${item.slug}`} className="text-accent underline">
        {item.name}
      </Link>
    ) : (
      item.name
    );

  if (priceKey === "lcd") {
    const headers = [
      "Model iPhone",
      "LCD (Grade A)",
      "LCD (Oled Plus)",
      "LCD (Genuine/Asli)",
    ];
    const rows = detailedPricelist
      .filter((m) => m.lcdGradeA || m.lcdOled || m.lcdGenuine)
      .map((item) => [
        modelName(item),
        fmt(item.lcdGradeA),
        fmt(item.lcdOled),
        fmt(item.lcdGenuine),
      ]);

    return (
      <Table
        caption="Pilihan kualitas dan daftar harga LCD iPhone di Bandung"
        headers={headers}
        rows={rows}
      />
    );
  }

  if (priceKey === "baterai") {
    const headers = ["Model iPhone", "Baterai"];
    const rows = detailedPricelist
      .filter((m) => m.battery)
      .map((item) => [modelName(item), fmt(item.battery)]);

    return (
      <Table
        caption="Daftar harga ganti baterai iPhone di Bandung"
        headers={headers}
        rows={rows}
      />
    );
  }

  if (priceKey === "kamera") {
    const headers = ["Model iPhone", "Kamera Belakang"];
    const rows = detailedPricelist
      .filter((m) => m.cameraBack)
      .map((item) => [item.name, fmt(item.cameraBack)]);

    return (
      <Table
        caption="Daftar harga perbaikan modul kamera belakang iPhone di Bandung"
        headers={headers}
        rows={rows}
      />
    );
  }

  if (priceKey === "charger") {
    const headers = ["Model iPhone", "Konektor Charger"];
    const rows = detailedPricelist
      .filter((m) => m.charger)
      .map((item) => [item.name, fmt(item.charger)]);

    return (
      <Table
        caption="Daftar harga service konektor charger iPhone di Bandung"
        headers={headers}
        rows={rows}
      />
    );
  }

  if (priceKey === "speaker") {
    const headers = ["Model iPhone", "Speaker Atas / Bawah"];
    const rows = detailedPricelist
      .filter((m) => m.speaker)
      .map((item) => [item.name, fmt(item.speaker)]);

    return (
      <Table
        caption="Daftar harga perbaikan speaker iPhone di Bandung"
        headers={headers}
        rows={rows}
      />
    );
  }

  // Fallback
  const rows = detailedPricelist.map((item) => {
    const price = getPrice(item.slug, priceKey);
    return [item.name, price ? formatRupiah(price) : "Hubungi kami"];
  });

  return (
    <Table
      caption={`Harga ${label.toLowerCase()} per model iPhone`}
      headers={["Model iPhone", `${label} mulai dari`]}
      rows={rows}
    />
  );
}
