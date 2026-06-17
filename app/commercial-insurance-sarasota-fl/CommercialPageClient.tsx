"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "contact@lambinsuranceagency.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const businessChallenges = [
  {
    title: "My Premium Went Up at Renewal",
    text: "Florida's commercial insurance market has been volatile. Premiums across most lines have increased significantly — driven by weather exposure, rising claims costs, and reduced carrier competition in the state. If your renewal came in higher than expected, the answer isn't always to accept it. We compare current market options and identify where you may be over- or underprotected relative to what you're paying.",
  },
  {
    title: "I'm Not Sure What My Policy Actually Covers",
    text: "More common than you'd think. Many business owners carry a policy they've never fully reviewed — often one a lender required, a prior agent recommended years ago, or that came bundled with something else. We read through your existing coverage and tell you exactly what it does and doesn't protect.",
  },
  {
    title: "I'm Starting or Expanding a Business",
    text: "New location. New employees. New services or revenue streams. Each changes your risk exposure and may affect your coverage requirements. We make sure your policy keeps pace with your business rather than reflecting what it looked like when you first bought it.",
  },
  {
    title: "A Client or Lender Requires Proof of Coverage",
    text: "Contracts, commercial leases, and lenders frequently require specific coverage types, limits, and certificates of insurance. We help you meet those requirements correctly — without paying for coverage you don't need.",
  },
  {
    title: "I Had a Claim and Realized I Had the Wrong Coverage",
    text: "One of the most common triggers for a coverage review. If a claim left you holding costs you expected your policy to cover, we'll help you understand what happened and make sure it doesn't happen again.",
  },
];

const coverageItems = [
  {
    title: "General Liability",
    text: "Covers third-party bodily injury and property damage claims arising from your business operations, premises, or products. This is the baseline coverage most businesses need — and what clients, landlords, and lenders will typically ask to see first. It does not cover your own property or your employees.",
  },
  {
    title: "Commercial Property",
    text: "Protects your building, equipment, inventory, signage, and other physical business assets from fire, theft, vandalism, and covered weather events. If you lease your space, your landlord's policy covers the building structure — not your contents, equipment, or improvements.",
  },
  {
    title: "Business Owner's Policy (BOP)",
    text: "Combines general liability and commercial property into a single policy — often the most cost-effective starting point for small and mid-size businesses. Not every business qualifies, and a BOP doesn't cover everything. We'll tell you whether it's the right fit or whether you need broader coverage.",
  },
  {
    title: "Workers' Compensation",
    text: "Covers medical expenses and lost wages for employees injured on the job. In Florida, most non-construction businesses with four or more employees are required to carry it. Construction businesses face stricter rules — coverage is required with even one employee. Penalties for non-compliance include stop-work orders and fines.",
  },
  {
    title: "Commercial Auto",
    text: "Covers vehicles used for business purposes. Personal auto policies typically exclude business use — if an employee is driving a vehicle for work and has an accident, your personal policy may not respond. Commercial auto covers liability, collision, and comprehensive protection for business vehicles and, in some cases, employee-owned vehicles used for work.",
  },
  {
    title: "Professional Liability (Errors & Omissions)",
    text: "Covers claims that your professional advice, services, or failure to perform caused a client financial harm. General liability does not cover this. If you provide any kind of professional service — consulting, financial advice, design, technology, healthcare, real estate — professional liability is a separate and important coverage.",
  },
  {
    title: "Cyber Liability",
    text: "Covers costs related to data breaches, ransomware attacks, and other cyber incidents — including notification costs, legal expenses, regulatory fines, and business interruption. Small businesses are increasingly targeted precisely because they're less likely to have strong defenses. If you store customer data, process payments, or operate any software systems, this deserves a conversation.",
  },
  {
    title: "Commercial Umbrella",
    text: "Provides additional liability coverage above the limits of your underlying policies. When a serious claim exceeds your general liability or auto limits, a commercial umbrella responds. For businesses with significant assets or higher liability exposure, it's often a cost-effective way to extend protection.",
  },
  {
    title: "Liquor Liability",
    text: "Required for any Sarasota business that sells, serves, or distributes alcohol. Florida's dram shop law is actually one of the most vendor-friendly in the country — businesses generally cannot be held liable for overserving a legal-age adult. But that doesn't mean you don't need this coverage. Standard general liability policies exclude alcohol-related claims entirely, meaning any lawsuit involving alcohol — even a frivolous one — falls outside your GL policy. Defense costs alone on a single claim can exceed $50,000 regardless of outcome. Most commercial landlords and lenders also require it as a condition of the lease or financing.",
  },
  {
    title: "Employment Practices Liability (EPLI)",
    text: "Covers claims from employees alleging wrongful termination, discrimination, harassment, or other employment-related violations. Small businesses are not immune to employment claims — and legal defense costs alone can be significant even when a claim has no merit.",
  },
];

