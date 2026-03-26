import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "CABREJO GYM | Transforma tu Realidad",
  description:
    "Más que un gimnasio, una cultura de excelencia. Tecnología de punta y entrenamiento de élite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
