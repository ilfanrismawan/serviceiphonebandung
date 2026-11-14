// Maps a database failure to a cause the admin can act on, without exposing
// connection strings, hostnames or raw driver messages to the browser.
export type DbDiagnosis = { code: string; message: string };

function collect(error: unknown, depth = 0): { codes: string[]; text: string } {
  if (!error || typeof error !== "object" || depth > 5)
    return { codes: [], text: String(error ?? "") };
  const e = error as Record<string, unknown>;
  const codes = [
    e.code,
    e.errno,
    e.kind,
    e.originalCode,
    (e.meta as Record<string, unknown>)?.code,
  ].filter((v): v is string => typeof v === "string");
  let text = `${e.name ?? ""} ${e.message ?? ""}`;
  const meta = e.meta as Record<string, unknown> | undefined;
  if (meta) text += ` ${JSON.stringify(meta)}`;
  for (const child of [e.cause, ...(Array.isArray(e.errors) ? e.errors : [])]) {
    const inner = collect(child, depth + 1);
    codes.push(...inner.codes);
    text += ` ${inner.text}`;
  }
  return { codes, text };
}

export function diagnoseDbError(error: unknown): DbDiagnosis {
  const { codes, text } = collect(error);
  const has = (...c: string[]) => c.some((x) => codes.includes(x));
  const says = (re: RegExp) => re.test(text);

  if (says(/DATABASE_NOT_CONFIGURED/))
    return {
      code: "not_configured",
      message:
        "DATABASE_URL belum diisi di environment hosting. Tambahkan di Vercel → Settings → Environment Variables, lalu redeploy.",
    };
  if (
    has(
      "P1000",
      "28P01",
      "28000",
      "AuthenticationFailed",
      "DatabaseAccessDenied",
    ) ||
    says(/password authentication failed/i)
  )
    return {
      code: "auth_failed",
      message:
        "Database menolak login: password atau user pada DATABASE_URL salah. Salin ulang URI dari Supabase → Connect dan encode karakter khusus di password.",
    };
  if (says(/Tenant or user not found/i))
    return {
      code: "tenant_not_found",
      message:
        "Pooler Supabase tidak mengenali user. Pastikan user berformat postgres.<project-ref> dan host pooler sesuai region proyek.",
    };
  if (
    has(
      "P1011",
      "TlsConnectionError",
      "SELF_SIGNED_CERT_IN_CHAIN",
      "DEPTH_ZERO_SELF_SIGNED_CERT",
    ) ||
    says(/certificate|SSL|TLS/i)
  )
    return {
      code: "tls",
      message:
        "Koneksi SSL ke database gagal. Gunakan URI pooler dari Supabase → Connect (dengan ?sslmode=require atau tanpa parameter sslmode=verify-full).",
    };
  if (
    has(
      "P2021",
      "P2022",
      "42P01",
      "3F000",
      "42703",
      "TableDoesNotExist",
      "ColumnNotFound",
    ) ||
    says(/does not exist/i)
  )
    return {
      code: "migration_missing",
      message:
        "Tabel database belum dibuat. Jalankan `npm run db:deploy` dengan DIRECT_URL mengarah ke database produksi.",
    };
  if (has("P1003", "3D000", "DatabaseDoesNotExist"))
    return {
      code: "database_missing",
      message:
        "Nama database pada DATABASE_URL tidak ditemukan. Periksa bagian akhir URI (biasanya /postgres).",
    };
  if (has("ENOTFOUND", "EAI_AGAIN") || says(/getaddrinfo/i))
    return {
      code: "host_not_found",
      message:
        "Host database tidak ditemukan. Proyek Supabase mungkin dihapus/di-pause, atau hostname di DATABASE_URL salah.",
    };
  if (
    has(
      "P1001",
      "P1002",
      "P1017",
      "DatabaseNotReachable",
      "ConnectionClosed",
      "SocketTimeout",
      "TooManyConnections",
      "ECONNREFUSED",
      "ETIMEDOUT",
      "ECONNRESET",
      "ENETUNREACH",
      "57P01",
      "53300",
    ) ||
    says(
      /timeout|terminated|Can't reach|too many clients|MaxClientsInSessionMode/i,
    )
  )
    return {
      code: "unreachable",
      message:
        "Server database tidak dapat dihubungi. Cek apakah proyek Supabase sedang di-pause (Restore project di dashboard) dan pastikan DATABASE_URL memakai Transaction pooler port 6543.",
    };
  const detail = [...new Set(codes)].slice(0, 3).join("/") || "tanpa kode";
  return {
    code: "unknown",
    message: `Database belum siap atau sedang tidak dapat diakses (kode: ${detail}). Periksa koneksi dan migrasi database.`,
  };
}
