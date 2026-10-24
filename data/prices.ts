import type { PriceKey } from "@/types";

export interface DetailedPrice {
  name: string;
  slug: string;
  lcdGradeA?: number;
  lcdOled?: number;
  lcdGenuine?: number;
  battery?: number;
  cameraBack?: number;
  charger?: number;
  speaker?: number;

  // Backwards compatibility properties (deprecated)
  lcdHd?: number;
  lcdFhd?: number;
  batteryGenuine?: number;
  cameraFront?: number;
}

export const detailedPricelist: DetailedPrice[] = [
  {
    name: "iPhone 7",
    slug: "iphone-7",
    lcdGradeA: 140_000,
    battery: 150_000,
    cameraBack: 150_000,
    charger: 75_000,
    speaker: 75_000,
  },
  {
    name: "iPhone 7 Plus",
    slug: "iphone-7-plus",
    lcdGradeA: 160_000,
    battery: 180_000,
    cameraBack: 180_000,
    charger: 75_000,
    speaker: 75_000,
  },
  {
    name: "iPhone 8",
    slug: "iphone-8",
    lcdGradeA: 140_000,
    battery: 150_000,
    cameraBack: 150_000,
    charger: 80_000,
    speaker: 80_000,
  },
  {
    name: "iPhone 8 Plus",
    slug: "iphone-8-plus",
    lcdGradeA: 175_000,
    battery: 185_000,
    cameraBack: 210_000,
    charger: 80_000,
    speaker: 80_000,
  },
  {
    name: "iPhone X",
    slug: "iphone-x",
    lcdGradeA: 290_000,
    lcdOled: 580_000,
    battery: 190_000,
    cameraBack: 170_000,
    charger: 130_000,
    speaker: 130_000,
  },
  {
    name: "iPhone XR",
    slug: "iphone-xr",
    lcdGradeA: 290_000,
    lcdGenuine: 900_000,
    battery: 190_000,
    cameraBack: 240_000,
    charger: 150_000,
    speaker: 150_000,
  },
  {
    name: "iPhone XS",
    slug: "iphone-xs",
    lcdGradeA: 290_000,
    lcdOled: 580_000,
    battery: 230_000,
    cameraBack: 330_000,
    charger: 190_000,
    speaker: 190_000,
  },
  {
    name: "iPhone XS Max",
    slug: "iphone-xs-max",
    lcdGradeA: 320_000,
    lcdOled: 715_000,
    battery: 250_000,
    cameraBack: 330_000,
    charger: 195_000,
    speaker: 195_000,
  },
  {
    name: "iPhone 11",
    slug: "iphone-11",
    lcdGradeA: 295_000,
    lcdGenuine: 950_000,
    battery: 195_000,
    cameraBack: 210_000,
    charger: 195_000,
    speaker: 195_000,
  },
  {
    name: "iPhone 11 Pro",
    slug: "iphone-11-pro",
    lcdGradeA: 325_000,
    lcdOled: 650_000,
    lcdGenuine: 1_800_000,
    battery: 280_000,
    cameraBack: 640_000,
    charger: 430_000,
    speaker: 200_000,
  },
  {
    name: "iPhone 11 Pro Max",
    slug: "iphone-11-pro-max",
    lcdGradeA: 350_000,
    lcdOled: 800_000,
    lcdGenuine: 2_300_000,
    battery: 300_000,
    cameraBack: 645_000,
    charger: 550_000,
    speaker: 200_000,
  },
  {
    name: "iPhone 12 Mini",
    slug: "iphone-12-mini",
    lcdGradeA: 550_000,
    lcdOled: 1_200_000,
    battery: 250_000,
    cameraBack: 680_000,
    charger: 190_000,
    speaker: 190_000,
  },
  {
    name: "iPhone 12",
    slug: "iphone-12",
    lcdGradeA: 350_000,
    lcdOled: 850_000,
    lcdGenuine: 2_100_000,
    battery: 270_000,
    cameraBack: 320_000,
    charger: 225_000,
    speaker: 225_000,
  },
  {
    name: "iPhone 12 Pro",
    slug: "iphone-12-pro",
    lcdGradeA: 350_000,
    lcdOled: 850_000,
    lcdGenuine: 2_100_000,
    battery: 270_000,
    cameraBack: 1_350_000,
    charger: 225_000,
    speaker: 225_000,
  },
  {
    name: "iPhone 12 Pro Max",
    slug: "iphone-12-pro-max",
    lcdGradeA: 500_000,
    lcdOled: 1_200_000,
    lcdGenuine: 3_600_000,
    battery: 320_000,
    cameraBack: 1_450_000,
    charger: 350_000,
    speaker: 350_000,
  },
  {
    name: "iPhone 13 Mini",
    slug: "iphone-13-mini",
    lcdGradeA: 525_000,
    lcdOled: 1_250_000,
    battery: 290_000,
    cameraBack: 250_000,
    charger: 370_000,
    speaker: 370_000,
  },
  {
    name: "iPhone 13",
    slug: "iphone-13",
    lcdGradeA: 450_000,
    lcdOled: 1_050_000,
    lcdGenuine: 2_150_000,
    battery: 290_000,
    cameraBack: 250_000,
    charger: 270_000,
    speaker: 270_000,
  },
  {
    name: "iPhone 13 Pro",
    slug: "iphone-13-pro",
    lcdGradeA: 580_000,
    lcdOled: 1_350_000,
    lcdGenuine: 3_800_000,
    battery: 350_000,
    cameraBack: 1_400_000,
    charger: 330_000,
    speaker: 330_000,
  },
  {
    name: "iPhone 13 Pro Max",
    slug: "iphone-13-pro-max",
    lcdGradeA: 635_000,
    lcdOled: 1_350_000,
    lcdGenuine: 4_000_000,
    battery: 380_000,
    cameraBack: 1_400_000,
    charger: 350_000,
    speaker: 350_000,
  },
  {
    name: "iPhone 14",
    slug: "iphone-14",
    lcdGradeA: 550_000,
    lcdOled: 1_100_000,
    lcdGenuine: 2_850_000,
    battery: 320_000,
    cameraBack: 715_000,
    charger: 300_000,
    speaker: 300_000,
  },
  {
    name: "iPhone 14 Plus",
    slug: "iphone-14-plus",
    lcdGradeA: 585_000,
    lcdOled: 1_750_000,
    lcdGenuine: 3_800_000,
    battery: 350_000,
    cameraBack: 790_000,
    charger: 330_000,
    speaker: 330_000,
  },
  {
    name: "iPhone 14 Pro",
    slug: "iphone-14-pro",
    lcdGradeA: 650_000,
    lcdOled: 1_800_000,
    lcdGenuine: 4_500_000,
    battery: 350_000,
    cameraBack: 1_200_000,
    charger: 390_000,
    speaker: 390_000,
  },
  {
    name: "iPhone 14 Pro Max",
    slug: "iphone-14-pro-max",
    lcdGradeA: 800_000,
    lcdOled: 2_200_000,
    lcdGenuine: 6_000_000,
    battery: 370_000,
    cameraBack: 1_100_000,
    charger: 450_000,
    speaker: 450_000,
  },
  {
    name: "iPhone 15",
    slug: "iphone-15",
    lcdGradeA: 600_000,
    lcdOled: 1_800_000,
    lcdGenuine: 4_500_000,
    battery: 350_000,
    cameraBack: 700_000,
    charger: 350_000,
    speaker: 350_000,
  },
  {
    name: "iPhone 15 Plus",
    slug: "iphone-15-plus",
    lcdGradeA: 625_000,
    lcdGenuine: 4_800_000,
    battery: 370_000,
    cameraBack: 700_000,
    charger: 420_000,
    speaker: 420_000,
  },
  {
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    lcdGradeA: 725_000,
    lcdOled: 1_950_000,
    lcdGenuine: 5_800_000,
    battery: 380_000,
    cameraBack: 1_100_000,
    charger: 450_000,
    speaker: 450_000,
  },
  {
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    lcdGradeA: 875_000,
    lcdOled: 2_150_000,
    lcdGenuine: 6_600_000,
    battery: 400_000,
    cameraBack: 1_100_000,
    charger: 450_000,
    speaker: 450_000,
  },
  {
    name: "iPhone 16",
    slug: "iphone-16",
    lcdOled: 1_950_000,
    lcdGenuine: 5_000_000,
    battery: 380_000,
    cameraBack: 1_100_000,
    charger: 500_000,
    speaker: 500_000,
  },
  {
    name: "iPhone 16 Plus",
    slug: "iphone-16-plus",
    battery: 450_000,
    cameraBack: 1_450_000,
    charger: 500_000,
    speaker: 500_000,
  },
  {
    name: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    lcdOled: 2_200_000,
    lcdGenuine: 7_000_000,
    battery: 500_000,
    cameraBack: 1_500_000,
    charger: 550_000,
    speaker: 550_000,
  },
  {
    name: "iPhone 16 Pro Max",
    slug: "iphone-16-pro-max",
    lcdOled: 2_250_000,
    lcdGenuine: 8_500_000,
    battery: 550_000,
    cameraBack: 1_500_000,
    charger: 550_000,
    speaker: 550_000,
  },
];

