import type { MetadataRoute } from "next";
import { isPublishedPost } from "@/lib/publication";
import { posts } from "@/data/posts";
import { modelServicePages } from "@/data/modelServices";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedPosts = posts.filter(isPublishedPost);
  const latestPostUpdate = publishedPosts.reduce<string | undefined>(
    (latest, post) => !latest || post.updatedAt > latest ? post.updatedAt : latest,
    undefined,
  );
  const staticPaths = ["", "/layanan", "/harga", "/blog", "/kontak", "/lokasi/dipatiukur"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    // The blog listing changes when its published articles change.
    ...(path === "/blog" && latestPostUpdate ? { lastModified: latestPostUpdate } : {}),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteConfig.url}/layanan/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const modelServiceEntries: MetadataRoute.Sitemap = modelServicePages.map((p) => ({
    url: `${siteConfig.url}/layanan/${p.serviceSlug}/${p.modelSlug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postEntries: MetadataRoute.Sitemap = publishedPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    ...(p.image ? { images: [new URL(p.image, siteConfig.url).href] } : {}),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...modelServiceEntries, ...postEntries];
}
