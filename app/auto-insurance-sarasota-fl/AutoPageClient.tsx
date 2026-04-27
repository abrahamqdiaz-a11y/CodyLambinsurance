"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 555-0100";
const PHONE_HREF = "+19415550100";

const switchReasons = [
  {
    title: "My rate went up at renewal",
    text: "If your policy went up at renewal, we help you compare Sarasota auto insurance options and review available discounts.",
  },
  {
    title: "They want better coverage",
    text: "Many drivers want more than the minimum. We walk you through what each option covers so you can better protect your family.",
  },
  {
    title: "Poor customer service",
    text: "Here you speak with real people at a local agency, not a call center. We answer your questions clearly and follow through.",
  },
  {
    title: "New car or new license",
    text: "If you bought a car or just started driving in Florida, we guide you step by step with a Sarasota insurance quote that's easy to understand.",
  },
];

const coverageItems = [
  {
    title: "Liability",
    text: "Helps cover damage to other people or property when you are responsible for an accident.",
  },
  {
    title: "Full Coverage",
    text: "A common combination of coverages for more complete protection based on your vehicle and situation.",
  },
  {
    title: "Collision",
    text: "Helps cover damage to your car after a collision, regardless of who was at fault.",
  },
  {
    title: "Comprehensive",
    text: "Covers non-collision events such as theft, vandalism, or certain weather events.",
  },
  {
    title: "Uninsured Motorist",
    text: "Protects you if you're hit by a driver with no insurance or insufficient coverage.",
  },
];

