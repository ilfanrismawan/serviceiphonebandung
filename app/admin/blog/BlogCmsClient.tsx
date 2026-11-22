"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export interface BlogPostItem {
  id: string;
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
  publishedAt: string | Date | null;
  updatedAt: string | Date;
}

export default function BlogCmsClient({
  initialPosts,
}: {
  initialPosts: BlogPostItem[];
}) {
  const [posts, setPosts] = useState<BlogPostItem[]>(initialPosts);
  const [selectedId, setSelectedId] = useState<string | null>(
    initialPosts[0]?.id ?? null
  );
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState<{ type: "ok" | "err"; msg: string } | null>(null);

  const [title, setTitle] = useState(initialPosts[0]?.title ?? "");
  const [slug, setSlug] = useState(initialPosts[0]?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initialPosts[0]?.excerpt ?? "");
  const [content, setContent] = useState(initialPosts[0]?.content ?? "");
  const [coverImage, setCoverImage] = useState(initialPosts[0]?.coverImage ?? "");
  const [coverAlt, setCoverAlt] = useState(initialPosts[0]?.coverAlt ?? "");
  const [category, setCategory] = useState(initialPosts[0]?.category ?? "Panduan Servis");
  const [metaTitle, setMetaTitle] = useState(initialPosts[0]?.metaTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(
    initialPosts[0]?.metaDescription ?? ""
  );
  const [published, setPublished] = useState(initialPosts[0]?.published ?? false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const showToast = (type: "ok" | "err", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  const slugify = (val: string) =>
    val
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const selectPost = (post: BlogPostItem) => {
    setSelectedId(post.id);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCoverImage(post.coverImage ?? "");
    setCoverAlt(post.coverAlt ?? "");
    setCategory(post.category);
    setMetaTitle(post.metaTitle ?? "");
    setMetaDescription(post.metaDescription ?? "");
    setPublished(post.published);
  };

  const handleNewPost = () => {
    setSelectedId(null);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setCoverImage("");
    setCoverAlt("");
    setCategory("Panduan Servis");
    setMetaTitle("");
    setMetaDescription("");
    setPublished(false);
  };

  const insertFormat = (prefix: string, suffix = "") => {
    const el = textareaRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = content.slice(start, end) || "Teks di sini";
    const updated =
      content.slice(0, start) + prefix + selected + suffix + content.slice(end);
    setContent(updated);
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + prefix.length, start + prefix.length + selected.length);
    }, 0);
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/cms/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal upload");
      setCoverImage(data.url);
      showToast("ok", "Gambar berhasil diunggah");
    } catch (err: unknown) {
      showToast("err", err instanceof Error ? err.message : "Upload gagal");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (publishState?: boolean) => {
    if (!title.trim() || !content.trim()) {
      showToast("err", "Judul dan konten wajib diisi");
      return;
    }
    setSaving(true);
    const finalPublished = publishState !== undefined ? publishState : published;

    try {
      const payload = {
        title,
        slug: slug || slugify(title),
        excerpt,
        content,
        coverImage: coverImage || null,
        coverAlt: coverAlt || title,
        category,
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || excerpt,
        published: finalPublished,
      };

      const url = selectedId ? `/api/cms/posts/${selectedId}` : "/api/cms/posts";
      const method = selectedId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menyimpan");

      setPublished(data.published);
      if (selectedId) {
        setPosts((prev) => prev.map((p) => (p.id === selectedId ? data : p)));
      } else {
        setPosts((prev) => [data, ...prev]);
        setSelectedId(data.id);
      }
      showToast("ok", finalPublished ? "Artikel dipublikasikan!" : "Draft tersimpan");
    } catch (err: unknown) {
      showToast("err", err instanceof Error ? err.message : "Gagal menyimpan");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedId || !confirm("Hapus artikel ini secara permanen?")) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/cms/posts/${selectedId}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Gagal menghapus artikel");
      const remaining = posts.filter((p) => p.id !== selectedId);
      setPosts(remaining);
      if (remaining[0]) selectPost(remaining[0]);
      else handleNewPost();
      showToast("ok", "Artikel dihapus");
    } catch (err: unknown) {
      showToast("err", err instanceof Error ? err.message : "Gagal menghapus");
    } finally {
      setSaving(false);
    }
  };

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-zinc-100 to-slate-200 text-slate-900">
      {/* Top Glass Header */}
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="rounded-xl border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-white"
            >
              ← Nota Admin
            </Link>
            <div>
              <h1 className="text-base font-semibold tracking-tight">Blog CMS</h1>
              <p className="text-xs text-slate-500">FlowService Bandung</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {slug && (
              <a
                href={`/blog/${slug}`}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-xl border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-white sm:inline-block"
              >
                Lihat Halaman ↗
              </a>
            )}
            <button
              type="button"
              disabled={saving}
              onClick={() => handleSave(false)}
              className="rounded-xl border border-slate-300/80 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-white disabled:opacity-50"
            >
              Simpan Draft
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => handleSave(true)}
              className="rounded-xl bg-slate-900 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:opacity-50"
            >
              {saving ? "Menyimpan..." : published ? "Update Live" : "Publish"}
            </button>
          </div>
        </div>
      </header>

      {toast && (
        <div
          className={`fixed bottom-5 right-5 z-50 rounded-2xl px-4 py-2.5 text-xs font-medium text-white shadow-lg backdrop-blur-md ${
            toast.type === "ok" ? "bg-emerald-600/95" : "bg-rose-600/95"
          }`}
        >
          {toast.msg}
        </div>
      )}

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-12">
        {/* Sidebar Daftar Artikel */}
        <aside className="lg:col-span-4">
          <div className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Artikel ({posts.length})
              </span>
              <button
                type="button"
                onClick={handleNewPost}
                className="rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-blue-500"
              >
                + Artikel Baru
              </button>
            </div>

            <input
              type="text"
              placeholder="Cari judul artikel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-3 w-full rounded-xl border border-slate-200/80 bg-white/90 px-3 py-2 text-xs outline-none focus:border-blue-500"
            />

            <div className="max-h-[70vh] space-y-1.5 overflow-y-auto pr-1">
              {filteredPosts.map((post) => {
                const active = post.id === selectedId;
                return (
                  <button
                    key={post.id}
                    type="button"
                    onClick={() => selectPost(post)}
                    className={`w-full rounded-2xl border p-3 text-left transition ${
                      active
                        ? "border-blue-500/40 bg-blue-50/80 shadow-xs"
                        : "border-transparent bg-white/50 hover:bg-white/90"
                    }`}
                  >
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          post.published
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                      <span className="text-[10px] text-slate-400">{post.category}</span>
                    </div>
                    <p className="line-clamp-2 text-xs font-semibold text-slate-800">
                      {post.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Form Editor Utama */}
        <section className="space-y-5 lg:col-span-8">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur-xl sm:p-6">
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Judul Artikel
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (!selectedId) setSlug(slugify(e.target.value));
                  }}
                  placeholder="Contoh: Biaya Ganti LCD iPhone 14 Pro di Bandung..."
                  className="w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-2.5 text-sm font-medium outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Slug URL
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(slugify(e.target.value))}
                    className="w-full rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-2 font-mono text-xs outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Kategori / Layanan Terkait
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-xs outline-none focus:border-blue-500"
                  >
                    <option value="Panduan Servis">Panduan Servis</option>
                    <option value="ganti-lcd-iphone">Ganti LCD iPhone</option>
                    <option value="ganti-baterai-iphone">Ganti Baterai iPhone</option>
                    <option value="service-iphone-mati-total">Servis Mati Total</option>
                    <option value="service-iphone-kena-air">Servis Kena Air</option>
                    <option value="service-kamera-iphone">Servis Kamera</option>
                    <option value="service-port-charger-iphone">Servis Port Charger</option>
                  </select>
                </div>
              </div>

              {/* Cover Image */}
              <div className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="text-xs font-medium text-slate-700">
                    Gambar Sampul (WebP / JPG / PNG)
                  </label>
                  <label className="cursor-pointer rounded-xl bg-white px-3 py-1.5 text-xs font-medium text-blue-600 shadow-xs ring-1 ring-slate-200 hover:bg-slate-50">
                    {uploading ? "Mengunggah..." : "Upload Gambar"}
                    <input
                      type="file"
                      accept="image/webp,image/jpeg,image/png"
                      onChange={handleUploadImage}
                      disabled={uploading}
                      className="hidden"
                    />
                  </label>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="URL gambar (/images/blog/... atau https://...)"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Alt text gambar untuk SEO"
                    value={coverAlt}
                    onChange={(e) => setCoverAlt(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none"
                  />
                </div>
                {coverImage && (
                  <img
                    src={coverImage}
                    alt={coverAlt || title}
                    className="mt-3 h-36 w-full rounded-xl object-cover"
                  />
                )}
              </div>

              {/* Ringkasan / Excerpt */}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Ringkasan Singkat (Excerpt)
                </label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs outline-none focus:border-blue-500"
                />
              </div>

              {/* Editor Markdown */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-xs font-medium text-slate-600">
                    Isi Artikel (Format Markdown)
                  </label>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => insertFormat("## ")}
                      className="rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50"
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormat("### ")}
                      className="rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold hover:bg-slate-50"
                    >
                      H3
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormat("**", "**")}
                      className="rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-bold hover:bg-slate-50"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormat("- ")}
                      className="rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-[11px] hover:bg-slate-50"
                    >
                      • List
                    </button>
                  </div>
                </div>
                <textarea
                  ref={textareaRef}
                  rows={16}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Tulis isi artikel dengan format Markdown (## Subjudul, - Poin list)..."
                  className="w-full rounded-2xl border border-slate-200/80 bg-white p-4 font-mono text-xs leading-relaxed outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Kartu Pengaturan SEO */}
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur-xl sm:p-6">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Optimasi SEO Google
            </h2>
            <div className="space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">Meta Title</span>
                  <span className="text-slate-400">
                    {(metaTitle || title).length}/60
                  </span>
                </div>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder={title}
                  className="w-full rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-xs outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">Meta Description</span>
                  <span className="text-slate-400">
                    {(metaDescription || excerpt).length}/155
                  </span>
                </div>
                <textarea
                  rows={2}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder={excerpt}
                  className="w-full rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-xs outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {selectedId && (
              <div className="mt-5 border-t border-slate-200/70 pt-4 text-right">
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={saving}
                  className="rounded-xl px-3 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50"
                >
                  Hapus Artikel Ini
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}