"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "./lightbox";

const gallery = [
  { src: "/images/real-sede-centro.jpg", alt: "Sede Centro - Área de pesas", className: "row-span-2" },
  { src: "/images/real-cardio.jpg", alt: "Zona Cardio", className: "col-span-2" },
  { src: "/images/real-machines.jpg", alt: "Zona de Máquinas", className: "" },
  { src: "/images/real-training.jpg", alt: "Entrenamiento", className: "" },
];

export function Infrastructure() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="infraestructura" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Instalaciones
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter">
            Infraestructura <br />
            Premium
          </h3>
        </div>
        <p className="text-gray-400 max-w-sm text-lg font-light border-l-2 border-accent pl-8">
          Equipamiento de última generación y espacios diseñados para tu
          comodidad y rendimiento máximo.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4">
          {gallery.map((item) => (
            <div
              key={item.alt}
              className={`overflow-hidden rounded-sm group relative cursor-zoom-in ${item.className}`}
              onClick={() => setLightbox({ src: item.src, alt: item.alt })}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
