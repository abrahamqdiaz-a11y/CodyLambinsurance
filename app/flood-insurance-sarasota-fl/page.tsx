import type { Metadata } from "next";
import FloodPageClient from "./FloodPageClient";

export const metadata: Metadata = {
  title: "Flood Insurance Sarasota FL | Lamb Insurance Agency",
  description:
    "Your home insurance does not cover flooding. Lamb Insurance Agency helps Sarasota homeowners understand their flood zone and get the right flood coverage. Local agent, same-day quotes.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/flood-insurance-sarasota-fl",
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
          name: "Does homeowners insurance cover flooding in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Standard homeowners insurance policies in Florida specifically exclude flooding. Water that enters your home from outside — storm surge, rising water, rainfall-driven flooding — is not covered under any standard HO-3 or HO-5 policy. Separate flood insurance is required to cover this type of damage.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need flood insurance if I am not in a high-risk flood zone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your flood zone designation determines whether your lender requires flood insurance — not whether your property can flood. Approximately 25% of flood insurance claims nationally come from properties outside designated high-risk zones. In Sarasota County's flat terrain, any property can be affected by flooding during a significant storm event. We strongly recommend flood coverage regardless of zone designation.",
          },
        },
        {
          "@type": "Question",
          name: "How much does flood insurance cost in Sarasota FL?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Flood insurance premiums in Sarasota vary based on your property's flood zone, elevation, age, construction type, coverage amount, and deductible. The only accurate number is one built around your specific property. Contact Lamb Insurance Agency for a same-day flood insurance quote.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take for flood insurance to go into effect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard flood insurance has a 30-day waiting period from the date of purchase before coverage becomes active. Limited exceptions apply for loan closings. This waiting period means you cannot purchase flood insurance in response to an approaching storm and expect to be covered. Do not wait until hurricane season to act.",
          },
        },
        {
          "@type": "Question",
          name: "What is an elevation certificate and do I need one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An elevation certificate documents your property's elevation relative to the Base Flood Elevation in your flood zone. It is often required for properties in AE zones to determine flood insurance rates accurately. Properties with elevation certificates above the Base Flood Elevation typically qualify for lower premiums. We can help you understand whether you need one and how to get it.",
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
          name: "Flood Insurance Sarasota FL",
          item: "https://lambinsuranceagency.com/flood-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function FloodInsurancePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <FloodPageClient />
    </>
  );
}