const faqItems = [
  {
    question: "How much does auto insurance cost in Sarasota?",
    answer:
      "It depends on your driving history, vehicle, type of coverage, and available discounts. At Lamb Insurance Agency we compare options to help you find a premium that fits your budget.",
  },
  {
    question: "Can I lower my monthly payment?",
    answer:
      "In many cases, yes. We can review deductibles, discounts, and coverage levels to find a more affordable monthly payment.",
  },
  {
    question: "What coverage do I need in Florida?",
    answer:
      "Florida requires minimum coverage, but that isn't always enough for everyone. We walk you through your options so you can choose with confidence.",
  },
  {
    question: "Can I switch before my renewal date?",
    answer:
      "Yes, you can typically switch before your renewal date. We help you review the timing and make the transition smooth.",
  },
  {
    question: "Do you offer bilingual service?",
    answer:
      "Yes. Our team is available in both English and Spanish so you fully understand your policy, your quote, and every step of the process.",
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
              Auto Insurance in Sarasota
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Auto Insurance in Sarasota, Explained Clearly
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            At Lamb Insurance Agency we help you compare coverage, understand your options, and find affordable protection without the hassle. Local, personal service right here in Sarasota.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get Your Free Quote
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call: {PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Trust indicators">
            {["Bilingual Service", "Local Sarasota Agency", "Fast Quote", "Clear Options"].map((item) => (
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

function WhyPeopleSwitchSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="switch-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="switch-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Why People Switch Auto Insurance in Sarasota
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {switchReasons.map((item, index) => (
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
            Auto Insurance Coverage Options, Explained Simply
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {coverageItems.map((item) => (
            <article key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-on-scroll">
              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-navy-200 font-body text-base leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="choose-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="choose-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Why Choose Lamb Insurance Agency?
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 text-navy-700 font-body">
          {[
            "Local agency in Sarasota",
            "Real people, not a call center",
            "We explain your options clearly",
            "Fast quote process",
            "Help choosing coverage for your budget",
          ].map((item) => (
            <li key={item} className="bg-white border border-navy-100 rounded-xl p-4 animate-on-scroll">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SarasotaSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="sarasota-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 id="sarasota-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Local Help for Sarasota Drivers
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              We work with Sarasota drivers who are on the road every day for work, school, and family. If you&apos;re looking for auto insurance in Sarasota with someone local who will actually explain it to you, we&apos;re here.
            </p>
            <p>
              We guide you through Florida requirements, coverage options that fit your routine, and how to keep your policy clear at every renewal.
            </p>
            <p>
              We can also help if you&apos;re looking to bundle policies. Explore <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">bundle options in Sarasota</Link> and get clear, local guidance.
            </p>
          </div>
        </div>
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
  const [submitted, setSubmitted] = useState(false);
  const [insuranceType, setInsuranceType] = useState("Auto");
  const [loading, setLoading] = useState(false);
  const [tcpaConsent, setTcpaConsent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.set("tcpa-consent", "yes");
    formData.set("tcpa-consent-timestamp", new Date().toISOString());

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      setSubmitted(true);
      setTcpaConsent(false);
      formRef.current?.reset();
      setInsuranceType("Auto");
    } catch (err) {
      console.error(err);
      alert("There was a problem submitting the form. Please call us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "form-input w-full rounded-lg px-4 py-3 text-navy-900 font-body text-sm placeholder-navy-400 focus:ring-0";
  const labelClass = "block font-body text-sm font-semibold text-navy-700 mb-1.5";

  return (
    <section id="contact" className="bg-warm py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              Don&apos;t Wait for Renewal or an Accident
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Get local help today for your Sarasota auto insurance. We walk you through your options and help you make a confident decision.
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
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-100/50 p-8 md:p-10 border border-navy-100">
              {submitted ? (
                <div className="text-center py-10" role="alert" aria-live="polite">
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">Thank You!</h3>
                  <p className="text-navy-600 font-body text-base leading-relaxed mb-6 max-w-sm mx-auto">
                    We received your request. A local agent will be in touch soon.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary px-6 py-3 rounded-lg font-semibold font-body text-sm">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  name="quote-request"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  aria-label="Quote request form"
                  noValidate
                >
                  <input type="hidden" name="form-name" value="quote-request" />
                  <div hidden aria-hidden="true">
                    <label>
                      Don&apos;t fill this field: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-800 mb-7">Get a Quote</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="full-name" className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                      <input id="full-name" type="text" name="full-name" required autoComplete="name" placeholder="Jane Smith" className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="address" className={labelClass}>Address <span className="text-red-500">*</span></label>
                      <input id="address" type="text" name="address" required autoComplete="street-address" placeholder="123 Main St, Sarasota, FL 34230" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>Email <span className="text-red-500">*</span></label>
                      <input id="email" type="email" name="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone <span className="text-red-500">*</span></label>
                      <input id="phone" type="tel" name="phone" required autoComplete="tel" placeholder="(941) 555-0100" className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="insurance-type" className={labelClass}>Insurance Type <span className="text-red-500">*</span></label>
                      <select id="insurance-type" name="insurance-type" required className={`${inputClass} cursor-pointer`} value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)}>
                        <option value="Auto">Auto Insurance</option>
                        <option value="Home">Home Insurance</option>
                        <option value="Life">Life Insurance</option>
                        <option value="Commercial">Commercial Insurance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="vehicle-year-make-model" className={labelClass}>Year, Make & Model <span className="ml-1 text-navy-400 font-normal">(optional)</span></label>
                      <input id="vehicle-year-make-model" type="text" name="vehicle-year-make-model" autoComplete="off" placeholder="e.g. 2022 Honda Accord" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="vin-number" className={labelClass}>VIN Number <span className="ml-1 text-navy-400 font-normal">(if available)</span></label>
                      <input id="vin-number" type="text" name="vin-number" autoComplete="off" placeholder="17-character VIN" maxLength={17} className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>Message / Additional Details <span className="ml-1 text-navy-400 font-normal">(optional)</span></label>
                      <textarea id="message" name="message" rows={4} placeholder="Tell us what you'd like to improve about your current coverage…" className={inputClass} />
                    </div>
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary mt-7 w-full py-4 rounded-lg font-semibold font-body text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? "Sending…" : "Get My Quote"}
                  </button>

                  <a href={`tel:${PHONE_HREF}`} className="mt-3 w-full inline-flex justify-center px-6 py-3 rounded-lg border border-navy-300 text-navy-800 font-semibold font-body hover:bg-navy-50 transition-colors">
                    Call Now
                  </a>

                  <div className="mt-6 p-4 rounded-xl border-2 border-navy-100 bg-navy-50/50">
                    <p className="text-xs text-navy-600 font-body leading-relaxed mb-3">
                      By checking this box, you confirm your preference to receive SMS messages from Lamb Insurance Agency. Messages may include quotes, policy updates, and customer support. Frequency may vary and carrier rates may apply. Reply STOP to cancel or HELP for help. Your consent is not a condition of purchase. See our <Link href="/terms" className="underline hover:text-sage-700 text-sage-600">Terms and Conditions</Link> and <Link href="/privacy-policy" className="underline hover:text-sage-700 text-sage-600">Privacy Policy</Link>.
                    </p>
                    <label htmlFor="tcpa-consent" className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input id="tcpa-consent" type="checkbox" name="tcpa-consent-checkbox" checked={tcpaConsent} onChange={(e) => setTcpaConsent(e.target.checked)} className="sr-only" />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${tcpaConsent ? "bg-sage-600 border-sage-600" : "border-navy-300 bg-white group-hover:border-sage-400"}`} aria-hidden="true">
                          {tcpaConsent && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-navy-600 font-body leading-relaxed">I agree to receive SMS text messages from Lamb Insurance Agency at the number provided.</p>
                    </label>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AutoPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <WhyPeopleSwitchSection />
        <CoverageSection />
        <WhyChooseSection />
        <SarasotaSection />
        <FAQSection />
        <ContactForm />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
