import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/nota/db";
import { authenticated } from "@/lib/nota/auth";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  // Di dalam setiap fungsi POST / GET / PATCH / DELETE:
if (!(await authenticated())) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
  try {
    const { id } = await context.params;
    const body = await req.json();

    const existing = await db().blogPost.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Artikel tidak ditemukan" }, { status: 404 });
    }

    const isPublished = Boolean(body.published);
    const publishedAt =
      isPublished && !existing.publishedAt ? new Date() : existing.publishedAt;

    const updated = await db().blogPost.update({
      where: { id },
      data: {
        title: body.title?.trim() ?? existing.title,
        slug: body.slug?.trim() ?? existing.slug,
        excerpt: body.excerpt?.trim() ?? existing.excerpt,
        content: body.content ?? existing.content,
        coverImage: body.coverImage !== undefined ? body.coverImage : existing.coverImage,
        coverAlt: body.coverAlt?.trim() ?? existing.coverAlt,
        category: body.category ?? existing.category,
        metaTitle: body.metaTitle?.trim() ?? existing.metaTitle,
        metaDescription: body.metaDescription?.trim() ?? existing.metaDescription,
        published: isPublished,
        publishedAt: isPublished ? publishedAt : null,
      },
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${existing.slug}`);
    revalidatePath(`/blog/${updated.slug}`);
    revalidatePath("/sitemap.xml");

    return NextResponse.json(updated);
  } catch (err) {
    console.error("PATCH /api/cms/posts/[id] error:", err);
    return NextResponse.json({ error: "Gagal memperbarui artikel" }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  // Di dalam setiap fungsi POST / GET / PATCH / DELETE:
if (!(await authenticated())) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
  try {
    const { id } = await context.params;
    const deleted = await db().blogPost.delete({ where: { id } });

    revalidatePath("/blog");
    revalidatePath(`/blog/${deleted.slug}`);
    revalidatePath("/sitemap.xml");

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("DELETE /api/cms/posts/[id] error:", err);
    return NextResponse.json({ error: "Gagal menghapus artikel" }, { status: 500 });
  }
}