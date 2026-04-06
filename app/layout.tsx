import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cody Lamb Insurance Agency",
  description:
    "Protecting what matters most. Personal and commercial insurance solutions tailored to your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream font-body text-navy-900 antialiased">
        {children}
      </body>
    </html>
  );
}
