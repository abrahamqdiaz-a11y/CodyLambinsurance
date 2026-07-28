"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";
import RelatedGuides from "../components/RelatedGuides";

const EMAIL = "contact@lambinsuranceagency.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const coverageItems = [
  {
    title: "Dwelling Coverage",
    text: "Pays to repair or rebuild your home's structure after a covered loss — wind damage, fire, or other named perils. In Florida, this must reflect current replacement cost, not market value.",
  },
  {
    title: "Other Structures",
    text: "Covers detached garages, fences, sheds, and guest cottages. Typically 10% of your dwelling limit.",
  },
  {
    title: "Personal Property",
    text: "Covers furniture, electronics, clothing, and belongings inside your home. Replacement cost vs. actual cash value matters — we explain the difference before you commit.",
  },
  {
    title: "Loss of Use",
    text: "Pays for temporary housing and additional living expenses if your home is uninhabitable after a covered loss.",
  },
  {
    title: "Personal Liability",
    text: "Protects you if someone is injured on your property or you accidentally damage someone else's property. Pairs with umbrella insurance for added protection.",
  },
  {
    title: "Medical Payments",
    text: "Covers medical expenses for guests injured on your property, regardless of fault — keeps minor incidents from becoming liability claims.",
  },
];

const floridaConsiderations = [
  {
    title: "Hurricane Deductible",
    text: "Florida policies carry a separate named storm deductible — typically 2%–5% of your dwelling coverage. On a $400,000 home, a 2% deductible is $8,000 out of pocket. We quote both the premium and the deductible in dollar terms so you know your real exposure.",
  },
  {
    title: "Wind Mitigation Credits",
    text: "Florida insurers must offer discounts for features that reduce hurricane damage: hip roof shape, roof-to-wall connections (straps vs. nails), sealed roof decks, and impact-rated openings. A wind mitigation inspection typically costs $75–$150 and can reduce your annual premium by hundreds of dollars.",
  },
  {
    title: "Flood Is Always Separate",
    text: "No standard homeowners policy — HO-3, HO-5, or any Florida equivalent — covers flooding. Storm surge, rising water, and rainfall-driven flooding require a separate flood policy through NFIP or a private carrier. This is one of the most common and most expensive coverage gaps in Sarasota.",
  },
  {
    title: "4-Point Inspection",
    text: "Carriers require a 4-point inspection on homes roughly 25 years or older before issuing a new policy. The inspection covers roof, electrical, plumbing, and HVAC. Knowing what an inspection will show before you apply lets us get ahead of any issues.",
  },
  {
    title: "Replacement Cost vs. Market Value",
    text: "Your dwelling coverage should reflect what it costs to rebuild your home today — not what it would sell for. Land isn't insured. Construction costs in Sarasota County have increased significantly, and many older policies are underinsured.",
  },
  {
    title: "Citizens Insurance",
    text: "Citizens Property Insurance is Florida's state-backed insurer of last resort. It's not always the right fit — private carriers can offer broader coverage and better pricing for many Sarasota properties. We review both options.",
  },
];

const faqItems = [
  {
    question: "What does homeowners insurance cover in Florida?",
    answer:
      "A standard Florida homeowners policy (HO-3 or HO-5) covers your home's structure against named perils — wind, fire, lightning, and others — along with your personal belongings, personal liability, and additional living expenses if your home is uninhabitable. It does not cover flooding, which requires a separate flood insurance policy.",
  },
  {
    question: "Does homeowners insurance cover hurricane damage in Sarasota?",
    answer:
      "Wind damage from a hurricane is typically covered under a standard Florida homeowners policy — but with a separate hurricane or named storm deductible, usually 2%–5% of your dwelling coverage. On a $400,000 home, that's $8,000–$20,000 before insurance pays anything. Storm surge and flooding from the hurricane are not covered under homeowners insurance.",
  },
  {
    question: "Do I need flood insurance if I have homeowners insurance?",
    answer:
      "Yes, in almost all cases. Homeowners insurance never covers flooding — rising water, storm surge, or rainfall-driven flooding all require a separate flood policy. In Sarasota County, even properties outside designated high-risk flood zones can flood during significant storms. Approximately 25% of flood insurance claims nationwide come from lower-risk zones.",
  },
  {
    question: "What is a wind mitigation inspection and is it worth it?",
    answer:
      "A wind mitigation inspection documents features of your home that reduce hurricane damage — roof shape, roof-to-wall connections, roof deck attachment, and opening protection. Florida insurers are required to give premium credits for qualifying features. The inspection costs $75–$150 and can reduce your annual premium by several hundred dollars. It's almost always worth it.",
  },
  {
    question: "How much homeowners insurance do I need in Sarasota?",
    answer:
      "Your dwelling coverage should match what it would cost to rebuild your home today — not its market value. Construction costs in Sarasota County have increased significantly since most policies were originally written. We review your dwelling limit against current local construction costs to make sure you're not underinsured before a major loss.",
  },
  {
    question: "What is a 4-point inspection and when is it required?",
    answer:
      "A 4-point inspection evaluates four systems: roof, electrical, plumbing, and HVAC. Most Florida carriers require it for homes roughly 25 years or older before issuing a new policy. The inspection typically costs $100–$150. If your home has aging systems, knowing what the report will show before you apply lets us work with the right carriers from the start.",
  },
  {
    question: "Can I get homeowners insurance if my roof is older?",
    answer:
      "Yes, though your options narrow as a roof ages. Most carriers set limits — commonly 15–20 years — and some require documentation of remaining useful life. We work with multiple carriers, including those willing to write older roofs when a wind mitigation inspection shows the roof was properly installed and is in serviceable condition.",
  },
  {
    question: "What is an umbrella policy and do I need one with homeowners insurance?",
    answer:
      "An umbrella policy adds excess liability coverage above your homeowners and auto limits — typically $1M or more. If you have a pool, a dog, guests regularly on your property, or meaningful assets to protect, umbrella coverage is worth serious consideration at relatively low cost.",
  },
];

