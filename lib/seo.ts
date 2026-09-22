import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Path relatif, mis. "/layanan/ganti-baterai-iphone". */
  path: string;
  keywords?: string[];
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
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(type === "article" && { publishedTime, modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
