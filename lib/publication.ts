import type { BlogPost } from "@/types";
// TODO(owner): review future-dated content before advancing this editorial cutoff.
// Build clocks must not silently publish unreviewed scheduled articles.
export const reviewedPublicationDate = "2026-10-13";
export function isPublishedPost(post: BlogPost) {
  return post.publicationApproved === true || (post.publishedAt <= reviewedPublicationDate && post.updatedAt <= reviewedPublicationDate);
}
