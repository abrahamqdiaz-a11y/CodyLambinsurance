import type { Metadata } from "next";
import ApplyPageClient from "./ApplyPageClient";

export const metadata: Metadata = {
  title: "Apply",
  alternates: { canonical: "/apply" },
  robots: { index: false, follow: true },
};

export default function ApplyPage() {
  return <ApplyPageClient />;
}
