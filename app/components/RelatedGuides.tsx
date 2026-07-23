import Link from "next/link";

type Guide = {
  href: string;
  title: string;
  excerpt: string;
};

type RelatedGuidesProps = {
  guides: Guide[];
  heading?: string;
};

export default function RelatedGuides({ guides, heading = "Related Sarasota Insurance Guides" }: RelatedGuidesProps) {
  if (guides.length === 0) return null;
  return (
    <section className="bg-cream py-16 md:py-20" aria-labelledby="related-guides-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-8">
          <div className="section-rule" />
          <h2 id="related-guides-heading" className="font-display text-2xl md:text-3xl font-bold text-navy-800 leading-tight">
            {heading}
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="group block bg-white border border-navy-100 rounded-2xl p-6 hover:border-sage-300 hover:shadow-sm transition-all"
              >
                <p className="font-display text-base font-bold text-navy-800 group-hover:text-sage-700 transition-colors mb-2">
                  {guide.title} →
                </p>
                <p className="text-navy-500 font-body text-sm leading-relaxed">{guide.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
