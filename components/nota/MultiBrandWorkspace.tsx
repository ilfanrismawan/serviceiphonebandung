"use client";
/* eslint-disable @next/next/no-img-element -- Brand logos are validated raster data URLs. */
import { useEffect, useState, type FormEvent } from "react";
import {
  api,
  Field,
  InvoiceList,
  InvoiceEditor,
  SettingsEditor,
} from "./AdminApp";
import type { BrandProfile, InvoiceDTO } from "@/lib/nota/model";

const errorText = (e: unknown) =>
  e instanceof Error ? e.message : "Terjadi kesalahan";
type View = "list" | "edit" | "brands" | "brand-edit" | "settings";

export function MultiBrandWorkspace() {
  const [phase, setPhase] = useState<"loading" | "login" | "setup" | "ready">(
    "loading",
  );
  const [brands, setBrands] = useState<BrandProfile[]>([]);
  const [brandId, setBrandId] = useState("");
  const [view, setView] = useState<View>("list");
  const [invoice, setInvoice] = useState<InvoiceDTO | null>(null);
  const [editing, setEditing] = useState<BrandProfile | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [editorKey, setEditorKey] = useState(0);
  const selected = brands.find((b) => b.id === brandId);
  async function load() {
    const session = await api<{
      authenticated: boolean;
      setupRequired?: boolean;
    }>("session");
    if (session.setupRequired) {
      setPhase("setup");
      return;
    }
    if (!session.authenticated) {
      setPhase("login");
      return;
    }
    const profiles = await api<BrandProfile[]>("brands");
    setBrands(profiles);
    setPhase("ready");
  }
  useEffect(() => {
    let active = true;
    api<{ authenticated: boolean; setupRequired?: boolean }>("session")
      .then(async (session) => {
        if (!active) return;
        if (session.setupRequired) {
          setPhase("setup");
          return;
        }
        if (!session.authenticated) {
          setPhase("login");
          return;
        }
        const profiles = await api<BrandProfile[]>("brands");
        if (active) {
          setBrands(profiles);
          setPhase("ready");
        }
      })
      .catch((e) => {
        if (active) {
          setError(errorText(e));
          setPhase("login");
        }
      });
    return () => {
      active = false;
    };
  }, []);
  async function signIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await api("login", {
        passcode: new FormData(e.currentTarget).get("passcode"),
      });
      await load();
    } catch (e) {
      setError(errorText(e));
    } finally {
      setBusy(false);
    }
  }
  function signedOut() {
    setBrands([]);
    setPhase("login");
    setView("list");
    setBrandId("");
    setNotice("");
  }
  async function logout() {
    setBusy(true);
    try {
      await api("logout", {});
      signedOut();
    } catch (e) {
      setError(errorText(e));
    } finally {
      setBusy(false);
    }
  }
  function navigate(next: View) {
    setView(next);
    setError("");
    setNotice("");
  }
  function createInvoice() {
    setInvoice(null);
    setEditorKey((k) => k + 1);
    navigate("edit");
  }
  function editBrand(profile?: BrandProfile) {
    const base = brands[0];
    setEditing(
      profile || {
        ...base,
        id: "",
        name: "",
        prefix: "",
        address: "",
        phone: "",
        logoUrl: "",
        bank: "",
        warranty: "",
        version: 0,
        counter: 0,
      },
    );
    navigate("brand-edit");
  }
  function brandSaved(profile: BrandProfile) {
    setBrands((previous) =>
      previous.some((b) => b.id === profile.id)
        ? previous.map((b) => (b.id === profile.id ? profile : b))
        : [...previous, profile],
    );
    setEditing(profile);
    setNotice(
      "Pengaturan brand berhasil disimpan. Identitas nota lama tetap dipertahankan.",
    );
  }
  if (phase !== "ready" || !brands.length)
    return (
      <div className="nota-app nota-login">
        <div className="nota-login-card">
          <div className="nota-mark">▤</div>
          <div className="nota-eyebrow">Nota workspace</div>
          <h1>Ruang admin.</h1>
          <p className="nota-muted">
            Kelola semua brand dan perjalanan servis dalam satu tempat.
          </p>
          {phase === "loading" ? (
            <p className="nota-loading">Menyiapkan ruang kerja…</p>
          ) : phase === "setup" ? (
            <>
              <div className="nota-error">Database belum terhubung.</div>
              <p>
                Isi koneksi PostgreSQL pada <code>DATABASE_URL</code>, lalu
                jalankan migrasi sesuai panduan <code>docs/nota-setup.md</code>.
              </p>
              <button
                className="nota-btn"
                style={{ marginTop: 20 }}
                onClick={() => void load().catch((e) => setError(errorText(e)))}
              >
                Periksa koneksi
              </button>
            </>
          ) : (
            <form onSubmit={signIn}>
              <Field label="Passcode admin">
                <input
                  name="passcode"
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]{6,12}"
                  minLength={6}
                  maxLength={12}
                  required
                  autoComplete="current-password"
                  placeholder="Masukkan passcode"
                  autoFocus
                />
              </Field>
              {error && (
                <p role="alert" className="nota-error">
                  {error}
                </p>
              )}
              <button className="nota-btn" disabled={busy}>
                {busy ? "Memeriksa…" : "Masuk ke ruang admin →"}
              </button>
              <small>Satu akses admin untuk seluruh brand · sesi 12 jam.</small>
            </form>
          )}
        </div>
      </div>
    );
  const statuses = Array.from(new Set(brands.flatMap((b) => b.statuses)));
  return (
    <div
      className="nota-app"
      style={
        { "--nota-accent": selected?.color || "#0071e3" } as React.CSSProperties
      }
    >
      <aside className="nota-sidebar">
        <div className="nota-brand">
          Nota workspace<small>Semua brand, satu tempat.</small>
        </div>
        <label className="nota-workspace-picker">
          Ruang kerja
          <select
            aria-label="Pilih brand"
            value={brandId}
            onChange={(e) => {
              setBrandId(e.target.value);
              navigate("list");
            }}
          >
            <option value="">Semua brand</option>
            {brands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </label>
        <nav aria-label="Menu admin">
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => navigate("list")}
          >
            ▤ &nbsp; Dashboard
          </button>
          <button
            className={view === "edit" ? "active" : ""}
            onClick={createInvoice}
          >
            ＋ &nbsp; Buat nota
          </button>
          <button
            className={
              view === "brands" || view === "brand-edit" ? "active" : ""
            }
            onClick={() => navigate("brands")}
          >
            ▦ &nbsp; Kelola brand
          </button>
          <button
            className={view === "settings" ? "active" : ""}
            onClick={() => navigate("settings")}
          >
            ⚙ &nbsp; Pengaturan
          </button>
        </nav>
        <div className="nota-sidebar-bottom">
          <span>● &nbsp; Akses seluruh brand</span>
          <a href="/" target="_blank" rel="noreferrer">
            Lihat website ↗
          </a>
          <button disabled={busy} onClick={() => void logout()}>
            Keluar ↗
          </button>
        </div>
      </aside>
      <div className="nota-main">
        {error && (
          <p className="nota-error" role="alert">
            {error}
          </p>
        )}
        {notice && (
          <p className="nota-success" role="status">
            {notice}
          </p>
        )}
        {view === "list" && (
          <InvoiceList
            key={brandId}
            settings={{
              ...(selected || brands[0]),
              statuses: selected?.statuses || statuses,
            }}
            brandId={brandId}
            brandName={selected?.name || "Semua brand"}
            onNew={createInvoice}
            onOpen={(i) => {
              setInvoice(i);
              setEditorKey((k) => k + 1);
              navigate("edit");
            }}
          />
        )}
        {view === "edit" && (
          <InvoiceEditor
            key={editorKey}
            invoice={invoice}
            brands={brands}
            initialBrandId={brandId || brands[0].id}
            onBack={() => navigate("list")}
            onSaved={(i) => {
              setInvoice(i);
              void api<BrandProfile[]>("brands")
                .then(setBrands)
                .catch((e) => setError(errorText(e)));
            }}
          />
        )}
        {view === "brands" && (
          <>
            <div className="nota-topbar">
              <div>
                <div className="nota-eyebrow">Ruang kerja / Kelola brand</div>
                <h1>Brand milikmu.</h1>
                <p className="nota-muted" style={{ marginTop: 10 }}>
                  Identitas sendiri. Pengelolaan tetap satu tempat.
                </p>
              </div>
              <button className="nota-btn" onClick={() => editBrand()}>
                ＋ Tambah brand
              </button>
            </div>
            <div className="nota-brand-grid">
              {brands.map((b) => (
                <section
                  className="nota-card nota-brand-card"
                  key={b.id}
                  style={{ borderTopColor: b.color }}
                >
                  <div className="nota-brand-card-heading">
                    {b.logoUrl ? (
                      <img
                        src={b.logoUrl}
                        alt={`Logo ${b.name}`}
                        className="nota-brand-logo"
                      />
                    ) : (
                      <span
                        className="nota-brand-monogram"
                        style={{ color: b.color }}
                      >
                        {b.name.slice(0, 1)}
                      </span>
                    )}
                    <div>
                      <h2>{b.name}</h2>
                      <small>
                        {b.id === "sib" ? "Brand pertama" : "Brand servis"}
                      </small>
                    </div>
                  </div>
                  <dl className="nota-brand-details">
                    <dt>Format nomor nota</dt>
                    <dd>{b.prefix}-000001</dd>
                    <dt>Alamat & WhatsApp</dt>
                    <dd>
                      {b.address || "Belum diisi"}
                      <br />
                      {b.phone}
                    </dd>
                    <dt>Pembayaran</dt>
                    <dd>{b.bank || "Belum diisi"}</dd>
                    <dt>Garansi bawaan</dt>
                    <dd>{b.warranty || "Belum diisi"}</dd>
                  </dl>
                  <div className="nota-actions">
                    <button
                      className="nota-btn secondary"
                      onClick={() => editBrand(b)}
                    >
                      Atur identitas
                    </button>
                    <button
                      className="nota-btn secondary"
                      onClick={() => {
                        setBrandId(b.id);
                        navigate("list");
                      }}
                    >
                      Buka brand ↗
                    </button>
                  </div>
                </section>
              ))}
            </div>
          </>
        )}
        {view === "brand-edit" && editing && (
          <>
            <button
              className="nota-link"
              style={{ marginBottom: 20 }}
              onClick={() => navigate("brands")}
            >
              ← Kembali ke brand
            </button>
            <SettingsEditor
              key={editing.id || "new"}
              settings={editing}
              onSaved={brandSaved}
              onPasscodeChanged={signedOut}
            />
          </>
        )}
        {view === "settings" && <AdminSecurity onChanged={signedOut} />}
      </div>
    </div>
  );
}

