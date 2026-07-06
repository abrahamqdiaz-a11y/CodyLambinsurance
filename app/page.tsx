import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: { absolute: "Sarasota Insurance Agency | Same-Day Quotes | Lamb Insurance" },
  description:
    "Local Sarasota insurance agency. Auto, homeowners, flood, condo, life, and commercial coverage. Bilingual service. Get a free quote today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sarasota Insurance Agency | Same-Day Quotes | Lamb Insurance",
    description:
      "Auto, homeowners, flood, condo, life, and commercial coverage in Sarasota, FL. Bilingual service, same-day quotes.",
    images: ["/og-image.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function HomePage() {
  return <HomePageClient />;
}
