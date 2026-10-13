import type { MetadataRoute } from "next";
import { isPublishedPost } from "@/lib/publication";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/layanan", "/harga", "/blog", "/kontak", "/lokasi/dipatiukur"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteConfig.url}/layanan/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.filter(isPublishedPost).map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...postEntries];
}
