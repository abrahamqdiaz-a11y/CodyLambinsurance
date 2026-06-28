"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "contact@lambinsuranceagency.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const condoCoverageItems = [
  {
    title: "Interior Structure",
    text: "Walls, flooring, ceilings, and fixtures not covered by the master policy. Under a bare walls policy, this is extensive.",
  },
  {
    title: "Personal Property",
    text: "Furniture, electronics, clothing, appliances, jewelry. Coverage limits should reflect actual replacement cost, not what you paid years ago.",
  },
  {
    title: "Loss Assessment Coverage",
    text: "Your share of association-level assessments after a covered loss. Florida law sets the statutory minimum at $2,000 — in today's Sarasota market, that number is effectively meaningless. We'll review your specific building when setting this limit.",
  },
  {
    title: "Personal Liability",
    text: "If a guest is injured in your unit, or you cause damage to a neighboring unit — an overflowing bathtub, for example — personal liability coverage responds. The master policy does not.",
  },
  {
    title: "Additional Living Expenses",
    text: "If your unit becomes uninhabitable after a covered loss, this covers temporary housing, meals, and related costs while repairs are made.",
  },
  {
    title: "Water Damage from Interior Sources",
    text: "Plumbing failures, appliance leaks, and HVAC issues are among the most common condo claims. Coverage terms vary significantly between carriers.",
  },
  {
    title: "Improvements and Upgrades",
    text: "If you renovated your kitchen, updated the flooring, or added custom finishes, those improvements are not covered by the original unit valuation under most master policies.",
  },
];

const faqItems: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Is condo insurance required in Florida?",
    answer:
      "No Florida law requires you to carry an HO-6 policy. However, if you have a mortgage, your lender will almost always require it. Even with no mortgage, going without leaves your interior, belongings, and liability completely exposed, since the association's master policy doesn't cover them.",
  },
  {
    question: "What does an HO-6 policy cover that the association's master policy doesn't?",
    answer:
      "Your HO-6 covers the interior of your unit (to the extent the master policy doesn't), your personal belongings, your personal liability, additional living expenses if your unit becomes uninhabitable, and your share of association assessments after a covered loss. The master policy generally covers only the building structure and common areas.",
  },
  {
    question: "How much loss assessment coverage do I need in Sarasota?",
    answer:
      "The legal minimum under Florida Statute § 627.714 is $2,000, but that's rarely enough given recent structural assessments running into five and six figures. Most Sarasota condo owners should consider $25,000 to $50,000. The added premium is usually under $50 a year.",
  },
  {
    question: "Does condo insurance cover flood damage?",
    answer: (
      <>
        No. Standard HO-6 policies exclude flooding from external sources like storm surge and rising water. If your unit is on a lower floor, in a flood zone, or in a coastal area like Siesta Key or Lido Key, you need a separate flood policy through the{" "}
        <a
          href="https://www.floodsmart.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage-700 underline hover:text-sage-800"
        >
          NFIP
        </a>{" "}
        or a private flood insurer.
      </>
    ),
  },
  {
    question: "How much does condo insurance cost in Sarasota?",
    answer:
      "Most owners pay roughly $950 to $2,000 a year, depending on building location, walls-in coverage limit, hurricane deductible, and whether the unit is owner-occupied or rented. We provide same-day quotes specific to your building.",
  },
  {
    question: "Should I get actual cash value or replacement cost coverage?",
    answer:
      "Replacement cost is almost always the better choice. It pays what it costs to replace damaged property today, while actual cash value pays a depreciated amount. On a significant loss, the difference can be thousands of dollars.",
  },
];

function CostSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="cost-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="cost-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            How Much Does Condo Insurance Cost in Sarasota?
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Most Sarasota condo owners pay between $80 and $170 per month — roughly $950 to $2,000 a year — for an HO-6 condo policy. Florida is the most expensive state in the country for condo insurance, with statewide averages running from about $962 to over $1,400 per year, more than double the national average of around $815.
            </p>
            <p>Where you land in that range depends on a handful of factors specific to your unit:</p>
          </div>
          <ul className="mt-6 space-y-3">
            {[
              { label: "Walls-in (Coverage A) limit", text: "Most Sarasota condos need between $75,000 and $250,000 to rebuild the interior, depending on size and finish level. Renovated or waterfront units run higher." },
              { label: "Building location and age", text: "A Siesta Key barrier-island unit and a Lakewood Ranch garden condo are priced very differently." },
              { label: "Hurricane deductible", text: "Most Florida HO-6 policies carry a 2% hurricane deductible. Choosing 5% lowers your premium but raises out-of-pocket cost if a named storm hits." },
              { label: "Loss assessment limit", text: "The amount you choose here barely moves your premium but dramatically changes your exposure." },
              { label: "Owner-occupied vs. rental", text: "Owner-occupied units price better. Rentals need different coverage." },
            ].map((item) => (
              <li key={item.label} className="flex gap-3 text-navy-600 font-body text-base leading-relaxed">
                <span className="mt-1 w-2 h-2 rounded-full bg-sage-400 flex-shrink-0" aria-hidden="true" />
                <span><strong className="text-navy-800">{item.label}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-navy-600 font-body text-base leading-relaxed">
            No online estimate replaces a real quote, because two units in the same building can need very different limits based on what&apos;s been renovated inside. We provide same-day quotes and review your specific building at no cost.
          </p>
          <div className="mt-8">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base inline-block">
              Get Your Same-Day Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              Same-Day Quotes · English & Spanish · Local Agency
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Condo Insurance in Sarasota, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-4 font-body max-w-3xl">
            Your condo association has insurance. It doesn&apos;t cover you.
          </p>

          <p className="text-navy-300 text-base leading-relaxed mb-10 font-body max-w-3xl">
            The building is insured. Your unit interior, your belongings, your personal liability, and your share of any special assessment after a covered loss? That&apos;s on you. Most Sarasota condo owners discover this gap at the worst possible time — after a water leak, a hurricane, or a special assessment notice arrives in the mail.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get a Free Quote
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Trust indicators">
            {["Local Sarasota Agency", "Bilingual Service", "Same-Day Quotes", "Master Policy Reviews"].map((item) => (
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

function CoverageGapSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="gap-heading">
      <div className="max-w-6xl mx-auto px-5 space-y-16">
        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 id="gap-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            The Coverage Gap Most Sarasota Condo Owners Don&apos;t Know They Have
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Your condo association pays premiums on a master insurance policy every year. That policy protects the building structure and common areas. What it covers inside your individual unit depends entirely on which type of master policy your association carries — and most condo owners have never read it.
            </p>
            <p>There are three types:</p>
          </div>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Bare Walls In",
                text: "The most common type in Sarasota. The association's policy covers the structure only — exterior walls, roof, common areas. Everything inside your unit is your responsibility. Flooring, cabinets, countertops, fixtures, appliances, and all personal property. If a pipe bursts in the wall and damages your kitchen, the association covers the pipe. You cover everything else.",
              },
              {
                title: "Single Entity",
                text: "The association covers original built-in fixtures as they were when the building was constructed. Any improvements, upgrades, or renovations you've made are not covered. Neither is your personal property.",
              },
              {
                title: "All In",
                text: "The most comprehensive master policy type. Covers most of the unit interior as originally built. Your HO-6 policy primarily fills the gap for personal property, improvements, and personal liability.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-white border border-navy-100 rounded-2xl p-6">
                <h3 className="font-display text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
                <p className="text-navy-600 font-body text-base leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-navy-600 font-body text-base leading-relaxed">
            Do you know which type your association carries? Most Sarasota condo owners find out when they file a claim. We review your association&apos;s master policy as part of every condo insurance assessment — at no cost.
          </p>
        </div>
      </div>
    </section>
  );
}

function SB4DSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="sb4d-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="sb4d-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Florida&apos;s Condo Laws Changed. Your Coverage May Not Have Kept Up.
          </h2>
          <div className="space-y-5 text-navy-200 font-body text-base leading-relaxed">
            <p>
              Florida Senate Bill 4-D became law in May 2022, fundamentally changing the financial obligations of condo associations across the state. The law followed the 2021 Surfside collapse and has since been amended three times — by SB 154 (2023), HB 1021 (2024), and HB 913 (2025) — so the rules in effect today are not the rules as originally written.
            </p>
            <p>
              Associations with buildings three habitable stories or higher must now complete a{" "}
              <a
                href="https://condos.myfloridalicense.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-300 underline hover:text-sage-200"
              >
                structural integrity reserve study (SIRS)
              </a>{" "}
              and maintain fully funded reserves for critical components: roof, load-bearing walls, fire protection, plumbing, electrical, waterproofing, windows, and exterior doors. The initial SIRS deadline was originally December 31, 2024, but HB 913 extended it to December 31, 2025. Reserves for these structural items can no longer be waived.
            </p>
            <p>
              For many Sarasota condo communities, this has meant significant reserve shortfalls and resulting special assessments — with the bulk of those notices materializing across 2024 and 2025. Owners in some buildings have received assessments for tens of thousands of dollars, occasionally six figures, sometimes with limited notice.
            </p>
            <p>Here&apos;s where your HO-6 comes in.</p>
            <p>
              Loss assessment coverage responds when you&apos;re responsible for a share of an association assessment following a covered loss. Under{" "}
              <a
                href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0600-0699/0627/Sections/0627.714.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-300 underline hover:text-sage-200"
              >
                Florida Statute § 627.714
              </a>
              , every residential condo unit policy must include at least $2,000 of loss assessment coverage — and that statute caps the deductible on it at $250. Many basic HO-6 policies are written at exactly that $2,000 floor. In today&apos;s Sarasota market, where structural assessments routinely run into five and six figures, the minimum is effectively meaningless.
            </p>
            <p>
              The good news: raising this limit is cheap. Moving from $2,000 to $25,000 or $50,000 of loss assessment coverage typically adds well under $50 a year on most carriers. It&apos;s one of the most cost-effective coverage decisions a Florida condo owner can make.
            </p>
            <p>
              If you own a condo in Sarasota and haven&apos;t reviewed your policy in the last two years, there&apos;s a real chance your loss assessment coverage doesn&apos;t reflect what assessments actually look like in your community now.
            </p>
            <p className="text-sage-300 font-medium">
              We review this as part of every condo insurance conversation — no obligation, no pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SarasotaMarketSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="market-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="market-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            What Sarasota&apos;s Condo Market Looks Like From an Insurance Perspective
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
            Sarasota has one of the most diverse condo markets in Florida. The insurance considerations vary significantly depending on where and what you own.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Downtown and Gulf Gate high-rises",
                text: "Older buildings face elevated insurance costs due to age, building systems, and the increased scrutiny that followed Florida's legislative changes. Master policy premiums in many of these communities have increased substantially, and those increases pass through to owners.",
              },
              {
                title: "Lakewood Ranch and inland communities",
                text: "Generally lower flood risk, but special assessment exposure from aging infrastructure and reserve funding gaps is just as relevant here.",
              },
              {
                title: "Golf course and resort communities",
                text: "Often have unique association structures, amenity coverage considerations, and seasonal residency patterns that affect policy needs.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll">
                <h3 className="font-display text-lg font-bold text-navy-800 mb-3">{item.title}</h3>
                <p className="text-navy-600 font-body text-base leading-relaxed">{item.text}</p>
              </article>
            ))}
            <article className="bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll">
              <h3 className="font-display text-lg font-bold text-navy-800 mb-3">Siesta Key and barrier island properties</h3>
              <p className="text-navy-600 font-body text-base leading-relaxed">
                Flood zone exposure is a real factor. Many units in beachfront and near-beach communities sit in FEMA-designated flood zones, which affects both what the master policy covers and what your personal policy needs to address. Flood insurance for your condo contents and interior is a{" "}
                <Link href="/flood-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">
                  separate policy
                </Link>{" "}
                — and a conversation worth having.
              </p>
            </article>
          </div>
          <p className="mt-8 text-navy-600 font-body text-base leading-relaxed">
            Every building is different. Every master policy is different. The right HO-6 for a downtown Sarasota high-rise looks nothing like the right policy for a Siesta Key ground-floor unit.
          </p>
          <p className="mt-4 text-navy-600 font-body text-base leading-relaxed">
            Ask about <Link href="/flood-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">flood insurance options</Link> or <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">bundling your condo and auto coverage</Link> when you request a quote.
          </p>
        </div>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            What Your HO-6 Policy Needs to Cover
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {condoCoverageItems.map((item, index) => (
            <article key={item.title} className={`bg-white/5 border border-white/10 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 4)}`}>
              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-navy-200 font-body text-base leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenariosSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="scenarios-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="scenarios-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            The Real Cost of Being Underinsured
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Scenario One",
              text: "A pipe behind your bathroom wall fails. The association covers the pipe repair. Water damaged your floors, cabinets, vanity, and personal property. Without an HO-6, those costs are yours entirely.",
            },
            {
              label: "Scenario Two",
              text: "Your building's reserve fund is underfunded. The association issues a special assessment of $18,000 per unit to fund a required structural repair. Your loss assessment coverage limit is $2,000. You write a check for $16,000.",
            },
            {
              label: "Scenario Three",
              text: "A visitor trips and injures themselves in your unit. The association's master policy doesn't cover what happens inside your unit. Without personal liability coverage in your HO-6, legal costs and damages come out of pocket.",
            },
          ].map((item) => (
            <article key={item.label} className="bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll">
              <p className="text-xs font-body uppercase tracking-widest text-sage-700 mb-3">{item.label}</p>
              <p className="text-navy-600 font-body text-base leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-navy-600 font-body text-base leading-relaxed max-w-3xl animate-on-scroll">
          None of these are rare events. All of them are preventable with the right policy in place.
        </p>
      </div>
    </section>
  );
}

function MistakesSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="mistakes-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="mistakes-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Mistakes Sarasota Condo Owners Make
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Assuming the association's policy covers them",
              text: "The most common — and most costly — misunderstanding in condo insurance. The master policy covers the building. It does not cover you.",
            },
            {
              title: "Carrying default loss assessment limits",
              text: "Florida law sets the statutory minimum at $2,000. Many basic HO-6 policies are written at exactly that floor. In today's market, with large-scale structural assessments becoming more common, it's inadequate by an order of magnitude.",
            },
            {
              title: "Not accounting for improvements",
              text: "If your unit has been renovated — upgraded flooring, new kitchen, custom tile — those improvements won't be covered at their current value unless your policy specifically accounts for them.",
            },
            {
              title: "Choosing actual cash value over replacement cost",
              text: "Actual cash value policies pay depreciated value. Replacement cost policies pay what it actually costs to replace them today. The difference on a full-unit water loss can be substantial.",
            },
            {
              title: "Skipping flood insurance on barrier island and coastal units",
              text: "Standard HO-6 policies don't cover rising water from external sources. For Siesta Key, Lido Key, and other coastal locations, this is not an optional conversation.",
            },
            {
              title: "Not reviewing after Florida's legislative changes",
              text: "SB 4-D changed the financial landscape for condo associations statewide. Policies written before the wave of special assessments in late 2024–2025 were underwritten in a different environment. If yours hasn't been reviewed, it should be.",
            },
          ].map((item) => (
            <article key={item.title} className="bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll">
              <h3 className="font-display text-lg font-bold text-navy-800 mb-3">{item.title}</h3>
              <p className="text-navy-600 font-body text-base leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeHelpSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="who-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="who-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Who We Help
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            { label: "Full-time Sarasota residents", text: "Primary residence coverage with liability, personal property, and loss assessment limits appropriate for full-time occupancy." },
            { label: "Seasonal residents", text: "Policies for owners who split time between Sarasota and another state. Vacancy periods affect coverage terms — this matters and is often overlooked." },
            { label: "Investors and rental owners", text: "Units rented out require different coverage than owner-occupied units. Standard HO-6 policies often exclude rental activity." },
            { label: "Recent buyers", text: "New condo owners frequently receive a policy requirement from their lender without understanding what they're buying. We explain it." },
            { label: "Owners reviewing after an assessment notice", text: "If you've recently received a special assessment and want to understand your coverage options going forward, we can help." },
          ].map((item) => (
            <li key={item.label} className="bg-white border border-navy-100 rounded-xl p-5 animate-on-scroll">
              <p className="font-display font-bold text-navy-800 mb-1">{item.label}</p>
              <p className="text-navy-600 font-body text-sm leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-navy-600 font-body text-base leading-relaxed max-w-3xl animate-on-scroll">
          Serving: Downtown Sarasota · Siesta Key · Lido Key · Longboat Key · Gulf Gate · Palmer Ranch · Lakewood Ranch · Fruitville · Osprey · Nokomis · Venice · Bradenton
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
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
                  <span className={`absolute right-0 top-1 text-sage-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
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

function ContactForm() {
  return (
    <section id="contact" className="bg-warm py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              Get Your Sarasota Condo Insurance Quote
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Whether you&apos;re a new buyer, a longtime owner who hasn&apos;t reviewed your policy since before Florida&apos;s legislative changes, a seasonal resident, or someone who just received a special assessment notice — we&apos;ll give you a clear picture of where you stand and what it costs to be properly covered.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                  📞
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Call Now</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Email ${EMAIL}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                  ✉️
                </div>
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

export default function CondoPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <CostSection />
        <CoverageGapSection />
        <SB4DSection />
        <SarasotaMarketSection />
        <CoverageSection />
        <ScenariosSection />
        <MistakesSection />
        <WhoWeHelpSection />
        <FAQSection />
        <ContactForm />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