function AdminSecurity({ onChanged }: { onChanged: () => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setError("");
    if (data.get("next") !== data.get("confirm")) {
      setError("Konfirmasi passcode tidak sama.");
      return;
    }
    setBusy(true);
    try {
      await api("passcode", {
        current: data.get("current"),
        next: data.get("next"),
      });
      onChanged();
    } catch (e) {
      setError(errorText(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="nota-settings">
      <div className="nota-topbar">
        <div>
          <div className="nota-eyebrow">Ruang kerja / Pengaturan</div>
          <h1>Keamanan admin.</h1>
          <p className="nota-muted" style={{ marginTop: 10 }}>
            Passcode ini berlaku untuk seluruh brand. Identitas masing-masing
            brand diatur melalui Kelola brand.
          </p>
        </div>
      </div>
      {error && (
        <p className="nota-error" role="alert">
          {error}
        </p>
      )}
      <form className="nota-card nota-stack" onSubmit={submit}>
        <h2>Ganti passcode admin</h2>
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
        <p className="nota-muted">
          Setelah diganti, semua sesi admin berakhir. Masuk kembali dengan
          passcode baru.
        </p>
        <button className="nota-btn" disabled={busy}>
          {busy ? "Menyimpan…" : "Simpan passcode baru"}
        </button>
      </form>
    </div>
  );
}
