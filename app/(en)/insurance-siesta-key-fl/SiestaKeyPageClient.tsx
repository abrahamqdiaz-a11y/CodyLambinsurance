"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageFooter } from "../../components/ServicePageChrome";
import { SiteHeader } from "../../components/SiteHeader";
import HighLevelForm from "../../components/HighLevelForm";
import { faqs } from "../../content/faqs/insurance-siesta-key-fl";

const EMAIL = "contact@lambinsuranceagency.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const coverageLinks = [
  {
    label: "Homeowners Insurance",
    href: "/homeowners-insurance-sarasota-fl",
    description: "Wind, hurricane, and replacement-cost coverage for Siesta Key homes — separate from condo HO-6 and flood policies.",
  },
  {
    label: "Condo Insurance (HO-6)",
    href: "/condo-insurance-sarasota-fl",
    description: "Unit interior, personal belongings, loss assessment coverage, and personal liability — what the association master policy leaves out.",
  },
  {
    label: "Flood Insurance",
    href: "/flood-insurance-sarasota-fl",
    description: "Required by lenders in VE and AE zones. Covers storm surge and rising water that no homeowners policy covers.",
  },
  {
    label: "Auto Insurance",
    href: "/auto-insurance-sarasota-fl",
    description: "Coverage for year-round residents navigating Midnight Pass Road and Stickney Point seasonal traffic.",
  },
  {
    label: "Bundle Insurance",
    href: "/bundle-insurance-sarasota-fl",
    description: "Combine auto and condo policies for potential savings without sacrificing Gulf-coast coverage quality.",
  },
  {
    label: "Umbrella Insurance",
    href: "/umbrella-insurance-sarasota",
    description: "Excess liability above your home and auto limits — important for barrier island property owners with pools, docks, or short-term rental exposure.",
  },
  {
    label: "Life Insurance",
    href: "/life-insurance-sarasota-fl",
    description: "Term and permanent options for property owners planning around a coastal asset.",
  },
  {
    label: "Commercial Insurance",
    href: "/commercial-insurance-sarasota-fl",
    description: "Liability and property coverage for businesses operating in Siesta Key Village and surrounding areas.",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Hero() {
  return (
    <section id="home" className="hero-pattern min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 bg-sage-400 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-8 bg-navy-500 blur-2xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
              Local Agency · Flood Zone Experts · Free Quotes
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Condo and Home Insurance on Siesta Key, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Siesta Key sits entirely in FEMA high-risk flood zones, the barrier island's condo market creates HO-6 coverage gaps most owners don't discover until a claim, and short-term rentals are common enough that standard policies routinely fall short. I work with Siesta Key property owners to build coverage that holds up when it matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get a Free Quote
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call: {PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Trust indicators">
            {["Barrier Island Expertise", "HO-6 Condo Specialists", "Flood Zone Coverage", "Short-Term Rental Gaps"].map((item) => (
              <div key={item} className="bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-sm text-navy-100 font-body">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CondoSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="condo-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="condo-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            HO-6 Condo Insurance: What the Master Policy Doesn&apos;t Cover
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Siesta Key has a large and active condo market — high-rises along Crescent Beach, smaller buildings throughout Siesta Key Village, and everything in between. Most condo buyers know the association carries a master policy. What surprises many of them is how little of their individual exposure that policy actually covers.
            </p>
            <p>
              The association&apos;s master policy covers the building structure, exterior walls, roof, and common areas. It does not cover the interior of your unit — the flooring you chose, the kitchen appliances, the fixtures, the built-in shelving. It does not cover your personal belongings. And it does not cover your personal liability if a guest is injured inside your unit. An HO-6 policy fills those gaps, and in Florida, most lenders and association bylaws require it.
            </p>
            <p>
              On a barrier island with significant wind exposure, there&apos;s another coverage piece worth understanding: loss assessment. If a hurricane event causes damage that exceeds the association&apos;s master policy limits, the association can pass a share of those excess costs to each unit owner. Loss assessment coverage on your HO-6 policy covers your share. Standard base limits are often too low for what a serious Gulf Coast event could produce — reviewing your association&apos;s master policy documents is the only way to know how much you actually need.
            </p>
            <p>
              One more thing specific to the Gulf Coast: condo master policies here frequently have wind coverage gaps. Not every association policy includes comprehensive windstorm protection, and some have hurricane deductibles that are structured as a percentage of the insured building value — which can mean a substantial out-of-pocket assessment to unit owners in a named storm year. I review these documents regularly for Siesta Key condo owners before recommending HO-6 coverage amounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloodSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="flood-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="flood-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            VE and AE Flood Zones: What They Mean on Siesta Key
          </h2>
          <div className="space-y-4 text-navy-200 font-body text-base leading-relaxed">
            <p>
              Most of Siesta Key sits in FEMA high-risk flood zones. The Gulf-facing portions of the island — including much of the shoreline near Crescent Beach and south along Midnight Pass Road — fall in VE zones, which are coastal high-hazard areas that account for wave action in addition to flooding. Properties set back from the Gulf front typically fall in AE zones, which are within the 100-year floodplain but without the added wave-action designation.
            </p>
            <p>
              Both VE and AE designations mean flood insurance is required by most lenders. The difference matters for pricing and construction standards: VE insurance is typically more expensive, and homes built in VE zones must be elevated to meet base flood elevation requirements. Your specific zone designation, your property&apos;s elevation relative to the base flood elevation, and whether you have an elevation certificate all affect your flood premium significantly.
            </p>
            <p>
              Flood insurance through the National Flood Insurance Program (NFIP) is the most common product here, though private flood market options are worth reviewing for some properties — particularly those where private carriers can offer broader coverage or higher limits than the NFIP&apos;s building cap. One thing that doesn&apos;t change: flood insurance is never included in any homeowners or HO-6 policy. It&apos;s always a separate policy, and it carries a 30-day waiting period before it takes effect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RentalSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="rental-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="rental-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Short-Term Rentals and Hurricane Deductibles on a Barrier Island
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Siesta Key draws a significant volume of seasonal vacation rental activity. Owners who list their condos or homes on Airbnb or VRBO often don&apos;t realize their standard HO-6 policy has language that voids or restricts coverage during short-term rental periods. Standard homeowners policies are written for owner-occupied use, and short-term rental activity is treated as a separate commercial exposure most personal lines policies don&apos;t cover.
            </p>
            <p>
              The gap shows up in a predictable pattern: a guest has an incident during their stay, an owner files a claim, and the carrier denies it based on the rental exclusion. Closing this gap requires either a short-term rental endorsement added to the HO-6 policy, a separate short-term rental policy, or a landlord dwelling policy that&apos;s written for non-owner-occupied use. Which option fits depends on how frequently the unit is rented and whether the owner uses it personally as well.
            </p>
            <p>
              Hurricane deductibles add another layer specific to barrier island properties. Florida homeowners and condo policies typically include a separate named storm deductible expressed as a percentage of the insured value — commonly 2% to 5%. On a Siesta Key condo unit with $300,000 in dwelling coverage, a 2% deductible means $6,000 comes out of your pocket before the policy responds. A 5% deductible is $15,000. That deductible applies per named storm event, not annually, so it&apos;s worth knowing the dollar amount — not just the percentage — before assuming you&apos;re covered. Our guide explains <Link href="/insights/florida-hurricane-deductible" className="text-sage-700 underline hover:text-sage-800">how the annual deductible rule applies</Link> when multiple storms hit in the same season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageLinksSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Coverage We Offer Siesta Key Residents
          </h2>
          <p className="text-navy-200 font-body text-base leading-relaxed">
            Each coverage type below links to detailed information. Select any that apply to your situation.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 gap-4">
          {coverageLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sage-400/40 transition-colors animate-on-scroll"
              >
                <p className="font-display text-lg font-bold text-white group-hover:text-sage-300 transition-colors mb-2">
                  {link.label} →
                </p>
                <p className="text-navy-300 font-body text-sm leading-relaxed">{link.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-navy-600 font-body text-base">
            Questions specific to insurance on Siesta Key — answered directly.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="bg-white border border-navy-100 rounded-xl p-6 animate-on-scroll">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left font-display text-lg font-bold text-navy-800 pr-8 relative"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className={`absolute right-0 top-1 text-sage-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
                  <p className="text-navy-600 font-body text-base leading-relaxed">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NearbyAreasSection() {
  const nearby = [
    {
      href: "/insurance-palmer-ranch-fl",
      name: "Palmer Ranch",
      sentence: "Just north along the Tamiami Trail, we help Palmer Ranch residents navigate HOA insurance requirements and newer construction coverage.",
    },
  ];
  return (
    <section className="bg-cream py-16 md:py-20" aria-labelledby="nearby-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="nearby-heading" className="font-display text-2xl md:text-3xl font-bold text-navy-800 mb-6 leading-tight">
            Nearby Areas We Serve
          </h2>
          <ul className="space-y-4">
            {nearby.map((area) => (
              <li key={area.href} className="flex gap-3 items-start">
                <Link href={area.href} className="font-semibold text-sage-700 hover:text-sage-900 transition-colors whitespace-nowrap font-body">{area.name} →</Link>
                <p className="text-navy-600 font-body text-base leading-relaxed">{area.sentence}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              Get Coverage Built for Siesta Key
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Whether you own a condo, a vacation rental, or a primary residence on the island, reach out and I&apos;ll review your coverage situation — flood zones, HO-6 gaps, and all of it. Same-day response.
            </p>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">📞</div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Call Cody</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Email ${EMAIL}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">✉️</div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Email</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors break-all">{EMAIL}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-2">
            <HighLevelForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SiestaKeyPageClient() {
  useScrollReveal();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <CondoSection />
        <FloodSection />
        <RentalSection />
        <CoverageLinksSection />
        <FAQSection />
        <NearbyAreasSection />
        <ContactSection />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
