"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "calamb@acg.aaa.com";

const bundleBenefits = [
  "Bundle savings applied to your combined premium",
  "One renewal date for both policies",
  "One local agent manages everything",
  "One call for questions, changes, or claims support",
  "Coverage built around your specific Sarasota property and vehicle",
  "No 800-number runaround — real local service",
];

const processSteps = [
  "Tell us about your home and your vehicle",
  "We build your bundle quote — same day",
  "Review your coverage and savings together",
  "We handle everything from there — one agent, one call",
];

const faqItems = [
  {
    question: "How much can I save by bundling home and auto in Sarasota?",
    answer:
      "Bundle savings vary by household depending on your home, your vehicles, and your coverage levels. The best way to know your exact savings is to get a quote that prices both policies together. Contact Lamb Insurance Agency for a same-day bundle quote.",
  },
  {
    question: "Do I need to switch both policies at the same time?",
    answer:
      "Not necessarily. We can review your current policies and timing and find the cleanest transition that avoids any gaps in coverage. We often align both renewals so everything moves together cleanly going forward.",
  },
  {
    question: "What if my home and auto have different renewal dates?",
    answer:
      "Very common. We handle this regularly. We review both current policies, map out the timing, and make the transition in a way that makes financial sense — minimizing any penalties and maximizing your savings from day one of the bundle.",
  },
  {
    question: "Does bundling affect how my claims are handled?",
    answer:
      "Each policy responds independently according to its own terms. Bundling affects your premium — not your coverage or claims process. What it does change is who you call. One local agent handles both — no bouncing between departments or call centers.",
  },
  {
    question: "Can I bundle condo insurance and auto instead of home and auto?",
    answer:
      "Yes. The same bundling approach applies whether you own a house or a condo in Sarasota. We build your coverage around your actual property — not a generic template.",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
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
              Sarasota Bundle Coverage
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Bundle Home and Auto Insurance Sarasota FL — One Agent, One Call, Real Savings
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Bundling your home and auto through one local Sarasota agent means simpler coverage, a single point of contact, and real savings on your combined premium.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get Your Bundle Quote — Same Day Response
            </a>
          </div>

          <div className="flex flex-wrap gap-6" aria-label="Trust indicators">
            {[{ text: "Trusted Coverage" }, { text: "Personalized Service" }, { text: "Local Expertise" }].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span className="text-navy-300 text-sm font-body">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentSections() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 space-y-20">
        <div id="why-bundle" className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">Why Bundle Your Home and Auto?</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              When you place your home and auto insurance through the same local agent, everything gets simpler. One agent who knows both policies. One renewal conversation each year. One call when you have a question or need to make a change.
            </p>
            <p>
              And for most Sarasota households, bundling means real savings on your combined premium — not just a marketing claim, but an actual reduction in what you pay each year.
            </p>
            <p>
              At Lamb Insurance Agency we handle both your home and auto coverage from our Sarasota office. You deal with one person who knows your full situation — not a different call center representative every time you call.
            </p>
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-8 leading-tight">What Bundling Actually Gets You</h2>
          <ul className="grid sm:grid-cols-2 gap-5" aria-label="Bundling benefits list">
            {bundleBenefits.map((item, index) => (
              <li key={item} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-navy-100">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-50 border border-sage-100 flex items-center justify-center mt-0.5" aria-hidden="true">
                  <svg className="w-4 h-4 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-navy-700 font-body text-base leading-relaxed">{item}</p>
                <span className="sr-only">Benefit {index + 1}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">Built for Sarasota Homeowners and Drivers</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Whether you own a home in Lakewood Ranch, a condo on Siesta Key, or a house in Venice or North Port — and whether you drive one vehicle or three — your bundle is built around your actual situation.
            </p>
            <p>
              We know Sarasota&#39;s neighborhoods, the local coverage considerations that matter here, and what makes sense for homes and vehicles in this specific market. That local knowledge is something a national website or call center cannot offer.
            </p>
            <p>
              If you need standalone coverage, we can also help with <Link href="/home-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">home insurance in Sarasota</Link>, <Link href="/auto-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">auto insurance in Sarasota</Link>, and <Link href="/condo-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">condo insurance</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="how-it-works" className="bg-navy-900 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">How It Works</h2>
        </div>
        <ol className="grid md:grid-cols-2 gap-6" aria-label="Bundle insurance process">
          {processSteps.map((step, index) => (
            <li key={step} className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-on-scroll">
              <div className="w-10 h-10 rounded-full bg-sage-500/20 border border-sage-400/40 text-sage-300 font-display text-lg font-bold flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <p className="text-navy-100 font-body text-base leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FAQSection() {
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
          {faqItems.map((item) => (
            <details key={item.question} className="bg-white border border-navy-100 rounded-xl p-6 group animate-on-scroll">
              <summary className="font-display text-lg font-bold text-navy-800 cursor-pointer list-none pr-8 relative">
                {item.question}
                <span className="absolute right-0 top-1 text-sage-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-navy-600 font-body text-base leading-relaxed mt-4">{item.answer}</p>
            </details>
          ))}
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
              Get Your Bundle Quote — Same Day Response
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Ready to bundle your home and auto? Fill out the form and we&#39;ll review your options, pricing, and bundle savings with you.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Email ${EMAIL}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                  ✉️
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Email Us</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors break-all">
                    {EMAIL}
                  </p>
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

export default function BundleInsurancePage() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <ContentSections />
        <ProcessSection />
        <ContactForm />
        <FAQSection />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
