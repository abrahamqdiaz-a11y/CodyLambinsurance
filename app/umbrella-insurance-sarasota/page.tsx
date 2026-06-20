import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import {
  ServicePageHeader,
  ServicePageFooter,
} from "../components/ServicePageChrome";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Umbrella Insurance in Sarasota, FL",
  description:
    "Protect your home, savings, and future from a single lawsuit. See your liability exposure in 60 seconds with a free Asset Protection Review.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/umbrella-insurance-sarasota",
  },
  openGraph: {
    type: "website",
    url: "https://lambinsuranceagency.com/umbrella-insurance-sarasota",
    siteName: "Lamb Insurance Agency",
    title: "Umbrella Insurance in Sarasota, FL | Lamb Insurance Agency",
    description:
      "Protect your home, savings, and future from a single lawsuit. See your liability exposure in 60 seconds with a free Asset Protection Review.",
    images: [
      {
        url: "/og/umbrella.png", // TODO: create OG image at /public/og/umbrella.png (1200×630)
        width: 1200,
        height: 630,
        alt: "Umbrella Insurance in Sarasota — Lamb Insurance Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umbrella Insurance in Sarasota, FL | Lamb Insurance Agency",
    description:
      "Protect your home, savings, and future from a single lawsuit. See your liability exposure in 60 seconds with a free Asset Protection Review.",
    images: ["/og/umbrella.png"],
  },
};

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
// FAQ answer text must exactly match visible content below.
const FAQ_ITEMS = [
  {
    q: "How much umbrella insurance do I need?",
    a: "A practical starting point: match your umbrella limit to your total exposed net worth—home equity, savings, investments, and estimated future earnings above your current liability limits. If your standard policies cover $500K and your net worth is $2M, you have roughly $1.5M exposed. A $1M–$2M umbrella is a reasonable starting floor. Your Asset Protection Review will size this specifically to your situation.",
  },
  {
    q: "What does a personal umbrella policy cover?",
    a: "A personal umbrella policy extends your liability coverage above the limits of your home, auto, watercraft, and other underlying policies. It typically covers bodily injury to others, property damage you cause, libel and slander, certain rental property liability, and your legal defense costs—often regardless of the lawsuit outcome.",
  },
  {
    q: "Does umbrella insurance cover my boat or rental property?",
    a: "Most personal umbrella policies extend over watercraft liability (subject to horsepower and size requirements) and residential rental property liability. Exact coverage depends on the underlying policies you have in place and the specific umbrella carrier. We review your full picture—home, auto, boat, rental—before recommending a policy.",
  },
  {
    q: "How is umbrella coverage different from raising my home or auto liability limits?",
    a: "Raising limits on a single policy protects you only for incidents covered by that policy. A personal umbrella policy sits above all your underlying liability policies at once—home, auto, watercraft, and more—so one policy closes the gap across the board. It's also typically far more cost-effective than raising each policy's limits individually.",
  },
  {
    q: "How much does umbrella insurance cost in Sarasota?",
    a: "For most Sarasota households, a $1 million personal umbrella policy runs a few hundred dollars per year—commonly in the $150–$350 range depending on your underlying policies, claims history, and carrier. Each additional $1M in coverage typically adds $75–$100 per year. Exact pricing depends on your situation; your Asset Protection Review will include a precise estimate.",
  },
  {
    q: "Who actually needs umbrella insurance?",
    a: "Anyone whose net worth—home equity, savings, investments, future income—exceeds their current liability limits. In Sarasota, that includes homeowners in Lakewood Ranch, Palmer Ranch, downtown waterfront properties, and surrounding neighborhoods who have built meaningful assets. If a judgment could reach your savings, home equity, or earnings, an umbrella policy is worth understanding.",
  },
];

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      "@id": "https://lambinsuranceagency.com/#agency",
      name: "Lamb Insurance Agency",
      description:
        "Licensed independent insurance agency in Sarasota, FL specializing in personal umbrella policies, excess liability coverage, and high-value home insurance for Sarasota and Manatee county households.",
      url: "https://lambinsuranceagency.com",
      telephone: "(941) 225-2335", // TODO: confirm
      email: "contact@lambinsuranceagency.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5893 Whitfield Ave", // TODO: confirm
        addressLocality: "Sarasota",
        addressRegion: "FL",
        postalCode: "34243", // TODO: confirm
        addressCountry: "US",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Sarasota",
          containedInPlace: { "@type": "State", name: "Florida" },
        },
        {
          "@type": "County",
          name: "Manatee County",
          containedInPlace: { "@type": "State", name: "Florida" },
        },
      ],
      sameAs: [], // TODO: add social profile URLs
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "Person",
      "@id": "https://lambinsuranceagency.com/#cody-lamb",
      name: "Cody Lamb",
      givenName: "Cody",
      familyName: "Lamb",
      jobTitle: "Licensed Insurance Agent",
      identifier: "FL License #G034846",
      worksFor: {
        "@type": "Organization",
        "@id": "https://lambinsuranceagency.com/#agency",
        name: "Lamb Insurance Agency",
        url: "https://lambinsuranceagency.com",
      },
      knowsAbout: [
        "umbrella insurance",
        "personal umbrella policy",
        "excess liability insurance",
        "high-value home insurance",
        "personal liability protection",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        addressCountry: "US",
      },
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
          name: "Umbrella Insurance in Sarasota, FL",
          item: "https://lambinsuranceagency.com/umbrella-insurance-sarasota",
        },
      ],
    },
  ],
};

