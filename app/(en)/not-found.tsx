import type { Metadata } from "next";
import NotFoundContent from "../components/NotFoundContent";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return <NotFoundContent />;
}
