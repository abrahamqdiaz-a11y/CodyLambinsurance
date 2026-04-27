import type { Metadata } from "next";
import AutoPageClient from "./AutoPageClient";

export const metadata: Metadata = {
  title: "Auto Insurance in Sarasota | Lamb Insurance Agency",
  description:
    "Auto insurance in Sarasota from a local agency. Compare options, understand your coverage, and get a fast quote with personal, local help.",
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
          name: "How much does auto insurance cost in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on factors like your driving history, vehicle, type of coverage, and available discounts. At Lamb Insurance Agency we help you compare options to find a premium that fits your budget.",
          },
        },
        {
          "@type": "Question",
          name: "Can I lower my monthly payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, yes. We can review deductibles, discounts, and coverage options to find a more affordable monthly payment without losing the coverage that matters to you.",
          },
        },
        {
          "@type": "Question",
          name: "What coverage do I need in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida requires minimum coverage, but many families need additional protection. We walk you through what each option covers so you can make an informed decision.",
          },
        },
        {
          "@type": "Question",
          name: "Can I switch before my renewal date?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in many cases you can switch policies before your renewal date. Our local team guides you through the steps to make the transition clear and easy.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer bilingual service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our team is available in both English and Spanish so you fully understand your quote, coverage, and next steps.",
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
