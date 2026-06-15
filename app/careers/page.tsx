import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "../components/ServicePageChrome";

export const metadata: Metadata = {
  title: "Careers | Lamb Insurance Agency — Sarasota, FL",
  description:
    "Join Lamb Insurance Agency, a newly opening AAA agency in Sarasota, FL. Ground-floor sales opportunity with uncapped earning potential, a real lead system, and the backing of a nationally recognized brand.",
  openGraph: {
    title: "Careers at Lamb Insurance Agency",
    description:
      "Ground-floor sales role at a brand-new AAA agency in Sarasota. Base + uncapped commission, real leads, nationally recognized brand.",
    url: "https://lambinsuranceagency.com/careers",
  },
};

function BadgePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-sage-500/15 text-sage-400 border border-sage-500/30 rounded-full px-3 py-1 text-xs font-body font-semibold tracking-wide">
      {children}
    </span>
  );
}

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center bg-navy-800/60 text-navy-200 border border-white/10 rounded-full px-3 py-1 text-xs font-body tracking-wide">
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm font-body text-navy-200 leading-relaxed">
      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-sage-500/20 border border-sage-500/40 flex items-center justify-center">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <path d="M1.5 4L3 5.5L6.5 2" stroke="#4a8050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </li>
  );
}

export default function CareersPage() {
  return (
    <>
      <ServicePageHeader />

      <main>
        {/* ── Hero ── */}
        <section className="bg-navy-900 pt-32 pb-20 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sage-400 text-xs font-body uppercase tracking-[0.2em] mb-4">
              Careers · Sarasota, FL
            </p>
            <h1 className="font-display text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Ground-floor sales role at a brand-new AAA agency
            </h1>
            <p className="text-navy-200 font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Lamb Insurance Agency is a newly opening AAA agency in Sarasota, FL. This is a
              ground-floor opportunity to join a nationally recognized brand with a real lead system
              and uncapped earning potential. If you can sell and you want a system you can actually
              earn from, this is the conversation worth having.
            </p>
            <Link
              href="/apply?role=sales-agent"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold font-body"
            >
              Apply now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── Openings ── */}
        <section className="bg-cream py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-navy-700 font-body text-xs uppercase tracking-[0.2em] font-semibold mb-10">
              Current openings
            </p>

            {/* Card 1 — Sales Agent */}
            <article className="bg-white rounded-2xl border border-navy-200/40 shadow-sm overflow-hidden mb-6">
              <div className="border-l-4 border-sage-500 p-8 sm:p-10">
                <div className="flex flex-wrap items-start gap-3 mb-5">
                  <BadgePill>
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400 inline-block" />
                    1 opening
                  </BadgePill>
                  <TagPill>Full-time · On-site, Sarasota</TagPill>
                  <TagPill>Mon–Fri, 9 AM–5 PM</TagPill>
                </div>

                <h2 className="font-display text-navy-900 text-2xl sm:text-3xl font-bold mb-4">
                  Sales Agent
                </h2>

                <p className="text-navy-700 font-body text-base leading-relaxed mb-8">
                  This isn't a role at a crowded, mature office — you're joining a newly opening AAA
                  agency at the ground floor, with a nationally recognized brand, a real lead system,
                  and upside that grows with you.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-navy-900 font-body font-bold text-sm uppercase tracking-wide mb-4">
                      What the role looks like
                    </h3>
                    <ul className="space-y-3">
                      <CheckItem>Work inbound leads and make outbound calls daily</CheckItem>
                      <CheckItem>Quote and close auto, home, and bundled policies</CheckItem>
                      <CheckItem>Run full policy reviews with every client</CheckItem>
                      <CheckItem>Offer AAA memberships and additional products</CheckItem>
                      <CheckItem>Hit weekly and monthly production targets</CheckItem>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-navy-900 font-body font-bold text-sm uppercase tracking-wide mb-4">
                      Who thrives here
                    </h3>
                    <p className="text-navy-600 font-body text-sm leading-relaxed">
                      You've sold before — insurance, auto, retail, it doesn't matter. You're
                      phone-confident, goal-driven, coachable, and fast on follow-up. You want a
                      system you can actually earn from and you want to build something.
                    </p>
                  </div>
                </div>

                {/* Compensation */}
                <div className="bg-navy-900 rounded-xl p-6 mb-8">
                  <h3 className="text-white font-body font-bold text-sm uppercase tracking-wide mb-4">
                    Compensation
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-navy-400 font-body text-xs uppercase tracking-wide mb-1">Structure</p>
                      <p className="text-white font-body font-semibold">Base + uncapped commission</p>
                    </div>
                    <div>
                      <p className="text-navy-400 font-body text-xs uppercase tracking-wide mb-1">Target earnings</p>
                      <p className="text-sage-300 font-display font-bold text-xl">$100K–$150K+</p>
                      <p className="text-navy-400 font-body text-xs">annually</p>
                    </div>
                    <div>
                      <p className="text-navy-400 font-body text-xs uppercase tracking-wide mb-1">Top performers</p>
                      <p className="text-white font-body font-semibold">Additional bonuses</p>
                    </div>
                  </div>
                </div>

                {/* Why now */}
                <div className="bg-sage-500/8 border border-sage-500/20 rounded-xl p-5 mb-8">
                  <p className="text-navy-800 font-body text-sm leading-relaxed">
                    <strong className="font-semibold text-navy-900">Why now:</strong> Ground-floor
                    access at a AAA agency is rare. Leads are provided, the brand does the heavy
                    lifting on trust — your job is to close.
                  </p>
                </div>

                <Link
                  href="/apply?role=sales-agent"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold font-body"
                >
                  Apply now
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Card 2 — CSR */}
            <article className="bg-white rounded-2xl border border-navy-200/40 shadow-sm overflow-hidden mb-10">
              <div className="border-l-4 border-navy-400 p-8 sm:p-10">
                <div className="flex flex-wrap items-start gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-navy-100 text-navy-500 border border-navy-200 rounded-full px-3 py-1 text-xs font-body font-semibold tracking-wide">
                    Talent pool · Not currently hiring
                  </span>
                  <TagPill>Full-time · On-site, Sarasota</TagPill>
                </div>

                <h2 className="font-display text-navy-900 text-2xl sm:text-3xl font-bold mb-4">
                  Customer Service Representative / Account Manager
                </h2>

                <p className="text-navy-700 font-body text-base leading-relaxed mb-6">
                  Service existing clients — handle policy changes, billing questions, claims
                  support, and renewals. Be the reason people stay.
                </p>

                <p className="text-navy-500 font-body text-sm mb-6">
                  We're building our talent pool now for future openings. Submit your info and
                  we'll reach out when we're ready to grow the team.
                </p>

                <Link
                  href="/apply?role=csr"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold font-body border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white transition-colors"
                >
                  Join our talent pool
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Open application */}
            <p className="text-center font-body text-navy-600 text-sm">
              Don't see the right fit?{" "}
              <Link
                href="/apply?role=open"
                className="text-sage-600 hover:text-sage-500 font-semibold underline underline-offset-2 transition-colors"
              >
                Send us your resume anyway →
              </Link>
            </p>
          </div>
        </section>

        {/* ── Why Lamb ── */}
        <section className="bg-navy-900 py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-white text-2xl sm:text-3xl font-bold mb-12 text-center">
              Why Lamb Insurance Agency
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "AAA brand recognition",
                  body: "Walk into every sales call with the trust of one of the most recognized insurance brands in the country already working for you.",
                },
                {
                  title: "Real leads, no cold prospecting",
                  body: "Leads are provided. You spend your time closing and building relationships, not hunting for phone numbers.",
                },
                {
                  title: "Ground-floor access",
                  body: "You're not joining a mature, crowded office. You're helping build something — and you get rewarded for it.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-navy-800/50 border border-white/8 rounded-xl p-6">
                  <h3 className="text-white font-display font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-navy-300 font-body text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-cream py-16 px-5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-navy-900 text-2xl sm:text-3xl font-bold mb-4">
              Ready to have the conversation?
            </h2>
            <p className="text-navy-600 font-body text-base mb-8">
              Applications take under two minutes. Send your resume and we'll be in touch if it's a
              fit.
            </p>
            <Link
              href="/apply?role=sales-agent"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold font-body"
            >
              Apply now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <ServicePageFooter email="calamb@acg.aaa.com" />
    </>
  );
}
