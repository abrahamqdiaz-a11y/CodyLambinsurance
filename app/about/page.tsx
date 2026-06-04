import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Lamb Insurance Agency | Local Insurance in Sarasota",
  description:
    "Lamb Insurance Agency helps Sarasota drivers, homeowners, and business owners understand their coverage and get properly protected. Work with Cody Lamb, licensed in Florida for Property & Casualty and Life & Health.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com/about",
    siteName: "Lamb Insurance Agency",
    title: "About Lamb Insurance Agency | Local Insurance in Sarasota",
    description:
      "Lamb Insurance Agency helps Sarasota drivers, homeowners, and business owners understand their coverage and get properly protected. Work with Cody Lamb, licensed in Florida for Property & Casualty and Life & Health.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lamb Insurance Agency — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lamb Insurance Agency | Local Insurance in Sarasota",
    description:
      "Lamb Insurance Agency helps Sarasota drivers, homeowners, and business owners understand their coverage and get properly protected. Work with Cody Lamb, licensed in Florida for Property & Casualty and Life & Health.",
  },
};

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      name: "Lamb Insurance Agency",
      url: "https://lambinsuranceagency.com",
      telephone: "+19412252335",
      email: "calamb@acg.aaa.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5893 Whitfield Ave",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        postalCode: "34243",
        addressCountry: "US",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Insurance License",
        name: "Florida Insurance License G034846",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Florida Department of Financial Services",
        },
      },
      sameAs: [
        "https://www.linkedin.com/company/lamb-insurance-agency-llc",
        "https://www.facebook.com/people/Lamb-Insurance-Agency-LLC/61572033134721/",
      ],
      serviceArea: [
        { "@type": "City", name: "Sarasota", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Bradenton", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Lakewood Ranch", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Venice", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "North Port", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Siesta Key", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Parrish", containedInPlace: { "@type": "State", name: "Florida" } },
      ],
      areaServed: "Sarasota and Manatee counties, Florida",
    },
    {
      "@type": "Person",
      name: "Cody Lamb",
      jobTitle: "Licensed Insurance Agent",
      worksFor: {
        "@type": "InsuranceAgency",
        name: "Lamb Insurance Agency",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Insurance License",
          name: "Florida Insurance License G034846 — Property & Casualty (2-20) and Life & Health (2-15)",
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "Florida Department of Financial Services",
          },
        },
      ],
      knowsAbout: [
        "Property & Casualty Insurance",
        "Life & Health Insurance",
        "Auto Insurance",
        "Home Insurance",
        "Flood Insurance",
        "Business Insurance",
        "Commercial Insurance",
        "Umbrella Insurance",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "5893 Whitfield Ave",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        postalCode: "34243",
        addressCountry: "US",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Lamb Insurance Agency licensed in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Cody Lamb holds Florida insurance license G034846, issued by the Florida Department of Financial Services. He is licensed for Property & Casualty (2-20) and Life & Health (2-15), covering auto, home, flood, commercial, and life insurance.",
          },
        },
        {
          "@type": "Question",
          name: "What types of insurance do you help with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lamb Insurance Agency helps with auto insurance, homeowners insurance, renters insurance, flood insurance, umbrella policies, business owner policies (BOP), commercial auto, general liability, and life insurance.",
          },
        },
        {
          "@type": "Question",
          name: "Why work with a local Sarasota insurance agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A local agent understands the specific risks in this area—hurricane exposure, flood zones, and coastal property considerations. Lamb Insurance Agency is based at 5893 Whitfield Ave in Sarasota. You work directly with Cody Lamb, not a national call center.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help compare multiple insurance options?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. As an independent agent, Cody works with multiple carriers and can compare rates and coverage options to find what fits your situation—not just whatever one company offers.",
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
