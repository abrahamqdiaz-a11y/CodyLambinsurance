import type { Metadata } from "next";
import AutoPageClient from "./AutoPageClient";
import { faqs } from "../content/faqs/auto-insurance-sarasota-fl";
import { faqPageSchema } from "../content/faqs/types";

export const metadata: Metadata = {
  title: { absolute: "Auto Insurance Sarasota FL | Car Insurance Quotes | Lamb" },
  description:
    "Auto and car insurance in Sarasota, FL from a local agent. Coverage explained in plain English, same-day quotes. SR-22 and non-standard drivers welcome.",
  alternates: { canonical: "/auto-insurance-sarasota-fl" },
  openGraph: {
    title: "Auto Insurance Sarasota FL | Car Insurance Quotes | Lamb",
    url: "https://lambinsuranceagency.com/auto-insurance-sarasota-fl",
    type: "website",
    images: ["/lamb.logo.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

const schemas = {
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
      sameAs: [],
      serviceArea: { "@type": "City", name: "Sarasota" },
    },
    faqPageSchema(faqs),
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
          name: "Auto Insurance in Sarasota",
          item: "https://lambinsuranceagency.com/auto-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function AutoInsurancePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AutoPageClient />
    </>
  );
}
