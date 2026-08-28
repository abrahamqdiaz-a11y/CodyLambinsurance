import type { Metadata } from "next";
import CommercialPageClient from "./CommercialPageClient";
import { faqs } from "../content/faqs/commercial-insurance-sarasota-fl";
import { faqPageSchema } from "../content/faqs/types";

export const metadata: Metadata = {
  title: { absolute: "Commercial Insurance Sarasota FL | BOP & Liability | Lamb" },
  description:
    "Business insurance in Sarasota, FL: general liability, BOP, commercial property, workers' comp, and commercial auto. Local advice, fast quotes.",
  alternates: { canonical: "/commercial-insurance-sarasota-fl" },
  openGraph: { url: "https://lambinsuranceagency.com/commercial-insurance-sarasota-fl",
    type: "website",
    images: ["/lamb.logo.jpg"] },
  twitter: { card: "summary_large_image" },
};

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Commercial Insurance",
      serviceType: "Commercial Insurance",
      url: "https://lambinsuranceagency.com/commercial-insurance-sarasota-fl",
      provider: { "@id": "https://lambinsuranceagency.com/#organization" },
      areaServed: { "@type": "City", name: "Sarasota" },
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
          name: "Commercial Insurance in Sarasota",
          item: "https://lambinsuranceagency.com/commercial-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function CommercialInsurancePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CommercialPageClient />
    </>
  );
}
