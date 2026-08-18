import type { Metadata } from "next";
import PalmerRanchPageClient from "./PalmerRanchPageClient";

export const metadata: Metadata = {
  title: { absolute: "Home and Condo Insurance in Palmer Ranch, FL | Lamb Insurance" },
  description:
    "HOA coverage gaps, wind mitigation discounts, and flood insurance for Palmer Ranch, FL. Newer construction expertise and same-day binders from a local Sarasota agent.",
  alternates: { canonical: "/insurance-palmer-ranch-fl" },
  openGraph: { images: ["/lamb.logo.jpg"] },
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
      areaServed: { "@type": "Place", name: "Palmer Ranch, Sarasota, FL" },
      serviceArea: { "@type": "Place", name: "Palmer Ranch, Sarasota County, FL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does my HOA master policy cover my villa or condo unit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The association's master policy covers the shared building structure and common areas. It does not cover your unit's interior finishes, personal property, or personal liability. An HO-6 fills those gaps and is typically required by the association documents as a condition of ownership.",
          },
        },
        {
          "@type": "Question",
          name: "Do newer Palmer Ranch homes need flood insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your specific parcel. Parts of Palmer Ranch fall within FEMA flood zones, particularly near retention ponds and drainage corridors. Standard homeowners policies exclude flooding regardless of your zone. A quick FEMA address lookup will tell you your zone.",
          },
        },
        {
          "@type": "Question",
          name: "Are newer construction homes easier to insure in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally yes. Homes built after 2001 were constructed under Florida's updated building code with stronger wind resistance requirements. This often means lower windstorm premiums and easier underwriting. A wind mitigation inspection can formalize these advantages and unlock additional premium discounts.",
          },
        },
        {
          "@type": "Question",
          name: "What coverage do I need before closing on a Palmer Ranch home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your lender will require proof of homeowners insurance before the closing date. If the property has a federally-backed mortgage and sits in a Special Flood Hazard Area, flood insurance will also be required. Many HOAs require proof of your individual policy as well. Call us ahead of your closing date for same-day binders.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        { "@type": "ListItem", position: 2, name: "Insurance in Palmer Ranch", item: "https://lambinsuranceagency.com/insurance-palmer-ranch-fl" },
      ],
    },
  ],
};

export default function PalmerRanchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PalmerRanchPageClient />
    </>
  );
}
