import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: { absolute: "About Lamb Insurance Agency | Local Sarasota Agent" },
  description:
    "Meet Cody Lamb, a licensed Florida P&C and Life & Health agent. Local Sarasota insurance help for drivers, homeowners, and business owners.",
  alternates: { canonical: "/about" },
  openGraph: { images: ["/og-image.png"] },
  twitter: { card: "summary_large_image" },
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
