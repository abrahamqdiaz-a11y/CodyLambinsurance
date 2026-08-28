import type { Metadata } from "next";
import SiestaKeyPageClient from "./SiestaKeyPageClient";
import { faqs } from "../../content/faqs/insurance-siesta-key-fl";
import { faqPageSchema } from "../../content/faqs/types";

export const metadata: Metadata = {
  title: { absolute: "Condo and Home Insurance on Siesta Key, FL | Lamb Insurance" },
  description:
    "HO-6 condo insurance, flood coverage, and short-term rental protection on Siesta Key, FL. VE and AE flood zone specialists. Same-day quotes from a local Sarasota agent.",
  alternates: { canonical: "/insurance-siesta-key-fl" },
  openGraph: { url: "https://lambinsuranceagency.com/insurance-siesta-key-fl",
    type: "website",
    images: ["/lamb.logo.jpg"] },
  twitter: { card: "summary_large_image" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Insurance Services on Siesta Key, FL",
      serviceType: "Insurance Agency Services",
      url: "https://lambinsuranceagency.com/insurance-siesta-key-fl",
      provider: { "@id": "https://lambinsuranceagency.com/#organization" },
      areaServed: { "@type": "Place", name: "Siesta Key, Sarasota County, FL" },
    },
    faqPageSchema(faqs),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        { "@type": "ListItem", position: 2, name: "Insurance in Siesta Key", item: "https://lambinsuranceagency.com/insurance-siesta-key-fl" },
      ],
    },
  ],
};

export default function SiestaKeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiestaKeyPageClient />
    </>
  );
}
