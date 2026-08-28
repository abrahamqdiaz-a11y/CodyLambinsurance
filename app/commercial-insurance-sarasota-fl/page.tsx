import type { Metadata } from "next";
import CommercialPageClient from "./CommercialPageClient";

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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What commercial insurance does my Sarasota business need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your industry, size, and risk exposure. Most businesses need at minimum general liability coverage. We review your specific situation and walk you through the options that make sense.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Business Owner's Policy (BOP)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A BOP bundles general liability and commercial property coverage into one policy — often at a lower cost than buying them separately. It's a common starting point for small and mid-size businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need workers' compensation insurance in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida law requires most employers to carry workers' compensation. Requirements vary by industry and number of employees. We can help you understand your obligations.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bundle commercial and personal insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In some cases, yes. Bundling policies may simplify management and create savings opportunities. Ask us what options are available for your situation.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get a commercial insurance quote in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fill out the form on this page or call our office. We'll ask a few questions about your business and walk you through coverage options at no obligation.",
          },
        },
      ],
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