const relatedGuides = [
  {
    href: "/insights/paid-off-mortgage-homeowners-insurance-sarasota",
    title: "You Paid Off Your Mortgage — Should You Drop Homeowners Insurance?",
    excerpt: "The lender requirement is gone. The risk isn't. A Sarasota-based look at the real numbers before you cancel.",
  },
  {
    href: "/insights/flood-zones-home-insurance-sarasota-neighborhoods",
    title: "Flood Zones, Home Insurance, and Sarasota Neighborhoods",
    excerpt: "What new residents need to know about flood zone designations before they buy a home in Sarasota County.",
  },
  {
    href: "/insights/should-you-bundle-home-and-auto-insurance-florida",
    title: "Should You Bundle Home and Auto Insurance in Florida?",
    excerpt: "Bundling can save money — but it isn't always the right move. Here's how to evaluate whether it works for you.",
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
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-navy-300 font-body">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-navy-500">›</li>
            <li className="text-white font-medium">Homeowners Insurance Sarasota, FL</li>
          </ol>
        </nav>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
              Local Agent · Same-Day Quotes · FL License #G034846
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Homeowners Insurance in Sarasota, FL
          </h1>
          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            A Florida homeowners policy is not a simple product. Wind deductibles, flood gaps, replacement cost shortfalls, and 4-point inspection requirements create coverage questions most national websites never answer. We explain your actual exposure — before a claim forces the issue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get a Free Homeowners Quote
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Trust indicators">
            {["Sarasota-Based Agent", "Wind Mitigation Reviews", "4-Point Inspection Guidance", "Same-Day Binders"].map((item) => (
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

function WhatIsCoveredSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            What Homeowners Insurance Covers
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            A standard Florida homeowners policy (HO-3 or HO-5) bundles several distinct coverages. Each one has limits, deductibles, and exclusions worth understanding before you need them.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {coverageItems.map((item, index) => (
            <article key={item.title} className={`bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 4)}`}>
              <h3 className="font-display text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
              <p className="text-navy-600 font-body text-base leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloridaSpecificSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="florida-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="florida-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            What Makes Florida Homeowners Insurance Different
          </h2>
          <p className="text-navy-200 font-body text-base leading-relaxed">
            Sarasota's coastal exposure, older housing stock, and Florida's unique regulatory environment create underwriting questions that generic online quotes don't answer. Here's what actually matters here.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {floridaConsiderations.map((item, index) => (
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

function FloodGapSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="flood-heading">
      <div className="max-w-6xl mx-auto px-5 space-y-16">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="flood-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            The Flood Gap Every Sarasota Homeowner Needs to Understand
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Every standard homeowners policy in Florida excludes flooding — completely. Water that enters your home from outside during a storm is not covered. Storm surge from a hurricane is not covered. Rising water from heavy rainfall overwhelming drainage systems is not covered.
            </p>
            <p>
              In Sarasota County, that distinction matters more than almost anywhere else in the country. Gulf exposure, flat terrain, and frequent tropical weather events mean flood risk is real — and not limited to homes on the waterfront. Approximately 25% of flood insurance claims nationally come from properties outside FEMA-designated high-risk flood zones.
            </p>
            <p>
              Flood insurance is always a separate policy — either through the National Flood Insurance Program (NFIP) or a private flood carrier. It also carries a 30-day waiting period before it takes effect, which means you cannot buy it in response to an approaching storm. The time to act is before storm season, not after.
            </p>
            <p>
              If you're not sure what flood zone your property is in or what flood coverage would cost, <Link href="/flood-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">read our flood insurance guide</Link> or contact us for a same-day flood quote alongside your homeowners policy.
            </p>
          </div>
        </div>

        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Umbrella Insurance: The Layer Most Homeowners Skip
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              A homeowners policy includes personal liability coverage — but it has limits, typically $100,000–$300,000. A serious injury claim, a lawsuit, or a dog bite can exceed those limits quickly. When it does, the difference comes out of your assets.
            </p>
            <p>
              An <Link href="/umbrella-insurance-sarasota" className="text-sage-700 underline hover:text-sage-800">umbrella insurance policy</Link> adds $1M or more in excess liability coverage above both your homeowners and auto policies. It's one of the most cost-effective coverages available — and one of the most commonly skipped by Sarasota homeowners who assume their base policy is enough. If you have a pool, a dog, frequent guests, or meaningful assets to protect, it's worth a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SarasotaNeighborhoodsSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="areas-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="areas-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Serving Sarasota Homeowners Across the Region
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Different neighborhoods in Sarasota County carry different insurance considerations. Homes near the Gulf on Siesta Key or barrier islands face VE flood zone designation and significant wind exposure. Properties in established inland neighborhoods like Palmer Ranch or Lakewood Ranch deal with HOA liability requirements and, in some parcels, AE flood zone designations near retention ponds and drainage corridors. Older homes in Bradenton and downtown Sarasota face 4-point inspection requirements and may need carriers with specific appetite for aging roofs. If a roof age non-renewal arrives, <Link href="/insights/florida-roof-age-non-renewal" className="text-sage-600 hover:underline">Florida law gives you inspection rights before you are required to replace anything</Link>.
            </p>
            <p>
              We know the local underwriting environment for each of these communities. If you're in one of the areas below, we can tell you exactly what to expect before you start the quote process:
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 font-body text-base">
            {[
              { href: "/insurance-siesta-key-fl", label: "Siesta Key" },
              { href: "/insurance-palmer-ranch-fl", label: "Palmer Ranch" },
              { href: "/insurance-lakewood-ranch-fl", label: "Lakewood Ranch" },
              { href: "/insurance-bradenton-fl", label: "Bradenton" },
              { href: "/insurance-venice-fl", label: "Venice" },
              { href: "/insurance-north-port-fl", label: "North Port" },
            ].map((area) => (
              <li key={area.href}>
                <Link
                  href={area.href}
                  className="flex items-center gap-2 bg-white border border-navy-100 rounded-xl px-4 py-3 text-navy-700 hover:text-sage-700 hover:border-sage-300 transition-colors"
                >
                  <span aria-hidden="true">→</span>
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AdditionalCoverageSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="additional-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="additional-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Coverage We Also Offer Sarasota Homeowners
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            { label: "Flood Insurance", href: "/flood-insurance-sarasota-fl", desc: "Separate NFIP or private flood policy — never included in any homeowners policy." },
            { label: "Auto Insurance", href: "/auto-insurance-sarasota-fl", desc: "Florida liability, collision, and comprehensive — bundle with homeowners for potential savings." },
            { label: "Umbrella Insurance", href: "/umbrella-insurance-sarasota", desc: "Excess liability above your home and auto limits — typically $1M or more." },
            { label: "Bundle Insurance", href: "/bundle-insurance-sarasota-fl", desc: "Home and auto through one carrier for a simplified account and potential premium savings." },
            { label: "Condo Insurance", href: "/condo-insurance-sarasota-fl", desc: "HO-6 coverage for unit owners — fills the gaps left by the association master policy." },
            { label: "Commercial Insurance", href: "/commercial-insurance-sarasota-fl", desc: "Business property and liability coverage for Sarasota-area businesses." },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sage-400/40 transition-colors animate-on-scroll"
              >
                <p className="font-display text-lg font-bold text-white group-hover:text-sage-300 transition-colors mb-2">{link.label} →</p>
                <p className="text-navy-300 font-body text-sm leading-relaxed">{link.desc}</p>
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
            Homeowners Insurance in Sarasota: Frequently Asked Questions
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
                  <span
                    className={`absolute right-0 top-1 text-sage-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
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

function AuthorSection() {
  return (
    <section className="bg-cream py-12 border-t border-navy-100" aria-label="About the author">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row items-start gap-5 animate-on-scroll">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy-900 flex items-center justify-center text-white font-display text-xl font-bold">
            CL
          </div>
          <div>
            <p className="font-display text-navy-800 font-bold text-base">
              Reviewed by Cody Alexander Lamb
            </p>
            <p className="text-navy-500 font-body text-sm mt-0.5">
              Licensed Florida Insurance Agent ·{" "}
              <a
                href="https://www.myfloridacfo.com/division/agents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-700 underline hover:text-sage-800"
              >
                FL License #G034846
              </a>{" "}
              · Licensed in Property &amp; Casualty (0220), Personal Lines (2044), and Life including Variable Annuity &amp; Health (0215).
            </p>
            <p className="text-navy-500 font-body text-sm mt-1">
              Serving Sarasota, Bradenton, Venice, Lakewood Ranch, Siesta Key, Palmer Ranch, and North Port.
            </p>
          </div>
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
              Get a Free Homeowners Insurance Quote
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Whether you're buying a home, reviewing your current coverage, or trying to understand your hurricane deductible — we'll give you a straight answer. Same-day response.
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

export default function HomeownersPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <WhatIsCoveredSection />
        <FloridaSpecificSection />
        <FloodGapSection />
        <SarasotaNeighborhoodsSection />
        <AdditionalCoverageSection />
        <FAQSection />
        <AuthorSection />
        <RelatedGuides guides={relatedGuides} />
        <ContactForm />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
