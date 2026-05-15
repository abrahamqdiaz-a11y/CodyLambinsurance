import type { Metadata } from "next";
import LakewoodRanchPageClient from "./LakewoodRanchPageClient";

export const metadata: Metadata = {
  title: "Insurance in Lakewood Ranch, FL | Lamb Insurance Agency",
  description:
    "Auto, homeowners, and bundle insurance for Lakewood Ranch residents. Local agency covering HOA coverage gaps, I-75 commuter auto, and new construction policies.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl",
    siteName: "Lamb Insurance Agency",
    title: "Insurance in Lakewood Ranch, FL | Lamb Insurance Agency",
    description:
      "Auto, homeowners, and bundle insurance for Lakewood Ranch residents. Local agency covering HOA coverage gaps, I-75 commuter auto, and new construction policies.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lamb Insurance Agency — Lakewood Ranch, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance in Lakewood Ranch, FL | Lamb Insurance Agency",
    description:
      "Auto, homeowners, and bundle insurance for Lakewood Ranch residents. Local agency covering HOA coverage gaps, I-75 commuter auto, and new construction policies.",
  },
};

const schema = {
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
      serviceArea: { "@type": "Place", name: "Lakewood Ranch, Manatee County, FL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does the Lakewood Ranch HOA policy cover my home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The HOA master policy covers common areas and shared amenities, but not the inside of your home, your personal belongings, or your personal liability. You need a separate homeowners policy for that.",
          },
        },
        {
          "@type": "Question",
          name: "Does commuting on I-75 affect my auto insurance in Lakewood Ranch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Annual mileage is a rating factor, and commuters who log significantly more miles carry more statistical exposure. If your commute has changed, it's worth reviewing your policy to confirm your limits and discounts are still aligned with your situation.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to review coverage on a newly built home in Lakewood Ranch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Replacement costs in Lakewood Ranch have increased with rising material and labor costs. You'll want to confirm your dwelling coverage reflects today's rebuild cost and that your personal property and liability limits are adequate.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bundle auto and homeowners insurance in Lakewood Ranch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it's one of the most effective ways to reduce total insurance cost. Multi-policy discounts across carriers can be meaningful. We compare bundled options to find the combination that actually saves you money.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        { "@type": "ListItem", position: 2, name: "Insurance in Lakewood Ranch", item: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl" },
      ],
    },
  ],
};

export default function LakewoodRanchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LakewoodRanchPageClient />
    </>
  );
}
