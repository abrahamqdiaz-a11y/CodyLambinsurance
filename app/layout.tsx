import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lambinsuranceagency.com"),
  title: {
    default: "Sarasota Insurance Agency | Auto, Home, Flood & Life | Lamb",
    template: "%s | Lamb Insurance Agency",
  },
  description:
    "Local Sarasota insurance agency for auto, homeowners, flood, condo, life, and commercial coverage. Same-day quotes, bilingual service, no jargon.",
  openGraph: {
    title: "Sarasota Insurance Agency | Auto, Home, Flood & Life | Lamb",
    description:
      "Auto, homeowners, flood, condo, life, and commercial insurance in Sarasota, FL. Same-day quotes from a local agent.",
    images: ["/og-image.png"],
    url: "https://lambinsuranceagency.com",
    siteName: "Lamb Insurance Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarasota Insurance Agency | Auto, Home, Flood & Life | Lamb",
    description:
      "Auto, homeowners, flood, condo, life, and commercial insurance in Sarasota, FL. Same-day quotes from a local agent.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://lambinsuranceagency.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "KIXQJA3RX_fdHOLHP9_6v-vPVa8t2k6lBtGTZ727pQQ" },
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
                { "@type": "Place", name: "Palmer Ranch", containedInPlace: { "@type": "City", name: "Sarasota", containedInPlace: { "@type": "State", name: "Florida" } } },
                { "@type": "City", name: "North Port", containedInPlace: { "@type": "State", name: "Florida" } },
              ],
              employee: {
                "@type": "Person",
                "@id": "https://lambinsuranceagency.com/#cody-lamb",
                name: "Cody Alexander Lamb",
                jobTitle: "Licensed Florida Insurance Agent",
                identifier: "FL License #G034846",
                sameAs: ["https://www.linkedin.com/in/cody-lamb-insurance/"],
              },
              sameAs: ["https://www.linkedin.com/company/lamb-insurance-agency-llc", "https://www.facebook.com/people/Lamb-Insurance-Agency-LLC/61572033134721/"],
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
