// ─────────────────────────────────────────────────────────────────────────────
// INSIGHTS BLOG POSTS
//
// HOW TO ADD A NEW POST
// ─────────────────────
// 1. Add a new object to the POSTS array below (newest post first).
// 2. Give it a unique `slug` — this becomes the URL: /insights/your-slug
// 3. Provide a `thumbnail` image path (place the image in /public/blog/).
//    If you don't have an image yet, use "" and no thumbnail will render.
// 4. Write the full post body in `content` as an HTML string.
//    Use standard tags: <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <a>.
//
// EXAMPLE ENTRY:
// {
//   slug: "understanding-flood-insurance",
//   title: "Understanding Flood Insurance in Sarasota",
//   date: "2026-06-01",
//   excerpt: "Florida homeowners are often surprised to learn that standard home insurance doesn't cover floods. Here's what you need to know.",
//   thumbnail: "/blog/flood-insurance.jpg",
//   content: `
//     <p>Standard homeowners policies exclude flood damage...</p>
//     <h2>Why Separate Coverage Matters</h2>
//     <p>The National Flood Insurance Program (NFIP)...</p>
//   `,
// },
// ─────────────────────────────────────────────────────────────────────────────

export type Post = {
  slug: string;
  title: string;
  date: string;        // ISO format: "YYYY-MM-DD"
  excerpt: string;     // 1–2 sentence summary shown on listing page
  thumbnail: string;   // Path relative to /public, e.g. "/blog/image.jpg"
  content: string;     // Full post body as an HTML string
};

export const POSTS: Post[] = [
  // ← Add new posts here. Newest first.
];

// ─────────────────────────────────────────────────────────────────────────────

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
