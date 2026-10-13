import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";
import { isPublishedPost } from "@/lib/publication";
import { formatDate } from "@/lib/format";

export function BlogPreview() {
  return (
    <Section tone="white" labelledBy="blog-heading">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
        <SectionHeading
          id="blog-heading"
          title="Panduan seputar iPhone"
          description="Tips singkat dan edukasi sebelum kamu memutuskan servis."
          className="mb-0"
        />
        <Link href="/blog" className="text-[14px] font-semibold text-accent hover:underline">
          Lihat semua artikel →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {posts.filter(isPublishedPost).slice(0, 3).map((post) => (
          <Card key={post.slug} href={`/blog/${post.slug}`} tone="glass">
            {post.image && (
              <div className="relative mb-4 -mx-1 -mt-1 aspect-[16/10] overflow-hidden rounded-2xl bg-black/5 border border-white/60 shadow-inner">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex items-center gap-2 text-xs text-muted">
              <span>{formatDate(post.publishedAt)}</span>
              <span>•</span>
              <span>{post.readingMinutes} mnt baca</span>
            </div>
            <p className="mt-2 text-[17px] font-bold leading-snug tracking-tight text-ink group-hover:text-accent transition-colors">
              {post.title}
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted line-clamp-2">
              {post.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
