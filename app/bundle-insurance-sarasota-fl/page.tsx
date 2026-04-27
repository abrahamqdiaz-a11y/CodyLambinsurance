import type { Metadata } from "next";
import BundleInsurancePage from "./BundleInsurancePage";

export const metadata: Metadata = {
  title: "Bundle Home and Auto Insurance Sarasota FL | Lamb Insurance Agency",
  description:
    "Bundle your home and auto insurance in Sarasota with Lamb Insurance Agency. Local agent, real savings, same-day quotes. One call covers everything.",
  keywords: [
    "bundle home and auto insurance Sarasota",
    "home auto bundle Sarasota FL",
    "bundle insurance Sarasota",
    "home and auto insurance Sarasota",
    "Lamb Insurance Agency bundle",
    "insurance bundle Sarasota Florida",
  ],
  alternates: {
    canonical: "https://lambinsuranceagency.com/bundle-insurance-sarasota-fl",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/bundle-insurance-sarasota-fl",
    siteName: "Lamb Insurance Agency",
    title: "Bundle Home and Auto Insurance Sarasota FL | Lamb Insurance Agency",
    description:
      "Bundle your home and auto insurance in Sarasota with Lamb Insurance Agency. Local agent, real savings, same-day quotes. One call covers everything.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lamb Insurance Agency — Bundle Home and Auto Insurance Sarasota FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bundle Home and Auto Insurance Sarasota FL | Lamb Insurance Agency",
    description:
      "Bundle your home and auto insurance in Sarasota with Lamb Insurance Agency. Local agent, real savings, same-day quotes. One call covers everything.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaData = {
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
      serviceArea: {
        "@type": "City",
        name: "Sarasota",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Insurance Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Home and Auto Bundle Insurance" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Auto Insurance" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Home Insurance" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Life Insurance" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Commercial Insurance" },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much can I save by bundling home and auto in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bundle savings vary by household depending on your home, your vehicles, and your coverage levels. The best way to know your exact savings is to get a quote that prices both policies together. Contact Lamb Insurance Agency for a same-day bundle quote.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to switch both policies at the same time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. We can review your current policies and timing and find the cleanest transition that avoids any gaps in coverage. We often align both renewals so everything moves together cleanly going forward.",
          },
        },
        {
          "@type": "Question",
          name: "What if my home and auto have different renewal dates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Very common. We handle this regularly. We review both current policies, map out the timing, and make the transition in a way that makes financial sense — minimizing any penalties and maximizing your savings from day one of the bundle.",
          },
        },
        {
          "@type": "Question",
          name: "Does bundling affect how my claims are handled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each policy responds independently according to its own terms. Bundling affects your premium — not your coverage or claims process. What it does change is who you call. One local agent handles both — no bouncing between departments or call centers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bundle condo insurance and auto instead of home and auto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The same bundling approach applies whether you own a house or a condo in Sarasota. We build your coverage around your actual property — not a generic template.",
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
          name: "Bundle Insurance Sarasota FL",
          item: "https://lambinsuranceagency.com/bundle-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <BundleInsurancePage />
    </>
  );
}
