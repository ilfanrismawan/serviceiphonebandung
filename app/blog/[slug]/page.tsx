import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPost, posts } from "@/data/posts";
import { getService } from "@/data/services";
import { formatDate } from "@/lib/format";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedService = getService(post.relatedServiceSlug);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <article className="pb-20 pt-10 sm:pb-28">
        <Container size="narrow">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

          <header>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} menit baca</span>
            </p>

            {post.image && (
              <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-black/10 bg-mist shadow-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            )}
          </header>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight text-ink">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-pretty text-lg leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-muted">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {relatedService && (
            <div className="mt-14 rounded-3xl bg-mist p-8">
              <p className="text-lg font-medium text-ink">
                Butuh {relatedService.shortTitle.toLowerCase()}?
              </p>
              <p className="mt-2 leading-relaxed text-muted">{relatedService.tagline}</p>
              <div className="mt-5">
                <Button href={`/layanan/${relatedService.slug}`} variant="secondary">
                  Lihat detail layanan
                </Button>
              </div>
            </div>
          )}

          <p className="mt-14 border-t border-black/10 pt-6 text-sm text-muted">
            <Link href="/blog" className="text-accent hover:underline">
              ← Kembali ke semua artikel
            </Link>
          </p>
        </Container>
      </article>
      <CtaBanner />
    </>
  );
}
