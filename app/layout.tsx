import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lambinsuranceagency.com"),
  title: {
    default: "Lamb Insurance Agency | Sarasota Insurance since 1991",
    template: "%s | Lamb Insurance Agency",
  },
  description:
    "Local insurance agency in Sarasota, FL offering auto, home, life, and commercial coverage. Free quotes. Call 941.225.2335.",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0e1c32" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Lamb Insurance Agency",
              url: "https://lambinsuranceagency.com",
              email: "lambinsurance91@gmail.com",
              telephone: ["+19412252335", "+19414049673"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "5893 Whitfield Ave",
                addressLocality: "Sarasota",
                addressRegion: "FL",
                postalCode: "34243",
                addressCountry: "US",
              },
              sameAs: [],
              description: "Local independent insurance agency serving Sarasota, FL since 1991. Auto, home, life, and commercial insurance with personalized service.",
              priceRange: "$$",
              openingHours: ["Mo-Fr 09:00-17:00", "Sa 10:00-14:00"],
              image: "https://lambinsuranceagency.com/logo.png",
              logo: "https://lambinsuranceagency.com/logo.png",
              areaServed: {
                "@type": "State",
                name: "Florida",
              },
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
              "@type": "WebSite",
              name: "Lamb Insurance Agency",
              url: "https://lambinsuranceagency.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://lambinsuranceagency.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
