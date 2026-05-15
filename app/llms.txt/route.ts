import { NextResponse } from "next/server";

const BASE_URL = "https://lambinsuranceagency.com";

const content = `# Lamb Insurance Agency

> Lamb Insurance Agency is a local insurance agency serving Sarasota, FL. Cody Lamb is a licensed Florida insurance agent (Property & Casualty, Life & Health) helping drivers, homeowners, and business owners get properly protected.

## Pages

- [Home](${BASE_URL}): Overview of insurance services offered in Sarasota, FL
- [About](${BASE_URL}/about): About Cody Lamb and Lamb Insurance Agency
- [Auto Insurance](${BASE_URL}/auto-insurance-sarasota-fl): Auto insurance in Sarasota, FL
- [Flood Insurance](${BASE_URL}/flood-insurance-sarasota-fl): Flood insurance in Sarasota, FL
- [Condo Insurance](${BASE_URL}/condo-insurance-sarasota-fl): Condo insurance in Sarasota, FL
- [Life Insurance](${BASE_URL}/life-insurance-sarasota-fl): Life insurance in Sarasota, FL — term and permanent coverage options
- [Bundle Insurance](${BASE_URL}/bundle-insurance-sarasota-fl): Bundle insurance discounts in Sarasota, FL
- [Commercial Insurance](${BASE_URL}/commercial-insurance-sarasota-fl): Commercial insurance for businesses in Sarasota, FL
- [Bradenton, FL](${BASE_URL}/insurance-bradenton-fl): Auto, SR-22, commercial, and flood insurance for Bradenton and Manatee County
- [Lakewood Ranch, FL](${BASE_URL}/insurance-lakewood-ranch-fl): Auto, home, flood, and life insurance for Lakewood Ranch residents
- [Siesta Key, FL](${BASE_URL}/insurance-siesta-key-fl): Flood, condo, auto, and vacation rental insurance for Siesta Key property owners
- [Venice, FL](${BASE_URL}/insurance-venice-fl): Home, auto, flood, Medicare supplement, and life insurance for Venice residents
- [Get a Quote](${BASE_URL}/quote): Request an insurance quote
- [En Español](${BASE_URL}/espanol): Insurance services in Spanish / Servicios de seguro en español
- [FAQ](${BASE_URL}/faq): Frequently asked questions about insurance coverage
- [SMS Policy](${BASE_URL}/sms): SMS communication policy
- [Privacy Policy](${BASE_URL}/privacy-policy): Privacy policy
- [Terms](${BASE_URL}/terms): Terms of service
`;

export async function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
