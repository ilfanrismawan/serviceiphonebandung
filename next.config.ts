import type { NextConfig } from "next";
import { getSiteOrigin } from "./config/origin";

const nextConfig: NextConfig = {
  async headers() {
    return ["/admin/:path*", "/nota/:path*", "/api/nota-admin/:path*"].map(
      (source) => ({
        source,
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Cache-Control", value: "private, no-store" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      }),
    );
  },
  async redirects() {
    const origin = getSiteOrigin();
    const target = new URL(origin).hostname;
    const hosts = (process.env.SEO_REDIRECT_HOSTS || "")
      .split(",")
      .map((host) => host.trim())
      .filter(Boolean);
    if (hosts.some((host) => !/^[a-z0-9.-]+$/i.test(host) || host === target))
      throw new Error(
        "SEO_REDIRECT_HOSTS must contain source hostnames different from the canonical hostname",
      );
    return hosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host.replace(/\./g, "\\.") }],
      destination: `${origin}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
