import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/nota/db";
import { authenticated } from "@/lib/nota/auth";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function GET() {
  // Di dalam setiap fungsi POST / GET / PATCH / DELETE:
if (!(await authenticated())) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
  try {
    const posts = await db().blogPost.findMany({
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });
    return NextResponse.json(posts);
  } catch (err) {
    console.error("GET /api/cms/posts error:", err);
    return NextResponse.json({ error: "Gagal memuat daftar artikel" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  // Di dalam setiap fungsi POST / GET / PATCH / DELETE:
if (!(await authenticated())) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
  try {
    const body = await req.json();
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Judul dan isi artikel wajib diisi" },
        { status: 400 }
      );
    }

    const slug = slugify(body.slug || body.title);
    const isPublished = Boolean(body.published);

    const post = await db().blogPost.create({
      data: {
        title: body.title.trim(),
        slug,
        excerpt: (body.excerpt || "").trim(),
        content: body.content,
        coverImage: body.coverImage || null,
        coverAlt: (body.coverAlt || body.title).trim(),
        category: body.category || "Panduan Servis",
        metaTitle: (body.metaTitle || body.title).trim(),
        metaDescription: (body.metaDescription || body.excerpt || "").trim(),
        published: isPublished,
        publishedAt: isPublished ? new Date() : null,
      },
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${post.slug}`);
    revalidatePath("/sitemap.xml");

    return NextResponse.json(post, { status: 201 });
  } catch (err: unknown) {
    console.error("POST /api/cms/posts error:", err);
    const message =
      err instanceof Error && err.message.includes("Unique constraint")
        ? "Slug URL sudah dipakai artikel lain"
        : "Gagal menyimpan artikel";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}