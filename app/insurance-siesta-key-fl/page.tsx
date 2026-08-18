import type { Metadata } from "next";
import SiestaKeyPageClient from "./SiestaKeyPageClient";

export const metadata: Metadata = {
  title: { absolute: "Condo and Home Insurance on Siesta Key, FL | Lamb Insurance" },
  description:
    "HO-6 condo insurance, flood coverage, and short-term rental protection on Siesta Key, FL. VE and AE flood zone specialists. Same-day quotes from a local Sarasota agent.",
  alternates: { canonical: "/insurance-siesta-key-fl" },
  openGraph: { url: "https://lambinsuranceagency.com/insurance-siesta-key-fl",
    type: "website",
    images: ["/lamb.logo.jpg"] },
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
      areaServed: { "@type": "Place", name: "Siesta Key, Sarasota County, FL" },
      serviceArea: { "@type": "Place", name: "Siesta Key, Sarasota, FL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need flood insurance on Siesta Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The majority of Siesta Key sits in FEMA high-risk flood zones AE and VE, where storm surge from the Gulf is the primary threat. Standard homeowners policies specifically exclude flooding. Given the island's direct Gulf exposure, flood coverage is a foundational piece of protection here, not an optional add-on.",
          },
        },
        {
          "@type": "Question",
          name: "Does my homeowners policy cover my short-term vacation rental on Siesta Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically no. Most standard homeowners policies void or limit coverage when the property is rented on a short-term basis. If you're listing on Airbnb or VRBO, you need either a short-term rental endorsement or a separate dwelling policy that addresses the actual occupancy pattern.",
          },
        },
        {
          "@type": "Question",
          name: "What coverage do I need for my boat docked on Siesta Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Homeowners and condo policies rarely extend meaningful coverage to watercraft beyond a low dollar threshold. A standalone boat or watercraft policy covers physical damage, liability on the water, and often towing — which matters when operating around Big Pass or the Gulf.",
          },
        },
        {
          "@type": "Question",
          name: "What does the condo association policy cover on Siesta Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The association's master policy covers the building structure and common areas. It does not cover your unit's interior finishes, personal belongings, or personal liability. An HO-6 condo policy fills those gaps.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        { "@type": "ListItem", position: 2, name: "Insurance in Siesta Key", item: "https://lambinsuranceagency.com/insurance-siesta-key-fl" },
      ],
    },
  ],
};

export default function SiestaKeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiestaKeyPageClient />
    </>
  );
}
