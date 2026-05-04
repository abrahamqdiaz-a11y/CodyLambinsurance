import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Lamb Insurance Agency | Local Insurance in Sarasota",
  description:
    "Lamb Insurance Agency helps Sarasota drivers, homeowners, and business owners understand their coverage and get properly protected. Work with Cody Lamb, licensed in Florida for Property & Casualty and Life & Health.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/about",
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
      "@type": "Person",
      name: "Cody Lamb",
      jobTitle: "Licensed Insurance Agent",
      worksFor: {
        "@type": "InsuranceAgency",
        name: "Lamb Insurance Agency",
      },
      knowsAbout: [
        "Property & Casualty Insurance",
        "Life & Health Insurance",
        "Auto Insurance",
        "Home Insurance",
        "Business Insurance",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        addressCountry: "US",
      },
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
          name: "About Lamb Insurance Agency",
          item: "https://lambinsuranceagency.com/about",
        },
      ],
    },
  ],
};

export default function AboutPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AboutPageClient />
    </>
  );
}
