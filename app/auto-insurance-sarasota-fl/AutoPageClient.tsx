"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 555-0100";
const PHONE_HREF = "+19415550100";

const switchReasons = [
  {
    title: "El precio subió al renovar",
    text: "Si tu póliza aumentó en la renovación, te ayudamos a comparar opciones de seguro de auto Sarasota y revisar descuentos disponibles.",
  },
  {
    title: "Quieren mejor cobertura",
    text: "Muchos conductores buscan algo más que lo mínimo. Te explicamos en español qué incluye cada opción para proteger mejor a tu familia.",
  },
  {
    title: "Servicio al cliente deficiente",
    text: "Aquí hablas con personas reales de una agencia local, no con un call center. Resolvemos tus dudas con claridad y seguimiento.",
  },
  {
    title: "Nuevo carro o nueva licencia",
    text: "Si compraste auto o empezaste a manejar en Florida, te guiamos paso a paso con una cotización de seguro Sarasota fácil de entender.",
  },
];

const coverageItems = [
  {
    title: "Liability (Responsabilidad Civil)",
    text: "Ayuda a cubrir daños a otras personas o propiedad cuando tú eres responsable de un accidente.",
  },
  {
    title: "Full Coverage",
    text: "Combinación común de coberturas para una protección más completa según tu vehículo y tu situación.",
  },
  {
    title: "Collision",
    text: "Ayuda con daños a tu carro después de un choque, sin importar quién tuvo la culpa.",
  },
  {
    title: "Comprehensive",
    text: "Cubre situaciones fuera de choque, como robo, vandalismo o ciertos eventos del clima.",
  },
  {
    title: "Uninsured Motorist",
    text: "Te protege si te impacta un conductor sin seguro o con cobertura insuficiente.",
  },
];

