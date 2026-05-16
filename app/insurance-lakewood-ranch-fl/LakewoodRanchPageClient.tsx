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
    label: "Auto Insurance",
    href: "/auto-insurance-sarasota-fl",
    description: "Coverage review for new Florida residents, multi-car households, and out-of-state plate transfers.",
  },
  {
    label: "Bundle Insurance",
    href: "/bundle-insurance-sarasota-fl",
    description: "Home and auto bundling with HOA-compliant limits and replacement cost accuracy for LWR properties.",
  },
  {
    label: "Flood Insurance",
    href: "/flood-insurance-sarasota-fl",
    description: "Separate NFIP or private flood policy — not included in any standard homeowners coverage.",
  },
  {
    label: "Life Insurance",
    href: "/life-insurance-sarasota-fl",
    description: "Term and permanent options for LWR's mix of younger professionals and retirees.",
  },
  {
    label: "Condo Insurance",
    href: "/condo-insurance-sarasota-fl",
    description: "Personal property and liability coverage for residents in LWR apartment communities like Bungalows and Ottava.",
  },
];

const faqItems = [
  {
    question: "Do I need flood insurance in Lakewood Ranch?",
    answer:
      "Parts of Lakewood Ranch fall within FEMA-designated flood zones, and more properties than residents expect carry at least a moderate flood risk. Your lender may require flood coverage based on your specific parcel — but even without a lender requirement, standard homeowners policies exclude flooding entirely. A quick FEMA address lookup tells you your zone; we can walk you through what that means for your premium.",
  },
  {
    question: "Does my HOA insurance cover my personal belongings?",
    answer:
      "No. The HOA master policy covers common areas and shared amenities — sometimes building exteriors, depending on the association documents — but it does not cover the inside of your home, your furniture, electronics, or personal liability. That's what your individual homeowners or HO-6 policy is for. Most LWR neighborhood associations require you to carry your own policy regardless.",
  },
  {
    question: "I just moved from New Jersey — what do I need to change about my coverage?",
    answer:
      "Quite a bit. Florida operates differently than most northeastern states: windstorm coverage is often excluded from standard homeowners policies and requires a separate endorsement or Citizens policy; flood is always separate; and Florida's auto insurance requirements differ from New Jersey's no-fault structure. Your out-of-state plates also need to be transferred within 90 days of establishing Florida residency, which is a natural moment to re-shop your auto policy for Florida-specific discounts and requirements.",
  },
  {
    question: "How fast can I get proof of insurance for a closing?",
    answer:
      "Same day in most cases. Closing deadlines are one of the most common urgent requests we handle, and we've turned around binders on short notice for LWR buyers more than once. Call us directly with your closing date — we'll prioritize it.",
  },
  {
    question: "Is windstorm coverage included in Florida homeowners policies?",
    answer:
      "Not always. Many Florida carriers exclude windstorm or hurricane damage from their standard homeowners policy, particularly in coastal counties. Coverage may require a separate windstorm endorsement or a Citizens Insurance policy. This surprises most out-of-state buyers who assumed a homeowners policy covered storm damage. We'll make sure you know exactly what your policy does and doesn't cover before you close.",
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
            Insurance Agency Serving Lakewood Ranch, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Lakewood Ranch is one of the fastest-growing communities in Florida, and with that growth comes a lot of residents navigating insurance for the first time in a new state. Florida&apos;s coverage requirements — especially around flood, windstorm, and HOA liability — are different from what most newcomers are used to. Lamb Insurance works with LWR residents to make sure they&apos;re actually covered, not just technically insured.
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
            {["New Florida Residents", "HOA Closing Deadlines", "Multi-Car Households", "Same-Day Response"].map((item) => (
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

function NewToFloridaSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="newflorida-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="newflorida-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            New to Florida? Your Coverage Needs Just Changed
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Lakewood Ranch draws thousands of new residents each year, the majority from the Northeast and Midwest. Most arrive with policies that worked fine back home and don&apos;t realize until a claim — or a closing — that Florida operates by different rules.
            </p>
            <p>
              Windstorm and hurricane coverage is often excluded from standard Florida homeowners policies. Unlike a typical HO-3 in Ohio or Pennsylvania, your Florida policy may require a separate windstorm endorsement or a Citizens Insurance policy to cover storm damage. Flood is always separate, under any homeowners policy in any state — but it matters more here, where FEMA flood maps cover parts of Lakewood Ranch and tropical systems are an annual reality.
            </p>
            <p>
              On the auto side, Florida&apos;s requirements differ from most northern no-fault structures, and out-of-state plates must be transferred to Florida within 90 days of establishing residency. That deadline is a practical trigger for an auto policy review — new plates, new carrier comparison, potential savings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HOASection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="hoa-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="hoa-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            HOA Insurance Requirements in Lakewood Ranch
          </h2>
          <div className="space-y-4 text-navy-200 font-body text-base leading-relaxed">
            <p>
              Most Lakewood Ranch master association neighborhoods require proof of homeowners insurance — typically an HO-3 or HO-6 with a minimum of $300,000 in personal liability coverage — before or at closing. Residents getting this requirement sprung on them same-day at the closing table is more common than it should be.
            </p>
            <p>
              Lamb Insurance handles closing-deadline requests regularly. If you&apos;re approaching a closing date and need a binder or proof of coverage fast, call us directly. Same-day turnaround is the standard, not the exception.
            </p>
            <p>
              Beyond the HOA minimum, it&apos;s worth making sure your dwelling coverage actually reflects what it would cost to rebuild at today&apos;s construction prices — new homes in LWR frequently carry replacement costs that a policy written at purchase price underestimates, especially after several years of inflation in materials and labor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageLinksSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Coverage We Offer LWR Residents
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            We work with multiple carriers to find the right fit. Select any coverage type to learn more.
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
          <li>
            <div className="block bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll">
              <p className="font-display text-lg font-bold text-navy-800 mb-2">Umbrella Policies</p>
              <p className="text-navy-500 font-body text-sm leading-relaxed">
                Excess liability coverage that sits above your auto and homeowners limits — increasingly relevant as LWR home values rise. Ask about options when you call.
              </p>
            </div>
          </li>
        </ul>
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
          <p className="text-navy-600 font-body text-base">
            Questions specific to insurance in Lakewood Ranch — answered directly.
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
    <section id="contact" className="bg-warm py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              Get a Quote Built for Lakewood Ranch
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Get a quote built for Lakewood Ranch. Call us or fill out the form below — we&apos;ll get back to you same day.
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

export default function LakewoodRanchPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <NewToFloridaSection />
        <HOASection />
        <CoverageLinksSection />
        <FAQSection />
        <ContactSection />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
