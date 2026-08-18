import type { Metadata } from "next";
import LifePageClient from "./LifePageClient";

export const metadata: Metadata = {
  title: { absolute: "Life Insurance Sarasota, FL | Term & Whole Life | Lamb" },
  description:
    "Life insurance in Sarasota, FL. Compare term and permanent coverage with a local licensed agent. Simple quotes, honest answers, no pressure.",
  alternates: { canonical: "/life-insurance-sarasota-fl" },
  openGraph: { url: "https://lambinsuranceagency.com/life-insurance-sarasota-fl",
    type: "website",
    images: ["/lamb.logo.jpg"] },
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
          name: "How much life insurance do I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A common starting point is 10 to 12 times your annual income, but the right amount depends on your debts, dependents, income, and goals. We'll walk through the numbers with you so the coverage actually fits your life.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between term and whole life insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Term life covers you for a set period—like 20 years—and is typically more affordable. Whole life is permanent, never expires, and builds cash value. Neither is universally better; the right choice depends on your situation.",
          },
        },
        {
          "@type": "Question",
          name: "Is life insurance expensive in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rates vary based on age, health, coverage amount, and policy type. Many people find term life more affordable than they expected. The best way to know what you'll pay is to get a personalized quote.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to buy life insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The earlier, the better. Premiums are lower when you're younger and healthier. Waiting means paying more—or potentially losing the ability to qualify for certain coverage.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get life insurance if I have health issues?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often, yes. Some policies have simplified underwriting or no medical exam required. We can help you understand your options based on your health history.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer bilingual life insurance help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We proudly serve English- and Spanish-speaking customers throughout the Sarasota area.",
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
          name: "Life Insurance in Sarasota",
          item: "https://lambinsuranceagency.com/life-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function LifeInsurancePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <LifePageClient />
    </>
  );
}
