import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: { absolute: "About Lamb Insurance Agency | Local Sarasota Agent" },
  description:
    "Meet Cody Lamb, a licensed Florida P&C and Life & Health agent. Local Sarasota insurance help for drivers, homeowners, and business owners.",
  alternates: { canonical: "/about" },
  openGraph: { url: "https://lambinsuranceagency.com/about",
    type: "website",
    images: ["/lamb.logo.jpg"] },
  twitter: { card: "summary_large_image" },
};

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Cody Lamb",
      jobTitle: "Licensed Insurance Agent",
      worksFor: { "@id": "https://lambinsuranceagency.com/#organization" },
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
