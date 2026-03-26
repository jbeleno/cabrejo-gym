import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabrejo Gym Neiva | Gimnasio 24/7 con 3 Sedes",
  description:
    "Gimnasio en Neiva con 3 sedes (Norte, Centro y Sur). Acceso 24/7, clases de CrossFit, Boxing, Yoga, entrenamiento personalizado y planes desde mensual hasta anual.",
  keywords: [
    "gimnasio neiva",
    "gym neiva",
    "cabrejo gym",
    "gimnasio 24 horas neiva",
    "crossfit neiva",
    "boxeo neiva",
    "entrenamiento personalizado neiva",
    "gimnasio huila",
  ],
  authors: [{ name: "Cabrejo Gym" }],
  openGraph: {
    title: "Cabrejo Gym Neiva | Gimnasio 24/7 con 3 Sedes",
    description:
      "Más que un gimnasio, una cultura de excelencia. 3 sedes en Neiva con acceso 24/7, clases grupales y entrenamiento personalizado.",
    url: "https://cabrejogym.com",
    siteName: "Cabrejo Gym",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabrejo Gym Neiva | Gimnasio 24/7 con 3 Sedes",
    description:
      "3 sedes en Neiva con acceso 24/7, CrossFit, Boxing, Yoga y planes personalizados.",
  },
  metadataBase: new URL("https://cabrejogym.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Cabrejo Gym",
  description:
    "Gimnasio en Neiva con 3 sedes, acceso 24/7, clases de CrossFit, Boxing, Yoga y entrenamiento personalizado.",
  url: "https://cabrejogym.com",
  telephone: "+57-608-123-4567",
  email: "centro@cabrejogym.com",
  address: [
    {
      "@type": "PostalAddress",
      name: "Sede Norte",
      streetAddress: "Av. Principal Norte 456, Zona Norte",
      addressLocality: "Neiva",
      addressRegion: "Huila",
      addressCountry: "CO",
    },
    {
      "@type": "PostalAddress",
      name: "Sede Centro",
      streetAddress: "Cra 5 #10-23, Centro",
      addressLocality: "Neiva",
      addressRegion: "Huila",
      addressCountry: "CO",
    },
    {
      "@type": "PostalAddress",
      name: "Sede Sur",
      streetAddress: "Cll 21 Sur #7-89, Zona Sur",
      addressLocality: "Neiva",
      addressRegion: "Huila",
      addressCountry: "CO",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 2.9334206,
    longitude: -75.2911508,
  },
  areaServed: {
    "@type": "City",
    name: "Neiva",
  },
  priceRange: "$$",
  currenciesAccepted: "COP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
