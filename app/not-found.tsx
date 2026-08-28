import type { Metadata } from "next";
import "./globals.css";
import NotFoundContent from "./components/NotFoundContent";

export const metadata: Metadata = { title: "Page Not Found" };

// Unmatched URLs fall outside both locale route groups, so Next renders this
// file without a root layout and supplies a bare <html> wrapper of its own.
// The lang declaration therefore lives on the content wrapper here. Routes that
// call notFound() inside the English group resolve to app/(en)/not-found.tsx,
// which is wrapped by that group's root layout.
export default function GlobalNotFound() {
  return (
    <div lang="en-US">
      <NotFoundContent />
    </div>
  );
}
