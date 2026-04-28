import type { Metadata } from "next";
import EspanolPageClient from "./EspanolPageClient";

export const metadata: Metadata = {
  title: "Seguro en Sarasota y Bradenton | Lamb Insurance Agency",
  description:
    "Seguro de auto, casa y vida en Sarasota y Bradenton. Atención profesional con personas reales y ayuda en español.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/espanol",
    languages: {
      "es-US": "https://lambinsuranceagency.com/espanol",
      "en-US": "https://lambinsuranceagency.com",
    },
  },
  openGraph: {
    title: "Seguro en Sarasota y Bradenton | Lamb Insurance Agency",
    description:
      "Seguro de auto, casa y vida en Sarasota y Bradenton. Atención profesional con personas reales y ayuda en español.",
    url: "https://lambinsuranceagency.com/espanol",
    locale: "es_US",
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
      telephone: "+19412252335",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5893 Whitfield Ave",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        postalCode: "34243",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Sarasota" },
        { "@type": "City", name: "Bradenton" },
      ],
      inLanguage: "es",
    },
    {
      "@type": "FAQPage",
      inLanguage: "es",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Por qué subió mi seguro de auto en Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El seguro de auto en Florida puede subir por costos de reparación, más accidentes, clima severo y cambios en las tarifas de las aseguradoras. Aunque usted no haya tenido accidentes ni multas, su renovación todavía puede verse afectada por las condiciones del mercado. Podemos ayudarle a revisar opciones y comparar cobertura disponible.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo cambiar de seguro antes de renovar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Muchas personas cambian de seguro antes de la renovación cuando encuentran una mejor opción o una mejor cobertura. Podemos explicarle el proceso y ayudarle a revisar detalles antes de hacer el cambio.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué cubre full coverage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Normalmente incluye responsabilidad civil, comprehensive y collision. La cobertura adecuada depende de su carro, presupuesto y situación personal.",
          },
        },
        {
          "@type": "Question",
          name: "¿Incluye flood el seguro de casa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No normalmente. Muchas pólizas de casa no incluyen flood y puede necesitar cobertura separada según la ubicación y riesgo de la propiedad. Podemos ayudarle a revisar sus opciones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo combinar auto y casa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Combinar pólizas de auto y casa puede simplificar pagos y en algunos casos ofrecer descuentos disponibles. Las opciones dependen de la aseguradora y su situación.",
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
          name: "Inicio",
          item: "https://lambinsuranceagency.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Español",
          item: "https://lambinsuranceagency.com/espanol",
        },
      ],
    },
  ],
};

export default function EspanolPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <EspanolPageClient />
    </>
  );
}
