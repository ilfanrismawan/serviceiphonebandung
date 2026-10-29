"use client";
export default function NotaError({ reset }: { reset: () => void }) {
  return (
    <div className="nota-app nota-login">
      <div className="nota-login-card">
        <h1>Nota belum dapat dimuat.</h1>
        <p className="nota-muted" style={{ margin: "16px 0" }}>
          Silakan coba kembali atau hubungi toko untuk informasi servis Anda.
        </p>
        <button className="nota-btn" onClick={reset}>
          Coba kembali
        </button>
      </div>
    </div>
  );
}
