import type { Metadata } from "next";
import BradentonPageClient from "./BradentonPageClient";

export const metadata: Metadata = {
  title: { absolute: "Home and Auto Insurance in Bradenton, FL | Lamb Insurance" },
  description:
    "4-point inspections, wind mitigation discounts, and Manatee River flood coverage for Bradenton, FL homeowners. Older home expertise and same-day quotes from a local Sarasota agent.",
  alternates: { canonical: "/insurance-bradenton-fl" },
  openGraph: { images: ["/og-image.png"] },
  twitter: { card: "summary_large_image" },
};

const schema = {
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
      areaServed: { "@type": "Place", name: "Bradenton, Manatee County, FL" },
      serviceArea: { "@type": "Place", name: "Bradenton, Manatee County, FL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I get homeowners insurance if my Bradenton home has a 15-year-old roof?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but your options narrow as a roof ages. Many Florida carriers stop writing new policies on roofs over 15 to 20 years old, or require a 4-point inspection before binding. A 4-point inspection looks at your roof, electrical panel, plumbing, and HVAC. If the inspection shows issues, you may need to address them before a carrier will write or renew your policy. Knowing where you stand before your renewal date gives you time to plan.",
          },
        },
        {
          "@type": "Question",
          name: "What is a 4-point inspection and why does my insurance company want one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 4-point inspection documents the current condition of four major systems in your home: roof, electrical, plumbing, and HVAC. Florida carriers use it to assess risk on older homes before binding or renewing coverage. If any of the four systems shows a known problem, a carrier may decline or require repairs. The inspection itself is typically inexpensive and done by a licensed inspector.",
          },
        },
        {
          "@type": "Question",
          name: "What is a wind mitigation inspection and how much can it save me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A wind mitigation inspection documents specific construction features that make your home more resistant to hurricane-force winds: roof shape, roof deck attachment, roof covering, and opening protection. Carriers apply discounts based on these features. Savings vary, but a hip roof with impact windows and a well-attached roof deck can reduce your windstorm premium by several hundred dollars per year. The inspection pays for itself quickly.",
          },
        },
        {
          "@type": "Question",
          name: "Is flood insurance necessary in Bradenton?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many parts of the city, yes. Low-lying areas near the Manatee River, Braden River, and Terra Ceia Bay carry FEMA flood zone designations. Inland and riverine flooding has caused significant damage in Bradenton even without direct hurricane landfalls nearby. Standard homeowners policies exclude flooding entirely.",
          },
        },
        {
          "@type": "Question",
          name: "What should I check on insurance before closing on a Bradenton home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Request a 4-point inspection to identify any condition issues before they become your problem post-closing. Check the roof age and what it would cost to replace it. Look up the property's FEMA flood zone to understand whether flood insurance will be required or strongly recommended. Confirm what windstorm coverage is included or excluded from your policy. Call us before your closing date and we'll walk through this with you.",
          },
        },
      ],
    },
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
