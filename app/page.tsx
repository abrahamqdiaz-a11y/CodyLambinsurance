export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="bg-navy-800 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <span className="font-display text-xl font-bold tracking-wide">
              Cody Lamb Insurance Agency
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-body">
            <a href="#services" className="hover:text-sage-300 transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-sage-300 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-sage-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-navy-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-up">
            Protecting What Matters Most
          </h1>
          <p className="text-lg md:text-xl text-navy-200 max-w-2xl mb-8 animate-fade-up">
            Personalized insurance solutions for individuals, families, and
            businesses. We find the right coverage at the right price — so you
            can focus on what you love.
          </p>
          <a
            href="#contact"
            className="inline-block bg-sage-500 hover:bg-sage-600 text-white font-body font-semibold px-8 py-3 rounded transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-warm">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy-800 mb-12 text-center">
            Coverage That Fits Your Life
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Auto Insurance",
                description:
                  "Comprehensive and liability coverage to keep you protected on the road.",
              },
              {
                title: "Home Insurance",
                description:
                  "Protect your home and belongings with policies built for your unique situation.",
              },
              {
                title: "Life Insurance",
                description:
                  "Give your family financial security and peace of mind for the future.",
              },
              {
                title: "Business Insurance",
                description:
                  "Commercial coverage for small businesses, contractors, and professionals.",
              },
              {
                title: "Health Insurance",
                description:
                  "Individual and family health plans that work within your budget.",
              },
              {
                title: "Umbrella Policies",
                description:
                  "Extra liability protection that goes beyond standard policy limits.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-cream rounded-lg p-6 shadow-sm border border-navy-100"
              >
                <h3 className="font-display text-xl font-bold text-navy-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-navy-800 mb-6">
            About Cody Lamb
          </h2>
          <p className="text-navy-700 leading-relaxed mb-4">
            With years of experience serving clients across the region, Cody
            Lamb Insurance Agency is built on a foundation of trust, integrity,
            and genuine care for the people we protect. We are an independent
            agency, which means we work for you — not the insurance companies.
          </p>
          <p className="text-navy-700 leading-relaxed">
            We take the time to understand your situation, compare options from
            multiple top-rated carriers, and make sure you have the right
            coverage when you need it most.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-navy-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-navy-200 mb-8">
            Ready to review your coverage or get a quote? Reach out today.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="tel:+15555550100"
              className="bg-sage-500 hover:bg-sage-600 text-white font-semibold px-8 py-3 rounded transition-colors text-center"
            >
              Call Us
            </a>
            <a
              href="mailto:info@codylambinsurance.com"
              className="border border-navy-400 hover:border-white text-white font-semibold px-8 py-3 rounded transition-colors text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-navy-400 text-sm py-6 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Cody Lamb Insurance Agency. All rights reserved.</p>
      </footer>
    </main>
  );
}
