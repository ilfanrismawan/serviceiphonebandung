"use client";
/* eslint-disable @next/next/no-img-element -- Logos are validated, size-limited raster data URLs. */

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { formatDate, formatRupiah as rp } from "@/lib/format";
import {
  invoiceLabel,
  type BrandProfile,
  totals,
  whatsappNumber,
  type InvoiceDTO,
  type InvoiceInput,
  type ShopSettings,
} from "@/lib/nota/model";

export async function api<T>(path: string, data?: unknown): Promise<T> {
  const response = await fetch(`/api/nota-admin/${path}`, {
    method: data === undefined ? "GET" : "POST",
    headers:
      data === undefined ? undefined : { "Content-Type": "application/json" },
    body: data === undefined ? undefined : JSON.stringify(data),
    cache: "no-store",
  });
  const result = await response.json();
  if (!response.ok) {
    if (response.status === 401 && path !== "login" && path !== "passcode")
      window.location.reload();
    throw new Error(result.error || "Permintaan gagal");
  }
  return result;
}
export function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <label className={full ? "full" : ""}>
      {label}
      {children}
    </label>
  );
}
export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`nota-badge ${["Selesai", "Diambil"].includes(status) ? "done" : status === "Dibatalkan" ? "cancel" : ["Dikerjakan", "Dicek"].includes(status) ? "work" : ""}`}
    >
      {status}
    </span>
  );
}
const message = (error: unknown) =>
  error instanceof Error ? error.message : "Terjadi kesalahan";

