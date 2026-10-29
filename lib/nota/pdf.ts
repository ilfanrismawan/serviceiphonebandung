import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";
import {
  type PublicInvoice,
  type ShopSettings,
  invoiceLabel,
  totals,
} from "./model";
import { formatDate, formatRupiah as rp } from "@/lib/format";

// Standard PDF fonts support Latin text. Normalize punctuation and remove unsupported glyphs.
const plain = (value: string) =>
  value
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2022/g, "*")
    .replace(/[^\x20-\x7e\xa0-\xff\n]/g, "?");
export async function receiptPdf(
  invoice: PublicInvoice,
  shop: ShopSettings,
  url: string,
  paper: string,
) {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const thermal = paper !== "a4";
  const width = paper === "58" ? 164.4 : paper === "80" ? 226.77 : 595.28;
  const margin = thermal ? 10 : 44;
  const usable = width - margin * 2;
  const size = thermal ? 8 : 10;
  let page = doc.addPage([width, 841.89]);
  let y = page.getHeight() - margin;
  const colorHex = shop.color.slice(1);
  const accent = rgb(
    parseInt(colorHex.slice(0, 2), 16) / 255,
    parseInt(colorHex.slice(2, 4), 16) / 255,
    parseInt(colorHex.slice(4, 6), 16) / 255,
  );
  const room = (height: number) => {
    if (y - height < margin + 18) {
      page = doc.addPage([width, 841.89]);
      y = page.getHeight() - margin;
    }
  };
  const line = (value: string, strong = false, fontSize = size) => {
    const selected = strong ? bold : font;
    const words = plain(value).split(/\s+/);
    const output: string[] = [];
    let current = "";
    for (const word of words) {
      if (selected.widthOfTextAtSize(word, fontSize) > usable) {
        if (current) {
          output.push(current);
          current = "";
        }
        let part = "";
        for (const char of word) {
          if (
            selected.widthOfTextAtSize(part + char, fontSize) > usable &&
            part
          ) {
            output.push(part);
            part = "";
          }
          part += char;
        }
        current = part;
      } else if (
        selected.widthOfTextAtSize(`${current} ${word}`.trim(), fontSize) >
          usable &&
        current
      ) {
        output.push(current);
        current = word;
      } else current = `${current} ${word}`.trim();
    }
    if (current) output.push(current);
    for (const text of output) {
      room(fontSize + 5);
      y -= fontSize + 5;
      page.drawText(text, {
        x: margin,
        y,
        size: fontSize,
        font: selected,
        color: rgb(0.12, 0.17, 0.23),
      });
    }
  };
  const block = (value: string) => {
    for (const part of value.split("\n")) line(part);
  };
  const gap = () => {
    y -= thermal ? 9 : 15;
  };
  const rule = () => {
    room(8);
    y -= 8;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.5,
      color: rgb(0.82, 0.86, 0.9),
    });
    y -= 5;
  };
  if (shop.logoUrl && !shop.logoUrl.startsWith("data:image/webp")) {
    try {
      const data = shop.logoUrl.split(",")[1];
      const image = shop.logoUrl.startsWith("data:image/png")
        ? await doc.embedPng(Buffer.from(data, "base64"))
        : await doc.embedJpg(Buffer.from(data, "base64"));
      const scale = Math.min(usable / image.width, 45 / image.height);
      const height = image.height * scale;
      y -= height;
      page.drawImage(image, {
        x: margin,
        y,
        width: image.width * scale,
        height,
      });
      gap();
    } catch {
      /* A malformed logo must not prevent downloading a receipt. */
    }
  }
  line(shop.name, true, thermal ? 12 : 20);
  block(shop.address);
  line(`WhatsApp: ${shop.phone}`);
  rule();
  line("NOTA SERVIS PERANGKAT", true);
  line(invoiceLabel(invoice), true);
  line(formatDate(invoice.createdAt));
  line(`Status: ${invoice.status}`, true);
  gap();
  line(`Customer: ${invoice.customerName}`);
  line(`WhatsApp: ${invoice.phone}`);
  line(`Perangkat: ${invoice.device}`);
  if (invoice.identifier) line(`Seri / IMEI: ${invoice.identifier}`);
  gap();
  line("Keluhan", true);
  block(invoice.complaint);
  if (invoice.action) {
    gap();
    line("Tindakan servis", true);
    block(invoice.action);
  }
  rule();
  for (const item of invoice.items) {
    line(item.label, true);
    line(
      `${item.quantity} x ${rp(item.price)} = ${rp(item.quantity * item.price)}`,
    );
    gap();
  }
  rule();
  const t = totals(invoice);
  line(`Subtotal: ${rp(t.subtotal)}`);
  line(`Diskon: ${rp(invoice.discount)}`);
  line(`TOTAL: ${rp(t.total)}`, true, size + 2);
  line(`Dibayar: ${rp(t.paid)}`);
  line(`Sisa: ${rp(t.balance)}`, true);
  line(t.balance === 0 ? "LUNAS" : "BELUM LUNAS", true);
  if (invoice.payments.length) {
    gap();
    line("Riwayat pembayaran", true);
    for (const p of invoice.payments)
      line(`${formatDate(p.createdAt)} / ${p.method}: ${rp(p.amount)}`);
  }
  for (const [label, value] of [
    ["Informasi pembayaran", shop.bank],
    ["Garansi", invoice.warranty],
    ["Catatan", invoice.notes],
  ])
    if (value) {
      gap();
      line(label, true);
      block(value);
    }
  gap();
  block(shop.footer);
  gap();
  room(100);
  const qr = await doc.embedPng(
    await QRCode.toDataURL(url, { margin: 1, width: 200 }),
  );
  y -= 80;
  page.drawImage(qr, { x: (width - 80) / 2, y, width: 80, height: 80 });
  gap();
  line("Pindai QR untuk melihat nota online.");
  doc.setTitle(`Nota ${invoiceLabel(invoice)}`);
  doc.setAuthor(shop.name);
  doc.getPages().forEach((p, i) =>
    p.drawText(`${i + 1} / ${doc.getPageCount()}`, {
      x: margin,
      y: 8,
      font,
      size: 7,
      color: accent,
    }),
  );
  return doc.save();
}
