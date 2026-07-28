"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "contact@lambinsuranceagency.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const coverageLinks = [
  {
    label: "Homeowners Insurance",
    href: "/homeowners-insurance-sarasota-fl",
    description: "Policies that work for Bradenton's older housing stock, including carriers who write 15-to-20-year roofs without automatic declination.",
  },
  {
    label: "Auto Insurance",
    href: "/auto-insurance-sarasota-fl",
    description: "Standard and non-standard auto coverage, including SR-22 filings for Manatee County drivers.",
  },
  {
    label: "Bundle Insurance",
    href: "/bundle-insurance-sarasota-fl",
    description: "Home and auto bundled discounts for commuter households balancing two vehicles and an older property.",
  },
  {
    label: "Flood Insurance",
    href: "/flood-insurance-sarasota-fl",
    description: "River and coastal flood coverage for Bradenton neighborhoods near the Manatee and Braden rivers.",
  },
  {
    label: "Commercial Insurance",
    href: "/commercial-insurance-sarasota-fl",
    description: "General liability and property coverage for Bradenton's retail, service, and contractor businesses.",
  },
  {
    label: "Umbrella Insurance",
    href: "/umbrella-insurance-sarasota",
    description: "Excess liability protection above your home and auto limits — important for Bradenton homeowners with older properties and real asset exposure.",
  },
  {
    label: "Life Insurance",
    href: "/life-insurance-sarasota-fl",
    description: "Term and permanent options for families and households at every income level.",
  },
];

