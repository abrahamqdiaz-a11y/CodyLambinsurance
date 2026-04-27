import type { Metadata } from "next";
import CondoPageClient from "./CondoPageClient";

export const metadata: Metadata = {
  title: "Condo Insurance Sarasota FL | Lamb Insurance Agency",
  description:
    "Condo insurance in Sarasota FL through Lamb Insurance Agency. Florida condo rules changed — make sure your HO-6 policy keeps up. Local agent, same-day quotes.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/condo-insurance-sarasota-fl",
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
          name: "Do I need condo insurance if my association has a master policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The association's master policy covers the building and common areas — not your personal belongings, your interior improvements, or your personal liability. The gap between what the master policy covers and what you own is your financial responsibility. An HO-6 policy covers that gap.",
          },
        },
        {
          "@type": "Question",
          name: "How much does condo insurance cost in Sarasota FL?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HO-6 premiums in Sarasota typically range from $800 to $2,500 per year depending on your unit's value, location, building age, coverage amount, and deductible. An accurate quote requires knowing your unit's square footage, approximate replacement cost, and your association's master policy type. Contact Lamb Insurance Agency for a same-day quote.",
          },
        },
        {
          "@type": "Question",
          name: "What is loss assessment coverage and why do I need it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Loss assessment coverage pays your share of a special assessment levied by your condo association when a covered loss exceeds the association's master policy limits or deductible. Following Florida SB 4-D reserve requirements, special assessments have become more common in Sarasota communities. Without loss assessment coverage in your HO-6 policy that cost comes directly out of your pocket.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Bare Walls In and All In master policies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Bare Walls In master policy covers only the building structure — everything inside your unit including flooring, fixtures, cabinets, and appliances is your responsibility. An All In master policy covers most of the unit interior including original fixtures and built-ins. Knowing which type your association carries determines how much HO-6 coverage you actually need.",
          },
        },
        {
          "@type": "Question",
          name: "Does condo insurance cover flooding in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard HO-6 condo insurance does not cover flooding. Flood coverage requires a separate flood insurance policy. In Sarasota County flood risk is real — storm surge, heavy rainfall, and groundwater flooding affect condo properties as well as single family homes. Ask us about flood insurance options when you get your condo quote.",
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
          name: "Condo Insurance Sarasota FL",
          item: "https://lambinsuranceagency.com/condo-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function CondoInsurancePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CondoPageClient />
    </>
  );
}
