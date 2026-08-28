"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "../../components/ServicePageChrome";
import HighLevelForm from "../../components/HighLevelForm";

const EMAIL = "contact@lambinsuranceagency.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const coverageLinks = [
  {
    label: "Homeowners Insurance",
    href: "/homeowners-insurance-sarasota-fl",
    description: "HO-3 and HO-6 policies with replacement cost accuracy for Palmer Ranch's newer construction.",
  },
  {
    label: "Condo Insurance",
    href: "/condo-insurance-sarasota-fl",
    description: "HO-6 coverage for villa and condo unit owners — filling gaps left by HOA master policies.",
  },
  {
    label: "Flood Insurance",
    href: "/flood-insurance-sarasota-fl",
    description: "Separate NFIP or private flood coverage — excluded from every standard homeowners policy.",
  },
  {
    label: "Auto Insurance",
    href: "/auto-insurance-sarasota-fl",
    description: "Florida auto coverage for Palmer Ranch commuters, retirees, and out-of-state transplants.",
  },
  {
    label: "Umbrella Insurance",
    href: "/umbrella-insurance-sarasota",
    description: "Excess liability protection above your home and auto limits — worth considering as home values rise.",
  },
];

const faqItems = [
  {
    question: "Does my HOA master policy cover my villa or condo unit?",
    answer:
      "The association's master policy covers the shared building structure and common areas. It does not cover your unit's interior finishes, personal property, or personal liability. An HO-6 fills those gaps and is typically required by the association documents as a condition of ownership. Some associations specify minimum liability limits — usually $100,000 or $300,000 — so check your governing docs before choosing coverage.",
  },
  {
    question: "Do newer Palmer Ranch homes need flood insurance?",
    answer:
      "It depends on your specific parcel. Parts of Palmer Ranch fall within FEMA flood zones, particularly near retention ponds and drainage corridors that run toward Sarasota Bay. Standard homeowners policies exclude flooding regardless of your zone. Even in low-to-moderate risk zones, flood events happen and the premium for an X-zone property is often under $1,000 per year. A quick FEMA address lookup will tell you your zone.",
  },
  {
    question: "Are newer construction homes easier to insure in Florida?",
    answer:
      "Generally yes. Homes built after 2001 were constructed to Florida's updated building code, which incorporated stronger wind resistance requirements following Hurricane Andrew. This often means lower windstorm premiums, easier underwriting, and fewer exclusions than older construction. That said, roof age, construction type, and proximity to water all still factor into pricing even on newer builds.",
  },
  {
    question: "What coverage do I need before closing on a Palmer Ranch home?",
    answer:
      "Your lender will require proof of homeowners insurance — typically a binder — before the closing date. If the property has a federally-backed mortgage and sits in a Special Flood Hazard Area, flood insurance will also be required at closing. Many HOAs require proof of your individual policy as well. Call us ahead of your closing date. Same-day binders are standard.",
  },
  {
    question: "Do I need windstorm coverage separately from my homeowners policy?",
    answer:
      "Sometimes. Many Florida homeowners policies either exclude windstorm damage or include it with a separate hurricane deductible — usually 2% to 5% of your dwelling coverage amount, not a flat dollar deductible. On a $400,000 home, a 2% hurricane deductible means the first $8,000 of storm damage comes out of pocket. Understanding what your policy actually does with wind and hail before a storm is one of the most important conversations we have with new clients.",
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
              Local Agency · Same-Day Quotes · Free Advice
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Home and Condo Insurance in Palmer Ranch, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Palmer Ranch covers a lot of ground on the south side of Sarasota -- master-planned neighborhoods, HOA communities, villas, condos, and single-family homes along the Legacy Trail corridor. The coverage questions here center on HOA insurance gaps, newer construction advantages, and making sure your policy actually covers the things that matter in a Florida storm season.
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
            {["HOA Coverage Gaps", "Newer Construction", "Villas and Condos", "Same-Day Binders"].map((item) => (
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

function HOASection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="hoa-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="hoa-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            HOA Master Policies and What They Leave Out
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Palmer Ranch is dominated by HOA communities -- Prestancia, The Vineyards, Deer Creek, Turtle Rock, VillageWalk, and dozens of others. Each association carries a master policy that covers common areas and shared building structures. That policy protects the association. It does not protect you.
            </p>
            <p>
              Your individual HO-3 or HO-6 covers the inside of your home: interior finishes, personal belongings, and your personal liability if someone gets hurt on your property. In communities like Prestancia or Turtle Rock where you own a villa or attached unit, the line between what the master policy covers and what your personal policy covers isn't always obvious from the governing documents. That's worth sorting out before you need it.
            </p>
            <p>
              Most Palmer Ranch associations require you to carry your own policy as a condition of ownership, often with a minimum liability limit of $100,000 to $300,000. If you're buying here, get the association's insurance requirements from the HOA documents before closing so there are no surprises at the table.
            </p>
            <p>
              Loss assessment coverage is one rider worth paying attention to specifically. If the association suffers a loss that exceeds its master policy limits -- say, storm damage to shared amenities -- it can assess individual unit owners for the shortfall. A loss assessment endorsement on your HO-6 can cover your share of that assessment, typically up to $10,000 or $25,000 depending on how it's written.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewConstructionSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="newconstruction-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="newconstruction-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Newer Construction and Florida Underwriting
          </h2>
          <div className="space-y-4 text-navy-200 font-body text-base leading-relaxed">
            <p>
              Most Palmer Ranch construction dates to the 1990s and later, which works in your favor with Florida carriers. Homes built after 2001 were constructed under Florida's updated building code -- code that specifically addressed wind resistance following Hurricane Andrew in 1992. Concrete block construction, hip roofs, and impact-resistant windows all contribute to lower windstorm premiums and easier underwriting than you'd see on an older home in a place like Bradenton's historic core.
            </p>
            <p>
              A wind mitigation inspection formalizes what your home is already built with. An inspector documents your roof shape, roof deck attachment, roof covering, opening protection, and how the roof connects to the walls. Carriers use this report to calculate discounts that can meaningfully reduce your annual premium -- sometimes by hundreds of dollars per year. If you bought a Palmer Ranch home and haven't had a wind mitigation done, it's worth the cost of the inspection. Palmer Ranch policies typically carry a percentage named storm deductible -- usually 2% to 5% of your dwelling limit -- rather than a flat dollar amount; our guide explains <Link href="/insights/florida-hurricane-deductible" className="text-sage-300 underline hover:text-sage-200">how the annual credit rule works</Link> when multiple storms occur in the same season.
            </p>
            <p>
              Roof age still matters even on newer construction. Florida carriers are increasingly strict about roofs over 15 to 20 years old, regardless of the home's overall age. If your Palmer Ranch home has a tile roof from 1998, it's the roof age that will drive underwriting decisions at renewal -- not the home's construction year. Knowing where your roof stands before your renewal can help avoid a coverage gap or a sudden premium increase.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: "Post-2001 Construction", desc: "Updated wind code advantages for underwriting" },
                { label: "Wind Mitigation Discounts", desc: "Inspector documents your home's storm resistance" },
                { label: "Roof Age Tracking", desc: "Know where you stand before renewal surprises you" },
              ].map((item) => (
                <div key={item.label} className="bg-white/8 border border-white/12 rounded-xl p-5">
                  <p className="font-display text-sm font-bold text-white mb-1">{item.label}</p>
                  <p className="font-body text-xs text-navy-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloodSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="flood-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="flood-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Flood Risk in Palmer Ranch
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Palmer Ranch isn't a coastal barrier island, but it's not flood-free either. The community sits between Sarasota Bay to the north and the Intracoastal Waterway corridor to the west, with retention ponds and drainage channels throughout the development. Parts of the area fall within FEMA AE flood zones -- meaning there's a federally-mapped significant flood risk -- particularly in lower-lying sections near the Legacy Trail and drainage outflows.
            </p>
            <p>
              Standard homeowners policies exclude flooding. That applies universally -- no homeowners or HO-6 policy in the country covers flood damage under its standard terms. If you're in an AE zone with a federally-backed mortgage, flood insurance is required. If you're in a low-to-moderate risk zone, it's optional but still worth pricing out. The NFIP premium on a low-risk property is often under $1,000 per year, which is a reasonable trade-off given that roughly a third of NFIP claims come from outside high-risk zones.
            </p>
            <p>
              Private flood insurance is also an option. Private carriers often offer higher limits and faster claims service than the NFIP, and in some cases lower premiums for properties that have been recently re-rated under FEMA's Risk Rating 2.0 system. It's worth looking at both when you're pricing flood coverage for a Palmer Ranch property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageLinksSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Coverage We Offer Palmer Ranch Residents
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Select any coverage type to learn more about what we offer.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 gap-4">
          {coverageLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group block bg-white border border-navy-100 rounded-2xl p-6 hover:border-sage-300 transition-colors animate-on-scroll"
              >
                <p className="font-display text-lg font-bold text-navy-800 group-hover:text-sage-700 transition-colors mb-2">
                  {link.label} →
                </p>
                <p className="text-navy-500 font-body text-sm leading-relaxed">{link.description}</p>
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
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-navy-300 font-body text-base">
            Insurance questions specific to Palmer Ranch -- answered directly.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="bg-white/5 border border-white/10 rounded-xl p-6 animate-on-scroll">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left font-display text-lg font-bold text-white pr-8 relative"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className={`absolute right-0 top-1 text-sage-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
                  <p className="text-navy-200 font-body text-base leading-relaxed">{item.answer}</p>
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
  return (
    <section className="bg-warm py-16 md:py-20" aria-labelledby="nearby-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="nearby-heading" className="font-display text-2xl md:text-3xl font-bold text-navy-800 mb-4 leading-tight">
            Nearby Areas We Serve
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed mb-6">
            We cover all of Sarasota County and the surrounding area. If you're near Palmer Ranch, we likely serve your neighborhood too.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/insurance-venice-fl"
              className="group block bg-white border border-navy-100 rounded-xl p-5 hover:border-sage-300 transition-colors"
            >
              <p className="font-display text-base font-bold text-navy-800 group-hover:text-sage-700 transition-colors mb-1">
                Venice, FL →
              </p>
              <p className="text-navy-500 font-body text-sm leading-relaxed">
                Just south on US-41. Home, flood, and auto insurance for Venice Island and the surrounding area.
              </p>
            </Link>
            <Link
              href="/insurance-siesta-key-fl"
              className="group block bg-white border border-navy-100 rounded-xl p-5 hover:border-sage-300 transition-colors"
            >
              <p className="font-display text-base font-bold text-navy-800 group-hover:text-sage-700 transition-colors mb-1">
                Siesta Key, FL →
              </p>
              <p className="text-navy-500 font-body text-sm leading-relaxed">
                Nearby to the west. HO-6 condo insurance, VE and AE flood zone coverage, and short-term rental protection.
              </p>
            </Link>
          </div>
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
              Get a Quote for Palmer Ranch
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Call us or fill out the form and we'll get back to you the same day.
            </p>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">📞</div>
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

export default function PalmerRanchPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <HOASection />
        <NewConstructionSection />
        <FloodSection />
        <CoverageLinksSection />
        <FAQSection />
        <NearbyAreasSection />
        <ContactSection />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
