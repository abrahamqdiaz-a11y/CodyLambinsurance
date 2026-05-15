"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const coverageLinks = [
  {
    label: "Homeowners Insurance",
    href: "/homeowners-insurance-sarasota-fl",
    description: "Dwelling, contents, and liability coverage — with carrier options that work for older Venice homes.",
  },
  {
    label: "Flood Insurance",
    href: "/flood-insurance-sarasota-fl",
    description: "Separate NFIP or private flood policy for properties in or near AE and VE zones.",
  },
  {
    label: "Auto Insurance",
    href: "/auto-insurance-sarasota-fl",
    description: "Coverage for Venice residents, including low-mileage and seasonal storage options.",
  },
  {
    label: "Boat & Watercraft",
    href: "/boat-insurance-sarasota-fl",
    description: "Physical damage and on-water liability for vessels using the Venice Inlet and ICW.",
  },
  {
    label: "Life Insurance",
    href: "/life-insurance-sarasota-fl",
    description: "Term, whole life, and final expense options for retirees and fixed-income households.",
  },
  {
    label: "Renters Insurance",
    href: "/renters-insurance-sarasota-fl",
    description: "Personal property and liability coverage for Venice tenants and seasonal renters.",
  },
];

const faqItems = [
  {
    question: "My home was built in 1978 — can I still get homeowners insurance in Florida?",
    answer:
      "Yes, but the carrier options narrow as a home ages. A 4-point inspection will likely be required before any new policy is issued, and the results — particularly roof age and electrical condition — determine which carriers will write it and at what premium. The good news is that an independent agent can shop across multiple companies rather than stopping at the first declination. We work with carriers experienced in Venice's older housing stock.",
  },
  {
    question: "What does a 4-point inspection cover and do I need one?",
    answer:
      "A 4-point inspection evaluates four systems: roof, electrical panel, plumbing, and HVAC. Florida insurers require it on homes roughly 25 years or older before issuing a new policy. Inspectors flag issues like roof age over 15 years, knob-and-tube or older aluminum wiring, galvanized pipes, or aging HVAC units. A failed component doesn't always mean no coverage — it means you need a carrier willing to write the property as-is, or you need to address the flagged item first.",
  },
  {
    question: "I only live in Venice from November to April — is my home covered while I'm gone?",
    answer:
      "Not automatically. Most standard homeowners policies include a vacancy clause that limits or voids certain claims if the home is unoccupied for 30 to 60 consecutive days. For Venice's snowbird population, that's a real exposure. Solutions include a vacancy endorsement, a seasonal home policy, or switching to a carrier that specifically writes seasonal/secondary residences without those restrictions. We can identify which option fits your coverage pattern.",
  },
  {
    question: "Is Venice Beach in a flood zone?",
    answer:
      "Parts of it are. The area around Venice Beach, the Inlet, and properties near Roberts Bay and the Intracoastal Waterway carry FEMA AE and VE zone designations, where flood insurance is required by most lenders and priced accordingly. Properties further inland may be in Zone X, where flood coverage is optional but still worth reviewing given Florida's storm history. A two-minute FEMA address lookup tells you your zone — we can walk you through it.",
  },
  {
    question: "What's the difference between Medicare Advantage and Medicare supplement?",
    answer:
      "Medicare Advantage (Part C) replaces original Medicare with a private plan — often an HMO or PPO — that may include dental and vision but comes with network restrictions. Medicare supplement (Medigap) works alongside original Medicare to cover out-of-pocket costs like deductibles and coinsurance, with no network restrictions. Medigap typically carries a higher monthly premium but more predictable out-of-pocket costs. Which is better depends on your health, how often you travel, and your financial priorities. An independent agent can compare both across carriers.",
  },
  {
    question: "Can I drop to comprehensive-only on a car I'm leaving in storage?",
    answer:
      "Yes, and it's usually the right move. If a vehicle is in storage and not being driven, dropping liability and collision and keeping only comprehensive coverage eliminates most of the premium while still protecting against theft, fire, hurricane damage, or a tree falling on it. You'll want to notify your lender first if the car is financed — some require full coverage regardless. And make sure the policy reinstates automatically before you drive it again.",
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
            Insurance Agency Serving Venice, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Venice is one of the most established communities on Florida&apos;s Gulf Coast — and one where getting insurance right matters more than most people realize. Older homes, coastal exposure, and a large retiree population mean the coverage questions here are different from newer developments to the north. Lamb Insurance works with Venice residents to find policies that actually fit, not just ones that look good on paper.
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
            {["Older Home Expertise", "Bilingual Service", "Seasonal Coverage", "Same-Day Response"].map((item) => (
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

function FourPointSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="fourpoint-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="fourpoint-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Older Homes and the 4-Point Inspection Problem
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed mb-8">
            <p>
              Florida insurers require a 4-point inspection on homes older than roughly 25 years before issuing a new policy. The inspection covers four systems — roof, electrical panel, plumbing, and HVAC — and any one of them failing can result in a coverage denial or a substantially higher premium. Venice residents buying or refinancing an older home often encounter this for the first time at exactly the wrong moment.
            </p>
            <p>
              Roof age is the single biggest factor. Many carriers won&apos;t write a policy on a roof older than 15 years, and some set the threshold lower. Homes with knob-and-tube wiring, older aluminum branch wiring, or galvanized plumbing are also flagged. A flat roof adds another layer of scrutiny.
            </p>
            <p>
              The answer isn&apos;t to accept the first declination. An independent agent can shop across the carriers who specialize in older properties rather than the standard market — finding coverage that reflects the actual condition of the home, not just its age. We do that regularly for Venice residents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloodZoneSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="flood-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="flood-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Do You Know Your Flood Zone Status?
          </h2>
          <div className="space-y-4 text-navy-200 font-body text-base leading-relaxed">
            <p>
              Venice has a mix of X, AE, and VE flood zones — and the premium difference between them is significant. Properties near the Intracoastal, Roberts Bay, the Venice Inlet, or either beach access area are more likely to sit in a higher-risk zone. But Zone X properties can still flood during major storms; they just aren&apos;t required by lenders to carry coverage.
            </p>
            <p>
              Flood is not included in any standard homeowners policy. It&apos;s a separate policy through the National Flood Insurance Program (NFIP) or a private carrier, and it has a 30-day waiting period before it takes effect. A quick address lookup in FEMA&apos;s flood map takes two minutes, and we can walk any Venice resident through what their zone designation actually means for their coverage and their premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SnowbirdSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="snowbird-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="snowbird-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Snowbird and Seasonal Resident Coverage
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Standard homeowners policies typically include a vacancy clause: if the home is unoccupied for 30 to 60 consecutive days, certain claims may be denied. For Venice&apos;s large snowbird population — many of whom spend four to six months up north — that clause is a quiet exposure that most residents don&apos;t notice until they file a claim and find it rejected.
            </p>
            <p>
              There are endorsements and specialty carriers that write vacant and seasonal home policies correctly, without penalizing residents for a predictable absence. The same logic applies to vehicles left in storage: if a car isn&apos;t being driven, dropping to comprehensive-only coverage eliminates most of the premium while still protecting against theft, fire, or storm damage. We can structure both the home and vehicle coverage to match how you actually use them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Remove MedicareSection from the page export below if Cody is not licensed to sell Medicare supplement/Medigap
function MedicareSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="medicare-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="medicare-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Medicare Supplement Coverage
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Venice has one of the highest concentrations of Medicare-eligible residents in Sarasota County. Medigap plans — which work alongside original Medicare to cover deductibles, coinsurance, and other out-of-pocket gaps — vary significantly in premium, covered benefits, and carrier stability. The plan letter stays standardized by law, but the price for the same plan can differ hundreds of dollars per year between carriers.
            </p>
            <p>
              An independent agent can compare Medigap plans across multiple carriers rather than steering you toward one company&apos;s product. Plans also reprice at renewal, and switching windows exist — annual review is worth doing even if you&apos;re satisfied with your current coverage.
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
            Coverage We Offer Venice Residents
          </h2>
          <p className="text-navy-200 font-body text-base leading-relaxed">
            We work with multiple carriers to find the right fit for each situation. Select any coverage type to learn more.
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
            Questions specific to insurance in Venice, FL — answered directly.
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

function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              Get Coverage That Fits Venice
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Venice residents: get coverage that accounts for where and how you actually live. Call us or request a quote below — same-day response.
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

export default function VenicePageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <FourPointSection />
        <FloodZoneSection />
        <SnowbirdSection />
        <MedicareSection />
        <CoverageLinksSection />
        <FAQSection />
        <ContactSection />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
