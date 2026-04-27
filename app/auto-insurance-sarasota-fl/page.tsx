import type { Metadata } from "next";
import AutoPageClient from "./AutoPageClient";

export const metadata: Metadata = {
  title: "Aseguranza de Auto en Sarasota | Lamb Insurance Agency",
  description:
    "Aseguranza de Auto en Sarasota con atención en español. Compara opciones, entiende tu cobertura y recibe una cotización rápida con ayuda local.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/auto-insurance-sarasota-fl",
  },
};

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      name: "Lamb Insurance Agency",
      url: "https://lambinsuranceagency.com",
      email: "calamb@acg.aaa.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        addressCountry: "US",
      },
      sameAs: [],
      serviceArea: { "@type": "City", name: "Sarasota" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta aseguranza de auto en Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo depende de factores como tu historial de manejo, vehículo, tipo de cobertura y descuentos disponibles. En Lamb Insurance Agency te ayudamos a comparar opciones para encontrar una prima que se ajuste a tu presupuesto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo bajar mi pago mensual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Muchas veces sí. Podemos revisar deducibles, descuentos y opciones de cobertura para buscar un pago mensual más cómodo sin perder la protección importante para ti.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué cobertura necesito en Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida exige coberturas mínimas, pero muchas familias necesitan protección adicional. Te explicamos en español qué cubre cada opción para que tomes una decisión informada.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo cambiarme antes de renovar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, en muchos casos puedes cambiar de póliza antes de la fecha de renovación. Nuestro equipo local te orienta sobre los pasos para que la transición sea clara y sencilla.",
          },
        },
        {
          "@type": "Question",
          name: "¿Atienden en español?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Te atendemos en español para que entiendas tu cotización, cobertura y próximos pasos con total claridad.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://lambinsuranceagency.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Aseguranza de Auto en Sarasota",
          item: "https://lambinsuranceagency.com/auto-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function AutoInsurancePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AutoPageClient />
    </>
  );
}
