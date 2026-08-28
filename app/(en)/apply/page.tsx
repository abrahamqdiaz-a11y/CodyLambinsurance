import type { Metadata } from "next";
import ApplyPageClient from "./ApplyPageClient";

export const metadata: Metadata = { title: "Apply", robots: { index: false, follow: true } };

export default function ApplyPage() {
  return <ApplyPageClient />;
}
