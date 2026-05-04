import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lambinsuranceagency.com"),
  title: {
    default: "Lamb Insurance Agency | Personal & Commercial Insurance in Sarasota, FL",
    template: "%s | Lamb Insurance Agency",
  },
  description:
    "Lamb Insurance Agency offers personalized auto, home, life, and commercial insurance in the Sarasota area. Simple, personal, and built around you. Get a free quote today.",
  keywords: [
    "insurance agency Sarasota",
    "auto insurance Florida",
    "home insurance Sarasota",
    "life insurance",
    "commercial insurance",
    "Lamb Insurance Agency",
    "insurance quotes Florida",
    "personal insurance",
    "business insurance Sarasota",
  ],
  authors: [{ name: "Lamb Insurance Agency" }],
  creator: "Lamb Insurance Agency",
  publisher: "Lamb Insurance Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lambinsuranceagency.com",
    siteName: "Lamb Insurance Agency",
    title: "Lamb Insurance Agency | Personal & Commercial Insurance",
    description:
      "Insurance should be simple, personal, and built around you. Get a free quote for auto, home, life, or commercial coverage from Lamb Insurance Agency.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lamb Insurance Agency — Protecting What Matters Most",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamb Insurance Agency | Personal & Commercial Insurance",
    description:
      "Insurance should be simple, personal, and built around you. Free quotes for auto, home, life, and commercial coverage.",
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
  alternates: {
    canonical: "https://lambinsuranceagency.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0e1c32" />
        <meta name="google-site-verification" content="KIXQJA3RX_fdHOLHP9_6v-vPVa8t2k6lBtGTZ727pQQ" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "InsuranceAgency"],
              name: "Lamb Insurance Agency",
              url: "https://lambinsuranceagency.com",
              telephone: "(941) 225-2335",
              email: "calamb@acg.aaa.com",
              description:
                "Local licensed insurance agency in Sarasota, FL offering auto, home, and life insurance with direct agent access and thorough policy reviews.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sarasota",
                addressRegion: "FL",
                addressCountry: "US",
              },
              sameAs: [],
              serviceArea: {
                "@type": "State",
                name: "Florida",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Insurance Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Insurance" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Insurance" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Life Insurance" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Insurance" } },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What does auto insurance cover in Florida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Florida requires a minimum of Personal Injury Protection (PIP) and Property Damage Liability. But minimum coverage often isn't enough. Depending on your vehicle and driving habits, you may also need collision, comprehensive, and uninsured motorist coverage. We review your full situation before making a recommendation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why did my insurance rate go up?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Rates increase due to regional risk factors, claims history, carrier adjustments, or market-wide changes. Florida has seen significant rate increases due to weather exposure and litigation trends. A policy review can identify whether you're still getting competitive value.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How often should I review my insurance policy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "At minimum, once a year — and immediately after any major life change like buying a vehicle, moving, or adding a driver. Policies get outdated fast and most people don't notice until it costs them.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between liability and full coverage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Liability covers damage you cause to others. Full coverage adds collision (damage to your own vehicle) and comprehensive (theft, weather, non-collision events). The right choice depends on your vehicle's value and your financial exposure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need flood insurance in Sarasota?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, in most cases. Standard homeowners policies do not cover flood damage. Given Sarasota's coastal exposure, flood insurance is often essential — not optional. We'll tell you exactly what your current policy does and doesn't cover.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
