import { Table } from "@/components/ui/Table";
import { detailedPricelist, getPrice } from "@/data/prices";
import { formatRupiah } from "@/lib/format";
import type { PriceKey } from "@/types";

/** Tabel harga untuk satu jenis servis di seluruh model. Dipakai di halaman layanan. */
export function ServicePriceTable({ priceKey, label }: { priceKey: PriceKey; label: string }) {
  const fmt = (val?: number) => (val ? formatRupiah(val) : "—");

  if (priceKey === "lcd") {
    const headers = [
      "Model iPhone",
      "Kualitas HD+ (6 Bln)",
      "Kualitas FHD (12 Bln)",
      "Kualitas OLED (18 Bln)",
      "Genuine (36 Bln)",
    ];
    const rows = detailedPricelist
      .filter((m) => m.lcdHd || m.lcdFhd || m.lcdOled || m.lcdGenuine)
      .map((item) => [
        item.name,
        fmt(item.lcdHd),
        fmt(item.lcdFhd),
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
    const headers = [
      "Model iPhone",
      "Baterai Premium Cell",
      "Baterai Diagnostic Genuine (Resmi)",
    ];
    const rows = detailedPricelist
      .filter((m) => m.battery || m.batteryGenuine)
      .map((item) => [
        item.name,
        fmt(item.battery),
        fmt(item.batteryGenuine),
      ]);

    return (
      <Table
        caption="Daftar harga ganti baterai iPhone di Bandung"
        headers={headers}
        rows={rows}
      />
    );
  }

  if (priceKey === "kamera") {
    const headers = ["Model iPhone", "Kamera Depan", "Kamera Belakang"];
    const rows = detailedPricelist
      .filter((m) => m.cameraFront || m.cameraBack)
      .map((item) => [
        item.name,
        fmt(item.cameraFront),
        fmt(item.cameraBack),
      ]);

    return (
      <Table
        caption="Daftar harga perbaikan kamera iPhone di Bandung"
        headers={headers}
        rows={rows}
      />
    );
  }

  // Fallback (charger / default)
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
