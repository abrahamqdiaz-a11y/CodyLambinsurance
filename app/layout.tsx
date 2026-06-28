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
        url: "/lamb.logo.jpg",
        width: 200,
        height: 200,
        alt: "Lamb Insurance Agency — Protecting What Matters Most",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Lamb Insurance Agency | Personal & Commercial Insurance",
    description:
      "Insurance should be simple, personal, and built around you. Free quotes for auto, home, life, and commercial coverage.",
    images: [
      {
        url: "/lamb.logo.jpg",
        alt: "Lamb Insurance Agency — Protecting What Matters Most",
      },
    ],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0e1c32" />
        <meta name="google-site-verification" content="KIXQJA3RX_fdHOLHP9_6v-vPVa8t2k6lBtGTZ727pQQ" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "InsuranceAgency"],
              "@id": "https://lambinsuranceagency.com/#organization",
              name: "Lamb Insurance Agency",
              legalName: "Lamb Insurance Agency",
              url: "https://lambinsuranceagency.com",
              telephone: "+19412252335",
              email: "contact@lambinsuranceagency.com",
              description:
                "Local licensed insurance agency in Sarasota, FL offering auto, home, condo, flood, life, and commercial insurance with direct agent access and thorough policy reviews.",
              logo: {
                "@type": "ImageObject",
                url: "https://lambinsuranceagency.com/favicon.png",
                width: 200,
                height: 200,
              },
              image: "https://lambinsuranceagency.com/lamb.logo.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5893 Whitfield Ave",
                addressLocality: "Sarasota",
                addressRegion: "FL",
                postalCode: "34243",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 27.3897,
                longitude: -82.5143,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              priceRange: "$$",
              currenciesAccepted: "USD",
              paymentAccepted: "Cash, Check, Credit Card",
              areaServed: [
                { "@type": "City", name: "Sarasota", containedInPlace: { "@type": "State", name: "Florida" } },
                { "@type": "City", name: "Bradenton", containedInPlace: { "@type": "State", name: "Florida" } },
                { "@type": "City", name: "Venice", containedInPlace: { "@type": "State", name: "Florida" } },
                { "@type": "City", name: "Lakewood Ranch", containedInPlace: { "@type": "State", name: "Florida" } },
                { "@type": "City", name: "Siesta Key", containedInPlace: { "@type": "State", name: "Florida" } },
              ],
              employee: {
                "@type": "Person",
                name: "Cody Alexander Lamb",
                jobTitle: "Licensed Florida Insurance Agent",
                identifier: "FL License #G034846",
              },
              sameAs: [],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Insurance Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Insurance", url: "https://lambinsuranceagency.com/auto-insurance-sarasota-fl" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Insurance", url: "https://lambinsuranceagency.com" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Condo Insurance", url: "https://lambinsuranceagency.com/condo-insurance-sarasota-fl" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flood Insurance", url: "https://lambinsuranceagency.com/flood-insurance-sarasota-fl" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Life Insurance", url: "https://lambinsuranceagency.com/life-insurance-sarasota-fl" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Insurance", url: "https://lambinsuranceagency.com/commercial-insurance-sarasota-fl" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umbrella Insurance", url: "https://lambinsuranceagency.com/umbrella-insurance-sarasota" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bundle Insurance", url: "https://lambinsuranceagency.com/bundle-insurance-sarasota-fl" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
