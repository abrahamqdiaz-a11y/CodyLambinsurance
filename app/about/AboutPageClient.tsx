"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

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
    <section
      id="home"
      className="hero-pattern min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 bg-sage-400 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-8 bg-navy-500 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
            <span
              className="w-2 h-2 rounded-full bg-sage-400 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
              Licensed in Florida · Sarasota&apos;s Local Agency
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            About Lamb Insurance Agency
            <span className="block text-sage-300 text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">
              Local Insurance in Sarasota
            </span>
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-4 font-body max-w-3xl">
            Lamb Insurance Agency helps Sarasota drivers, homeowners, and business owners understand
            their coverage and get properly protected.
          </p>
          <p className="text-navy-300 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Most people don&apos;t actually know what their insurance covers. That&apos;s where
            we&apos;re different.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#contact"
              className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center"
            >
              Get a Free Policy Review
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call: {PHONE_DISPLAY}
            </a>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
            aria-label="Trust indicators"
          >
            {[
              "Property & Casualty Licensed",
              "Life & Health Licensed",
              "Local Sarasota Team",
              "No-Pressure Policy Reviews",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-sm text-navy-100 font-body"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="experience-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
            >
              Real Experience in Insurance
            </h2>
            <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
              <p>
                Cody Lamb got into insurance through sales and quickly saw the gap—people were buying
                policies they didn&apos;t fully understand. After working in high-volume insurance
                environments and managing sales teams across multiple locations, he opened Lamb
                Insurance Agency to do things differently.
              </p>
              <p>
                Cody is licensed in Florida for Property &amp; Casualty (2-20) and Life &amp; Health
                (215), giving clients guidance across auto, home, life, and business coverage.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <div className="bg-white border border-navy-100 rounded-2xl p-8 space-y-5">
              <h3 className="font-display text-xl font-bold text-navy-800">
                Florida Licenses
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    license: "2-20",
                    title: "Property & Casualty",
                    desc: "Auto, home, flood, commercial, and bundled coverage",
                  },
                  {
                    license: "2-15",
                    title: "Life & Health",
                    desc: "Life insurance and health-related coverage options",
                  },
                ].map((item) => (
                  <li
                    key={item.license}
                    className="flex items-start gap-4 border-b border-navy-50 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sage-50 border border-sage-200 flex items-center justify-center">
                      <span className="font-display font-bold text-sage-700 text-sm">
                        {item.license}
                      </span>
                    </div>
                    <div>
                      <p className="font-display font-bold text-navy-800 text-base">
                        {item.title}
                      </p>
                      <p className="text-navy-500 font-body text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-navy-400 font-body text-xs pt-2">
                Licensed Insurance Agent · State of Florida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="different-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="different-heading"
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            What Makes Lamb Insurance Different
          </h2>
          <p className="text-navy-200 font-body text-base md:text-lg leading-relaxed">
            Most agencies focus on price.{" "}
            <span className="text-sage-300 font-semibold">
              Lamb Insurance focuses on protection and clarity.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="animate-on-scroll animate-on-scroll-delay-1">
            <h3 className="font-display text-xl font-bold text-sage-300 mb-5">
              Every client goes through a full policy review to understand:
            </h3>
            <ul className="space-y-3">
              {[
                { label: "What&apos;s covered", detail: "Know exactly what your policy protects" },
                { label: "What&apos;s missing", detail: "Find the gaps before they cost you" },
                { label: "What actually matters", detail: "Focus on coverage that fits your life" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage-500 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p
                      className="font-display font-bold text-white text-base"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                    />
                    <p className="text-navy-300 font-body text-sm mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="font-display text-xl font-bold text-sage-300 mb-5">
              Clients typically come to Lamb Insurance when:
            </h3>
            <ul className="space-y-3">
              {[
                "Their rates increase unexpectedly",
                "They're confused about what their policy covers",
                "Their current agent isn't responsive",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage-500 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="font-body text-navy-200 text-base">{item}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-navy-300 font-body text-base leading-relaxed">
              Here, communication is direct, honest, and consistent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="clients-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="clients-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            Helping Real Clients Every Day
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <article className="bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-1">
            <h3 className="font-display text-xl font-bold text-navy-800 mb-4">
              Lamb Insurance works with:
            </h3>
            <ul className="space-y-2">
              {["Drivers", "Families", "Homeowners", "Small business owners"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-600 font-body text-base">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="font-display text-xl font-bold text-navy-800 mb-4">
              Common problems we solve:
            </h3>
            <ul className="space-y-2">
              {[
                "Rising premiums",
                "Coverage gaps",
                "Policies that don't make sense",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-600 font-body text-base">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="bg-white border border-navy-100 rounded-2xl p-6 md:p-8 animate-on-scroll">
          <p className="text-navy-600 font-body text-base md:text-lg leading-relaxed">
            We restructure policies, bundle coverage correctly, and make sure there are no surprises
            when it matters most—during a claim.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="service-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="service-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
            >
              Simple, Reliable Service
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              From quote to binding to ongoing service, everything is handled with consistency and
              attention to detail. Every client receives a policy review so they always know what
              they have.
            </p>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="font-display text-xl font-bold text-navy-800 mb-5">Clients can expect:</h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Fast Responses",
                  desc: "Questions answered quickly—no waiting on hold or lost in a queue.",
                },
                {
                  title: "Clear Explanations",
                  desc: "Coverage explained in plain language, not insurance jargon.",
                },
                {
                  title: "No Pressure",
                  desc:
                    "Honest guidance so you can make the right decision for your situation.",
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className={`bg-white border border-navy-100 rounded-xl p-5 animate-on-scroll animate-on-scroll-delay-${index + 1}`}
                >
                  <p className="font-display font-bold text-navy-800 text-base mb-1">
                    {item.title}
                  </p>
                  <p className="text-navy-500 font-body text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="local-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="local-heading"
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Local to Sarasota
          </h2>
          <p className="text-navy-200 font-body text-base leading-relaxed">
            Lamb Insurance Agency is based in Sarasota and focused on serving the local community.
            Being local matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Florida Weather Risks",
              desc: "We understand the storms, flooding, and seasonal conditions that affect Sarasota coverage needs.",
            },
            {
              title: "Coastal Exposure",
              desc:
                "Coastal properties face unique risks. We help you get coverage that reflects where you actually live.",
            },
            {
              title: "Florida Insurance Market",
              desc:
                "The Florida insurance market is complex. We know the carriers, the rules, and how to navigate it.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-${index + 1}`}
            >
              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-navy-300 font-body text-base leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 animate-on-scroll">
          <p className="text-navy-200 font-body text-base md:text-lg leading-relaxed">
            Clients don&apos;t call a 1-800 number. They work with someone local who knows the area
            and is available when it counts.
          </p>
        </div>
      </div>
    </section>
  );
}

function LongTermSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="longterm-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="longterm-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
            >
              Built for the Long Term
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-6">
              Lamb Insurance was built to create something long-term—for clients and for family.
            </p>
            <p className="text-navy-500 font-body text-sm leading-relaxed">
              Outside of insurance, Cody stays connected to the community through a local pet care
              business and time spent on the water in Sarasota.
            </p>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="font-display text-xl font-bold text-navy-800 mb-5">The goal is simple:</h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Treat People the Right Way",
                  desc: "Every interaction is built on honesty and respect—no upselling, no pressure.",
                },
                {
                  title: "Build Real Relationships",
                  desc:
                    "Not transactional. Clients know who they're working with and can reach them directly.",
                },
                {
                  title: "Provide Consistent, Reliable Service",
                  desc:
                    "The same level of care at quote, at binding, and every renewal after that.",
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className={`bg-white border border-navy-100 rounded-xl p-5 animate-on-scroll animate-on-scroll-delay-${index + 1}`}
                >
                  <p className="font-display font-bold text-navy-800 text-base mb-1">
                    {item.title}
                  </p>
                  <p className="text-navy-500 font-body text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="contact-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight"
            >
              Need a Second Opinion on Your Coverage?
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Get a clear, no-pressure policy review and know exactly what you&apos;re paying for.
              Request a quote or speak directly with Cody today.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <div
                  className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0"
                  aria-hidden="true"
                >
                  📞
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">
                    Call Now
                  </p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Email ${EMAIL}`}
              >
                <div
                  className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0"
                  aria-hidden="true"
                >
                  ✉️
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </p>
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

export default function AboutPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <ExperienceSection />
        <DifferentSection />
        <ClientsSection />
        <ServiceSection />
        <LocalSection />
        <LongTermSection />
        <ContactForm />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