const faqItems = [
  {
    question: "What commercial insurance does my Sarasota business need?",
    answer:
      "It depends on your industry, size, and operations. Most businesses need general liability as a minimum. From there, workers' comp requirements, professional liability needs, property coverage, and industry-specific exposures all factor in. We review your specific situation and walk you through what makes sense — not a one-size-fits-all package.",
  },
  {
    question: "What is a Business Owner's Policy (BOP) and is it right for my business?",
    answer:
      "A BOP bundles general liability and commercial property into one policy, typically at a lower combined cost than buying both separately. It's a useful starting point for many small businesses — but it excludes professional liability, cyber, employment practices, and most industry-specific risks. Whether it's the right foundation depends on what you do.",
  },
  {
    question: "Does my business need workers' compensation insurance in Florida?",
    answer:
      "Most non-construction businesses with four or more employees are required to carry workers' compensation. Construction businesses must carry it with even one employee. Penalties for non-compliance are significant — including stop-work orders that can shut your business down. If you're unsure where you stand, we'll tell you.",
  },
  {
    question: "Do I need separate insurance for my business vehicle?",
    answer:
      "Yes, if it's used for business purposes. Personal auto policies typically exclude business use. If an employee drives their own car for work-related tasks and has an accident, both your business and the employee may be exposed. Commercial auto or hired/non-owned auto coverage addresses this.",
  },
  {
    question: "What is professional liability insurance and do I need it?",
    answer:
      "Professional liability — also called Errors and Omissions (E&O) — covers claims that your professional services or advice caused a client financial harm. General liability does not cover this. If you provide any professional service, give advice, or make recommendations that clients rely on financially, professional liability is a separate conversation worth having.",
  },
  {
    question: "My business is small. Do I really need cyber coverage?",
    answer:
      "Small businesses are frequently targeted in cyberattacks precisely because they're considered easier targets than large companies. If you store customer data, process credit cards, use email for client communication, or operate any software, a breach is a real possibility. Cyber liability coverage is more affordable than most business owners expect and more relevant than most assume.",
  },
  {
    question: "How quickly can I get a commercial insurance quote?",
    answer:
      "Most quotes are completed same-day. More complex operations may take a day or two depending on the coverage needed.",
  },
  {
    question: "Do you offer Spanish-language service?",
    answer: "Yes. English and Spanish spoken.",
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
              Same-Day Quotes · English & Spanish · Local Agency
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Commercial Insurance in Sarasota, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-4 font-body max-w-3xl">
            Most Sarasota business owners are either overinsured, underinsured, or both — and don&apos;t know it.
          </p>

          <p className="text-navy-300 text-base leading-relaxed mb-10 font-body max-w-3xl">
            A policy you bought three years ago may not reflect what your business does today. A policy your lender required may cover their interests, not yours. And a policy you&apos;ve never fully read may have gaps that only show up when you file a claim. Lamb Insurance Agency helps Sarasota business owners understand what they actually have, identify where they&apos;re exposed, and build commercial coverage that matches how their business operates.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get a Free Business Quote
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Trust indicators">
            {["Local Sarasota Agency", "Bilingual Service", "Same-Day Quotes", "Plain-English Explanations"].map((item) => (
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

function WhyBusinessesShopSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="challenges-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="challenges-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Why Sarasota Business Owners Come to Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {businessChallenges.map((item, index) => (
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

function CoverageSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Commercial Coverage Options for Sarasota Businesses
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {coverageItems.map((item, index) => (
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

function FloridaDifferenceSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="florida-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="florida-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            What Makes Commercial Insurance in Florida Different
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Running a business in Florida comes with risk factors that don&apos;t exist — or exist at much lower levels — in most other states.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Hurricane and Weather Exposure",
              text: "Commercial property policies in Florida often carry separate hurricane deductibles, calculated as a percentage of insured value rather than a flat dollar amount. On a $500,000 policy with a 2% hurricane deductible, your out-of-pocket exposure before coverage kicks in is $10,000. Understanding how your deductibles work before a storm is considerably more useful than discovering them after one.",
            },
            {
              title: "Flood Exclusions",
              text: "Standard commercial property policies do not cover flood damage from external sources. For Sarasota businesses near the coast, on barrier islands, or in low-lying areas, flood insurance is a separate policy worth serious consideration — whether you own your building or lease your space.",
            },
            {
              title: "Florida's Liability Environment",
              text: "Florida has historically had one of the most litigious business environments in the country. While the 2023 tort reform legislation changed some of the landscape, liability exposure remains significant — particularly for businesses that interact with the public, employ workers, or provide professional services.",
            },
            {
              title: "Workers' Comp Complexity",
              text: "Florida's construction industry rules around workers' compensation are among the strictest in the country. Misclassifying employees as independent contractors — whether intentional or not — can result in significant penalties. If your business uses subcontractors, the workers' comp picture gets complicated quickly.",
            },
            {
              title: "Seasonal Business Patterns",
              text: "Many Sarasota businesses see significant revenue swings between tourist season and summer. If your business is highly seasonal, it's worth discussing how your coverage handles slow periods versus peak periods and whether your business interruption limits reflect your actual revenue exposure.",
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

function MistakesSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="mistakes-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="mistakes-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Coverage Mistakes Sarasota Business Owners Make
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Relying on a policy they've never read",
              text: "The most common. If you can't say with certainty what your policy covers and what it excludes, you're operating blind. Most business owners discover their gaps at claim time.",
            },
            {
              title: "Assuming a BOP covers everything",
              text: "A Business Owner's Policy is a useful starting point — not a complete solution. BOPs typically exclude professional liability, cyber, employment practices, and industry-specific risks. Many business owners believe they have broad coverage when they have a foundation.",
            },
            {
              title: "Not updating coverage after growth",
              text: "A policy written for a two-person operation may not adequately cover a ten-person operation. Revenue increases, new locations, new equipment, new services, and new employees all change your risk profile. Policies that aren't reviewed regularly drift out of alignment with the actual business.",
            },
            {
              title: "Skipping cyber coverage because \"we're too small\"",
              text: "Small businesses are targeted more frequently than large ones in many types of cyberattacks, not less. The assumption that size provides protection is one of the more expensive myths in commercial insurance right now.",
            },
            {
              title: "Carrying state minimum workers' comp without understanding it",
              text: "Workers' compensation covers on-the-job injuries. Understanding what is and isn't covered — and how claims affect your experience modifier and future premiums — matters for managing costs over time.",
            },
            {
              title: "Separating commercial and personal coverage without thinking about it",
              text: "Many Sarasota business owners have commercial coverage with one carrier and personal coverage with another. Sometimes that makes sense. Sometimes it creates gaps — particularly around commercial auto, umbrella coverage, and home office use.",
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
    <section className="bg-cream py-20 md:py-28" aria-labelledby="who-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="who-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Who We Help
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              label: "Contractors and trades",
              text: "General contractors, electricians, plumbers, HVAC, landscapers, roofers, and other trades face workers' comp requirements, liability exposure, and equipment coverage needs that require careful structuring. Florida's construction workers' comp rules add complexity most online quote tools don't handle well.",
            },
            {
              label: "Restaurants, bars, and hospitality",
              text: "High foot traffic, alcohol service, seasonal staffing, and food safety liability create a coverage picture that goes well beyond a standard BOP. Liquor liability, food contamination coverage, and employment practices exposure are all part of the conversation.",
            },
            {
              label: "Professional service firms",
              text: "Lawyers, accountants, consultants, financial advisors, architects, engineers, and other professionals need professional liability coverage that general liability doesn't provide. The size of the firm doesn't reduce the exposure.",
            },
            {
              label: "Healthcare and home health",
              text: "Sarasota's large and growing senior population has created significant demand for healthcare services, home health agencies, and wellness businesses. Medical professional liability and the specific regulatory environment around healthcare coverage require specialized attention.",
            },
            {
              label: "Retail and e-commerce",
              text: "Product liability, commercial property, and business interruption coverage are the core concerns. Businesses with an online component add cyber exposure to the mix.",
            },
            {
              label: "Seasonal and tourism-related businesses",
              text: "Businesses whose revenue is concentrated in tourist season face different coverage needs than year-round operations. Business interruption coverage, seasonal staffing, and the implications of a major storm during peak season all deserve attention.",
            },
          ].map((item) => (
            <article key={item.label} className="bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll">
              <h3 className="font-display text-lg font-bold text-navy-800 mb-2">{item.label}</h3>
              <p className="text-navy-600 font-body text-base leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-navy-600 font-body text-base leading-relaxed animate-on-scroll">
          Serving: Sarasota · Lakewood Ranch · Bradenton · Venice · Osprey · Nokomis · Siesta Key · Palmer Ranch · Gulf Gate · Fruitville · Parrish · North Port
        </p>
        <p className="mt-4 text-navy-600 font-body text-base leading-relaxed animate-on-scroll">
          Need personal coverage too? Ask about <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">bundling options in Sarasota</Link> that may simplify your insurance and create additional savings.
        </p>
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
              Get a Free Commercial Insurance Quote in Sarasota
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Whether you&apos;re reviewing coverage you&apos;ve had for years, shopping after a premium increase, starting a new business, or trying to understand what you actually have — we&apos;re here to help. No pressure. Straight answers. Same-day quotes.
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

export default function CommercialPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <WhyBusinessesShopSection />
        <CoverageSection />
        <FloridaDifferenceSection />
        <MistakesSection />
        <WhoWeHelpSection />
        <FAQSection />
        <ContactForm />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
