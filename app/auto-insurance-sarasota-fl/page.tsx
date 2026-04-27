import type { Metadata } from "next";
import AutoPageClient from "./AutoPageClient";

export const metadata: Metadata = {
  title: "Auto Insurance in Sarasota | Lamb Insurance Agency",
  description:
    "Get auto insurance in Sarasota that fits your life and budget. Compare coverage options, get fast answers, and work with a local agency that explains everything clearly.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/auto-insurance-sarasota-fl",
  },
};

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      name: "Lamb Insurance Agency",
      url: "https://lambinsuranceagency.com",
      email: "calamb@acg.aaa.com",
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
