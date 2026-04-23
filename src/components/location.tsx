"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { SectionTag, PillBtn, Arrow } from "./ui";

const Map = dynamic(() => import("./map"), { ssr: false });

const sedes = [
  { id: "norte", name: "Sede Norte", addr: "Av. Principal Norte 456", phone: "+57 (608) 111-2233", email: "norte@cabrejogym.com", size: "820 m²", lat: 2.9489685, lng: -75.287751 },
  { id: "centro", name: "Sede Centro", addr: "Cra 5 #10-23", phone: "+57 (608) 123-4567", email: "centro@cabrejogym.com", size: "940 m²", lat: 2.9334206, lng: -75.2911508 },
  { id: "sur", name: "Sede Sur", addr: "Cll 21 Sur #7-89", phone: "+57 (608) 444-5566", email: "sur@cabrejogym.com", size: "740 m²", lat: 2.9164367, lng: -75.2834826 },
];

export function Location() {
  const [active, setActive] = useState("norte");
  const sede = sedes.find((s) => s.id === active)!;

  return (
    <section id="sedes" className="relative bg-steel py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
          <div>
            <SectionTag idx={7} label="Ubicaciones" />
            <h2 className="mt-6 font-display font-black uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.5rem,6.5vw,5.5rem)]">
              Nuestras <span className="italic text-volt">sedes</span>
            </h2>
          </div>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50">3 ubicaciones en Neiva · Huila</div>
        </div>

        <div role="tablist" aria-label="Seleccionar sede" className="mt-10 flex flex-wrap gap-2 reveal">
          {sedes.map((s) => (
            <button key={s.id} role="tab" aria-selected={active === s.id} onClick={() => setActive(s.id)} className={`px-5 py-3 text-[12px] uppercase tracking-[0.2em] font-bold border transition ${active === s.id ? "bg-volt text-ink border-volt" : "bg-transparent text-white/75 border-white/15 hover:border-white/50 hover:text-white"}`}>
              {s.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-6 reveal">
          <div className="relative p-8 md:p-10 bg-ink border border-white/10 overflow-hidden">
            <div aria-hidden className="absolute -top-10 -right-8 font-display font-black italic leading-none text-[10rem] text-white/[0.04]">
              {sede.name.split(" ")[1]}
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase text-volt">
                <span className="h-px w-8 bg-volt" /> Sede activa
              </div>
              <h3 className="mt-3 font-display font-black uppercase text-5xl md:text-6xl leading-[0.9] tracking-[-0.02em]">{sede.name}</h3>

              <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { k: "Dirección", v: sede.addr },
                  { k: "Teléfono", v: sede.phone },
                  { k: "Email", v: sede.email },
                  { k: "Superficie", v: sede.size },
                ].map((r) => (
                  <div key={r.k} className="border-t border-white/15 pt-4">
                    <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45">{r.k}</dt>
                    <dd className="mt-1 text-white font-bold text-lg leading-snug">{r.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 border-t border-white/15 pt-6">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45">Horarios</div>
                <div className="mt-3 grid sm:grid-cols-3 gap-4 text-sm">
                  {[
                    ["Lun — Vie", "05:00 — 23:00"],
                    ["Sábado", "07:00 — 18:00"],
                    ["Domingo", "08:00 — 14:00"],
                  ].map(([a, b]) => (
                    <div key={a} className="flex flex-col">
                      <span className="font-bold uppercase tracking-[0.14em] text-[11px] text-white/80">{a}</span>
                      <span className="mt-1 font-display font-black text-2xl text-volt">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <PillBtn href={`tel:${sede.phone.replace(/\s+/g, "")}`} variant="volt">Llamar sede <Arrow /></PillBtn>
                <PillBtn href="#contacto" variant="ghost">Agenda una visita</PillBtn>
              </div>
            </div>
          </div>

          <div className="h-[460px] lg:h-auto border border-white/10 overflow-hidden bg-graphite">
            <Map lat={sede.lat} lng={sede.lng} name={sede.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
