"use client";

import Link from "next/link";
import Image from "next/image";
import { ServicePageHeader, ServicePageFooter } from "../../components/ServicePageChrome";
import type { Post, FaqItem } from "../posts";
import { formatDate } from "../posts";
import { useEffect, useState } from "react";

const EMAIL = "contact@lambinsuranceagency.com";

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

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-navy-100 rounded-xl overflow-hidden bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-display text-navy-800 font-bold text-base md:text-lg hover:bg-sage-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-inset"
      >
        <span>{item.question}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-sage-400 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-sage-500 border-sage-500" : "bg-transparent"
          }`}
          aria-hidden="true"
        >
          <svg
            className={`w-4 h-4 transition-colors ${isOpen ? "text-white" : "text-sage-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 pt-1 text-navy-600 font-body text-base leading-relaxed border-t border-navy-50">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

function FaqSection({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="mt-14 pt-10 border-t border-navy-200" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="font-display text-navy-900 text-2xl md:text-3xl font-bold mb-8"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

function AuthorBio({ name, title }: { name: string; title: string }) {
  return (
    <aside
      className="mt-12 bg-white border border-navy-100 rounded-2xl p-6 md:p-8"
      aria-label="About the author"
    >
      <p className="font-body text-sage-600 text-xs uppercase tracking-widest mb-3">
        About the author
      </p>
      <h3 className="font-display text-xl font-bold text-navy-800 mb-0.5">{name}</h3>
      <p className="text-navy-500 font-body text-sm mt-0.5 mb-4">{title}</p>
      <p className="font-body text-navy-600 text-sm leading-relaxed">
        Cody Lamb is a licensed insurance agent with Lamb Insurance Agency in Sarasota, Florida,
        working with homeowners across Siesta Key, Longboat Key, Lakewood Ranch, and the
        surrounding area. License status can be verified through the{" "}
        <a
          href="https://www.myfloridacfo.com/division/agents"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage-600 hover:underline"
        >
          Florida Department of Financial Services
        </a>
        .
      </p>
    </aside>
  );
}

export default function InsightsPostClient({ post }: { post: Post }) {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-navy-900 pt-28 pb-12 md:pt-36 md:pb-16 relative overflow-hidden">
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

          <div className="max-w-3xl mx-auto px-5 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-body text-xs text-navy-500 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-navy-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-navy-700">/</li>
                <li>
                  <Link href="/insights" className="hover:text-navy-300 transition-colors">
                    Insights
                  </Link>
                </li>
                <li aria-hidden="true" className="text-navy-700">/</li>
                <li className="text-navy-400 truncate max-w-[200px]" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            <time
              dateTime={post.date}
              className="font-body text-sage-400 text-xs uppercase tracking-[0.2em] mb-4 block"
            >
              {formatDate(post.date)}
            </time>
            <h1 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {post.title}
            </h1>
            <p className="font-body text-navy-300 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* ── Thumbnail ────────────────────────────────────────────── */}
        {post.thumbnail && (
          <div className="bg-navy-950">
            <div className="max-w-3xl mx-auto px-5">
              <div className="relative w-full aspect-[16/9] rounded-b-2xl overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Article body ─────────────────────────────────────────── */}
        <article className="bg-cream py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-5">
            <div
              className="prose-insights"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author bio */}
            {post.author && post.authorTitle && (
              <AuthorBio name={post.author} title={post.authorTitle} />
            )}

            {/* FAQ accordion */}
            {post.faqItems && post.faqItems.length > 0 && (
              <FaqSection items={post.faqItems} />
            )}

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-navy-200">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-sage-500 hover:text-sage-600 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Back to Insights
              </Link>
            </div>
          </div>
        </article>

        {/* ── CTA banner ───────────────────────────────────────────── */}
        <section className="bg-navy-900 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-5 text-center animate-on-scroll">
            <p className="font-body text-sage-400 text-xs uppercase tracking-[0.2em] mb-4">
              Ready to review your coverage?
            </p>
            <h2 className="font-display text-white text-2xl md:text-3xl font-bold mb-4">
              Talk to Cody directly — no hold music.
            </h2>
            <p className="font-body text-navy-300 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              We explain your options clearly and help you find coverage that actually
              fits your life and budget.
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
