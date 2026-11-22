import { config } from "dotenv";
config({ path: ".env.local" });
config();

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";
import { posts } from "../data/posts";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

// Mengubah array sections menjadi teks Markdown yang rapi untuk diedit di CMS
function sectionsToMarkdown(
  sections: Array<{ heading?: string; paragraphs?: string[]; list?: string[] }> = []
): string {
  return sections
    .map((sec) => {
      const parts: string[] = [];
      if (sec.heading) {
        parts.push(`## ${sec.heading}`);
      }
      if (sec.paragraphs?.length) {
        parts.push(sec.paragraphs.join("\n\n"));
      }
      if (sec.list?.length) {
        parts.push(sec.list.map((item) => `- ${item}`).join("\n"));
      }
      return parts.join("\n\n");
    })
    .join("\n\n");
}

async function main() {
  for (const post of posts) {
    const markdownContent = sectionsToMarkdown(post.sections);
    const isPublished = post.publicationApproved !== false;
    const publishedDate = post.publishedAt ? new Date(post.publishedAt) : new Date();

    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.description,
        content: markdownContent,
        coverImage: post.image ?? null,
        coverAlt: post.imageAlt ?? post.title,
        metaTitle: post.title,
        metaDescription: post.description,
        published: isPublished,
        publishedAt: isPublished ? publishedDate : null,
      },
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.description,
        content: markdownContent,
        coverImage: post.image ?? null,
        coverAlt: post.imageAlt ?? post.title,
        category: post.relatedServiceSlug ?? "Panduan Servis",
        metaTitle: post.title,
        metaDescription: post.description,
        published: isPublished,
        publishedAt: isPublished ? publishedDate : null,
        updatedAt: post.updatedAt ? new Date(post.updatedAt) : publishedDate,
      },
    });
  }

  console.log(`Berhasil migrasi ${posts.length} artikel ke database.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());