/**
 * Mapping backwards-compatible priceBook untuk servicePriceTable dan helper lama.
 * Mengambil harga mulai dari (termurah) untuk masing-masing kategori kerusakan.
 */
export const priceBook: Record<string, Partial<Record<PriceKey, number>>> = Object.fromEntries(
  detailedPricelist.map((item) => {
    // Cari harga LCD terendah yang ada
    const lcdPrices = [item.lcdGradeA, item.lcdOled, item.lcdGenuine].filter(
      (p): p is number => typeof p === "number" && p > 0
    );
    const minLcd = lcdPrices.length > 0 ? Math.min(...lcdPrices) : undefined;

    return [
      item.slug,
      {
        baterai: item.battery,
        lcd: minLcd,
        charger: item.charger,
        kamera: item.cameraBack,
        speaker: item.speaker,
      },
    ];
  })
);

export const priceLabels: Record<PriceKey, string> = {
  baterai: "Ganti baterai",
  lcd: "Ganti LCD",
  charger: "Ganti port charger",
  kamera: "Ganti kamera belakang",
  speaker: "Service speaker",
};

export const PROMO_TITLE = "Pricelist Sparepart & Servis iPhone Bandung";
export const PROMO_SUBTITLE =
  "Garansi 2–3 bulan. Konfirmasikan durasi, cakupan dan pengecualian sesuai perbaikan sebelum pengerjaan.";

export const PRICE_DISCLAIMER =
  "Harga suku cadang berkualitas tinggi dan terupdate. Harga belum termasuk biaya pemasangan. Garansi resmi berlaku jika pemasangan langsung dilakukan di workshop Service iPhone Bandung.";

export function getPrice(modelSlug: string, key: PriceKey): number | undefined {
  return priceBook[modelSlug]?.[key];
}

export function getDetailedPrice(modelSlug: string): DetailedPrice | undefined {
  return detailedPricelist.find((p) => p.slug === modelSlug);
}
