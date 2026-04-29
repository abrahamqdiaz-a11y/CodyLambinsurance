"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { INSURANCE_LINKS } from "./constants/insuranceLinks";

// ── Constants ──────────────────────────────────────────────
const EMAIL = "calamb@acg.aaa.com";

const SERVICES = [
  {
    icon: "/car insurance icon.png",
    title: "Auto Insurance",
    desc: "Customized coverage to keep you protected on the road, with options that fit your driving habits and budget.",
    id: "auto",
  },
  {
    icon: "/home ins icon.png",
    title: "Home Insurance",
    desc: "Reliable protection for your home and everything inside it—so you can have peace of mind no matter what comes your way.",
    id: "home",
  },
  {
    icon: "/life insurance icon.png",
    title: "Life Insurance",
    desc: "Secure your family's future with flexible life insurance options designed to provide long-term financial protection.",
    id: "life",
  },
  {
    icon: "/commerical insurance icon.png",
    title: "Commercial Insurance",
    desc: "Smart coverage solutions to protect your business, employees, and operations—so you can focus on growth.",
    id: "commercial",
  },
];

const WHY_US = [
  "We review your policies with you so you actually understand your coverage",
  "Personalized service — not one-size-fits-all",
  "Local expertise with a customer-first approach",
  "Fast, friendly, and reliable support",
];

// ── Scroll animation hook ──────────────────────────────────
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

