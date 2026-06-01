import type { Metadata } from "next";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: "Insights | Lamb Insurance Agency",
  description:
    "Insurance tips, Florida coverage news, and practical guidance from Lamb Insurance Agency in Sarasota, FL. Stay informed and protect what matters most.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/insights",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/insights",
    siteName: "Lamb Insurance Agency",
    title: "Insights | Lamb Insurance Agency",
    description:
      "Insurance tips, Florida coverage news, and practical guidance from Lamb Insurance Agency in Sarasota, FL.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lamb Insurance Agency — Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Lamb Insurance Agency",
    description:
      "Insurance tips, Florida coverage news, and practical guidance from Lamb Insurance Agency in Sarasota, FL.",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      name: "Lamb Insurance Agency",
      url: "https://lambinsuranceagency.com",
      email: "calamb@acg.aaa.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5893 Whitfield Ave",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        postalCode: "34243",
        addressCountry: "US",
      },
    },
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
