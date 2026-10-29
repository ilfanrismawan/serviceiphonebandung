export default function NotaNotFound() {
  return (
    <div className="nota-app nota-login">
      <div className="nota-login-card">
        <div className="nota-mark">▤</div>
        <h1>Nota tidak ditemukan.</h1>
        <p style={{ marginTop: 16 }} className="nota-muted">
          Periksa kembali tautan nota dari toko atau hubungi toko untuk meminta
          tautan yang sesuai.
        </p>
        <a className="nota-btn" style={{ marginTop: 22 }} href="/kontak">
          Hubungi toko
        </a>
      </div>
    </div>
  );
}
