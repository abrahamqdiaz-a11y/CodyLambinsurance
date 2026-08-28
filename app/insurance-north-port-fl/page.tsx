import type { Metadata } from "next";
import NorthPortPageClient from "./NorthPortPageClient";

export const metadata: Metadata = {
  title: { absolute: "Home and Auto Insurance in North Port, FL | Lamb Insurance" },
  description:
    "New construction, well and septic coverage, and flood insurance near the Myakka River in North Port, FL. Wellen Park specialists with same-day quotes from a local Sarasota agent.",
  alternates: { canonical: "/insurance-north-port-fl" },
  openGraph: { url: "https://lambinsuranceagency.com/insurance-north-port-fl",
    type: "website",
    images: ["/lamb.logo.jpg"] },
  twitter: { card: "summary_large_image" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Insurance Services in North Port, FL",
      serviceType: "Insurance Agency Services",
      url: "https://lambinsuranceagency.com/insurance-north-port-fl",
      provider: { "@id": "https://lambinsuranceagency.com/#organization" },
      areaServed: { "@type": "Place", name: "North Port, Sarasota County, FL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need flood insurance in North Port?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parts of North Port fall within FEMA flood zones near the Myakka River, Cocoplum Waterway, and drainage channels. Standard homeowners policies exclude flooding. If your property has a federally-backed mortgage in a Special Flood Hazard Area, flood coverage is required. Even outside those zones, flooding from intense rainfall is common during tropical systems.",
          },
        },
        {
          "@type": "Question",
          name: "Does new construction in Wellen Park come with insurance advantages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, generally. Homes built under Florida's current building code typically qualify for better windstorm terms than older construction. A wind mitigation inspection can document your home's specific features and unlock premium discounts. Flood and windstorm coverage are still required separately from a standard homeowners policy.",
          },
        },
        {
          "@type": "Question",
          name: "What should I know about insurance for a home with a well and septic system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard homeowners policies do not cover well or septic system failures. Equipment breakdown coverage, service line endorsements, and water backup coverage are separate add-ons that address these exposures. North Port has a significant number of properties on well and septic, so these endorsements come up regularly.",
          },
        },
        {
          "@type": "Question",
          name: "I'm building new in North Port -- when do I need to get insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you're financing construction, your lender will typically require builder's risk coverage during the build. At closing on a completed new home, you'll need a standard homeowners policy in place, and flood insurance if the property is in a designated flood zone. Call us with your closing timeline for same-day binders.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lambinsuranceagency.com" },
        { "@type": "ListItem", position: 2, name: "Insurance in North Port", item: "https://lambinsuranceagency.com/insurance-north-port-fl" },
      ],
    },
  ],
};

export default function NorthPortPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NorthPortPageClient />
    </>
  );
}
