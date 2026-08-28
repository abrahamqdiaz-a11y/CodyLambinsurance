import type { Metadata } from "next";
import BradentonPageClient from "./BradentonPageClient";
import { faqs } from "../../content/faqs/insurance-bradenton-fl";
import { faqPageSchema } from "../../content/faqs/types";

export const metadata: Metadata = {
  title: { absolute: "Home and Auto Insurance in Bradenton, FL | Lamb Insurance" },
  description:
    "4-point inspections, wind mitigation discounts, and Manatee River flood coverage for Bradenton, FL homeowners. Older home expertise and same-day quotes from a local Sarasota agent.",
  alternates: { canonical: "/insurance-bradenton-fl" },
  openGraph: { url: "https://lambinsuranceagency.com/insurance-bradenton-fl",
    type: "website",
    images: ["/lamb.logo.jpg"] },
  twitter: { card: "summary_large_image" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Insurance Services in Bradenton, FL",
      serviceType: "Insurance Agency Services",
      url: "https://lambinsuranceagency.com/insurance-bradenton-fl",
      provider: { "@id": "https://lambinsuranceagency.com/#organization" },
      areaServed: { "@type": "Place", name: "Bradenton, Manatee County, FL" },
    },
    faqPageSchema(faqs),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        { "@type": "ListItem", position: 2, name: "Insurance in Bradenton", item: "https://lambinsuranceagency.com/insurance-bradenton-fl" },
      ],
    },
  ],
};

export default function BradentonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BradentonPageClient />
    </>
  );
}