const faqItems = [
  {
    question: "¿Cuánto cuesta aseguranza de auto en Sarasota?",
    answer:
      "Depende de tu historial de manejo, vehículo, tipo de cobertura y descuentos. En Lamb Insurance Agency comparamos opciones para ayudarte a encontrar una prima que se ajuste a tu presupuesto.",
  },
  {
    question: "¿Puedo bajar mi pago mensual?",
    answer:
      "En muchos casos sí. Podemos revisar deducibles, descuentos y niveles de cobertura para buscar un pago mensual más cómodo.",
  },
  {
    question: "¿Qué cobertura necesito en Florida?",
    answer:
      "Florida exige coberturas mínimas, pero eso no siempre es suficiente para todos. Te explicamos en español tus opciones para que elijas con confianza.",
  },
  {
    question: "¿Puedo cambiarme antes de renovar?",
    answer:
      "Sí, normalmente puedes cambiar antes de la renovación. Te ayudamos a revisar tiempos y a hacer una transición clara.",
  },
  {
    question: "¿Atienden en español?",
    answer:
      "Sí. Nuestro equipo te atiende en español para que entiendas bien tu póliza, tu cotización y cada paso del proceso.",
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
              Aseguranza de Auto en Sarasota
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Aseguranza de Auto en Sarasota, Explicada en Español
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            En Lamb Insurance Agency te ayudamos a comparar cobertura, entender tus opciones y encontrar protección accesible sin complicaciones. Seguro de auto en español Sarasota con atención local y humana.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Obtén Tu Cotización Gratis
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Llamar: {PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Indicadores de confianza">
            {["Atención en Español", "Ayuda Local en Sarasota", "Cotización Rápida", "Opciones Claras"].map((item) => (
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
            ¿Por Qué la Gente se Cambia de Aseguranza de Carro en Sarasota?
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
            Coberturas de Seguro de Auto que Te Explicamos Sin Enredos
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
            ¿Por Qué Elegir Lamb Insurance Agency?
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 text-navy-700 font-body">
          {[
            "Agencia local en Sarasota",
            "Personas reales, no un call center",
            "Te explicamos opciones claramente",
            "Proceso de cotización rápido",
            "Ayuda para elegir según tu presupuesto",
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
            Ayuda Local para Conductores de Sarasota
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Trabajamos con conductores de Sarasota que manejan todos los días para trabajo, escuela y familia. Si buscas aseguranza de auto en Sarasota con alguien local que sí te explique, aquí estamos.
            </p>
            <p>
              Te orientamos sobre requisitos de Florida, opciones de cobertura para tu rutina y formas de mantener tu póliza clara en cada renovación.
            </p>
            <p>
              También te podemos ayudar si buscas combinar pólizas. Conoce opciones de <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">bundle en Sarasota</Link> y recibe apoyo en español.
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
            Preguntas Frecuentes
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
      alert("Hubo un problema al enviar el formulario. Por favor llámanos directamente o intenta de nuevo.");
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
              No Esperes a la Renovación o a un Accidente
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Recibe ayuda local hoy mismo para tu aseguranza de carro Sarasota. Te explicamos opciones en español y te guiamos para tomar una decisión clara.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Llamar al ${PHONE_DISPLAY}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                  📞
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Llamar Ahora</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Enviar correo a ${EMAIL}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                  ✉️
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Correo</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors break-all">{EMAIL}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-2">
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-100/50 p-8 md:p-10 border border-navy-100">
              {submitted ? (
                <div className="text-center py-10" role="alert" aria-live="polite">
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">¡Gracias!</h3>
                  <p className="text-navy-600 font-body text-base leading-relaxed mb-6 max-w-sm mx-auto">
                    Recibimos tu solicitud. Un agente local te contactará pronto.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary px-6 py-3 rounded-lg font-semibold font-body text-sm">
                    Enviar Otra Solicitud
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
                  aria-label="Formulario de cotización"
                  noValidate
                >
                  <input type="hidden" name="form-name" value="quote-request" />
                  <div hidden aria-hidden="true">
                    <label>
                      No llenar este campo: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-800 mb-7">Recibir Cotización</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="full-name" className={labelClass}>Nombre Completo <span className="text-red-500">*</span></label>
                      <input id="full-name" type="text" name="full-name" required autoComplete="name" placeholder="María López" className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="address" className={labelClass}>Dirección <span className="text-red-500">*</span></label>
                      <input id="address" type="text" name="address" required autoComplete="street-address" placeholder="123 Main St, Sarasota, FL 34230" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>Email <span className="text-red-500">*</span></label>
                      <input id="email" type="email" name="email" required autoComplete="email" placeholder="correo@ejemplo.com" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>Teléfono <span className="text-red-500">*</span></label>
                      <input id="phone" type="tel" name="phone" required autoComplete="tel" placeholder="(941) 555-0100" className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="insurance-type" className={labelClass}>Tipo de Seguro <span className="text-red-500">*</span></label>
                      <select id="insurance-type" name="insurance-type" required className={`${inputClass} cursor-pointer`} value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)}>
                        <option value="Auto">Aseguranza de Auto</option>
                        <option value="Home">Seguro de Casa</option>
                        <option value="Life">Seguro de Vida</option>
                        <option value="Commercial">Seguro Comercial</option>
                        <option value="Other">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="vehicle-year-make-model" className={labelClass}>Año, Marca y Modelo <span className="ml-1 text-navy-400 font-normal">(opcional)</span></label>
                      <input id="vehicle-year-make-model" type="text" name="vehicle-year-make-model" autoComplete="off" placeholder="Ej. 2022 Honda Accord" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="vin-number" className={labelClass}>Número VIN <span className="ml-1 text-navy-400 font-normal">(si lo tienes)</span></label>
                      <input id="vin-number" type="text" name="vin-number" autoComplete="off" placeholder="VIN de 17 caracteres" maxLength={17} className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>Mensaje / Detalles Adicionales <span className="ml-1 text-navy-400 font-normal">(opcional)</span></label>
                      <textarea id="message" name="message" rows={4} placeholder="Cuéntanos lo que te gustaría mejorar de tu cobertura actual…" className={inputClass} />
                    </div>
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary mt-7 w-full py-4 rounded-lg font-semibold font-body text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? "Enviando…" : "Recibir Cotización"}
                  </button>

                  <a href={`tel:${PHONE_HREF}`} className="mt-3 w-full inline-flex justify-center px-6 py-3 rounded-lg border border-navy-300 text-navy-800 font-semibold font-body hover:bg-navy-50 transition-colors">
                    Llamar Ahora
                  </a>

                  <div className="mt-6 p-4 rounded-xl border-2 border-navy-100 bg-navy-50/50">
                    <p className="text-xs text-navy-600 font-body leading-relaxed mb-3">
                      Al marcar la casilla, confirmas tu preferencia para mensajes SMS de Lamb Insurance Agency. Los mensajes pueden incluir cotizaciones, actualizaciones de póliza y soporte al cliente. La frecuencia varía y pueden aplicar cargos de tu proveedor. Responde STOP para cancelar o HELP para ayuda. Tu consentimiento no es condición de compra. Consulta nuestros <Link href="/terms" className="underline hover:text-sage-700 text-sage-600">Términos y Condiciones</Link> y <Link href="/privacy-policy" className="underline hover:text-sage-700 text-sage-600">Aviso de Privacidad</Link>.
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
                      <p className="text-xs text-navy-600 font-body leading-relaxed">Acepto recibir mensajes de texto SMS de Lamb Insurance Agency en el número proporcionado.</p>
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