// ── Header ─────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const [mobileInsuranceOpen, setMobileInsuranceOpen] = useState(false);
  const pathname = usePathname();
  const insuranceMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (insuranceMenuRef.current && !insuranceMenuRef.current.contains(event.target as Node)) {
        setInsuranceOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/97 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-navy-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        {/* Logo + Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Lamb Insurance Agency — home"
        >
          <Image
            src="/Untitled design (15).png"
            alt="Lamb Insurance Agency logo"
            width={40}
            height={44}
            className="h-9 md:h-11 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-sage-300 transition-colors">
              Lamb Insurance
            </span>
            <span className="text-sage-400 text-xs uppercase tracking-[0.2em] font-body">
              Agency
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <Link href="/" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">Home</Link>
          <div
            ref={insuranceMenuRef}
            className="relative"
            onMouseEnter={() => setInsuranceOpen(true)}
            onMouseLeave={() => setInsuranceOpen(false)}
          >
            <Link
              href="/#services"
              onClick={() => setInsuranceOpen(false)}
              className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors"
            >
              Insurance
            </Link>
            {insuranceOpen && (
              <div className="absolute top-full left-0 min-w-72 rounded-lg border border-white/10 bg-navy-950/98 backdrop-blur-md shadow-lg shadow-black/20 py-2">
                {INSURANCE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 text-sm font-body tracking-wide transition-colors ${pathname === item.href ? "text-white bg-white/10" : "text-navy-200 hover:text-white hover:bg-white/5"}`}
                    onClick={() => setInsuranceOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">About</Link>
          <Link href="#contact" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">Contact</Link>
          <Link href="/espanol" className="nav-link text-sage-300 hover:text-white text-sm font-body tracking-wide transition-colors">Español</Link>
          <Link
            href="#contact"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold font-body tracking-wide"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-400"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile navigation">
            <Link href="/" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Home</Link>
            <button
              type="button"
              onClick={() => setMobileInsuranceOpen((prev) => !prev)}
              className="text-left text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors"
              aria-expanded={mobileInsuranceOpen}
            >
              Insurance
            </button>
            {mobileInsuranceOpen && (
              <div className="pl-4">
                {INSURANCE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block min-h-11 py-3 px-3 rounded-lg font-body text-sm tracking-wide transition-colors ${pathname === item.href ? "text-white bg-white/10" : "text-navy-200 hover:text-white hover:bg-white/5"}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/about" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>About</Link>
            <Link href="#contact" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/espanol" className="text-sage-300 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Español</Link>
            <Link href="#contact" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Get a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// ── Hero Quote Form ────────────────────────────────────────
function HeroQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
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
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please call us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-lg px-4 py-3.5 pl-11 text-navy-900 font-body text-sm border border-slate-200 bg-white placeholder-navy-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-200/60 transition-all";

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-navy-900/10 border border-slate-100 p-7 w-full">
      {submitted ? (
        <div className="text-center py-6" role="alert" aria-live="polite">
          <div
            className="w-14 h-14 bg-sage-50 border border-sage-200 rounded-full flex items-center justify-center mx-auto mb-4"
            aria-hidden="true"
          >
            <svg className="w-7 h-7 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-navy-800 mb-2">Request Received!</h3>
          <p className="text-navy-500 font-body text-sm mb-5">
            We&#39;ll be in touch shortly with your free quote.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary px-5 py-2.5 rounded-lg font-semibold font-body text-sm"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <>
          <div className="mb-5 text-center">
            <h2 className="font-display text-xl font-bold text-navy-900 mb-1">
              Get Your Free Quote
            </h2>
            <p className="text-navy-400 font-body text-sm">Quick. Easy. No Obligation.</p>
          </div>

          <form
            ref={formRef}
            name="hero-quote"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            aria-label="Quick quote request form"
          >
            <input type="hidden" name="form-name" value="hero-quote" />
            <div hidden aria-hidden="true">
              <label>Don&#39;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
            </div>

            <div className="space-y-3">
              {/* Full Name */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="full-name"
                  required
                  autoComplete="name"
                  placeholder="Full Name"
                  className={inputCls}
                  aria-label="Full Name"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="Phone Number"
                  className={inputCls}
                  aria-label="Phone Number"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Email Address"
                  className={inputCls}
                  aria-label="Email Address"
                />
              </div>

              {/* Insurance Type */}
              <select
                name="insurance-type"
                required
                defaultValue=""
                className="w-full rounded-lg px-4 py-3.5 text-navy-900 font-body text-sm border border-slate-200 bg-white focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-200/60 transition-all cursor-pointer"
                aria-label="Insurance Type"
              >
                <option value="" disabled>Insurance Type</option>
                <option value="Auto">Auto Insurance</option>
                <option value="Home">Home Insurance</option>
                <option value="Life">Life Insurance</option>
                <option value="Commercial">Commercial Insurance</option>
                <option value="Other">Other</option>
              </select>

              {/* ZIP Code */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="zip"
                  required
                  inputMode="numeric"
                  placeholder="ZIP Code"
                  maxLength={5}
                  className={inputCls}
                  aria-label="ZIP Code"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 rounded-lg font-semibold font-body text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Get My Quote →"}
              </button>

              {/* SMS Disclosure + Consent Checkbox */}
              <div className="mt-4 p-4 rounded-xl border-2 border-navy-100 bg-navy-50/50">
                <p className="text-xs text-navy-600 font-body leading-relaxed mb-3">
                  By checking the box below, you confirm your preference regarding SMS messages from Lamb Insurance Agency. Messages may include insurance quotes, policy updates, and customer support. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Consent is not a condition of purchase. See our{" "}
                  <Link href="/terms" className="underline hover:text-sage-700 text-sage-600">
                    Terms &amp; Conditions
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy-policy" className="underline hover:text-sage-700 text-sage-600">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <label htmlFor="hero-tcpa-consent" className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      id="hero-tcpa-consent"
                      type="checkbox"
                      name="tcpa-consent-checkbox"
                      checked={tcpaConsent}
                      onChange={(e) => setTcpaConsent(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        tcpaConsent
                          ? "bg-sage-600 border-sage-600"
                          : "border-navy-300 bg-white group-hover:border-sage-400"
                      }`}
                      aria-hidden="true"
                    >
                      {tcpaConsent && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-navy-600 font-body leading-relaxed">
                    I agree to receive SMS text messages from Lamb Insurance Agency at the phone number provided.
                  </p>
                </label>
              </div>
            </div>
          </form>

          <p className="text-center text-navy-400 font-body text-xs mt-4 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your information is safe and secure.
          </p>
        </>
      )}
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────
function Hero() {
  const TrustBadge = () => (
    <div
      className="bg-navy-900/95 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl border border-white/10"
      aria-label="Trust indicator"
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-600/20 border border-sage-500/30 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg className="w-5 h-5 text-sage-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <p className="text-white font-body text-xs font-bold leading-snug">Local Advisors.</p>
        <p className="text-navy-300 font-body text-xs leading-snug">Trusted By Thousands</p>
        <p className="text-navy-300 font-body text-xs leading-snug">Across Florida.</p>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(238,242,248,0.55) 0%, rgba(229,237,246,0.55) 45%, rgba(216,229,243,0.55) 100%), url('/backgorund.house.image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Subtle decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "#1e3a5f", opacity: 0.05, filter: "blur(90px)", transform: "translate(35%, -35%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#2b4f7a", opacity: 0.04, filter: "blur(70px)", transform: "translate(-30%, 30%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-24 pb-14 md:pt-32 md:pb-20">
        {/* ── Three-column grid (desktop) / stacked (mobile) ── */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_400px_390px] lg:gap-10 xl:gap-14 lg:items-center">

          {/* ── Col 1: Left copy ── */}
          <div>
            {/* Trust label */}
            <p className="text-navy-700 font-body text-xs font-bold uppercase tracking-[0.18em] mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-navy-600 inline-block" aria-hidden="true" />
              Local Insurance You Can Trust
            </p>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-navy-900 leading-[1.08] mb-3"
            >
              Better Coverage.<br />
              Better Service.
            </h1>

            {/* Script italic line */}
            <p className="font-display italic text-2xl md:text-3xl text-navy-600 mb-6 leading-snug">
              Right Here at Home.
            </p>

            {/* Paragraph */}
            <p className="text-navy-600 font-body text-base leading-relaxed mb-7 max-w-sm">
              We make insurance simple. Get the right coverage for auto, home, life, and more with local advisors who are here when you need us most.
            </p>

            {/* Trust bullets */}
            <ul className="space-y-2.5 mb-8" aria-label="Key benefits">
              {["Local & Independent", "Fast, Free Quotes", "Real People"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-800 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-navy-700 font-body text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get a Free Quote
              </a>
              <a
                href="tel:+19413121234"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold font-body text-base border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-all"
                aria-label="Call Lamb Insurance Agency at (941) 312-1234"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (941) 312-1234
              </a>
            </div>
          </div>

          {/* ── Col 2: Quote form card ── */}
          <div className="w-full">
            <HeroQuoteForm />
          </div>

          {/* ── Col 3: Agent photo + trust badge (desktop only) ── */}
          <div className="hidden lg:flex flex-col items-end self-stretch relative">
            <div className="relative w-full h-full flex items-end justify-center">
              <div
                className="absolute inset-x-4 bottom-2 h-40 rounded-full bg-navy-900/25 blur-3xl"
                aria-hidden="true"
              />
              <Image
                src="/Untitled design (16).png"
                alt="Cody Lamb, local insurance advisor serving Sarasota, FL"
                width={450}
                height={650}
                className="object-contain object-bottom w-full max-h-[650px] drop-shadow-xl mix-blend-multiply"
                style={{ maskImage: "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.4) 82%, transparent 100%)" }}
                priority
              />
              {/* Floating trust badge */}
              <div className="absolute bottom-6 right-0 max-w-[210px]">
                <TrustBadge />
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile-only: Agent photo + trust badge (below form) ── */}
        <div className="lg:hidden mt-8 flex flex-col items-center gap-4">
          <div className="w-full max-w-[360px]">
            <Image
              src="/Untitled design (16).png"
              alt="Cody Lamb, local insurance advisor serving Sarasota, FL"
              width={360}
              height={480}
              className="object-contain w-full drop-shadow-lg mix-blend-multiply"
              style={{ maskImage: "linear-gradient(to bottom, black 65%, rgba(0,0,0,0.35) 85%, transparent 100%)" }}
            />
          </div>
          <div className="w-full max-w-sm">
            <TrustBadge />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ───────────────────────────────────────────────
function Services() {
  useScrollReveal();

  return (
    <section
      id="services"
      className="bg-cream py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="max-w-xl mb-14 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="services-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            What We Offer
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Comprehensive coverage options tailored to protect every part of your life—
            from your car to your career.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className={`service-card bg-white rounded-2xl p-7 border border-navy-100 animate-on-scroll animate-on-scroll-delay-${i + 1}`}
              aria-labelledby={`service-${s.id}-title`}
            >
              <div
                className="w-14 h-14 rounded-xl bg-sage-50 flex items-center justify-center mb-5 border border-sage-100"
                aria-hidden="true"
              >
                <Image src={s.icon} alt="" width={40} height={40} className="object-contain" />
              </div>
              <h3
                id={`service-${s.id}-title`}
                className="font-display text-lg font-bold text-navy-800 mb-3"
              >
                {s.title}
              </h3>
              <p className="text-navy-600 font-body text-sm leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="inline-block mt-5 text-sage-600 text-sm font-semibold font-body hover:text-sage-700 transition-colors"
                aria-label={`Get a quote for ${s.title}`}
              >
                Get a quote →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Us ─────────────────────────────────────────────────
function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-navy-900 py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="why-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            >
              Why Choose{" "}
              <span className="text-sage-300">Lamb Insurance?</span>
            </h2>
            <p className="text-navy-300 font-body text-base leading-relaxed mb-8">
              We&#39;re not a faceless call center. We&#39;re a local agency that takes the time
              to know you, your family, and your goals—so your coverage actually makes sense for
              your life.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block px-7 py-3.5 rounded-lg font-semibold font-body text-base"
            >
              Start with a Free Consultation
            </a>
          </div>

          {/* Right — checklist */}
          <ul className="space-y-4" aria-label="Reasons to choose Lamb Insurance Agency">
            {WHY_US.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-${i + 1}`}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600/30 border border-sage-500/40 flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-sage-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-navy-200 font-body text-base leading-relaxed pt-0.5">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-on-scroll"
          aria-label="Agency highlights"
        >
          {[
            { value: "4", label: "Coverage Types" },
            { value: "100%", label: "Personalized Service" },
            { value: "Local", label: "Florida Expertise" },
            { value: "Free", label: "Quotes & Consultations" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-sage-300 mb-1">
                {s.value}
              </div>
              <div className="text-navy-400 font-body text-sm uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact Form ───────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [insuranceType, setInsuranceType] = useState("");
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
    } catch (err) {
      console.error(err);
      alert("Something went wrong submitting the form. Please call us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "form-input w-full rounded-lg px-4 py-3 text-navy-900 font-body text-sm placeholder-navy-400 focus:ring-0";
  const labelClass = "block font-body text-sm font-semibold text-navy-700 mb-1.5";

  return (
    <section
      id="contact"
      className="bg-warm py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="contact-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight"
            >
              Get Your Free Quote
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Ready to find the right coverage? Fill out the form and we&#39;ll be in touch promptly
              to walk you through your options—no pressure, no jargon.
            </p>

            {/* Contact info cards */}
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
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">
                    Email Us
                  </p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-2">
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-100/50 p-8 md:p-10 border border-navy-100">
              {submitted ? (
                /* Thank-you state */
                <div className="text-center py-10" role="alert" aria-live="polite">
                  <div className="mb-5" aria-hidden="true"></div>
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">
                    Thank You!
                  </h3>
                  <p className="text-navy-600 font-body text-base leading-relaxed mb-6 max-w-sm mx-auto">
                    Your quote request has been received. We&#39;ll review your information and
                    reach out to you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary px-6 py-3 rounded-lg font-semibold font-body text-sm"
                  >
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
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="quote-request" />
                  <div hidden aria-hidden="true">
                    <label>
                      Don&#39;t fill this out:{" "}
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-800 mb-7">
                    Request a Free Quote
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="full-name" className={labelClass}>
                        Full Name <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        name="full-name"
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>

                    {/* Address */}
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className={labelClass}>
                        Address <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        required
                        autoComplete="street-address"
                        placeholder="123 Main St, Sarasota, FL 34230"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="jane@example.com"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        placeholder="(941) 555-0100"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>

                    {/* Insurance Type */}
                    <div className="sm:col-span-2">
                      <label htmlFor="insurance-type" className={labelClass}>
                        Insurance Type <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <select
                        id="insurance-type"
                        name="insurance-type"
                        required
                        className={`${inputClass} cursor-pointer`}
                        value={insuranceType}
                        onChange={(e) => setInsuranceType(e.target.value)}
                        aria-required="true"
                      >
                        <option value="" disabled>
                          Select coverage type…
                        </option>
                        <option value="Home">Home Insurance</option>
                        <option value="Auto">Auto Insurance</option>
                        <option value="Life">Life Insurance</option>
                        <option value="Commercial">Commercial Insurance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Vehicle fields — shown for Auto */}
                    {(insuranceType === "Auto" || insuranceType === "") && (
                      <>
                        <div>
                          <label htmlFor="vehicle-year-make-model" className={labelClass}>
                            Year, Make &amp; Model
                            <span className="ml-1 text-navy-400 font-normal">(optional)</span>
                          </label>
                          <input
                            id="vehicle-year-make-model"
                            type="text"
                            name="vehicle-year-make-model"
                            autoComplete="off"
                            placeholder="e.g. 2022 Honda Accord"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="vin-number" className={labelClass}>
                            VIN Number
                            <span className="ml-1 text-navy-400 font-normal">(if handy)</span>
                          </label>
                          <input
                            id="vin-number"
                            type="text"
                            name="vin-number"
                            autoComplete="off"
                            placeholder="17-character VIN"
                            maxLength={17}
                            className={inputClass}
                          />
                        </div>
                      </>
                    )}

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>
                        Message / Additional Details
                        <span className="ml-1 text-navy-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us anything that would help us find the right coverage for you…"
                        className={inputClass}
                        aria-describedby="message-hint"
                      />
                      <p id="message-hint" className="text-xs text-navy-400 font-body mt-1.5">
                        Current coverage provider, specific questions, budget, etc.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary mt-7 w-full py-4 rounded-lg font-semibold font-body text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-live="polite"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Submit My Quote Request →"
                    )}
                  </button>

                  {/* SMS Disclosure + Consent Checkbox */}
                  <div className="mt-6 p-4 rounded-xl border-2 border-navy-100 bg-navy-50/50">
                    <p className="text-xs text-navy-600 font-body leading-relaxed mb-3">
                      By checking the box below, you confirm your preference regarding SMS
                      messages from Lamb Insurance Agency. Messages may include insurance
                      quotes, policy updates, and customer support. Message frequency varies.
                      Message and data rates may apply. Reply STOP to unsubscribe or HELP for
                      assistance. Consent is not a condition of purchase. See our{" "}
                      <Link href="/terms" className="underline hover:text-sage-700 text-sage-600">
                        Terms &amp; Conditions
                      </Link>
                      {" "}and{" "}
                      <Link href="/privacy-policy" className="underline hover:text-sage-700 text-sage-600">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <label
                      htmlFor="tcpa-consent"
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input
                          id="tcpa-consent"
                          type="checkbox"
                          name="tcpa-consent-checkbox"
                          checked={tcpaConsent}
                          onChange={(e) => setTcpaConsent(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            tcpaConsent
                              ? "bg-sage-600 border-sage-600"
                              : "border-navy-300 bg-white group-hover:border-sage-400"
                          }`}
                          aria-hidden="true"
                        >
                          {tcpaConsent && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-navy-600 font-body leading-relaxed">
                        I agree to receive SMS text messages from Lamb Insurance Agency at the
                        phone number provided.
                      </p>
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

// ── Footer ─────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-300" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <p className="font-display text-white text-xl font-bold">Lamb Insurance Agency</p>
            <p className="text-sage-400 text-xs uppercase tracking-widest mt-1">
              Simple. Personal. Built for You.
            </p>
          </div>
          <p className="text-navy-400 font-body text-sm leading-relaxed max-w-xs">
            Protecting families, homes, vehicles, and businesses throughout Florida with coverage
            tailored to your life.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">
            Contact Us
          </h3>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">
                Email
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-navy-200 hover:text-white transition-colors break-all"
                aria-label={`Send email to ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        {/* Services + Legal */}
        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">
            Insurance
          </h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            <li><Link href="/auto-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Auto Insurance</Link></li>
            <li><Link href="/condo-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Condo Insurance</Link></li>
            <li><Link href="/flood-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Flood Insurance</Link></li>
            <li><Link href="/bundle-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Bundle Insurance</Link></li>
            <li><Link href="/citizens-insurance-alternative-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Citizens Insurance Alternative</Link></li>
          </ul>

          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-4">
            Legal
          </h3>
          <ul className="space-y-2 font-body text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="text-navy-400 hover:text-navy-200 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-navy-400 hover:text-navy-200 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-navy-400 hover:text-navy-200 transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-navy-500">
          <p>© {year} Lamb Insurance Agency. All rights reserved.</p>
          <p>
            Licensed Insurance Agency &nbsp;|&nbsp; Florida
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
