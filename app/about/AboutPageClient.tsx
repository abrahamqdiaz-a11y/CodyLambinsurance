"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";
const LICENSE_NUMBER = "G034846";
const ADDRESS_LINE1 = "5893 Whitfield Ave";
const ADDRESS_LINE2 = "Sarasota, FL 34243";

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
              "Local Sarasota Agency",
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

function MeetYourAgentSection() {
  return (
    <section
      id="meet-your-agent"
      className="bg-cream py-20 md:py-28"
      aria-labelledby="agent-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="agent-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
            >
              Meet Your Agent
              <span className="block text-sage-700 text-xl md:text-2xl mt-1 font-semibold">
                Cody Lamb — Licensed Insurance Agent
              </span>
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
                (2-15), which means he can help with auto, home, flood, commercial, and life coverage
                all in one place—without handing you off to someone else.
              </p>
              <p>
                When you work with Lamb Insurance Agency, you&apos;re working directly with Cody.
                Not a call center. Not an automated system. A real, licensed person who knows your
                policy and can answer your questions.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE_HREF}`}
                className="btn-primary px-6 py-3 rounded-lg font-semibold font-body text-sm text-center"
              >
                Call Cody: {PHONE_DISPLAY}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-semibold font-body text-sm text-center border border-navy-300 text-navy-700 hover:bg-navy-50 transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2 space-y-5">
            <div className="bg-white border border-navy-100 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-navy-800 mb-6">
                Florida Insurance Credentials
              </h3>

              <div className="bg-sage-50 border border-sage-200 rounded-xl p-5 mb-6">
                <p className="text-navy-500 font-body text-xs uppercase tracking-wider mb-1">
                  Florida Insurance License
                </p>
                <p className="font-display font-bold text-navy-800 text-2xl tracking-wide">
                  {LICENSE_NUMBER}
                </p>
                <p className="text-navy-500 font-body text-sm mt-1">
                  State of Florida — Department of Financial Services
                </p>
              </div>

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

              <p className="text-navy-400 font-body text-xs pt-4 mt-2 border-t border-navy-50">
                License {LICENSE_NUMBER} · Licensed Insurance Agent · State of Florida
              </p>
            </div>

            <div className="bg-navy-900 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display text-base font-bold text-white mb-3">
                What the License Means for You
              </h3>
              <p className="text-navy-300 font-body text-sm leading-relaxed">
                A Florida insurance license isn&apos;t just a formality. It means Cody has passed
                state-required exams, meets continuing education requirements, and is accountable to
                the Florida Department of Financial Services. When you work with a licensed agent,
                you have legal protections and a clear path to resolve disputes—something you
                don&apos;t get buying coverage online without guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="trust-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="trust-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            Why Clients Trust Lamb Insurance
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Licensed Florida Professional",
              desc: `Cody holds Florida insurance license ${LICENSE_NUMBER}, covering Property & Casualty and Life & Health lines. Verified with the Florida Department of Financial Services.`,
            },
            {
              title: "Local Sarasota Agency",
              desc: "Based at 5893 Whitfield Ave, Sarasota. Not a national call center—a local office you can actually visit.",
            },
            {
              title: "Personal Insurance Guidance",
              desc: "Every client receives a thorough policy review so you know exactly what you have, what's missing, and what to do about it.",
            },
            {
              title: "Business & Personal Coverage",
              desc: "From auto and home to commercial liability and business owner policies, Cody handles both personal and business lines.",
            },
            {
              title: "Direct Access to Your Agent",
              desc: "You work with Cody directly. He knows your name, your policy, and your situation—not a general support line.",
            },
            {
              title: "No-Pressure Approach",
              desc: "There&apos;s no upselling here. Guidance is honest and based on what actually makes sense for your coverage needs.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className={`bg-cream border border-navy-100 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-${(index % 3) + 1}`}
            >
              <h3 className="font-display text-base font-bold text-navy-800 mb-3">
                {item.title}
              </h3>
              <p
                className="text-navy-500 font-body text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyLicensedAgentSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="why-agent-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="why-agent-heading"
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Why Work With a Licensed Agent
          </h2>
          <p className="text-navy-200 font-body text-base md:text-lg leading-relaxed">
            It&apos;s easy to buy insurance online. It&apos;s harder to know whether what you bought
            actually protects you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div className="animate-on-scroll animate-on-scroll-delay-1">
            <h3 className="font-display text-xl font-bold text-sage-300 mb-5">
              What you get with a licensed agent:
            </h3>
            <ul className="space-y-3">
              {[
                {
                  label: "Coverage that fits your actual situation",
                  detail: "Online quotes are based on general inputs. An agent asks the questions that change what you need.",
                },
                {
                  label: "Someone who explains your policy",
                  detail: "Deductibles, exclusions, and coverage limits get reviewed in plain language—before you have a claim.",
                },
                {
                  label: "Access to multiple carriers",
                  detail: "Rather than one company's rates, an independent agent can compare options across carriers to find better fit.",
                },
                {
                  label: "Advocacy when you need it",
                  detail: "If a claim goes sideways, your agent is someone who can help navigate the process and speak on your behalf.",
                },
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
                    <p className="font-display font-bold text-white text-base">{item.label}</p>
                    <p className="text-navy-300 font-body text-sm mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="font-display text-xl font-bold text-sage-300 mb-5">
              Common problems that come from skipping an agent:
            </h3>
            <ul className="space-y-3">
              {[
                "Discovering gaps in coverage after a loss",
                "Overpaying because policies weren't compared or bundled correctly",
                "No one available to help when a claim is filed",
                "Policy renews automatically at a higher rate with no review",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-800/60 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-red-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <p className="font-body text-navy-200 text-base">{item}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-navy-200 font-body text-sm leading-relaxed">
                A licensed agent like Cody doesn&apos;t cost you extra—agent compensation comes from
                the insurance carrier, not a surcharge on your premium. You get professional guidance
                at no additional cost.
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
    <section className="bg-warm py-20 md:py-28" aria-labelledby="different-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="different-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            What Makes Lamb Insurance Different
          </h2>
          <p className="text-navy-600 font-body text-base md:text-lg leading-relaxed">
            Most agencies focus on price.{" "}
            <span className="text-sage-700 font-semibold">
              Lamb Insurance focuses on protection and clarity.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="animate-on-scroll animate-on-scroll-delay-1">
            <h3 className="font-display text-xl font-bold text-navy-700 mb-5">
              Every client goes through a full policy review to understand:
            </h3>
            <ul className="space-y-3">
              {[
                { label: "What's covered", detail: "Know exactly what your policy protects" },
                { label: "What's missing", detail: "Find the gaps before they cost you" },
                { label: "What actually matters", detail: "Focus on coverage that fits your life" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 bg-white border border-navy-100 rounded-xl p-4"
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
                    <p className="font-display font-bold text-navy-800 text-base">{item.label}</p>
                    <p className="text-navy-500 font-body text-sm mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="font-display text-xl font-bold text-navy-700 mb-5">
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
                  className="flex items-start gap-4 bg-white border border-navy-100 rounded-xl p-4"
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
                  <p className="font-body text-navy-700 text-base">{item}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-navy-600 font-body text-base leading-relaxed bg-white border border-navy-100 rounded-xl p-4">
              Here, communication is direct, honest, and consistent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  const areas = [
    { name: "Sarasota", note: "Agency headquarters" },
    { name: "Bradenton", note: "Manatee County" },
    { name: "Lakewood Ranch", note: "Manatee & Sarasota counties" },
    { name: "Venice", note: "South Sarasota County" },
    { name: "North Port", note: "South Sarasota County" },
    { name: "Siesta Key", note: "Sarasota barrier island" },
    { name: "Parrish", note: "North Manatee County" },
  ];

  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="service-area-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="service-area-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
            >
              Serving Sarasota and the Surrounding Area
            </h2>
            <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
              <p>
                Lamb Insurance Agency is based in Sarasota and works with clients throughout the
                region. Whether you&apos;re in a beachfront condo on Siesta Key, a new home in
                Lakewood Ranch, or running a business in Bradenton, coverage needs in this area have
                specific considerations—coastal exposure, flood risk, and Florida&apos;s unique
                insurance market all factor in.
              </p>
              <p>
                Being local means Cody understands the neighborhoods, the carriers that operate here,
                and what types of coverage actually matter for where you live.
              </p>
            </div>

            <div className="mt-8 bg-white border border-navy-100 rounded-xl p-5">
              <p className="text-navy-500 font-body text-xs uppercase tracking-wider mb-2">Office Location</p>
              <address className="text-navy-800 font-display font-semibold not-italic">
                {ADDRESS_LINE1}<br />
                {ADDRESS_LINE2}
              </address>
              <p className="text-navy-500 font-body text-sm mt-2">
                <a href={`tel:${PHONE_HREF}`} className="text-sage-700 hover:underline font-semibold">
                  {PHONE_DISPLAY}
                </a>
                {" · "}
                <a href={`mailto:${EMAIL}`} className="text-sage-700 hover:underline">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="font-display text-xl font-bold text-navy-800 mb-5">Service Areas</h3>
            <ul className="space-y-2">
              {areas.map((area, index) => (
                <li
                  key={area.name}
                  className={`flex items-center justify-between bg-white border border-navy-100 rounded-xl px-5 py-4 animate-on-scroll animate-on-scroll-delay-${(index % 3) + 1}`}
                >
                  <span className="font-display font-bold text-navy-800 text-base">
                    {area.name}
                  </span>
                  <span className="text-navy-400 font-body text-sm">{area.note}</span>
                </li>
              ))}
            </ul>
            <p className="text-navy-400 font-body text-sm mt-4 leading-relaxed">
              Don&apos;t see your city? Reach out. Cody works with clients across Sarasota and
              Manatee counties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="clients-heading">
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
          <article className="bg-cream border border-navy-100 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-1">
            <h3 className="font-display text-xl font-bold text-navy-800 mb-4">
              Lamb Insurance works with:
            </h3>
            <ul className="space-y-2">
              {["Drivers", "Families", "Homeowners", "Small business owners", "Landlords", "New Florida residents"].map((item) => (
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

          <article className="bg-cream border border-navy-100 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="font-display text-xl font-bold text-navy-800 mb-4">
              Common problems we solve:
            </h3>
            <ul className="space-y-2">
              {[
                "Rising premiums with no explanation",
                "Coverage gaps discovered after a loss",
                "Policies that don't match what was promised",
                "No agent to call when something happens",
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

        <div className="bg-cream border border-navy-100 rounded-2xl p-6 md:p-8 animate-on-scroll">
          <p className="text-navy-600 font-body text-base md:text-lg leading-relaxed">
            We restructure policies, bundle coverage correctly, and make sure there are no surprises
            when it matters most—during a claim.
          </p>
        </div>
      </div>
    </section>
  );
}

function GoogleReviewsSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-24" aria-labelledby="reviews-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="reviews-heading"
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            What Clients Are Saying
          </h2>
          <p className="text-navy-200 font-body text-base leading-relaxed">
            Lamb Insurance Agency is rated on Google by real clients in the Sarasota area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              quote: "Cody walked me through my home insurance line by line. I finally understood what I was paying for.",
              author: "Homeowner, Sarasota",
            },
            {
              quote: "Switched from a big-name carrier and saved money with better coverage. Cody made the comparison easy.",
              author: "Driver, Bradenton",
            },
            {
              quote: "He actually picks up the phone. That alone made the difference for me.",
              author: "Small Business Owner, Lakewood Ranch",
            },
          ].map((review, index) => (
            <article
              key={index}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-${index + 1}`}
            >
              <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote>
                <p className="text-navy-200 font-body text-sm leading-relaxed mb-4">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </blockquote>
              <p className="text-navy-400 font-body text-xs">{review.author}</p>
            </article>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <a
            href="https://www.google.com/maps/search/Lamb+Insurance+Agency+Sarasota"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-6 py-3 text-navy-200 font-body text-sm hover:bg-white/12 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            View Lamb Insurance Agency on Google
          </a>
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="community-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="community-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
            >
              Part of the Sarasota Community
            </h2>
            <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
              <p>
                Lamb Insurance was built to create something long-term—for clients and for family.
                The agency isn&apos;t a stepping stone. It&apos;s a commitment to building real
                relationships with people in this community.
              </p>
              <p>
                Outside of insurance, Cody stays connected to the Sarasota area through local
                involvement, a pet care business, and time spent on the water. This isn&apos;t
                someone passing through—it&apos;s a neighbor who chose to build a business here.
              </p>
              <p>
                That matters when it comes to insurance. A local agent has real stakes in getting
                things right because they&apos;ll see you at the same places, talk to the same
                people, and still be here years from now.
              </p>
            </div>
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
                  desc: "Not transactional. Clients know who they're working with and can reach them directly.",
                },
                {
                  title: "Provide Consistent, Reliable Service",
                  desc: "The same level of care at quote, at binding, and every renewal after that.",
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

function FAQSection() {
  const faqs = [
    {
      question: "Is Lamb Insurance Agency licensed in Florida?",
      answer: `Yes. Cody Lamb holds Florida insurance license ${LICENSE_NUMBER}, issued by the Florida Department of Financial Services. He is licensed for Property & Casualty (2-20) and Life & Health (2-15), which covers auto, home, flood, commercial, and life insurance lines.`,
    },
    {
      question: "What types of insurance do you help with?",
      answer:
        "Lamb Insurance Agency helps with auto insurance, homeowners insurance, renters insurance, flood insurance, umbrella policies, business owner policies (BOP), commercial auto, general liability, and life insurance. Most coverage needs for individuals and small businesses can be handled in one place.",
    },
    {
      question: "Why work with a local Sarasota insurance agency?",
      answer:
        "A local agent understands the specific risks in this area—hurricane exposure, flood zones, coastal property considerations, and the Florida insurance market. You also get a real person to call, not a national support line. Cody is based at 5893 Whitfield Ave in Sarasota and works directly with each client.",
    },
    {
      question: "Can you help compare multiple insurance options?",
      answer:
        "Yes. As an independent agent, Cody works with multiple carriers rather than being tied to a single company. That means he can compare rates and coverage options across carriers to find what actually fits your situation—not just whatever one company offers.",
    },
  ];

  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="faq-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Common questions about working with Lamb Insurance Agency.
          </p>
        </div>

        <div className="max-w-3xl space-y-5">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className={`bg-white border border-navy-100 rounded-2xl p-6 md:p-8 animate-on-scroll animate-on-scroll-delay-${(index % 3) + 1}`}
            >
              <h3 className="font-display text-lg font-bold text-navy-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-navy-600 font-body text-base leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28" aria-labelledby="contact-heading">
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
                className="flex items-center gap-4 bg-cream rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
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
                className="flex items-center gap-4 bg-cream rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
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

              <div className="bg-cream rounded-xl p-4 border border-navy-100">
                <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-1">Office</p>
                <address className="text-navy-700 font-body text-sm not-italic leading-snug">
                  {ADDRESS_LINE1}<br />
                  {ADDRESS_LINE2}
                </address>
                <p className="text-navy-400 font-body text-xs mt-2">
                  FL License: {LICENSE_NUMBER}
                </p>
              </div>
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
        <MeetYourAgentSection />
        <TrustSection />
        <WhyLicensedAgentSection />
        <DifferentSection />
        <ServiceAreaSection />
        <ClientsSection />
        <GoogleReviewsSection />
        <CommunitySection />
        <FAQSection />
        <ContactForm />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