// ─── Coverage items for section 3 ─────────────────────────────────────────────
const COVERAGE_ITEMS = [
  {
    title: "Bodily injury to others",
    text: "When someone is seriously hurt and your auto or homeowners liability limit is exhausted, the umbrella activates—covering the judgment and legal costs above that line.",
  },
  {
    title: "Property damage you cause",
    text: "A single at-fault incident on the road, on the water, or at your home can produce property damage claims that far exceed standard limits. The umbrella covers the gap.",
  },
  {
    title: "Libel, slander, and defamation",
    text: "Personal liability isn't only physical. A personal umbrella typically covers claims of reputational harm—something most auto and home policies exclude entirely.",
  },
  {
    title: "Rental property liability",
    text: "If you own residential rental property, personal umbrella coverage often extends to landlord liability—meaningful protection for investment property owners.",
  },
  {
    title: "Legal defense costs",
    text: "Defense costs alone can reach six figures before a judgment is entered. Most umbrella policies cover your legal defense regardless of outcome.",
  },
  {
    title: "Watercraft liability",
    text: "Florida watercraft owners face real exposure. Subject to horsepower and length limits, umbrella coverage typically extends above your marine policy's liability limit.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[#B08D4F] text-[11px] font-semibold tracking-[0.22em] uppercase [font-family:var(--font-plex-mono)] mb-4">
      {children}
    </p>
  );
}

// The recurring sage→ember split bar: the visual signature of the gap motif.
function SplitBar({
  protectedPct = 22,
  showLabels = true,
}: {
  protectedPct?: number;
  showLabels?: boolean;
}) {
  const exposedPct = 100 - protectedPct;
  return (
    <div>
      <div
        role="img"
        aria-label={`Liability gap: ${protectedPct}% covered by standard policies, ${exposedPct}% of net worth exposed`}
        className="flex rounded-full overflow-hidden h-2.5 w-full"
      >
        <div
          className="bg-[#7CA37C] rounded-full"
          style={{ width: `${protectedPct}%` }}
        />
        <div className="bg-[#C2683B] flex-1 rounded-full" />
      </div>
      {showLabels && (
        <div className="flex justify-between mt-2 text-[10px] [font-family:var(--font-plex-mono)] uppercase tracking-wider">
          <span className="text-[#7CA37C]">Standard limit</span>
          <span className="text-[#C2683B]">Exposed</span>
        </div>
      )}
    </div>
  );
}

