import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/format";

export function BlogPreview() {
  return (
    <Section tone="white" labelledBy="blog-heading">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-14">
        <SectionHeading
          id="blog-heading"
          title="Panduan seputar iPhone"
          description="Tips singkat sebelum kamu memutuskan servis."
          className="mb-0"
        />
        <Link href="/blog" className="text-[15px] font-medium text-accent hover:underline">
          Lihat semua artikel
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <Card key={post.slug} href={`/blog/${post.slug}`} tone="mist">
            {post.image && (
              <div className="relative mb-4 -mx-1 -mt-1 aspect-[16/10] overflow-hidden rounded-2xl bg-black/5">
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
            <p className="mt-2 text-lg font-semibold leading-snug text-ink group-hover:text-accent transition-colors">{post.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{post.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
