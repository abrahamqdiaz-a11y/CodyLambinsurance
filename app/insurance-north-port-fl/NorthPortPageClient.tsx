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
    description: "HO-3 policies for North Port's growing base of newer single-family construction.",
  },
  {
    label: "Flood Insurance",
    href: "/flood-insurance-sarasota-fl",
    description: "NFIP and private flood options for North Port properties near the Myakka River watershed.",
  },
  {
    label: "Auto Insurance",
    href: "/auto-insurance-sarasota-fl",
    description: "Florida auto coverage for North Port commuters and Wellen Park residents.",
  },
  {
    label: "Bundle Insurance",
    href: "/bundle-insurance-sarasota-fl",
    description: "Home and auto bundled for new North Port homeowners looking to simplify and save.",
  },
  {
    label: "Umbrella Insurance",
    href: "/umbrella-insurance-sarasota",
    description: "Excess liability protection above your home and auto limits — relevant for North Port homeowners with growing equity and asset exposure.",
  },
  {
    label: "Life Insurance",
    href: "/life-insurance-sarasota-fl",
    description: "Term and permanent life options for North Port families and retirees.",
  },
];

const faqItems = [
  {
    question: "Do I need flood insurance in North Port?",
    answer:
      "Parts of North Port fall within FEMA flood zones, particularly near the Myakka River, Cocoplum Waterway, and other drainage channels that run through the city. Standard homeowners policies exclude flooding under all circumstances. If your property has a federally-backed mortgage and falls in a Special Flood Hazard Area, flood coverage is required. Even outside those zones, flooding from intense rainfall is common in North Port during tropical systems, and the NFIP premium for a low-risk property is often manageable.",
  },
  {
    question: "Does new construction in Wellen Park come with any insurance advantages?",
    answer:
      "Yes, in most cases. Homes built under Florida's current building code -- post-2001 and especially post-2007 -- typically qualify for better windstorm terms than older construction. Builder warranties and newer roof materials also help at underwriting. That said, even new homes need to carry their own flood and windstorm coverage, which aren't automatically included in a standard homeowners policy. A wind mitigation inspection can document your home's specific features and unlock premium discounts.",
  },
  {
    question: "What should I know about insurance for a home with a well and septic system?",
    answer:
      "Standard homeowners policies do not cover well or septic system failures as part of the base policy. You can add equipment breakdown coverage or a service line endorsement to address some of these risks, but limits vary by carrier. Water backup coverage is a separate endorsement worth considering as well -- it covers damage from sewer backup or sump pump overflow, which can occur during heavy rain events. North Port has a significant number of properties on well and septic, so this comes up regularly.",
  },
  {
    question: "Does North Port's size affect my insurance or emergency services?",
    answer:
      "North Port is geographically large -- one of the largest cities by area in Florida -- which means some properties are farther from fire stations than they would be in a denser city. Carriers use fire protection class ratings that account for distance to the nearest fire station. Properties in lower protection classes (farther from fire stations) can see higher premiums. It's worth knowing your property's rating. If you're on the outer edges of North Port near Charlotte County, this is particularly relevant.",
  },
  {
    question: "I'm building new in North Port -- when do I need to get insurance?",
    answer:
      "If you're financing construction, your lender will typically require builder's risk coverage during the build phase. At closing on a completed new home, you'll need a standard homeowners policy in place, and your lender may require flood insurance if the property is in a designated flood zone. If you're buying from a builder, you'll often have a specific closing date with a deadline for proof of insurance. Call us with your timeline and we'll get it handled.",
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
            Home and Auto Insurance in North Port, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            North Port is one of the fastest-growing cities in Florida, and Wellen Park is adding thousands of new homeowners every year. That growth brings real insurance questions: new construction coverage, well and septic considerations, flood exposure near the Myakka River corridor, and how to make sure your policy is actually built for what Florida throws at it.
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
            {["New Construction", "Well and Septic", "Wellen Park", "Flood Coverage"].map((item) => (
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

function GrowthSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="growth-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="growth-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            New to North Port or Wellen Park?
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              North Port added more new residents than almost any other city in the country in recent years. Wellen Park -- built around a downtown lake district on the south end of the city -- is one of the most active master-planned communities in Florida. If you're buying new construction here, you're in good company, but you're also navigating a set of insurance questions that are different from what a resale buyer faces.
            </p>
            <p>
              New construction in Wellen Park and the surrounding areas generally benefits from post-2001 Florida building code, which requires stronger wind resistance than older homes. Concrete block construction, hip roofs, and impact-resistant windows are common features that carriers reward with lower windstorm premiums. Getting a wind mitigation inspection done early documents these features formally and can reduce your annual premium.
            </p>
            <p>
              Even so, new doesn't mean fully covered out of the box. Flood is never included in a homeowners policy, and North Port's Myakka River watershed and drainage channels mean some properties carry real flood exposure. Wind coverage may require a separate endorsement or come with a <Link href="/insights/florida-hurricane-deductible" className="text-sage-700 underline hover:text-sage-800">percentage hurricane deductible</Link> rather than a flat dollar amount. Knowing what your policy includes before storm season is how you avoid surprises after one.
            </p>
            <p>
              If you're coming from out of state, Florida's requirements are also different from what you're used to: windstorm exclusions, separate flood policies, no-fault auto, and 90-day plate transfer deadlines are all things most newcomers run into. We've walked a lot of Wellen Park buyers through this transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WellSepticSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="wellseptic-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="wellseptic-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Well, Septic, and Coverage Gaps in North Port
          </h2>
          <div className="space-y-4 text-navy-200 font-body text-base leading-relaxed">
            <p>
              A significant portion of North Port properties run on private wells and septic systems rather than city water and sewer. This is straightforward day-to-day -- but it creates coverage gaps that homeowners don't always know about until something goes wrong.
            </p>
            <p>
              Standard homeowners policies don't automatically cover well pump failure, septic system damage, or service line breaks. If your well pump burns out or your septic needs emergency service, you're looking at a bill that can run into the thousands -- and unless you have the right endorsements, your homeowners policy likely won't touch it.
            </p>
            <p>
              Equipment breakdown coverage can help with mechanical failure of well pumps and HVAC systems. A service line endorsement covers buried pipes and utility lines from the street to your home. Water backup coverage is a separate add-on that covers damage from sewer backup or overflow -- relevant during North Port's summer rain events when drainage systems get pushed to capacity.
            </p>
            <p>
              None of these are expensive endorsements relative to the potential claims they cover. If your North Port property is on well and septic, it's worth making sure your policy is built with these exposures in mind.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: "Equipment Breakdown", desc: "Well pumps, HVAC, and mechanical systems" },
                { label: "Service Line Coverage", desc: "Buried pipes and utility lines to your home" },
                { label: "Water Backup", desc: "Sewer backup and sump overflow during storms" },
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
            Flood Risk and the Myakka River Corridor
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              North Port isn't on the coast, but it's not low-risk for flooding. The city sits near the Myakka River and the Cocoplum Waterway, with drainage channels running through large portions of the residential area. During active hurricane seasons and tropical systems, those channels can overtax quickly. FEMA flood maps show AE and X zones throughout North Port, and some properties are rerated under the newer Risk Rating 2.0 system in ways that surprised their owners.
            </p>
            <p>
              If your property has a federally-backed mortgage and sits in a FEMA Special Flood Hazard Area, flood insurance is required -- not optional. If you're in a low-to-moderate risk zone, it's technically optional but worth pricing. About a third of NFIP flood claims come from properties outside the high-risk zones.
            </p>
            <p>
              The NFIP is the most common option and available through most licensed agents. Private flood insurance has become more competitive in Florida in recent years, and for some North Port properties -- particularly those recently re-rated upward under Risk Rating 2.0 -- private flood offers lower premiums with similar or better coverage. We can price both and show you the comparison.
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
            Coverage We Offer North Port Residents
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
            Insurance questions specific to North Port -- answered directly.
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
            We serve all of Sarasota and Charlotte County. If you're in the North Port area, we cover your neighbors too.
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
                Just north on US-41. Home, flood, and auto insurance for Venice Island and the surrounding area.
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
              Get a Quote for North Port
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

export default function NorthPortPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <GrowthSection />
        <WellSepticSection />
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
