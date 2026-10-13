/** Canonical HTTPS origin; reject malformed deployment configuration. */
export function getSiteOrigin(value = process.env.NEXT_PUBLIC_SITE_URL) {
  const url = new URL(value || "https://serviceiphonebandung.vercel.app");
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash) throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTPS origin without a path, credentials, query or fragment");
  return url.origin;
}
