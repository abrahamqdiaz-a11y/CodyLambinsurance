import type { Metadata } from "next";
import QuotePageClient from "./QuotePageClient";

export const metadata: Metadata = {
  title: "Get a Free Insurance Quote | Lamb Insurance Agency Sarasota",
  description:
    "Request a free insurance quote from Lamb Insurance Agency in Sarasota, FL. Local, licensed coverage for auto, home, condo, flood, and more — no pressure, no jargon.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/quote",
  },
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
