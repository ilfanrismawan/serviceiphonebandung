import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: `Blog — ${siteConfig.name}`,
  description: "Panduan singkat seputar perawatan dan kerusakan iPhone, ditulis oleh tim service kami.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <section className="pb-20 pt-10 sm:pb-28">
      <Container>
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        <SectionHeading as="h1" title="Blog" description="Tips praktis sebelum kamu memutuskan servis." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} href={`/blog/${post.slug}`}>
              {post.image && (
                <div className="relative mb-4 -mx-1 -mt-1 aspect-[16/10] overflow-hidden rounded-2xl bg-black/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex items-center gap-2 text-xs text-muted">
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readingMinutes} mnt baca</span>
              </div>
              <p className="mt-2 text-lg font-semibold leading-snug text-ink group-hover:text-accent transition-colors">{post.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{post.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
