import type { Metadata } from "next";
import VenicePageClient from "./VenicePageClient";

export const metadata: Metadata = {
  title: "Insurance in Venice, FL | Lamb Insurance Agency",
  description:
    "Homeowners, life, and flood insurance for Venice, FL residents. Local agency with experience covering older homes, retirees on fixed incomes, and coastal flood exposure near the Venice Inlet.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/insurance-venice-fl",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/insurance-venice-fl",
    siteName: "Lamb Insurance Agency",
    title: "Insurance in Venice, FL | Lamb Insurance Agency",
    description:
      "Homeowners, life, and flood insurance for Venice, FL residents. Local agency with experience covering older homes, retirees on fixed incomes, and coastal flood exposure near the Venice Inlet.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lamb Insurance Agency — Venice, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance in Venice, FL | Lamb Insurance Agency",
    description:
      "Homeowners, life, and flood insurance for Venice, FL residents. Local agency with experience covering older homes, retirees on fixed incomes, and coastal flood exposure near the Venice Inlet.",
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
      serviceArea: { "@type": "Place", name: "Venice, Sarasota County, FL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does the age of my Venice home affect homeowners insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can. Older Venice homes with original electrical panels, galvanized plumbing, or aging roofs may be rated differently or declined by some carriers. We work with companies familiar with Venice's historic housing stock who can find appropriate coverage without unnecessary exclusions.",
          },
        },
        {
          "@type": "Question",
          name: "Is flood insurance necessary in Venice, FL?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For parts of the city, yes. Areas near the Venice Inlet, Caspersen Beach, Roberts Bay, and low-lying streets along the Intracoastal sit in FEMA designated flood zones. Standard homeowners does not cover flooding.",
          },
        },
        {
          "@type": "Question",
          name: "What life insurance options are available for Venice retirees on a fixed income?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Final expense policies are worth a close look — they cover funeral and end-of-life expenses, carry lower premiums, and often require no medical exam. Depending on health, age, and goals, a small permanent policy may also apply. We start with your budget, not a product to push.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need insurance for my golf cart in Venice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Possibly. If you're operating on public roads — permitted in designated areas of Venice — you likely need a separate golf cart endorsement or standalone policy covering liability and physical damage beyond what homeowners provides.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        { "@type": "ListItem", position: 2, name: "Insurance in Venice", item: "https://lambinsuranceagency.com/insurance-venice-fl" },
      ],
    },
  ],
};

export default function VenicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <VenicePageClient />
    </>
  );
}
