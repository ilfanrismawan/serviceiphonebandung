import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cache } from "react";
/* eslint-disable @next/next/no-img-element -- Logos and QR codes are local raster data URLs. */
import QRCode from "qrcode";
import { headers } from "next/headers";
import { getPublicInvoice } from "@/lib/nota/invoices";
import { invoiceLabel, totals, whatsappNumber } from "@/lib/nota/model";
import { formatDate, formatRupiah as rp } from "@/lib/format";
import { ReceiptActions } from "@/components/nota/ReceiptActions";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
const readReceipt = cache(getPublicInvoice);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  if (!process.env.DATABASE_URL) return { title: { absolute: "Nota servis" } };
  const invoice = await readReceipt((await params).token);
  if (!invoice) return { title: { absolute: "Nota tidak ditemukan" } };
  const title = `${invoiceLabel(invoice)} · ${invoice.brandSnapshot.name}`;
  const description = `Nota servis perangkat dari ${invoice.brandSnapshot.name}.`;
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      siteName: invoice.brandSnapshot.name,
      description,
      images: [],
    },
    twitter: { card: "summary", title, description, images: [] },
  };
}
export default async function ReceiptPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  if (!process.env.DATABASE_URL)
    return (
      <div className="nota-app nota-login">
        <div className="nota-login-card">
          <h1>Nota belum tersedia.</h1>
          <p className="nota-muted" style={{ marginTop: 16 }}>
            Hubungi toko untuk mendapatkan informasi servis perangkat Anda.
          </p>
        </div>
      </div>
    );
  const invoice = await readReceipt(token);
  if (!invoice) notFound();
  const settings = invoice.brandSnapshot;
  const h = await headers();
  const host = h.get("host") || "";
  const origin =
    process.env.NOTA_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (host === "localhost:3000" ||
    /^localhost:\d+$/.test(host) ||
    /^127\.0\.0\.1:\d+$/.test(host)
      ? `http://${host}`
      : siteConfig.url);
  const qr = await QRCode.toDataURL(`${origin}/nota/${token}`, {
    width: 240,
    margin: 1,
    errorCorrectionLevel: "M",
  });
  const t = totals(invoice);
  return (
    <div
      className="nota-app nota-public"
      style={{ "--nota-accent": settings.color } as React.CSSProperties}
    >
      <div className="nota-public-top nota-no-print">
        <span className="nota-public-brand">{settings.name}</span>
        <ReceiptActions token={token} defaultPaper={settings.paper} />
      </div>
      <article className="nota-receipt">
        <header className="nota-receipt-head">
          <div>
            {settings.logoUrl && (
              <img
                src={settings.logoUrl}
                alt="Logo toko"
                className="nota-logo-preview"
              />
            )}
            <div className="nota-eyebrow">Nota servis perangkat</div>
            <h1>{settings.name}</h1>
            <p>
              {settings.address}
              <br />
              WhatsApp: {settings.phone}
            </p>
          </div>
          <div>
            <strong>{invoiceLabel(invoice)}</strong>
            <p style={{ marginTop: 10 }}>{formatDate(invoice.createdAt)}</p>
            <span
              className={`nota-badge ${t.balance === 0 ? "done" : ""}`}
              style={{ marginTop: 12 }}
            >
              {t.balance === 0 ? "Lunas" : "Belum lunas"}
            </span>
          </div>
        </header>
        <div className="nota-receipt-body">
          <div className="nota-public-status">
            <div>
              <div className="nota-eyebrow">Status perangkat Anda</div>
              <strong>{invoice.status}</strong>
            </div>
            <a
              className="nota-btn secondary nota-no-print"
              href={`https://wa.me/${whatsappNumber(settings.phone)}?text=${encodeURIComponent(`Halo, saya ingin menanyakan servis ${invoiceLabel(invoice)} (${invoice.device}).`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Hubungi toko ↗
            </a>
          </div>
          <dl className="nota-detail-grid">
            <div>
              <dt>Customer</dt>
              <dd>{invoice.customerName}</dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>{invoice.phone}</dd>
            </div>
            <div>
              <dt>Perangkat</dt>
              <dd>{invoice.device}</dd>
            </div>
            <div>
              <dt>Nomor seri / IMEI</dt>
              <dd>{invoice.identifier || "—"}</dd>
            </div>
            <div>
              <dt>Keluhan</dt>
              <dd>{invoice.complaint}</dd>
            </div>
            <div>
              <dt>Tindakan servis</dt>
              <dd>{invoice.action || "Menunggu hasil pengecekan."}</dd>
            </div>
          </dl>
          <div className="nota-table-wrap">
            <table className="nota-table">
              <thead>
                <tr>
                  <th>Layanan / sparepart</th>
                  <th>Qty</th>
                  <th>Harga</th>
                  <th style={{ textAlign: "right" }}>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((i, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        whiteSpace: "normal",
                        overflowWrap: "anywhere",
                        minWidth: 70,
                      }}
                    >
                      {i.label}
                    </td>
                    <td>{i.quantity}</td>
                    <td>{rp(i.price)}</td>
                    <td style={{ textAlign: "right" }}>
                      {rp(i.price * i.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ maxWidth: 330, marginLeft: "auto", marginTop: 20 }}>
            <div className="nota-total">
              <span>Subtotal</span>
              <span>{rp(t.subtotal)}</span>
            </div>
            <div className="nota-total">
              <span>Diskon</span>
              <span>− {rp(invoice.discount)}</span>
            </div>
            <div className="nota-total large">
              <span>Total</span>
              <span>{rp(t.total)}</span>
            </div>
            <div className="nota-total">
              <span>Sudah dibayar</span>
              <span>{rp(t.paid)}</span>
            </div>
            <div className="nota-total">
              <strong>Sisa pembayaran</strong>
              <strong>{rp(t.balance)}</strong>
            </div>
          </div>
          {invoice.payments.length > 0 && (
            <section className="nota-text-block">
              <h3>Riwayat pembayaran</h3>
              {invoice.payments.map((p) => (
                <p key={p.id}>
                  {formatDate(p.createdAt)} · {p.method} · {rp(p.amount)}
                </p>
              ))}
            </section>
          )}
          {settings.bank && (
            <section className="nota-text-block">
              <h3>Informasi pembayaran</h3>
              <p>{settings.bank}</p>
            </section>
          )}
          {invoice.warranty && (
            <section className="nota-text-block">
              <h3>Ketentuan garansi</h3>
              <p>{invoice.warranty}</p>
            </section>
          )}
          {invoice.notes && (
            <section className="nota-text-block">
              <h3>Catatan servis</h3>
              <p>{invoice.notes}</p>
            </section>
          )}
          <section className="nota-text-block nota-no-print">
            <h3 style={{ marginBottom: 18 }}>Perjalanan servis</h3>
            <div className="nota-history">
              {invoice.history.map((h) => (
                <div key={h.id}>
                  <p>{h.status}</p>
                  <time>
                    {formatDate(h.createdAt)} ·{" "}
                    {new Date(h.createdAt).toLocaleTimeString("id-ID", {
                      timeZone: "Asia/Jakarta",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    WIB
                  </time>
                </div>
              ))}
            </div>
          </section>
          <footer className="nota-receipt-foot">
            <p>
              {settings.footer}
              <br />
              <br />
              Simpan nota ini sebagai bukti servis.
              <br />
              Pindai QR untuk melihat perkembangan perangkat Anda.
            </p>
            <img src={qr} alt="QR tautan nota servis" width={90} height={90} />
          </footer>
        </div>
      </article>
      <p className="nota-updated nota-no-print">
        Terakhir diperbarui {formatDate(invoice.updatedAt)} ·{" "}
        {new Date(invoice.updatedAt).toLocaleTimeString("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
        WIB
        <br />
        Tautan ini bersifat pribadi. Bagikan hanya kepada pihak yang Anda
        percaya.
      </p>
    </div>
  );
}
