"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { SectionTag } from "./ui";

const tiles = [
  { label: "Sala de pesas", src: "/images/real-sede-centro.jpg", span: "md:row-span-2", caption: "800 m² · Hammer Strength" },
  { label: "Zona funcional", src: "/images/real-machines.jpg", span: "", caption: "Rig competitivo" },
  { label: "Ring de boxeo", src: "/images/real-cardio.jpg", span: "md:col-span-2", caption: "Profesional · 6 x 6 m" },
  { label: "Estudio yoga", src: "/images/gym-machines.jpg", span: "", caption: "Climatizado" },
  { label: "Sauna & recuperación", src: "/images/real-training.jpg", span: "", caption: "Zona VIP" },
];

export function Infrastructure() {
  const [lightbox, setLightbox] = useState<typeof tiles[0] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-end mb-14 reveal">
          <div>
            <SectionTag idx={4} label="Infraestructura" />
            <h2 className="mt-6 font-display font-black uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.5rem,6.8vw,5.5rem)]">
              Infraestructura<br /><span className="italic">premium</span>
            </h2>
          </div>
          <div className="pl-6 border-l-4 border-volt">
            <p className="text-white/75 text-lg leading-snug">
              Equipamiento de última generación y espacios diseñados para tu comodidad y rendimiento máximo.
            </p>
            <div className="mt-5 flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
              <span>· 3 sedes</span><span>· 2,400 m²</span><span>· 120+ máquinas</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {tiles.map((t, i) => (
            <button
              key={i}
              onClick={() => setLightbox(t)}
              className={`group relative overflow-hidden border border-white/10 ${t.span} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
              aria-label={`Abrir imagen ${t.label}`}
            >
              <Image src={t.src} alt={t.label} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/55 transition-colors duration-500" />
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.22em] uppercase text-white/80">
                {String(i + 1).padStart(2, "0")} / {String(tiles.length).padStart(2, "0")}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="flex items-center justify-center w-14 h-14 bg-volt text-ink rounded-full">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="m20 20-4.3-4.3" /></svg>
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-left bg-gradient-to-t from-ink/90 to-transparent">
                <div className="font-display font-black uppercase text-lg md:text-xl leading-tight tracking-tight">{t.label}</div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/60 mt-1">{t.caption}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm lb-enter flex items-center justify-center p-6" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label="Visor de imagen">
          <div className="relative w-full max-w-5xl aspect-[16/10] border border-white/10 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.label} fill sizes="100vw" className="object-contain" />
            <div className="absolute top-0 inset-x-0 p-5 flex items-center justify-between bg-gradient-to-b from-ink/80 to-transparent">
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">Ref · Cabrejo Gym</div>
                <div className="font-display font-black uppercase text-2xl">{lightbox.label}</div>
              </div>
              <button onClick={() => setLightbox(null)} className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-volt hover:text-ink hover:border-volt transition" aria-label="Cerrar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6l-12 12" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
