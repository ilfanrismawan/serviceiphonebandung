import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Path relatif, mis. "/layanan/ganti-baterai-iphone". */
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  /** true = abaikan template judul layout (dipakai untuk beranda). */
  absoluteTitle?: boolean;
}

/**
 * Helper metadata tunggal supaya canonical, Open Graph, dan Twitter card
 * selalu konsisten di setiap halaman.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex,
  absoluteTitle,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: absoluteUrl(image ?? "/opengraph-image"), ...(image ? {} : { width: 1200, height: 630 }), alt: imageAlt ?? `${siteConfig.name} — Service iPhone Bandung` }],
      ...(type === "article" && { publishedTime, modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      images: [absoluteUrl(image ?? "/opengraph-image")],
      title,
      description,
    },
  };
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
