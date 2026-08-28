import type { Metadata } from "next";
import QuotePageClient from "./QuotePageClient";

export const metadata: Metadata = {
  title: { absolute: "Free Insurance Quote | Sarasota, FL | Lamb Insurance Agency" },
  description:
    "Get a free insurance quote in Sarasota, FL. Auto, homeowners, condo, flood, and life. Local licensed agent, no pressure, no jargon. Reply in 24 hrs.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Free Insurance Quote | Sarasota, FL | Lamb Insurance Agency",
    description:
      "Auto, homeowners, condo, flood, and life quotes from a local Sarasota agent. No pressure, no jargon. Reply in 24 hrs.",
    url: "https://lambinsuranceagency.com/quote",
    type: "website",
    images: ["/lamb.logo.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://lambinsuranceagency.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Get a Quote",
          item: "https://lambinsuranceagency.com/quote",
        },
      ],
    },
  ],
};

export default function QuotePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <QuotePageClient />
    </>
  );
}
