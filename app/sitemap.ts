import type { MetadataRoute } from "next";
import { getPublishedPostsFromDb } from "@/lib/blog-data";
import { modelServicePages } from "@/data/modelServices";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export const revalidate = 3600; // Tetap di-cache & langsung di-refresh saat revalidatePath('/sitemap.xml') dipanggil

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedPosts = await getPublishedPostsFromDb();

  const latestPostUpdate = publishedPosts.reduce<string | undefined>(
    (latest, post) => (!latest || post.updatedAt > latest ? post.updatedAt : latest),
    undefined
  );

  const staticPaths = [
    "",
    "/layanan",
    "/harga",
    "/blog",
    "/kontak",
    "/lokasi/dipatiukur",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    ...(path === "/blog" && latestPostUpdate
      ? { lastModified: new Date(latestPostUpdate) }
      : {}),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteConfig.url}/layanan/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const modelServiceEntries: MetadataRoute.Sitemap = modelServicePages.map(
    (p) => ({
      url: `${siteConfig.url}/layanan/${p.serviceSlug}/${p.modelSlug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const postEntries: MetadataRoute.Sitemap = publishedPosts.map((p) => {
    const imageUrl = p.image
      ? p.image.startsWith("http")
        ? p.image
        : new URL(p.image, siteConfig.url).href
      : undefined;

    return {
      url: `${siteConfig.url}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      ...(imageUrl ? { images: [imageUrl] } : {}),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [
    ...staticEntries,
    ...serviceEntries,
    ...modelServiceEntries,
    ...postEntries,
  ];
}