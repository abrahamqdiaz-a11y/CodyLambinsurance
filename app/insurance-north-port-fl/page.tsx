import type { Metadata } from "next";
import NorthPortPageClient from "./NorthPortPageClient";
import { faqs } from "../content/faqs/insurance-north-port-fl";
import { faqPageSchema } from "../content/faqs/types";

export const metadata: Metadata = {
  title: { absolute: "Home and Auto Insurance in North Port, FL | Lamb Insurance" },
  description:
    "New construction, well and septic coverage, and flood insurance near the Myakka River in North Port, FL. Wellen Park specialists with same-day quotes from a local Sarasota agent.",
  alternates: { canonical: "/insurance-north-port-fl" },
  openGraph: { url: "https://lambinsuranceagency.com/insurance-north-port-fl",
    type: "website",
    images: ["/lamb.logo.jpg"] },
  twitter: { card: "summary_large_image" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      name: "Lamb Insurance Agency",
      url: "https://lambinsuranceagency.com",
      email: "contact@lambinsuranceagency.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        addressCountry: "US",
      },
      areaServed: { "@type": "Place", name: "North Port, Sarasota County, FL" },
      serviceArea: { "@type": "Place", name: "North Port, FL" },
    },
    faqPageSchema(faqs),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        { "@type": "ListItem", position: 2, name: "Insurance in North Port", item: "https://lambinsuranceagency.com/insurance-north-port-fl" },
      ],
    },
  ],
};

export default function NorthPortPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NorthPortPageClient />
    </>
  );
}
