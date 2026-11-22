import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getPublishedPostBySlugFromDb,
  getPublishedPostsFromDb,
} from "@/lib/blog-data";
import { getService } from "@/data/services";
import { formatDate } from "@/lib/format";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const allPosts = await getPublishedPostsFromDb();
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlugFromDb(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.image,
    imageAlt: post.imageAlt ?? post.title,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}


export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
 
  const post = await getPublishedPostBySlugFromDb(slug);
  if (!post) notFound();
  const rawContent = (post as typeof post & { rawContent?: string }).rawContent;

  const relatedService = getService(post.relatedServiceSlug);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <article className="pb-20 pt-10 sm:pb-28">
        <Container size="narrow">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />

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
                  alt={post.imageAlt ?? post.title}
                  fill
                  preload
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            )}
            {post.imageCaption && (
              <p className="mt-3 text-sm text-muted">{post.imageCaption}</p>
            )}
          </header>

          <div className="mt-10">
            {rawContent ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-ink">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-ink">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-ink">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-muted">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-muted">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="pl-1">{children}</li>,
                  hr: () => <hr className="my-8 border-black/10" />,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="font-medium text-accent underline underline-offset-4 hover:opacity-80"
                    >
                      {children}
                    </a>
                  ),
                  table: ({ children }) => (
                    <div className="my-6 overflow-x-auto rounded-2xl border border-black/10">
                      <table className="w-full border-collapse text-left text-sm">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-mist text-ink">{children}</thead>
                  ),
                  th: ({ children }) => (
                    <th className="border-b border-black/10 px-4 py-3 font-semibold">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border-b border-black/5 px-4 py-3 text-muted">
                      {children}
                    </td>
                  ),
                }}
              >
                {rawContent}
              </ReactMarkdown>
            ) : (
              <div className="space-y-10">
                {post.sections.map((section, idx) => (
                  <section key={section.heading || idx}>
                    {section.heading && (
                      <h2 className="text-2xl font-semibold tracking-tight text-ink">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="mt-4 text-pretty text-lg leading-relaxed text-muted"
                      >
                        {p}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-lg leading-relaxed text-muted"
                          >
                            <span
                              className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            )}
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
      {post.faqs && post.faqs.length > 0 && (
        <FaqSection faqs={post.faqs} title="Pertanyaan yang sering diajukan" />
      )}
      <CtaBanner />
    </>
  );
}