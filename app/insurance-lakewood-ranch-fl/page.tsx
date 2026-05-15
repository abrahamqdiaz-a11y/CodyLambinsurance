import type { Metadata } from "next";
import LakewoodRanchPageClient from "./LakewoodRanchPageClient";

export const metadata: Metadata = {
  title: "Insurance Agency in Lakewood Ranch, FL | Lamb Insurance",
  description:
    "Local independent insurance for Lakewood Ranch residents. Auto, home, flood, and life coverage tailored to LWR's master-planned communities. Get a quote today.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl",
    siteName: "Lamb Insurance Agency",
    title: "Insurance Agency in Lakewood Ranch, FL | Lamb Insurance",
    description:
      "Local independent insurance for Lakewood Ranch residents. Auto, home, flood, and life coverage tailored to LWR's master-planned communities. Get a quote today.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lamb Insurance Agency — Lakewood Ranch, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Agency in Lakewood Ranch, FL | Lamb Insurance",
    description:
      "Local independent insurance for Lakewood Ranch residents. Auto, home, flood, and life coverage tailored to LWR's master-planned communities. Get a quote today.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      name: "Lamb Insurance Agency",
      url: "https://lambinsuranceagency.com",
      email: "calamb@acg.aaa.com",
      areaServed: {
        "@type": "Place",
        name: "Lakewood Ranch, Florida",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need flood insurance in Lakewood Ranch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parts of Lakewood Ranch fall within FEMA-designated flood zones, and more properties than residents expect carry at least a moderate flood risk. Standard homeowners policies exclude flooding entirely. A FEMA address lookup tells you your zone; we can walk you through what that means for your premium.",
          },
        },
        {
          "@type": "Question",
          name: "Does my HOA insurance cover my personal belongings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The HOA master policy covers common areas and shared amenities, but not the inside of your home, your furniture, electronics, or personal liability. That's what your individual homeowners or HO-6 policy is for.",
          },
        },
        {
          "@type": "Question",
          name: "I just moved from New Jersey — what do I need to change about my coverage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida operates differently: windstorm coverage is often excluded from standard homeowners policies and may require a separate endorsement or Citizens policy; flood is always separate; and Florida's auto requirements differ from New Jersey's no-fault structure. Out-of-state plates also need to be transferred within 90 days of establishing Florida residency.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can I get proof of insurance for a closing in Lakewood Ranch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Same day in most cases. Closing deadlines are one of the most common urgent requests we handle. Call us directly with your closing date and we'll prioritize it.",
          },
        },
        {
          "@type": "Question",
          name: "Is windstorm coverage included in Florida homeowners policies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Many Florida carriers exclude windstorm or hurricane damage from standard homeowners policies. Coverage may require a separate windstorm endorsement or a Citizens Insurance policy. We'll make sure you know exactly what your policy does and doesn't cover before you close.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insurance in Lakewood Ranch",
          item: "https://lambinsuranceagency.com/insurance-lakewood-ranch-fl",
        },
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
