import "server-only";
import { db } from "@/lib/nota/db";
import type { BlogPost } from "@/types";

function markdownToSections(markdown: string) {
  const blocks = markdown.split(/\n{2,}/);
  const sections: Array<{
    heading: string;
    paragraphs: string[];
    list?: string[];
  }> = [];

  let current = { heading: "", paragraphs: [] as string[], list: [] as string[] };

  for (const raw of blocks) {
    const block = raw.trim();
    if (!block) continue;

    if (block.startsWith("## ") || block.startsWith("### ")) {
      if (current.heading || current.paragraphs.length || current.list.length) {
        sections.push({
          heading: current.heading,
          paragraphs: current.paragraphs,
          ...(current.list.length ? { list: current.list } : {}),
        });
      }
      current = {
        heading: block.replace(/^#{2,3}\s+/, ""),
        paragraphs: [],
        list: [],
      };
    } else if (block.startsWith("- ") || block.startsWith("* ")) {
      const items = block
        .split("\n")
        .map((line) => line.replace(/^[-*]\s+/, "").trim())
        .filter(Boolean);
      current.list.push(...items);
    } else {
      current.paragraphs.push(block);
    }
  }

  if (current.heading || current.paragraphs.length || current.list.length) {
    sections.push({
      heading: current.heading,
      paragraphs: current.paragraphs,
      ...(current.list.length ? { list: current.list } : {}),
    });
  }

  return sections;
}

function mapDbToBlogPost(row: {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  coverAlt: string | null;
  category: string;
  metaTitle: string | null;
  metaDescription: string | null;
  published: boolean;
  publishedAt: Date | null;
  updatedAt: Date;
}): BlogPost {
  const wordCount = row.content.split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 200));
  const publishedIso = (row.publishedAt ?? row.updatedAt).toISOString().slice(0, 10);

  return {
    slug: row.slug,
    title: row.title,
    seoTitle: row.metaTitle ?? row.title,
    description: row.metaDescription || row.excerpt,
    image: row.coverImage ?? "/images/blog/layar-pecah.webp",
    imageAlt: row.coverAlt ?? row.title,
    publishedAt: publishedIso,
    updatedAt: row.updatedAt.toISOString().slice(0, 10),
    readingMinutes,
    relatedServiceSlug: row.category.includes("-") ? row.category : "ganti-lcd-iphone",
    publicationApproved: row.published,
    sections: markdownToSections(row.content),
  } as BlogPost;
}

export async function getPublishedPostsFromDb(): Promise<BlogPost[]> {
  const rows = await db().blogPost.findMany({
    where: { published: true },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });
  return rows.map(mapDbToBlogPost);
}

export async function getPublishedPostBySlugFromDb(
  slug: string
): Promise<BlogPost | undefined> {
  const row = await db().blogPost.findFirst({
    where: { slug, published: true },
  });
  return row ? mapDbToBlogPost(row) : undefined;
}