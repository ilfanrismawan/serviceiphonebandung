import "server-only";
import { siteConfig } from "@/config/site";
import { getBrand } from "./brands";
import { DEFAULT_STATUSES, settingsSchema, type ShopSettings } from "./model";

export const defaultSettings: ShopSettings = {
  name: siteConfig.name,
  address: `${siteConfig.address.street}, ${siteConfig.address.city}`,
  phone: siteConfig.contact.whatsapp,
  logoUrl: "",
  color: "#0071e3",
  bank: "",
  warranty: "",
  footer: "Terima kasih telah mempercayakan perangkat Anda kepada kami.",
  statuses: DEFAULT_STATUSES,
  services: [
    "Pengecekan perangkat",
    "Ganti baterai",
    "Ganti LCD",
    "Perbaikan mesin",
    "Perbaikan port charger",
  ],
  paper: "80",
};
export async function getSettings(brandId = "sib") {
  return settingsSchema.parse(await getBrand(brandId));
}
