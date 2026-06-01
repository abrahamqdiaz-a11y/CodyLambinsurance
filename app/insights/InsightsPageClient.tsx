"use client";

import Link from "next/link";
import Image from "next/image";
import { ServicePageHeader, ServicePageFooter } from "../components/ServicePageChrome";
import { POSTS, formatDate } from "./posts";
import { useEffect } from "react";

const EMAIL = "calamb@acg.aaa.com";

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

export default function InsightsPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />

      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="bg-navy-900 pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "#1e3a5f",
              opacity: 0.04,
              filter: "blur(90px)",
              transform: "translate(35%, -35%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: "#2b4f7a",
              opacity: 0.03,
              filter: "blur(70px)",
              transform: "translate(-30%, 30%)",
            }}
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto px-5 relative">
            <p className="font-body text-sage-400 text-xs uppercase tracking-[0.2em] mb-4">
              Lamb Insurance Agency
            </p>
            <h1 className="font-display text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
              Insights
            </h1>
            <p className="font-body text-navy-300 text-lg leading-relaxed max-w-2xl">
              Coverage tips, Florida insurance news, and practical guidance to help
              you protect what matters most.
            </p>
          </div>
        </section>

        {/* ── Listing ─────────────────────────────────────────────────── */}
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5">
            {POSTS.length === 0 ? (
              /* Empty state */
              <div className="animate-on-scroll max-w-md mx-auto text-center py-16">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, #4a8050, #38653d)",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <h2 className="font-display text-navy-800 text-2xl font-bold mb-3">
                  Coming Soon
                </h2>
                <p className="font-body text-navy-600 text-base leading-relaxed">
                  Check back soon for our latest insights on Florida insurance, coverage
                  tips, and more.
                </p>
              </div>
            ) : (
              /* Post grid */
              <ul
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                role="list"
              >
                {POSTS.map((post, i) => (
                  <li
                    key={post.slug}
                    className={`animate-on-scroll${i === 1 ? " animate-on-scroll-delay-1" : i === 2 ? " animate-on-scroll-delay-2" : ""}`}
                  >
                    <Link
                      href={`/insights/${post.slug}`}
                      className="group flex flex-col h-full bg-white border border-navy-100 rounded-2xl overflow-hidden service-card focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                      aria-label={`Read: ${post.title}`}
                    >
                      {/* Thumbnail */}
                      {post.thumbnail ? (
                        <div className="relative w-full aspect-[16/9] bg-navy-100 overflow-hidden">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-[16/9] bg-navy-800 flex items-center justify-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-navy-500"
                            aria-hidden="true"
                          >
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                          </svg>
                        </div>
                      )}

                      {/* Card body */}
                      <div className="flex flex-col flex-1 p-6">
                        <time
                          dateTime={post.date}
                          className="font-body text-xs text-navy-500 uppercase tracking-wider mb-3 block"
                        >
                          {formatDate(post.date)}
                        </time>
                        <h2 className="font-display text-navy-800 text-lg font-bold leading-snug mb-3 group-hover:text-sage-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="font-body text-navy-600 text-sm leading-relaxed flex-1 mb-5">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-sage-500 group-hover:text-sage-600 transition-colors">
                          Read more
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* ── CTA banner ──────────────────────────────────────────────── */}
        <section className="bg-navy-900 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-5 text-center animate-on-scroll">
            <p className="font-body text-sage-400 text-xs uppercase tracking-[0.2em] mb-4">
              Have questions?
            </p>
            <h2 className="font-display text-white text-2xl md:text-3xl font-bold mb-4">
              Talk to a real agent — no hold music.
            </h2>
            <p className="font-body text-navy-300 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Call or email Cody Lamb directly. We explain your options clearly and help
              you find coverage that actually fits your situation.
            </p>
            <Link
              href="/quote"
              className="btn-primary inline-block px-7 py-3.5 rounded-lg font-semibold font-body"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>

      <ServicePageFooter email={EMAIL} />
    </>
  );
}
