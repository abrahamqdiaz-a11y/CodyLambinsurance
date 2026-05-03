"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";

const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";
const EMAIL = "calamb@acg.aaa.com";

type IconType = "auto" | "home" | "life" | "bundle";

const services: { title: string; desc: string; icon: IconType }[] = [
  {
    title: "Seguro de Auto",
    desc: "Protección para su carro con opciones de cobertura según su situación y presupuesto. Le ayudamos a entender lo que necesita sin complicaciones.",
    icon: "auto",
  },
  {
    title: "Seguro de Casa",
    desc: "Proteja su hogar y lo que más le importa. Revisamos opciones de cobertura para propietarios en Sarasota, Bradenton y áreas cercanas.",
    icon: "home",
  },
  {
    title: "Seguro de Vida",
    desc: "Ayude a proteger el futuro de su familia con cobertura adecuada para sus metas y responsabilidades.",
    icon: "life",
  },
  {
    title: "Auto + Casa",
    desc: "Combine sus pólizas de auto y casa para simplificar pagos y revisar descuentos disponibles según elegibilidad.",
    icon: "bundle",
  },
];

const reasons = [
  "La renovación subió",
  "Quieren comparar precios",
  "Compraron carro nuevo",
  "Se mudaron a Florida",
  "Quieren mejor cobertura",
  "Prefieren hablar con una persona real",
];

const whyUs = [
  "Atención amable y profesional",
  "Personas reales, no call center",
  "Oficina local",
  "Respuestas claras",
  "Ayuda rápida",
  "Servicio para Sarasota, Bradenton y alrededores",
];

const faqItems = [
  {
    question: "¿Por qué subió mi seguro de auto en Florida?",
    answer:
      "El seguro de auto en Florida puede subir por costos de reparación, más accidentes, clima severo y cambios en las tarifas de las aseguradoras. Aunque usted no haya tenido accidentes ni multas, su renovación todavía puede verse afectada por las condiciones del mercado. Podemos ayudarle a revisar opciones y comparar cobertura disponible.",
  },
  {
    question: "¿Puedo cambiar de seguro antes de renovar?",
    answer:
      "Sí. Muchas personas cambian de seguro antes de la renovación cuando encuentran una mejor opción o una mejor cobertura. Podemos explicarle el proceso y ayudarle a revisar detalles antes de hacer el cambio.",
  },
  {
    question: "¿Qué cubre full coverage?",
    answer:
      "Normalmente incluye responsabilidad civil, comprehensive y collision. La cobertura adecuada depende de su carro, presupuesto y situación personal.",
  },
  {
    question: "¿Incluye flood el seguro de casa?",
    answer:
      "No normalmente. Muchas pólizas de casa no incluyen flood y puede necesitar cobertura separada según la ubicación y riesgo de la propiedad. Podemos ayudarle a revisar sus opciones.",
  },
  {
    question: "¿Puedo combinar auto y casa?",
    answer:
      "Sí. Combinar pólizas de auto y casa puede simplificar pagos y en algunos casos ofrecer descuentos disponibles. Las opciones dependen de la aseguradora y su situación.",
  },
];

function CarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServiceIcon({ type, className }: { type: IconType; className?: string }) {
  switch (type) {
    case "auto":
      return <CarIcon className={className} />;
    case "home":
      return <HomeIcon className={className} />;
    case "life":
      return <ShieldIcon className={className} />;
    case "bundle":
      return <LayersIcon className={className} />;
  }
}

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
    <section
      id="inicio"
      className="hero-pattern min-h-screen flex flex-col justify-center relative overflow-hidden"
      aria-labelledby="hero-heading"
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
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
              Sarasota · Bradenton · Florida
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Seguro de Auto, Casa y Vida en Sarasota y Bradenton
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Habla con una persona real sobre sus opciones de seguro. Estamos aquí para ayudarle con
            respuestas claras, atención cercana y opciones que se ajusten a su necesidad y presupuesto.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={`tel:${PHONE_HREF}`}
              className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center"
              aria-label={`Llamar a Lamb Insurance Agency al ${PHONE_DISPLAY}`}
            >
              Llamar Ahora
            </a>
            <Link
              href="#contacto"
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Obtener Cotización
            </Link>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
            aria-label="Indicadores de confianza"
          >
            {[
              "Habla español con nosotros",
              "Oficina local en Sarasota",
              "Personas reales disponibles",
              "Sin compromiso",
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

function ServicesSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="services-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            Cómo Podemos Ayudarle
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Le ayudamos a entender sus opciones y encontrar la cobertura que se ajuste a usted y su
            familia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`bg-white border border-navy-100 rounded-2xl p-6 service-card animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 4)}`}
            >
              <div className="w-12 h-12 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center mb-5 text-sage-600">
                <ServiceIcon type={service.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-800 mb-3">{service.title}</h3>
              <p className="text-navy-600 font-body text-sm leading-relaxed">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonsSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="reasons-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="reasons-heading"
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Razones Por Las Que Nos Llaman
          </h2>
          <p className="text-navy-300 font-body text-base leading-relaxed">
            Muchas personas en Sarasota y Bradenton nos contactan por estas razones. Si alguna le
            suena familiar, estamos aquí para ayudarle.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className={`flex items-center gap-3 bg-white/8 border border-white/10 rounded-xl p-4 animate-on-scroll animate-on-scroll-delay-${Math.min((index % 4) + 1, 4)}`}
            >
              <div className="w-8 h-8 rounded-full bg-sage-600/20 border border-sage-500/30 flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-4 h-4 text-sage-400" />
              </div>
              <p className="text-navy-100 font-body text-sm leading-snug">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="why-us-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="why-us-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            Por Qué Elegirnos
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-4">
          {whyUs.map((item, index) => (
            <li
              key={item}
              className={`flex items-center gap-3 bg-white border border-navy-100 rounded-xl p-4 animate-on-scroll animate-on-scroll-delay-${Math.min((index % 4) + 1, 4)}`}
            >
              <div className="w-8 h-8 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-4 h-4 text-sage-600" />
              </div>
              <span className="text-navy-700 font-body text-base">{item}</span>
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
    <section className="bg-cream py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="faq-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.question}
                className="bg-white border border-navy-100 rounded-xl p-6 animate-on-scroll"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left font-display text-lg font-bold text-navy-800 pr-8 relative"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span
                    className={`absolute right-0 top-1 text-sage-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
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

function CTASection() {
  return (
    <section id="contacto" className="bg-navy-950 py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="cta-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            >
              Contáctenos Hoy
            </h2>
            <p className="text-navy-300 font-body text-base md:text-lg leading-relaxed mb-8">
              Llámenos o visítenos. Estamos listos para ayudarle con sus opciones de seguro.
            </p>

            <div className="flex items-start gap-3 mb-8">
              <svg
                className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              <address className="not-italic text-navy-300 font-body text-base">
                5893 Whitfield Ave, Sarasota, FL 34243
              </address>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center"
                aria-label={`Llamar al ${PHONE_DISPLAY}`}
              >
                Llamar Ahora
              </a>
              <Link
                href="/#contact"
                className="btn-outline px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center"
              >
                Obtener Cotización
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 animate-on-scroll animate-on-scroll-delay-2">
            <div className="bg-navy-900 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-sage-300 text-xs uppercase tracking-widest font-body mb-3">
                Llámenos
              </p>
              <a
                href={`tel:${PHONE_HREF}`}
                className="font-display text-2xl md:text-3xl font-bold text-white hover:text-sage-300 transition-colors block mb-3"
                aria-label={`Llamar al ${PHONE_DISPLAY}`}
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-navy-400 font-body text-sm leading-relaxed">
                Una persona real contestará para ayudarle con sus preguntas de seguro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EspanolPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content" lang="es">
        <Hero />
        <ServicesSection />
        <ReasonsSection />
        <WhyUsSection />
        <FAQSection />
        <CTASection />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
