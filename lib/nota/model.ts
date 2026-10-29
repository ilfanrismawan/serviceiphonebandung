import { z } from "zod";

export const DEFAULT_STATUSES = [
  "Diterima",
  "Dicek",
  "Menunggu persetujuan",
  "Dikerjakan",
  "Selesai",
  "Diambil",
  "Dibatalkan",
];
const short = z.string().trim().max(200);
const paragraph = z.string().trim().max(4000);
export const money = z.number().int().min(0).max(100_000_000);
export const itemSchema = z.object({
  label: short.min(1, "Nama layanan wajib diisi"),
  quantity: z.number().int().min(1).max(100),
  price: money,
});
export const invoiceSchema = z
  .object({
    brandId: z.string().trim().min(1).max(100).default("sib"),
    customerName: short.min(1, "Nama customer wajib diisi"),
    phone: z
      .string()
      .trim()
      .regex(/^(?:\+?62|0)[0-9\s-]{8,16}$/, "Nomor WhatsApp tidak valid"),
    device: short.min(1, "Perangkat wajib diisi"),
    identifier: short,
    complaint: paragraph.min(1, "Keluhan wajib diisi"),
    action: paragraph,
    warranty: paragraph,
    notes: paragraph,
    internalNote: paragraph,
    status: short.min(1),
    discount: money,
    items: z.array(itemSchema).min(1).max(50),
    version: z.number().int().min(1).optional(),
    deposit: money.optional(),
    paymentMethod: z.enum(["Tunai", "Transfer", "QRIS", "Lainnya"]).optional(),
  })
  .superRefine((value, ctx) => {
    const subtotal = value.items.reduce((n, i) => n + i.quantity * i.price, 0);
    if (subtotal > 100_000_000)
      ctx.addIssue({
        code: "custom",
        message: "Total maksimal Rp100 juta",
        path: ["items"],
      });
    if (value.discount > subtotal)
      ctx.addIssue({
        code: "custom",
        message: "Diskon melebihi subtotal",
        path: ["discount"],
      });
    if ((value.deposit || 0) > subtotal - value.discount)
      ctx.addIssue({
        code: "custom",
        message: "DP melebihi total",
        path: ["deposit"],
      });
  });
export const paymentSchema = z.object({
  amount: money.refine((v) => v > 0, "Pembayaran harus lebih dari nol"),
  method: z.enum(["Tunai", "Transfer", "QRIS", "Lainnya"]),
  note: z.string().trim().max(300),
  version: z.number().int().min(1),
});
const lines = z
  .array(short.min(1))
  .min(1)
  .max(30)
  .refine((v) => new Set(v).size === v.length, "Pilihan tidak boleh duplikat");
export const settingsSchema = z.object({
  name: short.min(1),
  address: z.string().trim().max(500),
  phone: z.string().regex(/^\+?[0-9\s-]{8,20}$/, "Nomor toko tidak valid"),
  logoUrl: z
    .string()
    .max(300_000)
    .refine(
      (v) =>
        !v || /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(v),
      "Gunakan unggahan logo PNG, JPG, atau WebP",
    ),
  color: z.string().regex(/^#[0-9a-f]{6}$/i),
  bank: z.string().trim().max(1000),
  warranty: paragraph,
  footer: z.string().trim().max(1000),
  statuses: lines.refine(
    (v) => DEFAULT_STATUSES.every((s) => v.includes(s)),
    "Status bawaan harus tetap tersedia",
  ),
  services: lines,
  paper: z.enum(["a4", "80", "58"]),
});
export type ShopSettings = z.infer<typeof settingsSchema>;
export const brandSchema = settingsSchema.extend({
  prefix: z
    .string()
    .trim()
    .toUpperCase()
    .regex(
      /^[A-Z][A-Z0-9]{1,7}$/,
      "Kode brand harus 2–8 huruf/angka, dimulai dengan huruf",
    ),
  version: z.number().int().positive().optional(),
});
export type BrandProfile = ShopSettings & {
  id: string;
  prefix: string;
  version: number;
  counter: number;
};
export type InvoiceInput = z.infer<typeof invoiceSchema>;
export type InvoiceDTO = Omit<
  InvoiceInput,
  "version" | "deposit" | "paymentMethod"
> & {
  id: string;
  number: number;
  token: string;
  brandNumber: number;
  numberPrefix: string;
  brandSnapshot: ShopSettings;
  version: number;
  createdAt: string;
  updatedAt: string;
  payments: {
    id: string;
    amount: number;
    method: string;
    note: string;
    createdAt: string;
  }[];
  history: { id: string; status: string; event: string; createdAt: string }[];
};
export type PublicInvoice = Omit<
  InvoiceDTO,
  "internalNote" | "token" | "id" | "version"
>;
export function totals(
  invoice: Pick<InvoiceInput, "items" | "discount"> & {
    payments?: { amount: number }[];
  },
) {
  const subtotal = invoice.items.reduce((n, i) => n + i.quantity * i.price, 0);
  const total = subtotal - invoice.discount;
  const paid = (invoice.payments || []).reduce((n, p) => n + p.amount, 0);
  return { subtotal, total, paid, balance: total - paid };
}
export function invoiceNumber(number: number, prefix = "SIB") {
  return `${prefix}-${String(number).padStart(6, "0")}`;
}
export function invoiceLabel(invoice: {
  number: number;
  brandNumber?: number;
  numberPrefix?: string;
}) {
  return invoiceNumber(
    invoice.brandNumber ?? invoice.number,
    invoice.numberPrefix || "SIB",
  );
}
export function mask(value: string) {
  return value.length > 4
    ? "•".repeat(Math.min(value.length - 4, 10)) + value.slice(-4)
    : "•".repeat(value.length);
}
export function whatsappNumber(value: string) {
  const n = value.replace(/\D/g, "");
  return n.startsWith("0") ? "62" + n.slice(1) : n;
}
