"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Programs } from "@/components/programs";
import { Trainers } from "@/components/trainers";
import { Infrastructure } from "@/components/infrastructure";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useReveal, Marquee } from "@/components/ui";

export default function Home() {
  useReveal();

  return (
    <div className="bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee items={["Cabrejo Gym", "/ Neiva", "Disciplina · Acero · Cultura", "/ Est. 2014", "Transforma Tu Realidad", "/ 3 Sedes"]} />
        <Programs />
        <Trainers />
        <Infrastructure />
        <Marquee items={["Únete al Clan", "/ Planes 2026", "Sin permanencia", "/ 3 sedes · 1 comunidad", "Prueba gratis", "/ 1er día gratis"]} accent speed="55s" />
        <Pricing />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
