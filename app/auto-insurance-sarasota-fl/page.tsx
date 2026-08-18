import type { Metadata } from "next";
import AutoPageClient from "./AutoPageClient";

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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much is auto insurance in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your rate depends on factors like driving history, vehicle, location, coverage choices, and discounts. We help you compare options based on your situation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I lower my monthly payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often, yes. Adjusting deductibles, reviewing discounts, bundling policies, or comparing carriers may reduce your premium.",
          },
        },
        {
          "@type": "Question",
          name: "What coverage do I need in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That depends on your car, budget, and risk tolerance. We'll explain your options clearly so you can decide with confidence.",
          },
        },
        {
          "@type": "Question",
          name: "Can I switch before renewal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many drivers switch before their renewal date. We can help you review timing and next steps.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer bilingual service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We proudly help English- and Spanish-speaking customers.",
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
