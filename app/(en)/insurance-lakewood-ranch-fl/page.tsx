import type { Metadata } from "next";
import LakewoodRanchPageClient from "./LakewoodRanchPageClient";
import { faqs } from "../../content/faqs/insurance-lakewood-ranch-fl";
import { faqPageSchema } from "../../content/faqs/types";

export const metadata: Metadata = {
  title: { absolute: "Insurance in Lakewood Ranch, FL | Home & Auto | Lamb" },
  description:
    "Insurance for Lakewood Ranch, FL: homeowners, auto, flood, and life coverage built for LWR's master-planned communities. Same-day quotes.",
  alternates: { canonical: "/insurance-lakewood-ranch-fl" },
  openGraph: { url: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl",
    type: "website",
    images: ["/lamb.logo.jpg"] },
  twitter: { card: "summary_large_image" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Insurance Services in Lakewood Ranch, FL",
      serviceType: "Insurance Agency Services",
      url: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl",
      provider: { "@id": "https://lambinsuranceagency.com/#organization" },
      areaServed: { "@type": "Place", name: "Lakewood Ranch, Florida" },
    },
    faqPageSchema(faqs),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insurance in Lakewood Ranch",
          item: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl",
        },
      ],
    },
  ],
};

export default function LakewoodRanchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LakewoodRanchPageClient />
    </>
  );
}
