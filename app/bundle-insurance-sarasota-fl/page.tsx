import type { Metadata } from "next";
import BundleInsurancePage from "./BundleInsurancePage";

export const metadata: Metadata = {
  title: "Bundle Home and Auto Insurance Sarasota FL | Lamb Insurance Agency",
  description:
    "Bundle your home and auto insurance in Sarasota with Lamb Insurance Agency. Local agent, real savings, same-day quotes. One call covers everything.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/bundle-insurance-sarasota-fl",
  },
};

export default function BundleInsuranceRoute() {
  return <BundleInsurancePage />;
}
