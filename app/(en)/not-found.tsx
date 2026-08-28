import type { Metadata } from "next";
import NotFoundContent from "../components/NotFoundContent";

// A 404 must not claim canonical equivalence with any other URL, so the root
// canonical inherited from the layout is cleared with null rather than pointed
// somewhere else. The robots override is needed for the same reason: without it
// this page inherits the layout's "index, follow" alongside the noindex that
// Next emits for the not-found boundary.
export const metadata: Metadata = {
  title: "Page Not Found",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
