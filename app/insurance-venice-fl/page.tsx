import type { Metadata } from "next";
import VenicePageClient from "./VenicePageClient";

export const metadata: Metadata = {
  title: "Insurance Agency in Venice, FL | Lamb Insurance",
  description:
    "Independent insurance agency serving Venice, FL. Home, auto, flood, Medicare supplement, and life coverage for Venice residents. Local advice, same-day quotes.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/insurance-venice-fl",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/insurance-venice-fl",
    siteName: "Lamb Insurance Agency",
    title: "Insurance Agency in Venice, FL | Lamb Insurance",
    description:
      "Independent insurance agency serving Venice, FL. Home, auto, flood, Medicare supplement, and life coverage for Venice residents. Local advice, same-day quotes.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lamb Insurance Agency — Venice, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Agency in Venice, FL | Lamb Insurance",
    description:
      "Independent insurance agency serving Venice, FL. Home, auto, flood, Medicare supplement, and life coverage for Venice residents. Local advice, same-day quotes.",
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
        name: "Venice, Florida",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "My home was built in 1978 — can I still get homeowners insurance in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but the carrier options narrow as a home ages. A 4-point inspection will likely be required, and the results — particularly roof age and electrical condition — determine which carriers will write it and at what premium. An independent agent can shop across multiple companies rather than stopping at the first declination.",
          },
        },
        {
          "@type": "Question",
          name: "What does a 4-point inspection cover and do I need one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 4-point inspection evaluates four systems: roof, electrical panel, plumbing, and HVAC. Florida insurers require it on homes roughly 25 years or older before issuing a new policy. Inspectors flag issues like roof age over 15 years, knob-and-tube wiring, galvanized pipes, or aging HVAC units.",
          },
        },
        {
          "@type": "Question",
          name: "I only live in Venice from November to April — is my home covered while I'm gone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not automatically. Most standard homeowners policies include a vacancy clause that limits or voids certain claims if the home is unoccupied for 30 to 60 consecutive days. There are endorsements and specialty carriers that write seasonal home policies correctly, without penalizing residents for a predictable absence.",
          },
        },
        {
          "@type": "Question",
          name: "Is Venice Beach in a flood zone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parts of it are. The area around Venice Beach, the Inlet, and properties near Roberts Bay and the Intracoastal carry FEMA AE and VE zone designations. Properties further inland may be in Zone X. A FEMA address lookup tells you your zone — we can walk you through it.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between Medicare Advantage and Medicare supplement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medicare Advantage replaces original Medicare with a private plan, often with network restrictions. Medicare supplement (Medigap) works alongside original Medicare to cover out-of-pocket costs like deductibles and coinsurance, with no network restrictions. Which is better depends on your health, travel habits, and financial priorities.",
          },
        },
        {
          "@type": "Question",
          name: "Can I drop to comprehensive-only on a car I'm leaving in storage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it's usually the right move. Dropping liability and collision and keeping only comprehensive eliminates most of the premium while still protecting against theft, fire, or storm damage. Notify your lender first if the car is financed, and make sure the policy reinstates before you drive it again.",
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
