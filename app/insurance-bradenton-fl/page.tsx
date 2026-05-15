import type { Metadata } from "next";
import BradentonPageClient from "./BradentonPageClient";

export const metadata: Metadata = {
  title: "Insurance in Bradenton, FL | Lamb Insurance Agency",
  description:
    "Auto, SR-22, commercial, and flood insurance for Bradenton residents and businesses. Local agency serving Manatee County with bilingual service and non-standard auto coverage.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/insurance-bradenton-fl",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/insurance-bradenton-fl",
    siteName: "Lamb Insurance Agency",
    title: "Insurance in Bradenton, FL | Lamb Insurance Agency",
    description:
      "Auto, SR-22, commercial, and flood insurance for Bradenton residents and businesses. Local agency serving Manatee County with bilingual service and non-standard auto coverage.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lamb Insurance Agency — Bradenton, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance in Bradenton, FL | Lamb Insurance Agency",
    description:
      "Auto, SR-22, commercial, and flood insurance for Bradenton residents and businesses. Local agency serving Manatee County with bilingual service and non-standard auto coverage.",
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
      serviceArea: { "@type": "Place", name: "Bradenton, Manatee County, FL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can you help with an SR-22 filing in Bradenton?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. An SR-22 is a certificate your insurer files with the Florida DMV confirming you carry minimum required liability coverage — typically required after a DUI, serious violation, or coverage lapse. We work with carriers that write non-standard auto policies and can get the filing submitted quickly.",
          },
        },
        {
          "@type": "Question",
          name: "What insurance does a small business in Bradenton need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At minimum, general liability to protect against third-party injury or property damage claims. Depending on your operation, you may also need commercial property, commercial auto, workers' compensation, or a Business Owner's Policy (BOP). We assess what you actually do and recommend accordingly.",
          },
        },
        {
          "@type": "Question",
          name: "Is flood insurance necessary in Bradenton?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many parts of the city, yes. Low-lying areas near the Manatee River, Braden River, and Terra Ceia Bay carry FEMA flood zone designations. Inland and riverine flooding has caused significant damage in Bradenton even without direct hurricane landfalls nearby.",
          },
        },
        {
          "@type": "Question",
          name: "I'm renting in Bradenton. Do I need renters insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you're a tenant, your landlord's policy covers the building — not your belongings or personal liability. A renters policy is typically inexpensive and covers your personal property and protects you if someone is injured in your unit.",
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
