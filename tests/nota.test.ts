import { test } from "node:test";
import assert from "node:assert/strict";
import { PDFDocument } from "pdf-lib";
import {
  invoiceSchema,
  paymentSchema,
  totals,
  mask,
  invoiceNumber,
  invoiceLabel,
  brandSchema,
  DEFAULT_STATUSES,
  type PublicInvoice,
  type ShopSettings,
} from "../lib/nota/model";
import { receiptPdf } from "../lib/nota/pdf";

const input = {
  customerName: "Agus",
  phone: "081234567890",
  device: "iPhone 13",
  identifier: "123456789012345",
  complaint: "Baterai boros",
  action: "Ganti baterai",
  warranty: "30 hari",
  notes: "",
  internalNote: "Catatan teknisi",
  status: "Diterima",
  discount: 25000,
  deposit: 50000,
  items: [{ label: "Baterai", quantity: 2, price: 250000 }],
};
test("subtotal, diskon, pembayaran dan sisa dihitung sebagai integer Rupiah", () => {
  assert.deepEqual(
    totals({ ...input, payments: [{ amount: 50000 }, { amount: 100000 }] }),
    { subtotal: 500000, total: 475000, paid: 150000, balance: 325000 },
  );
  assert.equal(invoiceSchema.safeParse(input).success, true);
});
test("tolak diskon atau DP berlebihan, pecahan Rupiah dan nilai negatif", () => {
  for (const update of [
    { discount: 500001 },
    { deposit: 475001 },
    { discount: -1 },
    { discount: 1.5 },
    { items: [{ label: "X", quantity: 0, price: 1 }] },
    { items: [{ label: "X", quantity: 100, price: 100000000 }] },
  ])
    assert.equal(
      invoiceSchema.safeParse({ ...input, ...update }).success,
      false,
    );
  assert.equal(
    paymentSchema.safeParse({
      amount: 0,
      method: "Tunai",
      note: "",
      version: 1,
    }).success,
    false,
  );
});
test("penyamaran tidak membocorkan identifier pendek dan nomor nota stabil", () => {
  assert.equal(mask("1234"), "••••");
  assert.equal(mask("123456789"), "•••••6789");
  assert.equal(mask(""), "");
  assert.equal(invoiceNumber(12), "SIB-000012");
  assert.equal(
    invoiceLabel({ number: 99, brandNumber: 1, numberPrefix: "DGC" }),
    "DGC-000001",
  );
});
test("PDF A4 dan thermal valid, termasuk teks panjang dan karakter khusus", async () => {
  const shop: ShopSettings = {
    name: "Service iPhone Bandung",
    address: "Bandung",
    phone: "6281234567890",
    logoUrl: "",
    color: "#0071e3",
    bank: "BCA 1234",
    warranty: "",
    footer: "Terima kasih 🙏",
    statuses: DEFAULT_STATUSES,
    services: ["Servis"],
    paper: "80",
  };
  const invoice: PublicInvoice = {
    ...input,
    brandId: "sib",
    brandNumber: 1,
    numberPrefix: "SIB",
    brandSnapshot: shop,
    number: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    payments: [],
    history: [],
    identifier: mask(input.identifier),
    phone: mask(input.phone),
    notes: "Catatan panjang ".repeat(250),
    items: [{ label: "X".repeat(200), quantity: 1, price: 250000 }],
  };
  for (const paper of ["a4", "80", "58"]) {
    const bytes = await receiptPdf(
      invoice,
      shop,
      "https://example.com/nota/test",
      paper,
    );
    const pdf = await PDFDocument.load(bytes);
    assert.ok(pdf.getPageCount() > 0);
    assert.equal(
      Math.round(pdf.getPage(0).getWidth()),
      paper === "a4" ? 595 : paper === "80" ? 227 : 164,
    );
  }
});
test("kode brand dinormalisasi dan menolak format yang merusak penomoran", () => {
  const settings = {
    name: "Brand",
    address: "",
    phone: "081234567890",
    logoUrl: "",
    color: "#0071e3",
    bank: "",
    warranty: "",
    footer: "",
    statuses: DEFAULT_STATUSES,
    services: ["Servis"],
    paper: "80",
  };
  assert.equal(
    brandSchema.parse({ ...settings, prefix: " dgc " }).prefix,
    "DGC",
  );
  for (const prefix of ["A", "A-B", "12ABC", "TOOLONGCODE", "A B"])
    assert.equal(brandSchema.safeParse({ ...settings, prefix }).success, false);
});
