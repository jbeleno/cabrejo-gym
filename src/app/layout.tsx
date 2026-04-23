import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabrejo Gym Neiva | Gimnasio con 3 Sedes",
  description:
    "Gimnasio en Neiva con 3 sedes (Norte, Centro y Sur). Clases de CrossFit, Boxing, Yoga, entrenamiento personalizado y planes desde mensual hasta anual.",
  keywords: [
    "gimnasio neiva",
    "gym neiva",
    "cabrejo gym",
    "crossfit neiva",
    "boxeo neiva",
    "entrenamiento personalizado neiva",
    "gimnasio huila",
  ],
  authors: [{ name: "Cabrejo Gym" }],
  openGraph: {
    title: "Cabrejo Gym Neiva | Gimnasio con 3 Sedes",
    description:
      "Más que un gimnasio, una cultura de excelencia. 3 sedes en Neiva con clases grupales y entrenamiento personalizado.",
    url: "https://cabrejogym.com",
    siteName: "Cabrejo Gym",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/real-sede-centro.jpg",
        width: 1200,
        height: 630,
        alt: "Cabrejo Gym - Interior sede centro en Neiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabrejo Gym Neiva | Gimnasio con 3 Sedes",
    description:
      "3 sedes en Neiva con CrossFit, Boxing, Yoga y planes personalizados.",
    images: ["/images/real-sede-centro.jpg"],
  },
  metadataBase: new URL("https://cabrejogym.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const sedes = [
  {
    name: "Cabrejo Gym - Sede Norte",
    streetAddress: "Av. Principal Norte 456, Zona Norte",
    telephone: "+57-608-111-2233",
    email: "norte@cabrejogym.com",
    lat: 2.9489685,
    lng: -75.287751,
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "05:00", closes: "23:00" },
      { dayOfWeek: "Saturday", opens: "07:00", closes: "18:00" },
      { dayOfWeek: "Sunday", opens: "08:00", closes: "14:00" },
    ],
  },
  {
    name: "Cabrejo Gym - Sede Centro",
    streetAddress: "Cra 5 #10-23, Centro",
    telephone: "+57-608-123-4567",
    email: "centro@cabrejogym.com",
    lat: 2.9334206,
    lng: -75.2911508,
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "05:00", closes: "23:00" },
      { dayOfWeek: "Saturday", opens: "07:00", closes: "18:00" },
      { dayOfWeek: "Sunday", opens: "08:00", closes: "14:00" },
    ],
  },
  {
    name: "Cabrejo Gym - Sede Sur",
    streetAddress: "Cll 21 Sur #7-89, Zona Sur",
    telephone: "+57-608-444-5566",
    email: "sur@cabrejogym.com",
    lat: 2.9164367,
    lng: -75.2834826,
    openingHours: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "05:00", closes: "23:00" },
      { dayOfWeek: "Saturday", opens: "07:00", closes: "20:00" },
      { dayOfWeek: "Sunday", opens: "08:00", closes: "16:00" },
    ],
  },
];

const jsonLd = [
  ...sedes.map((sede) => ({
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: sede.name,
    description: "Gimnasio en Neiva con clases de CrossFit, Boxing, Yoga y entrenamiento personalizado.",
    url: "https://cabrejogym.com",
    telephone: sede.telephone,
    email: sede.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: sede.streetAddress,
      addressLocality: "Neiva",
      addressRegion: "Huila",
      addressCountry: "CO",
    },
    geo: { "@type": "GeoCoordinates", latitude: sede.lat, longitude: sede.lng },
    openingHoursSpecification: sede.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: { "@type": "City", name: "Neiva" },
    priceRange: "$$",
    currenciesAccepted: "COP",
    image: "https://cabrejogym.com/images/real-sede-centro.jpg",
  })),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cuáles son los planes disponibles?", acceptedAnswer: { "@type": "Answer", text: "Ofrecemos planes Mensual, Trimestral, Semestral y Anual tanto para una sede como para todas las sedes. Además, tenemos planes Personalizados con entrenador dedicado." } },
      { "@type": "Question", name: "¿Puedo usar mi membresía en cualquier sede?", acceptedAnswer: { "@type": "Answer", text: "Con el plan Todas las Sedes puedes entrenar en Norte, Centro y Sur sin restricción. Los planes de Única Sede están limitados a la sede seleccionada." } },
      { "@type": "Question", name: "¿Qué incluye el plan Personalizado?", acceptedAnswer: { "@type": "Answer", text: "Entrenador personal dedicado, plan nutricional, evaluación física semanal, acceso a zona VIP/Sauna y seguimiento continuo vía app." } },
      { "@type": "Question", name: "¿Puedo cambiar de plan o de sede?", acceptedAnswer: { "@type": "Answer", text: "Sí, puedes cambiar en cualquier momento. El cambio se hace efectivo en tu próximo ciclo de facturación." } },
      { "@type": "Question", name: "¿Hay algún costo de inscripción?", acceptedAnswer: { "@type": "Answer", text: "No cobramos matrícula ni inscripción. Solo pagas tu membresía." } },
      { "@type": "Question", name: "¿Puedo cancelar en cualquier momento?", acceptedAnswer: { "@type": "Answer", text: "Sí, no tenemos contratos de permanencia obligatoria." } },
      { "@type": "Question", name: "¿Cuáles son los horarios?", acceptedAnswer: { "@type": "Answer", text: "Lunes a Viernes de 05:00 a 23:00, Sábados de 07:00 a 18:00 y Domingos de 08:00 a 14:00." } },
    ],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,700;0,800;0,900;1,700;1,900&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