function ReviewCTA({
  label = "See Your Exposure in 60 Seconds",
  size = "lg",
}: {
  label?: string;
  size?: "lg" | "md";
}) {
  return (
    <Link
      href="/protection-review?source=organic-umbrella"
      className={`inline-block rounded-lg font-semibold [font-family:var(--font-inter)] tracking-wide bg-[#B08D4F] text-[#14201C] transition-all duration-200 hover:bg-[#C4A060] hover:shadow-[0_8px_24px_rgba(176,141,79,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D4F] motion-reduce:transition-none${
        size === "lg" ? " px-8 py-4 text-base" : " px-6 py-3 text-sm"
      }`}
    >
      {label}
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function UmbrellaInsuranceSarasotaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <ServicePageHeader />

      {/*
        The wrapper div sets the CSS custom properties for the three
        page-specific fonts, making them available to all children via
        [font-family:var(--font-xxx)] Tailwind arbitrary values.
      */}
      <div
        className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable} bg-[#14201C] text-[#F2EEE3]`}
      >
        <main id="main-content">

          {/* ── 1. HERO ───────────────────────────────────────────────────── */}
          <section
            id="hero"
            aria-labelledby="hero-heading"
            className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-5"
          >
            {/* Faint grain texture — purely decorative */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "256px 256px",
              }}
            />

            <div className="relative max-w-4xl mx-auto text-center">
              <Eyebrow>Umbrella Insurance · Sarasota, FL</Eyebrow>

              <h1
                id="hero-heading"
                className="[font-family:var(--font-fraunces)] text-4xl sm:text-5xl md:text-6xl font-bold text-[#F2EEE3] leading-[1.1] tracking-tight mb-6"
              >
                Umbrella Insurance in Sarasota{" "}
                <span className="block text-[#C2683B]">
                  Built for Homeowners with Real Assets at Stake
                </span>
              </h1>

              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Standard home and auto policies cap liability at{" "}
                <span className="[font-family:var(--font-plex-mono)] text-[#F2EEE3]">
                  $300K–$500K
                </span>
                . A single serious accident or judgment can reach past those limits—into your equity, savings, and future income. A personal umbrella policy closes the gap before a lawsuit opens it.
              </p>

              {/* Hero split bar — the visual signature */}
              <div className="max-w-sm mx-auto mb-10" aria-hidden="true">
                <SplitBar protectedPct={22} showLabels={false} />
                <div className="flex justify-between mt-2 text-[10px] [font-family:var(--font-plex-mono)] uppercase tracking-wider">
                  <span className="text-[#7CA37C]">$300K–$500K covered</span>
                  <span className="text-[#C2683B]">Remaining net worth: exposed</span>
                </div>
              </div>

              <ReviewCTA size="lg" />

              <p className="mt-4 text-xs [font-family:var(--font-inter)] text-[#A9B2A8]">
                Free · 60 seconds · No commitment
              </p>
            </div>
          </section>

          <div
            aria-hidden="true"
            className="border-t border-white/[0.07] max-w-5xl mx-auto"
          />

          {/* ── 2. THE LIABILITY GAP ──────────────────────────────────────── */}
          <section
            id="liability-gap"
            aria-labelledby="gap-heading"
            className="py-20 md:py-28 px-5"
          >
            <div className="max-w-3xl mx-auto">
              <Eyebrow>The Gap</Eyebrow>
              <h2
                id="gap-heading"
                className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#F2EEE3] mb-6 leading-tight"
              >
                Your Standard Liability Covers a Fraction of What You've Built
              </h2>

              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-base leading-relaxed mb-5">
                Most personal auto policies carry{" "}
                <span className="[font-family:var(--font-plex-mono)] text-[#F2EEE3]">
                  $300K–$500K
                </span>{" "}
                in liability. Homeowners policies often match or slightly exceed that. For many Sarasota households, accumulated net worth—home equity, taxable accounts, retirement savings, a boat—sits well into the millions.
              </p>

              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-base leading-relaxed mb-10">
                Florida is a high-litigation state. A serious at-fault auto accident, an injury on your property, or a watercraft incident can produce judgments that exceed those limits. When that happens, the plaintiff's attorney goes after what your insurance doesn't cover—your equity, your savings, and potentially a portion of future wages.
              </p>

              {/* Illustrative exposure visualization */}
              <div className="bg-[#1F302A] rounded-2xl p-6 md:p-8 border border-white/[0.07]">
                <p className="[font-family:var(--font-plex-mono)] text-[11px] uppercase tracking-[0.18em] text-[#A9B2A8] mb-6">
                  Illustrative example — $1.5M net worth, $300K standard limit
                </p>

                {/* Protected row */}
                <div className="mb-5">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="[font-family:var(--font-inter)] text-[#7CA37C] text-sm font-semibold">
                      Protected by current policies
                    </span>
                    <span className="[font-family:var(--font-plex-mono)] text-[#7CA37C] text-sm">
                      $300,000
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="h-2.5 rounded-full bg-[#14201C] overflow-hidden"
                  >
                    <div className="h-full w-[20%] bg-[#7CA37C] rounded-full" />
                  </div>
                </div>

                {/* Exposed row */}
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="[font-family:var(--font-inter)] text-[#C2683B] text-sm font-semibold">
                      Exposed above policy limits
                    </span>
                    <span className="[font-family:var(--font-plex-mono)] text-[#C2683B] text-sm">
                      $1,200,000
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="h-2.5 rounded-full bg-[#14201C] overflow-hidden"
                  >
                    <div className="h-full w-full bg-[#C2683B] rounded-full" />
                  </div>
                </div>

                <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm border-t border-white/[0.07] pt-5">
                  A personal umbrella policy would close that{" "}
                  <span className="[font-family:var(--font-plex-mono)] text-[#C2683B]">
                    $1.2M
                  </span>{" "}
                  gap for a few hundred dollars a year. That math is worth knowing before a lawsuit forces the conversation.
                </p>
              </div>
            </div>
          </section>

          {/* ── 3. WHAT A PERSONAL UMBRELLA POLICY COVERS ────────────────── */}
          <section
            id="coverage"
            aria-labelledby="coverage-heading"
            className="py-20 md:py-28 px-5 bg-[#1A2820]"
          >
            <div className="max-w-5xl mx-auto">
              <Eyebrow>Coverage</Eyebrow>
              <h2
                id="coverage-heading"
                className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#F2EEE3] mb-4 leading-tight"
              >
                What a Personal Umbrella Policy Covers
              </h2>
              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-base leading-relaxed mb-12 max-w-2xl">
                An umbrella doesn't replace your home or auto insurance—it activates when their limits run out, extending your protection across all your underlying policies at once.
              </p>

              <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {COVERAGE_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#14201C] rounded-xl p-5 border border-white/[0.07] hover:border-[#B08D4F]/30 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#B08D4F] flex-shrink-0"
                      />
                      <dt className="[font-family:var(--font-inter)] text-[#F2EEE3] text-sm font-semibold leading-snug">
                        {item.title}
                      </dt>
                    </div>
                    <dd className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm leading-relaxed">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ── 4. WHY SARASOTA HOMEOWNERS NEED IT ───────────────────────── */}
          <section
            id="sarasota"
            aria-labelledby="sarasota-heading"
            className="py-20 md:py-28 px-5"
          >
            <div className="max-w-3xl mx-auto">
              <Eyebrow>Local Context</Eyebrow>
              <h2
                id="sarasota-heading"
                className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#F2EEE3] mb-6 leading-tight"
              >
                Why Sarasota Homeowners Face Elevated Liability Exposure
              </h2>

              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-base leading-relaxed mb-10">
                The Sarasota lifestyle—waterfront homes, boats, pools, frequent entertaining—carries real liability exposure. Florida's legal environment amplifies the consequences when something goes wrong.
              </p>

              <div className="space-y-7 mb-12">
                <div className="border-l-2 border-[#B08D4F]/35 pl-5">
                  <h3 className="[font-family:var(--font-inter)] text-[#F2EEE3] font-semibold text-base mb-2">
                    Boats, docks, and waterways
                  </h3>
                  <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm leading-relaxed">
                    Sarasota County has one of the highest concentrations of registered watercraft in Florida. A boating accident that injures another person can produce a judgment that dwarfs a standard marine policy's liability limits. Personal umbrella coverage extends above those limits, often at modest additional cost.
                  </p>
                </div>

                <div className="border-l-2 border-[#B08D4F]/35 pl-5">
                  <h3 className="[font-family:var(--font-inter)] text-[#F2EEE3] font-semibold text-base mb-2">
                    Pools and premises liability
                  </h3>
                  <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm leading-relaxed">
                    Pool-related injury and drowning claims are among the most financially severe in residential liability. Florida law imposes strict pool safety requirements, but serious injuries still produce lawsuits that reach past homeowners policy limits.
                  </p>
                </div>

                <div className="border-l-2 border-[#B08D4F]/35 pl-5">
                  <h3 className="[font-family:var(--font-inter)] text-[#F2EEE3] font-semibold text-base mb-2">
                    Entertaining and guest injury
                  </h3>
                  <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm leading-relaxed">
                    Hosting guests at your property—at the dock, by the pool, or at a gathering—creates premises liability exposure. One serious guest injury can exhaust a standard homeowners policy and still leave a significant judgment unpaid.
                  </p>
                </div>

                <div className="border-l-2 border-[#B08D4F]/35 pl-5">
                  <h3 className="[font-family:var(--font-inter)] text-[#F2EEE3] font-semibold text-base mb-2">
                    Florida's litigation climate
                  </h3>
                  <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm leading-relaxed">
                    Florida consistently ranks among the most plaintiff-favorable litigation states in the country. Jury verdicts in personal injury cases regularly exceed standard liability limits. Attorney contingency fees create strong financial incentive to pursue individuals with meaningful assets above policy limits.
                  </p>
                </div>
              </div>

              {/* Neighborhood context + internal links to sibling pages */}
              <div className="bg-[#1F302A] rounded-xl p-5 md:p-6 border border-white/[0.07]">
                <p className="[font-family:var(--font-plex-mono)] text-[11px] uppercase tracking-[0.18em] text-[#A9B2A8] mb-4">
                  Serving Sarasota &amp; Manatee County
                </p>
                <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm leading-relaxed mb-5">
                  We serve homeowners throughout Sarasota and Manatee counties—from Lakewood Ranch and Palmer Ranch to downtown Sarasota, Siesta Key, and Longboat Key. If you've built meaningful assets in this area, personal umbrella insurance is worth understanding before a lawsuit makes it urgent.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  {/* TODO: sibling page live? */}
                  <Link
                    href="/umbrella-insurance-lakewood-ranch"
                    className="[font-family:var(--font-inter)] text-[#B08D4F] text-sm hover:text-[#C4A060] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#B08D4F] rounded"
                  >
                    Umbrella insurance in Lakewood Ranch →
                  </Link>
                  {/* TODO: sibling page live? */}
                  <Link
                    href="/high-value-home-insurance-sarasota"
                    className="[font-family:var(--font-inter)] text-[#B08D4F] text-sm hover:text-[#C4A060] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#B08D4F] rounded"
                  >
                    High-value home insurance in Sarasota →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── 5. COST ───────────────────────────────────────────────────── */}
          <section
            id="cost"
            aria-labelledby="cost-heading"
            className="py-20 md:py-28 px-5 bg-[#1A2820]"
          >
            <div className="max-w-3xl mx-auto">
              <Eyebrow>Cost</Eyebrow>
              <h2
                id="cost-heading"
                className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#F2EEE3] mb-6 leading-tight"
              >
                Umbrella Insurance Costs a Fraction of What It Protects
              </h2>

              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-base leading-relaxed mb-5">
                For most Sarasota households, a{" "}
                <span className="[font-family:var(--font-plex-mono)] text-[#F2EEE3]">
                  $1 million
                </span>{" "}
                personal umbrella policy runs a few hundred dollars a year—commonly in the{" "}
                <span className="[font-family:var(--font-plex-mono)] text-[#F2EEE3]">
                  $150–$350
                </span>{" "}
                range. Each additional{" "}
                <span className="[font-family:var(--font-plex-mono)] text-[#F2EEE3]">
                  $1M
                </span>{" "}
                in coverage typically adds{" "}
                <span className="[font-family:var(--font-plex-mono)] text-[#F2EEE3]">
                  $75–$100
                </span>{" "}
                per year.
                {/* TODO: confirm carrier pricing ranges with Cody before publishing */}
              </p>

              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-base leading-relaxed mb-10">
                If you have{" "}
                <span className="[font-family:var(--font-plex-mono)] text-[#F2EEE3]">
                  $1.5M
                </span>{" "}
                in assets above your current liability limit, you're spending roughly{" "}
                <span className="[font-family:var(--font-plex-mono)] text-[#F2EEE3]">
                  0.02%
                </span>{" "}
                of those assets per year to protect them from a catastrophic judgment. There are very few financial decisions with that ratio.
              </p>

              {/* Pricing reference cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#14201C] rounded-xl p-5 border border-white/[0.07]">
                  <p className="[font-family:var(--font-plex-mono)] text-[#B08D4F] text-[11px] uppercase tracking-[0.18em] mb-3">
                    $1M coverage — typical range
                  </p>
                  <p className="[font-family:var(--font-fraunces)] text-[#F2EEE3] text-3xl font-bold mb-1">
                    $150–$350
                  </p>
                  <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-xs">
                    per year · varies by carrier &amp; history
                  </p>
                </div>
                <div className="bg-[#14201C] rounded-xl p-5 border border-white/[0.07]">
                  <p className="[font-family:var(--font-plex-mono)] text-[#B08D4F] text-[11px] uppercase tracking-[0.18em] mb-3">
                    Each additional $1M
                  </p>
                  <p className="[font-family:var(--font-fraunces)] text-[#F2EEE3] text-3xl font-bold mb-1">
                    $75–$100
                  </p>
                  <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-xs">
                    per year · typical add-on
                  </p>
                </div>
              </div>

              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm">
                These are typical ranges—your exact premium depends on your underlying policies, claims history, carrier, and the assets you're protecting. The Asset Protection Review produces a specific estimate for your situation.
              </p>
            </div>
          </section>

          {/* ── 6. MID-PAGE CTA BAND ─────────────────────────────────────── */}
          <section
            aria-label="Asset Protection Review call to action"
            className="py-16 md:py-20 px-5 border-y border-[#B08D4F]/20"
          >
            <div className="max-w-2xl mx-auto text-center">
              <Eyebrow>Free · No Commitment</Eyebrow>
              <h2 className="[font-family:var(--font-fraunces)] text-2xl md:text-3xl font-bold text-[#F2EEE3] mb-4 leading-tight">
                Know Your Exposure Before a Lawsuit Does
              </h2>
              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-base mb-8 leading-relaxed">
                The Asset Protection Review shows you exactly where your current liability limits end and where your net worth becomes exposed—in about 60 seconds. No forms, no pressure.
              </p>
              <ReviewCTA label="Start Your Free Asset Protection Review" size="lg" />
            </div>
          </section>

          {/* ── 7. FAQ ───────────────────────────────────────────────────── */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="py-20 md:py-28 px-5"
          >
            <div className="max-w-3xl mx-auto">
              <Eyebrow>Common Questions</Eyebrow>
              <h2
                id="faq-heading"
                className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#F2EEE3] mb-12 leading-tight"
              >
                Personal Umbrella Insurance, Answered
              </h2>

              <dl className="space-y-1">
                {FAQ_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className="border border-white/[0.07] rounded-xl overflow-hidden"
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center gap-4 p-5 md:p-6 cursor-pointer list-none select-none hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B08D4F] focus-visible:outline-offset-[-2px] transition-colors duration-150">
                        <dt className="[font-family:var(--font-inter)] text-[#F2EEE3] font-semibold text-base leading-snug">
                          {item.q}
                        </dt>
                        <span
                          aria-hidden="true"
                          className="text-[#B08D4F] flex-shrink-0 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M8 3v10M3 8h10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </summary>
                      <dd className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm leading-relaxed px-5 md:px-6 pb-5 md:pb-6">
                        {item.a}
                      </dd>
                    </details>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ── 8. AUTHOR / E-E-A-T BLOCK ────────────────────────────────── */}
          <section
            id="author"
            aria-labelledby="author-heading"
            className="py-16 md:py-20 px-5 bg-[#1A2820] border-y border-white/[0.07]"
          >
            <div className="max-w-3xl mx-auto">
              <Eyebrow>Written &amp; Reviewed By</Eyebrow>
              <div className="flex flex-col sm:flex-row gap-6 items-start">

                {/* Headshot — placeholder initials shown until photo is added */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#14201C] border border-[#B08D4F]/30 flex items-center justify-center overflow-hidden relative">
                  {/* TODO: add headshot photo to /public/cody-lamb-headshot.jpg */}
                  <Image
                    src="/cody-lamb-headshot.jpg"
                    alt="Cody Lamb, Licensed Insurance Agent — Lamb Insurance Agency, Sarasota FL"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                  {/* Visible when image hasn't loaded */}
                  <span
                    aria-hidden="true"
                    className="[font-family:var(--font-inter)] text-[#B08D4F] font-bold text-lg absolute"
                  >
                    CL
                  </span>
                </div>

                <div>
                  <h2
                    id="author-heading"
                    className="[font-family:var(--font-inter)] text-[#F2EEE3] font-bold text-lg mb-1"
                  >
                    Cody Lamb
                  </h2>
                  <p className="[font-family:var(--font-plex-mono)] text-[#B08D4F] text-[11px] uppercase tracking-[0.18em] mb-4">
                    Licensed Insurance Agent · FL License #G034846
                  </p>
                  <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-sm leading-relaxed mb-4">
                    Cody Lamb is a Florida-licensed independent insurance agent at Lamb Insurance Agency in Sarasota. He specializes in personal umbrella policies, excess liability insurance, and high-value home coverage for Sarasota and Manatee county households. The content on this page reflects his direct experience reviewing and placing personal umbrella policies for clients throughout the region.
                  </p>
                  <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-xs flex items-center gap-2">
                    <span className="text-[#7CA37C]" aria-hidden="true">✓</span>
                    Content reviewed by a licensed insurance agent · Lamb Insurance Agency · Sarasota, FL
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 9. FINAL CTA ─────────────────────────────────────────────── */}
          <section
            aria-label="Final call to action — Asset Protection Review"
            className="py-24 md:py-32 px-5"
          >
            <div className="max-w-2xl mx-auto text-center">
              <Eyebrow>Next Step</Eyebrow>
              <h2 className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#F2EEE3] mb-4 leading-tight">
                See What You're Protecting—and What You're Not
              </h2>
              <p className="[font-family:var(--font-inter)] text-[#A9B2A8] text-base mb-10 leading-relaxed max-w-lg mx-auto">
                The Asset Protection Review takes 60 seconds and shows you the gap between your current liability coverage and your exposed net worth. Free, no pressure, no forms.
              </p>

              {/* Split bar as the quiet signature before the CTA */}
              <div className="max-w-xs mx-auto mb-8">
                <SplitBar protectedPct={22} showLabels={true} />
              </div>

              <ReviewCTA label="Start Your Free Asset Protection Review" size="lg" />

              <p className="mt-7 text-xs [font-family:var(--font-inter)] text-[#A9B2A8]">
                Prefer to talk first?{" "}
                {/* TODO: confirm phone number */}
                <a
                  href="tel:+19412252335"
                  className="text-[#B08D4F] hover:text-[#C4A060] transition-colors motion-reduce:transition-none"
                >
                  (941) 225-2335
                </a>{" "}
                or{" "}
                <a
                  href="mailto:contact@lambinsuranceagency.com"
                  className="text-[#B08D4F] hover:text-[#C4A060] transition-colors motion-reduce:transition-none"
                >
                  contact@lambinsuranceagency.com
                </a>
              </p>
            </div>
          </section>

        </main>
      </div>

      <ServicePageFooter
        email="contact@lambinsuranceagency.com"
        phone="(941) 225-2335"
      />
    </>
  );
}