const faqItems = [
  {
    question: "My Bradenton home has a 15-year-old roof. Can I still get homeowners insurance?",
    answer:
      "Yes, but your options narrow. Most carriers require a 4-point inspection on roofs past a certain age, and some set hard cutoffs at 15 years. That doesn't mean no coverage — it means you need a carrier whose underwriting appetite includes older roofs, and in some cases a wind mitigation inspection that demonstrates the roof was properly installed and has remaining useful life. I work with multiple carriers specifically because of situations like this.",
  },
  {
    question: "What is a 4-point inspection and do I need one in Bradenton?",
    answer:
      "A 4-point inspection evaluates four systems: roof, electrical panel, plumbing, and HVAC. Florida insurers require it on homes roughly 25 years or older before issuing a new policy. In Bradenton, where the housing stock skews older than in Lakewood Ranch or newer developments to the south, this is a common requirement. The inspection itself is relatively inexpensive — typically $100 to $150 — and knowing what it will show before you apply for coverage lets us get ahead of any issues.",
  },
  {
    question: "What are wind mitigation credits and how much can they save me?",
    answer:
      "Wind mitigation credits are premium discounts Florida insurers are required to offer based on features that reduce hurricane damage: roof shape, roof-to-wall connections, roof deck attachment, and opening protection. A hip roof performs better than a gable roof. Hurricane straps, properly rated sheathing, and impact-rated windows and doors each generate their own credits. On a Bradenton home, stacking two or three of these credits can reduce the wind portion of a premium by hundreds of dollars annually. A wind mitigation inspection costs $75 to $150 and the report is valid for five years.",
  },
  {
    question: "Is flood insurance necessary in Bradenton even if I'm not on the coast?",
    answer:
      "In parts of Bradenton, yes. The Manatee River and Braden River create riverine flood risk in neighborhoods that have nothing to do with Gulf proximity — areas around downtown Bradenton, Terra Ceia, and parts of East Bradenton have experienced significant flooding from rainfall and river overflow during tropical events, not just direct storm surge. Standard homeowners policies exclude flooding entirely. A FEMA address lookup takes two minutes and tells you your zone.",
  },
  {
    question: "I'm buying a home in Bradenton. What should I know about coverage before closing?",
    answer:
      "Order the 4-point inspection before closing, not after. If the report flags a roof or electrical issue, you want to negotiate repairs or credits while you still can. Also confirm your flood zone designation and get a flood insurance quote before assuming cost. If the home is in an AE zone, your lender will require flood coverage at closing, and force-placed coverage from the lender is significantly more expensive than what you could buy independently.",
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
              Local Agency · Older Home Expertise · Free Quotes
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Home and Auto Insurance in Bradenton, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Bradenton's older housing stock, river flood exposure, and commuter households create a set of insurance questions that generic policies rarely answer well. I work with Bradenton homeowners and drivers to find coverage that fits the actual property and the actual risk.
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
            {["Older Home Expertise", "4-Point Inspections", "River Flood Coverage", "Home + Auto Bundles"].map((item) => (
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

function OlderHomesSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="older-homes-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="older-homes-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Older Housing Stock: Roof Age, 4-Point Inspections, and Wind Mitigation
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Bradenton has a different character than Lakewood Ranch or the newer developments south of Sarasota. Established neighborhoods like Palma Sola, the Village of the Arts, and the blocks around downtown Bradenton have real history — and homes with real age. That age creates underwriting questions that newer construction doesn&apos;t face.
            </p>
            <p>
              Roof age is the first issue. Many carriers set hard cutoffs — 15 years, sometimes lower for flat roofs — before they&apos;ll write a new homeowners policy. A 4-point inspection is required on homes roughly 25 years or older, and the results drive carrier eligibility. Roofs with more than 15 years remaining life, properly functioning electrical panels, working HVAC, and sound plumbing can usually find coverage across multiple carriers. Roofs closer to or past their expected life narrow the field considerably.
            </p>
            <p>
              Wind mitigation credits are where Bradenton homeowners often leave money on the table. Florida insurers are required to offer discounts for features that reduce hurricane damage. Roof shape matters: a hip roof — sloped on all four sides — performs significantly better in wind than a gable roof, and that difference shows up in your premium. Roof-to-wall connections, specifically hurricane straps or clips rather than just toe-nailed boards, generate another credit. Properly rated roof deck attachment and opening protection (impact windows, hurricane-rated doors, reinforced garage doors) each add their own credits. A wind mitigation inspection typically costs $75 to $150. On an older Bradenton home with a hip roof and straps, stacking those credits can reduce the wind portion of a premium by $300 to $700 annually.
            </p>
            <p>
              If you&apos;re buying in downtown Bradenton, Palma Sola, or any older neighborhood and you haven&apos;t had a wind mitigation inspection, that&apos;s the first call to make — before you renew, not after. And if your carrier sends a roof age non-renewal, <Link href="/insights/florida-roof-age-non-renewal" className="text-sage-700 underline hover:text-sage-800">Florida&apos;s 15-year rule gives you the right to an inspection before you are required to replace anything</Link>.
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
            Manatee County Flood: River Flooding Is Different From Coastal Flooding
          </h2>
          <div className="space-y-4 text-navy-200 font-body text-base leading-relaxed">
            <p>
              When people think about flood risk in Florida, they usually picture storm surge from the Gulf. Bradenton has that exposure along Terra Ceia Bay and its coastal margins — but the more widespread flood issue in this area is riverine: the Manatee River and Braden River create flooding risk in neighborhoods well inland from the Gulf, and heavy rainfall during tropical systems has caused significant damage in areas that don&apos;t think of themselves as coastal at all.
            </p>
            <p>
              FEMA flood maps in Manatee County reflect this. Significant portions of Bradenton&apos;s older neighborhoods — particularly along lower elevations near both rivers, in parts of East Bradenton, and in some areas near US-41 and SR-64 — carry AE flood zone designations. That means lenders require flood insurance and premiums are set based on your elevation relative to the base flood elevation for your zone.
            </p>
            <p>
              Flood insurance is always a separate policy from homeowners insurance — it never comes bundled in. The National Flood Insurance Program is the most common product, but private flood carriers can sometimes offer broader coverage, higher limits, or lower premiums depending on the property&apos;s specific characteristics. For Bradenton homeowners in Zone X, optional flood coverage is worth pricing out. It&apos;s often less expensive than people expect, and Zone X properties aren&apos;t immune to flooding during significant rain events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutoBundleSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="auto-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="auto-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Home and Auto Together: Bradenton&apos;s Commuter Households
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Bradenton has a significant commuter population — people working in Sarasota, at the Sarasota Bradenton International Airport area, or in commercial corridors along US-41 and SR-64. Multi-car households are common, and the case for bundling home and auto coverage is real when both policies end up with the same carrier.
            </p>
            <p>
              For Bradenton homeowners, the bundle calculation depends on the home. Some carriers who offer strong auto rates in Manatee County have underwriting appetite for older properties that others don&apos;t — and the combined pricing can work well. Others price the home conservatively enough that separate carriers are the better outcome. It&apos;s worth comparing both ways rather than assuming the bundle is always the right answer.
            </p>
            <p>
              Bradenton is also one of the areas where SR-22 filings come up regularly. An SR-22 is a certificate your carrier files with the Florida DMV confirming you carry minimum required liability coverage — required after a DUI, serious traffic violation, license suspension, or coverage lapse. We work with carriers who write non-standard auto and handle SR-22 filings, and we can get the filing submitted quickly.
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
            Coverage We Offer Bradenton Residents
          </h2>
          <p className="text-navy-200 font-body text-base leading-relaxed">
            Each coverage type below links to more information. Select what applies to your situation.
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
            Questions specific to insurance in Bradenton, FL — answered directly.
          </p>
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
      href: "/insurance-lakewood-ranch-fl",
      name: "Lakewood Ranch",
      sentence: "East on SR-64 and into Manatee County, we also work with Lakewood Ranch homeowners navigating HOA closing deadlines and flood zone questions in newer construction communities.",
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
              Get a Quote Built for Bradenton
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Whether you have an older home, a river-adjacent flood zone question, or a two-car household looking to bundle — reach out and I&apos;ll walk through your situation. Same-day response.
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

export default function BradentonPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <OlderHomesSection />
        <FloodSection />
        <AutoBundleSection />
        <CoverageLinksSection />
        <FAQSection />
        <NearbyAreasSection />
        <ContactSection />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
