import type { Metadata } from "next";
import CondoPageClient from "./CondoPageClient";

export const metadata: Metadata = {
  title: "Condo Insurance Sarasota FL | HO-6 Coverage & Same-Day Quotes | Lamb Insurance",
  description:
    "Sarasota condo insurance (HO-6) from a local bilingual agency. Same-day quotes, master policy reviews, loss assessment coverage. Call (941) 225-2335.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/condo-insurance-sarasota-fl",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/condo-insurance-sarasota-fl",
    siteName: "Lamb Insurance Agency",
    title: "Condo Insurance Sarasota FL | Lamb Insurance Agency",
    description:
      "Condo insurance in Sarasota FL through Lamb Insurance Agency. Florida condo rules changed — make sure your HO-6 policy keeps up. Local agent, same-day quotes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lamb Insurance Agency — Condo Insurance Sarasota FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Condo Insurance Sarasota FL | Lamb Insurance Agency",
    description:
      "Condo insurance in Sarasota FL through Lamb Insurance Agency. Florida condo rules changed — make sure your HO-6 policy keeps up. Local agent, same-day quotes.",
  },
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
          name: "Is condo insurance required in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No Florida law requires you to carry an HO-6 policy. However, if you have a mortgage, your lender will almost always require it. Even with no mortgage, going without leaves your interior, belongings, and liability completely exposed, since the association's master policy doesn't cover them.",
          },
        },
        {
          "@type": "Question",
          name: "What does an HO-6 policy cover that the association's master policy doesn't?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your HO-6 covers the interior of your unit (to the extent the master policy doesn't), your personal belongings, your personal liability, additional living expenses if your unit becomes uninhabitable, and your share of association assessments after a covered loss. The master policy generally covers only the building structure and common areas.",
          },
        },
        {
          "@type": "Question",
          name: "How much loss assessment coverage do I need in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The legal minimum under Florida Statute § 627.714 is $2,000, but that's rarely enough given recent structural assessments running into five and six figures. Most Sarasota condo owners should consider $25,000 to $50,000. The added premium is usually under $50 a year.",
          },
        },
        {
          "@type": "Question",
          name: "Does condo insurance cover flood damage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Standard HO-6 policies exclude flooding from external sources like storm surge and rising water. If your unit is on a lower floor, in a flood zone, or in a coastal area like Siesta Key or Lido Key, you need a separate flood policy through the NFIP or a private flood insurer.",
          },
        },
        {
          "@type": "Question",
          name: "How much does condo insurance cost in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most owners pay roughly $950 to $2,000 a year, depending on building location, walls-in coverage limit, hurricane deductible, and whether the unit is owner-occupied or rented. We provide same-day quotes specific to your building.",
          },
        },
        {
          "@type": "Question",
          name: "Should I get actual cash value or replacement cost coverage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Replacement cost is almost always the better choice. It pays what it costs to replace damaged property today, while actual cash value pays a depreciated amount. On a significant loss, the difference can be thousands of dollars.",
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