export function InvoiceList({
  settings,
  brandId = "",
  brandName = "Semua brand",
  onNew,
  onOpen,
}: {
  settings: ShopSettings;
  brandId?: string;
  brandName?: string;
  onNew: () => void;
  onOpen: (invoice: InvoiceDTO) => void;
}) {
  const [rows, setRows] = useState<InvoiceDTO[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [summary, setSummary] = useState({ paid: 0, balance: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");
      try {
        const data = await api<{
          invoices: InvoiceDTO[];
          count: number;
          summary: { paid: number; balance: number };
        }>(
          `invoices?q=${encodeURIComponent(query)}&status=${encodeURIComponent(status)}&page=${page}&brandId=${encodeURIComponent(brandId)}`,
        );
        if (active) {
          setRows(data.invoices);
          setCount(data.count);
          setSummary(data.summary);
        }
      } catch (e) {
        if (active) setError(message(e));
      } finally {
        if (active) setLoading(false);
      }
    }, 250);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [query, status, page, brandId]);
  const { paid, balance } = summary;
  return (
    <>
      <div className="nota-topbar">
        <div>
          <div className="nota-eyebrow">Ruang kerja / Nota servis</div>
          <h1>Setiap brand, tercatat.</h1>
          <p className="nota-muted" style={{ marginTop: 10 }}>
            {brandName} · Buat nota, pantau pengerjaan, dan bagikan ke customer.
          </p>
        </div>
        <button className="nota-btn" onClick={onNew}>
          ＋ Buat nota
        </button>
      </div>
      <div className="nota-stats">
        <div className="nota-stat">
          <span>Nota sesuai filter</span>
          <strong>{count}</strong>
        </div>
        <div className="nota-stat">
          <span>Pembayaran diterima</span>
          <strong>{rp(paid)}</strong>
        </div>
        <div className="nota-stat">
          <span>Sisa tagihan</span>
          <strong>{rp(balance)}</strong>
        </div>
      </div>
      <section className="nota-card">
        <div className="nota-card-heading">
          <h2>Daftar nota</h2>
          <small>Terbaru lebih dahulu</small>
        </div>
        <div className="nota-toolbar">
          <input
            aria-label="Cari nota"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Cari nama, nomor nota, WhatsApp, atau perangkat…"
          />
          <select
            aria-label="Filter status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
          >
            <option value="">Semua status</option>
            {settings.statuses.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        {error ? (
          <p role="alert" className="nota-error">
            {error}
          </p>
        ) : loading ? (
          <p className="nota-loading">Memuat nota…</p>
        ) : rows.length ? (
          <div className="nota-table-wrap">
            <table className="nota-table">
              <thead>
                <tr>
                  <th>Nota / tanggal</th>
                  <th>Customer / perangkat</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Pembayaran</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((i) => {
                  const t = totals(i);
                  return (
                    <tr key={i.id}>
                      <td>
                        <button className="nota-link" onClick={() => onOpen(i)}>
                          {invoiceLabel(i)}
                        </button>
                        <small>{formatDate(i.createdAt)}</small>
                        <span
                          className="nota-brand-badge"
                          style={{ color: i.brandSnapshot.color }}
                        >
                          {i.brandSnapshot.name}
                        </span>
                      </td>
                      <td>
                        {i.customerName}
                        <small>{i.device}</small>
                      </td>
                      <td>
                        <StatusBadge status={i.status} />
                      </td>
                      <td>{rp(t.total)}</td>
                      <td>
                        <span
                          className={`nota-badge ${t.balance === 0 ? "done" : ""}`}
                        >
                          {t.balance === 0 ? "Lunas" : `Sisa ${rp(t.balance)}`}
                        </span>
                      </td>
                      <td>
                        <button
                          className="nota-link"
                          onClick={() => onOpen(i)}
                          aria-label={`Buka ${invoiceLabel(i)}`}
                        >
                          Buka ↗
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="nota-empty">
            <strong>
              {query || status
                ? "Nota belum ditemukan"
                : "Nota pertama dimulai di sini."}
            </strong>
            <p>
              {query || status
                ? "Coba kata pencarian atau filter lainnya."
                : "Catat perangkat yang masuk dan bagikan perkembangannya ke customer."}
            </p>
            {!query && !status && (
              <button
                className="nota-btn"
                onClick={onNew}
                style={{ marginTop: 20 }}
              >
                ＋ Buat nota pertama
              </button>
            )}
          </div>
        )}
        <div className="nota-pagination">
          <span>
            {count} nota · halaman {page} dari{" "}
            {Math.max(1, Math.ceil(count / 25))}
          </span>
          <div className="nota-actions">
            <button
              className="nota-btn secondary"
              disabled={page === 1 || loading}
              onClick={() => setPage((p) => p - 1)}
            >
              ← Sebelumnya
            </button>
            <button
              className="nota-btn secondary"
              disabled={page * 25 >= count || loading}
              onClick={() => setPage((p) => p + 1)}
            >
              Berikutnya →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export function InvoiceEditor({
  invoice,
  brands,
  initialBrandId,
  onSaved,
  onBack,
}: {
  invoice: InvoiceDTO | null;
  brands: BrandProfile[];
  initialBrandId?: string;
  onSaved: (i: InvoiceDTO) => void;
  onBack: () => void;
}) {
  const initialBrand =
    brands.find((b) => b.id === (invoice?.brandId || initialBrandId)) ||
    brands[0];
  const [form, setForm] = useState<InvoiceInput>(
    () =>
      invoice || {
        brandId: initialBrand.id,
        customerName: "",
        phone: "",
        device: "",
        identifier: "",
        complaint: "",
        action: "",
        warranty: initialBrand.warranty,
        notes: "",
        internalNote: "",
        status: "Diterima",
        discount: 0,
        deposit: 0,
        paymentMethod: "Tunai",
        items: [{ label: "Pengecekan perangkat", quantity: 1, price: 0 }],
      },
  );
  const settings = brands.find((b) => b.id === form.brandId) || initialBrand;
  const [current, setCurrent] = useState(invoice);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [payment, setPayment] = useState({
    amount: 0,
    method: "Tunai",
    note: "",
  });
  // The editor mounts only after the session has loaded in the browser.
  const [origin] = useState(() => window.location.origin);
  const update = (key: keyof InvoiceInput, value: unknown) =>
    setForm((f) => ({ ...f, [key]: value }));
  const t = totals({
    ...form,
    payments:
      current?.payments || (form.deposit ? [{ amount: form.deposit }] : []),
  });
  const url = current ? `${origin}/nota/${current.token}` : "";
  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setSuccess("");
    try {
      const saved = await api<InvoiceDTO>(
        current ? `invoices/${current.id}` : "invoices",
        { ...form, version: current?.version },
      );
      setCurrent(saved);
      setForm(saved);
      onSaved(saved);
      setSuccess("Nota berhasil disimpan. Tautan customer siap dibagikan.");
    } catch (e) {
      setError(message(e));
    } finally {
      setBusy(false);
    }
  }
  async function recordPayment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!current) return;
    setBusy(true);
    setError("");
    setSuccess("");
    try {
      const saved = await api<InvoiceDTO>(`invoices/${current.id}/payments`, {
        ...payment,
        version: current.version,
      });
      setCurrent(saved);
      setForm((f) => ({ ...f, version: saved.version }));
      onSaved(saved);
      setPayment({ amount: 0, method: "Tunai", note: "" });
      setSuccess("Pembayaran berhasil dicatat.");
    } catch (e) {
      setError(message(e));
    } finally {
      setBusy(false);
    }
  }
  async function reload() {
    if (!current) return;
    if (
      !window.confirm(
        "Muat ulang nota? Perubahan yang belum disimpan akan hilang.",
      )
    )
      return;
    setBusy(true);
    try {
      const saved = await api<InvoiceDTO>(`invoices/${current.id}`);
      setCurrent(saved);
      setForm(saved);
      onSaved(saved);
      setError("");
    } catch (e) {
      setError(message(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <div className="nota-topbar">
        <div>
          <button
            className="nota-link"
            onClick={onBack}
            style={{ marginBottom: 16, fontSize: 12 }}
          >
            ← Kembali ke daftar
          </button>
          <div className="nota-eyebrow">
            {current ? "Detail nota servis" : "Penerimaan perangkat"}
          </div>
          <h1>{current ? invoiceLabel(current) : "Buat nota baru."}</h1>
        </div>
        {current && (
          <button
            className="nota-btn secondary"
            disabled={busy}
            onClick={() => void reload()}
          >
            Muat ulang
          </button>
        )}
      </div>
      {error && (
        <p role="alert" className="nota-error">
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="nota-success">
          {success}
        </p>
      )}
      <div className="nota-editor">
        <form onSubmit={save} id="invoice-form">
          <section className="nota-card">
            <Field label="Brand penerbit nota">
              <select
                value={form.brandId}
                disabled={Boolean(current)}
                onChange={(e) => {
                  const next = brands.find((b) => b.id === e.target.value)!;
                  setForm((f) => ({
                    ...f,
                    brandId: next.id,
                    warranty:
                      f.warranty === settings.warranty
                        ? next.warranty
                        : f.warranty,
                    status: next.statuses.includes(f.status)
                      ? f.status
                      : "Diterima",
                  }));
                }}
              >
                {brands.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} · {b.prefix}
                  </option>
                ))}
              </select>
            </Field>
            <div
              className="nota-brand-strip"
              style={{
                borderColor: current?.brandSnapshot.color || settings.color,
              }}
            >
              <strong>{current?.brandSnapshot.name || settings.name}</strong>
              <small>
                {current
                  ? "Identitas penerbit tersimpan pada nota ini."
                  : `Nomor berikutnya: ${settings.prefix}-${String(settings.counter + 1).padStart(6, "0")} · nomor final ditetapkan saat disimpan`}
              </small>
            </div>
          </section>
          <section className="nota-card">
            <div className="nota-card-heading">
              <h2>Customer & perangkat</h2>
              <span className="nota-eyebrow">01</span>
            </div>
            <div className="nota-grid">
              <Field label="Nama customer *">
                <input
                  required
                  maxLength={200}
                  value={form.customerName}
                  onChange={(e) => update("customerName", e.target.value)}
                  placeholder="Nama lengkap"
                />
              </Field>
              <Field label="WhatsApp customer *">
                <input
                  required
                  type="tel"
                  maxLength={22}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="08… atau 628…"
                />
              </Field>
              <Field label="Model perangkat *">
                <input
                  required
                  maxLength={200}
                  value={form.device}
                  onChange={(e) => update("device", e.target.value)}
                  placeholder="Contoh: iPhone 13 Pro 256 GB"
                />
              </Field>
              <Field label="Nomor seri / IMEI">
                <input
                  maxLength={200}
                  value={form.identifier}
                  onChange={(e) => update("identifier", e.target.value)}
                  placeholder="Opsional · disamarkan untuk customer"
                />
              </Field>
              <Field label="Keluhan customer *" full>
                <textarea
                  required
                  maxLength={4000}
                  value={form.complaint}
                  onChange={(e) => update("complaint", e.target.value)}
                  placeholder="Kondisi perangkat dan keluhan saat diterima"
                />
              </Field>
              <Field label="Tindakan servis" full>
                <textarea
                  maxLength={4000}
                  value={form.action}
                  onChange={(e) => update("action", e.target.value)}
                  placeholder="Hasil pengecekan dan tindakan yang dilakukan"
                />
              </Field>
            </div>
          </section>
          <section className="nota-card">
            <div className="nota-card-heading">
              <h2>Rincian biaya</h2>
              <span className="nota-eyebrow">02</span>
            </div>
            <datalist id="service-options">
              {settings.services.map((s) => (
                <option key={s} value={s} />
              ))}
            </datalist>
            {form.items.map((item, index) => (
              <div className="nota-item" key={index}>
                <Field label="Layanan / sparepart">
                  <input
                    required
                    list="service-options"
                    maxLength={200}
                    value={item.label}
                    onChange={(e) =>
                      update(
                        "items",
                        form.items.map((i, n) =>
                          n === index ? { ...i, label: e.target.value } : i,
                        ),
                      )
                    }
                  />
                </Field>
                <Field label="Qty">
                  <input
                    required
                    type="number"
                    min={1}
                    max={100}
                    value={item.quantity}
                    onChange={(e) =>
                      update(
                        "items",
                        form.items.map((i, n) =>
                          n === index
                            ? { ...i, quantity: Number(e.target.value) }
                            : i,
                        ),
                      )
                    }
                  />
                </Field>
                <Field label="Harga (Rp)">
                  <input
                    required
                    type="number"
                    min={0}
                    max={100000000}
                    step={1}
                    value={item.price}
                    onChange={(e) =>
                      update(
                        "items",
                        form.items.map((i, n) =>
                          n === index
                            ? { ...i, price: Number(e.target.value) }
                            : i,
                        ),
                      )
                    }
                  />
                </Field>
                <button
                  type="button"
                  className="nota-btn quiet"
                  disabled={form.items.length === 1}
                  style={{ padding: "10px 2px" }}
                  aria-label={`Hapus layanan ${index + 1}`}
                  onClick={() =>
                    update(
                      "items",
                      form.items.filter((_, n) => n !== index),
                    )
                  }
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="nota-link"
              disabled={form.items.length >= 50}
              onClick={() =>
                update("items", [
                  ...form.items,
                  { label: "", quantity: 1, price: 0 },
                ])
              }
            >
              ＋ Tambah rincian
            </button>
            <div className="nota-grid" style={{ marginTop: 24 }}>
              <Field label="Diskon (Rp)">
                <input
                  type="number"
                  required
                  min={0}
                  max={t.subtotal}
                  step={1}
                  value={form.discount}
                  onChange={(e) => update("discount", Number(e.target.value))}
                />
              </Field>
              {!current && (
                <>
                  <Field label="DP / pembayaran awal (Rp)">
                    <input
                      type="number"
                      min={0}
                      max={Math.max(0, t.total)}
                      step={1}
                      value={form.deposit || 0}
                      onChange={(e) =>
                        update("deposit", Number(e.target.value))
                      }
                    />
                  </Field>
                  <Field label="Metode pembayaran awal">
                    <select
                      value={form.paymentMethod}
                      onChange={(e) => update("paymentMethod", e.target.value)}
                    >
                      {["Tunai", "Transfer", "QRIS", "Lainnya"].map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </Field>
                </>
              )}
            </div>
          </section>
          <section className="nota-card">
            <div className="nota-card-heading">
              <h2>Status & catatan</h2>
              <span className="nota-eyebrow">03</span>
            </div>
            <div className="nota-grid">
              <Field label="Status pengerjaan">
                <select
                  value={form.status}
                  onChange={(e) => update("status", e.target.value)}
                >
                  {Array.from(new Set([...settings.statuses, form.status])).map(
                    (s) => (
                      <option key={s}>{s}</option>
                    ),
                  )}
                </select>
              </Field>
              <Field label="Garansi">
                <textarea
                  maxLength={4000}
                  value={form.warranty}
                  onChange={(e) => update("warranty", e.target.value)}
                  placeholder="Contoh: 30 hari sejak pengambilan, sesuai ketentuan"
                />
              </Field>
              <Field label="Catatan untuk customer" full>
                <textarea
                  maxLength={4000}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </Field>
              <Field label="Catatan internal · hanya terlihat admin" full>
                <textarea
                  maxLength={4000}
                  value={form.internalNote}
                  onChange={(e) => update("internalNote", e.target.value)}
                  placeholder="Catatan teknisi yang tidak dibagikan ke customer"
                />
              </Field>
            </div>
          </section>
          <button
            className="nota-btn"
            disabled={busy}
            style={{ width: "100%", marginBottom: 20 }}
          >
            {busy
              ? "Menyimpan…"
              : current
                ? "Simpan perubahan"
                : "Buat & simpan nota →"}
          </button>
        </form>
        <aside>
          <section className="nota-card">
            <h2 style={{ marginBottom: 18 }}>Ringkasan nota</h2>
            <div className="nota-total">
              <span>Subtotal</span>
              <strong>{rp(t.subtotal)}</strong>
            </div>
            <div className="nota-total">
              <span>Diskon</span>
              <span>− {rp(form.discount)}</span>
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
            <p className="nota-muted" style={{ fontSize: 11, marginTop: 14 }}>
              Nominal dalam Rupiah. Simpan perubahan agar tampil pada nota
              customer.
            </p>
          </section>
          {current && (
            <>
              <section className="nota-card">
                <h2 style={{ marginBottom: 16 }}>Bagikan nota</h2>
                <p
                  className="nota-muted"
                  style={{ fontSize: 12, marginBottom: 15 }}
                >
                  Customer dapat melihat status, rincian biaya, dan pembayaran
                  dari tautan ini.
                </p>
                <div className="nota-stack">
                  <a
                    className="nota-btn"
                    href={`https://wa.me/${whatsappNumber(current.phone)}?text=${encodeURIComponent(`Halo ${current.customerName}, berikut nota servis ${invoiceLabel(current)} untuk ${current.device}:\n${url}\nSilakan buka untuk melihat status dan rincian biaya.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kirim via WhatsApp ↗
                  </a>
                  <a
                    className="nota-btn secondary"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat nota & cetak ↗
                  </a>
                  <button
                    className="nota-btn secondary"
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(url);
                        setSuccess("Tautan nota disalin.");
                      } catch {
                        setError(
                          "Tidak dapat menyalin otomatis. Buka nota lalu salin alamatnya.",
                        );
                      }
                    }}
                  >
                    Salin tautan
                  </button>
                  <a
                    className="nota-btn secondary"
                    href={`/nota/${current.token}/pdf?paper=${settings.paper}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Unduh PDF ↓
                  </a>
                </div>
              </section>
              <section className="nota-card">
                <h2 style={{ marginBottom: 18 }}>Pembayaran</h2>
                <div className="nota-payment-list">
                  {current.payments.length ? (
                    current.payments.map((p) => (
                      <div key={p.id}>
                        <p>
                          <strong>{rp(p.amount)}</strong> · {p.method}
                        </p>
                        <small>
                          {formatDate(p.createdAt)}
                          {p.note ? ` · ${p.note}` : ""}
                        </small>
                      </div>
                    ))
                  ) : (
                    <p className="nota-muted">Belum ada pembayaran.</p>
                  )}
                </div>
                {totals(current).balance > 0 && (
                  <form className="nota-stack" onSubmit={recordPayment}>
                    <Field
                      label={`Tambah pembayaran · sisa ${rp(totals(current).balance)}`}
                    >
                      <input
                        aria-label="Nominal pembayaran"
                        required
                        type="number"
                        min={1}
                        max={totals(current).balance}
                        step={1}
                        value={payment.amount || ""}
                        onChange={(e) =>
                          setPayment((p) => ({
                            ...p,
                            amount: Number(e.target.value),
                          }))
                        }
                      />
                    </Field>
                    <Field label="Metode">
                      <select
                        value={payment.method}
                        onChange={(e) =>
                          setPayment((p) => ({ ...p, method: e.target.value }))
                        }
                      >
                        {["Tunai", "Transfer", "QRIS", "Lainnya"].map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Catatan pembayaran">
                      <input
                        maxLength={300}
                        value={payment.note}
                        onChange={(e) =>
                          setPayment((p) => ({ ...p, note: e.target.value }))
                        }
                      />
                    </Field>
                    <button className="nota-btn secondary" disabled={busy}>
                      Catat pembayaran
                    </button>
                  </form>
                )}
              </section>
              <section className="nota-card">
                <h2 style={{ marginBottom: 22 }}>Riwayat aktivitas</h2>
                <div className="nota-history">
                  {current.history.map((h) => (
                    <div key={h.id}>
                      <p>{h.event}</p>
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
            </>
          )}
        </aside>
      </div>
    </>
  );
}

export function SettingsEditor({
  settings,
  onSaved,
  onPasscodeChanged,
  showPasscode = false,
}: {
  settings: BrandProfile;
  onSaved: (s: BrandProfile) => void;
  onPasscodeChanged: () => void;
  showPasscode?: boolean;
}) {
  const [form, setForm] = useState(settings);
  const [services, setServices] = useState(settings.services.join("\n"));
  const [statuses, setStatuses] = useState(settings.statuses.join("\n"));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const update = (key: keyof BrandProfile, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));
  async function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setSuccess("");
    try {
      const saved = await api<BrandProfile>(
        settings.id ? `brands/${settings.id}` : "brands",
        {
          ...form,
          version: settings.id ? form.version : undefined,
          services: services
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean),
          statuses: statuses
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean),
        },
      );
      onSaved(saved);
      setForm(saved);
      setSuccess("Pengaturan berhasil disimpan.");
    } catch (e) {
      setError(message(e));
    } finally {
      setBusy(false);
    }
  }
  async function changePasscode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("next") !== data.get("confirm")) {
      setError("Konfirmasi passcode tidak sama.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      await api("passcode", {
        current: data.get("current"),
        next: data.get("next"),
      });
      onPasscodeChanged();
    } catch (e) {
      setError(message(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="nota-settings">
      <div className="nota-topbar">
        <div>
          <div className="nota-eyebrow">Ruang kerja / Pengaturan</div>
          <h1>{settings.id ? "Identitas brand." : "Tambah brand baru."}</h1>
          <p className="nota-muted" style={{ marginTop: 10 }}>
            Atur identitas, layanan, dan tampilan nota untuk brand ini.
            Perubahan berlaku pada nota baru.
          </p>
        </div>
      </div>
      {error && (
        <p role="alert" className="nota-error">
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="nota-success">
          {success}
        </p>
      )}
      <form onSubmit={save}>
        <section className="nota-card">
          <div className="nota-card-heading">
            <h2>Identitas toko</h2>
          </div>
          <div className="nota-grid">
            <Field label="Kode nomor nota *">
              <input
                required
                pattern="[A-Za-z][A-Za-z0-9]{1,7}"
                minLength={2}
                maxLength={8}
                disabled={settings.counter > 0}
                value={form.prefix}
                onChange={(e) => update("prefix", e.target.value.toUpperCase())}
                placeholder="Contoh: SIB, DGC"
              />
              <small>
                {settings.counter > 0
                  ? "Kode tetap setelah nota pertama diterbitkan."
                  : "Harus unik. Contoh hasil: DGC-000001."}
              </small>
            </Field>
            <Field label="Nama toko *">
              <input
                required
                maxLength={200}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </Field>
            <Field label="WhatsApp toko *">
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </Field>
            <Field label="Alamat" full>
              <textarea
                maxLength={500}
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
              />
            </Field>
            <Field label="Logo toko (PNG, JPG, WebP · maks. 200 KB)">
              {form.logoUrl && (
                <img
                  className="nota-logo-preview"
                  src={form.logoUrl}
                  alt="Logo toko"
                />
              )}
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (
                    file.size > 200000 ||
                    !["image/png", "image/jpeg", "image/webp"].includes(
                      file.type,
                    )
                  ) {
                    setError("Pilih logo PNG, JPG, atau WebP maksimal 200 KB.");
                    return;
                  }
                  const reader = new FileReader();
                  reader.onload = () =>
                    update("logoUrl", String(reader.result));
                  reader.readAsDataURL(file);
                }}
              />
              {form.logoUrl && (
                <button
                  type="button"
                  className="nota-link"
                  onClick={() => update("logoUrl", "")}
                >
                  Hapus logo
                </button>
              )}
            </Field>
            <Field label="Warna utama nota">
              <input
                type="color"
                value={form.color}
                onChange={(e) => update("color", e.target.value)}
                style={{ width: 70, height: 42 }}
              />
            </Field>
            <Field label="Ukuran cetak bawaan">
              <select
                value={form.paper}
                onChange={(e) => update("paper", e.target.value)}
              >
                <option value="80">Thermal 80 mm</option>
                <option value="58">Thermal 58 mm</option>
                <option value="a4">A4</option>
              </select>
            </Field>
          </div>
        </section>
        <section className="nota-card">
          <div className="nota-card-heading">
            <h2>Pembayaran & ketentuan</h2>
          </div>
          <div className="nota-grid">
            <Field label="Rekening / petunjuk pembayaran" full>
              <textarea
                maxLength={1000}
                value={form.bank}
                onChange={(e) => update("bank", e.target.value)}
                placeholder="Bank, nomor rekening, nama pemilik"
              />
            </Field>
            <Field label="Ketentuan garansi bawaan" full>
              <textarea
                maxLength={4000}
                value={form.warranty}
                onChange={(e) => update("warranty", e.target.value)}
              />
              <small>
                Disalin ke nota baru. Nota yang sudah dibuat mempertahankan
                ketentuan garansinya.
              </small>
            </Field>
            <Field label="Catatan kaki nota" full>
              <textarea
                maxLength={1000}
                value={form.footer}
                onChange={(e) => update("footer", e.target.value)}
              />
            </Field>
          </div>
        </section>
        <section className="nota-card">
          <div className="nota-card-heading">
            <h2>Layanan & alur pengerjaan</h2>
          </div>
          <div className="nota-grid">
            <Field label="Pilihan layanan · satu per baris">
              <textarea
                rows={8}
                value={services}
                onChange={(e) => setServices(e.target.value)}
              />
              <small>
                Admin juga dapat mengetik layanan khusus saat membuat nota.
              </small>
            </Field>
            <Field label="Status pengerjaan · satu per baris">
              <textarea
                rows={8}
                value={statuses}
                onChange={(e) => setStatuses(e.target.value)}
              />
              <small>
                Status bawaan tetap tersedia. Tambahkan status khusus sesuai
                kebutuhan.
              </small>
            </Field>
          </div>
        </section>
        <button
          disabled={busy}
          className="nota-btn"
          style={{ marginBottom: 30 }}
        >
          {busy ? "Menyimpan…" : "Simpan pengaturan"}
        </button>
      </form>
      {showPasscode && (
        <form className="nota-card" onSubmit={changePasscode}>
          <div className="nota-card-heading">
            <h2>Ganti passcode admin</h2>
          </div>
          <div className="nota-grid">
            <Field label="Passcode saat ini">
              <input
                name="current"
                required
                type="password"
                inputMode="numeric"
                pattern="[0-9]{6,12}"
                autoComplete="current-password"
              />
            </Field>
            <div />
            <Field label="Passcode baru · 6–12 digit">
              <input
                name="next"
                required
                type="password"
                inputMode="numeric"
                pattern="[0-9]{6,12}"
                autoComplete="new-password"
              />
            </Field>
            <Field label="Ulangi passcode baru">
              <input
                name="confirm"
                required
                type="password"
                inputMode="numeric"
                pattern="[0-9]{6,12}"
                autoComplete="new-password"
              />
            </Field>
          </div>
          <p className="nota-muted" style={{ margin: "15px 0", fontSize: 12 }}>
            Setelah diganti, semua sesi admin berakhir. Masuk kembali dengan
            passcode baru.
          </p>
          <button className="nota-btn secondary" disabled={busy}>
            Simpan passcode baru
          </button>
        </form>
      )}
    </div>
  );
}
