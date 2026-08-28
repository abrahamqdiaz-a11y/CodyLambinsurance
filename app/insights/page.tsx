import type { Metadata } from "next";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: { absolute: "Florida Insurance Insights & Tips | Lamb Insurance Agency" },
  description:
    "Practical Florida insurance tips, rate news, and coverage guidance from a local Sarasota agent. Auto, homeowners, flood, and more.",
  alternates: { canonical: "/insights" },
  openGraph: {
    description:
      "Practical Florida insurance tips, rate news, and coverage guidance from a local Sarasota agent. Auto, homeowners, flood, and more.",
    url: "https://lambinsuranceagency.com/insights",
    type: "website",
    images: ["/lamb.logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Practical Florida insurance tips, rate news, and coverage guidance from a local Sarasota agent. Auto, homeowners, flood, and more.",
  },
  robots: { index: true, follow: true },
};

const schema = {
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
          name: "Insights",
          item: "https://lambinsuranceagency.com/insights",
        },
      ],
    },
  ],
};

export default function InsightsPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <InsightsPageClient />
    </>
  );
}
