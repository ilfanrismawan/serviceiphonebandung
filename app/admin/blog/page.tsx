import { redirect } from "next/navigation";
import { authenticated } from "@/lib/nota/auth";
import { db } from "@/lib/nota/db";
import BlogCmsClient from "./BlogCmsClient";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  if (!(await authenticated())) {
    redirect("/admin");
  }

  const posts = await db().blogPost.findMany({
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
  });

  return <BlogCmsClient initialPosts={posts} />;
}