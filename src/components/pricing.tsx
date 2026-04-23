"use client";

import { useState } from "react";
import { SectionTag, Arrow, BigNumber } from "./ui";

type Mode = "unica" | "todas";

const plansData = {
  unica: [
    { id: "m", tier: "Mensual", price: "89", per: "/mes", save: null, features: ["Acceso a tu sede", "Todas las clases grupales", "Casilleros básicos", "Horario extendido 5:00-23:00"] },
    { id: "t", tier: "Trimestral", price: "239", per: "/3 meses", save: "Ahorra $28", features: ["Todo lo del plan Mensual", "Evaluación física inicial", "1 invitado al mes"] },
    { id: "s", tier: "Semestral", price: "429", per: "/6 meses", save: "Ahorra $105", features: ["Todo lo del plan Trimestral", "Acceso a zona de recuperación", "Plan de entrenamiento base", "2 invitados al mes"], popular: true },
    { id: "a", tier: "Anual", price: "779", per: "/año", save: "Ahorra $289", features: ["Todo lo del plan Semestral", "Asesoría nutricional general", "Kit de bienvenida Cabrejo", "Invitados ilimitados*"] },
  ],
  todas: [
    { id: "m", tier: "Mensual", price: "119", per: "/mes", save: null, features: ["Acceso a las 3 sedes", "Todas las clases grupales", "Casilleros básicos", "Horario extendido 5:00-23:00"] },
    { id: "t", tier: "Trimestral", price: "319", per: "/3 meses", save: "Ahorra $38", features: ["Todo lo del plan Mensual", "Evaluación física inicial", "1 invitado al mes"] },
    { id: "s", tier: "Semestral", price: "579", per: "/6 meses", save: "Ahorra $135", features: ["Todo lo del plan Trimestral", "Acceso a zona de recuperación", "Plan de entrenamiento base", "2 invitados al mes"], popular: true },
    { id: "a", tier: "Anual", price: "1,049", per: "/año", save: "Ahorra $379", features: ["Todo lo del plan Semestral", "Asesoría nutricional general", "Kit de bienvenida Cabrejo", "Invitados ilimitados*"] },
  ],
} as const;

const custom = { unica: "179", todas: "239" };

export function Pricing() {
  const [mode, setMode] = useState<Mode>("unica");
  const plans = plansData[mode];

  return (
    <section id="planes" className="relative bg-steel py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 font-display font-black italic leading-none text-[22vw] text-white/[0.03] select-none">Planes</div>

      <div className="relative max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 reveal">
          <div>
            <SectionTag idx={5} label="Planes & Membresías" />
            <h2 className="mt-6 font-display font-black uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.75rem,8vw,7rem)]">
              Únete al <span className="italic text-volt">clan</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60 text-lg">
            Membresías simples y transparentes. Cancelas cuando quieras, desde cualquiera de nuestras 3 sedes.
          </p>
        </div>

        <div className="mt-12 reveal">
          <div role="tablist" aria-label="Alcance de membresía" className="inline-flex p-1.5 bg-ink border border-white/10">
            {([["unica", "Única Sede"], ["todas", "Todas las Sedes"]] as const).map(([k, label]) => (
              <button key={k} role="tab" aria-selected={mode === k} onClick={() => setMode(k)} className={`px-6 py-3 text-[12px] uppercase tracking-[0.2em] font-bold transition ${mode === k ? "bg-volt text-ink" : "text-white/70 hover:text-white"}`}>
                {label}
              </button>
            ))}
          </div>
          <div className="ml-4 inline-block align-middle font-mono text-[11px] tracking-[0.2em] uppercase text-white/45">
            Mostrando — {mode === "unica" ? "1 sede a elegir" : "3 sedes incluidas"}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <article key={p.id + mode} className={`relative flex flex-col p-7 border transition-all duration-300 reveal ${"popular" in p && p.popular ? "bg-ink border-volt shadow-[0_30px_60px_-25px_rgba(255,245,13,0.35)] lg:-translate-y-3" : "bg-ink border-white/10 hover:border-white/30"}`} style={{ transitionDelay: `${i * 70}ms` }}>
              {"popular" in p && p.popular && (
                <div className="absolute -top-3 left-6 bg-volt text-ink font-bold uppercase text-[10px] tracking-[0.28em] px-3 py-1.5">Más popular</div>
              )}
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50">{p.tier}</div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/30">0{i + 1}</div>
              </div>
              <div className="mt-6 flex items-end gap-1 leading-none">
                <span className="text-white/50 text-2xl font-display font-black">$</span>
                <BigNumber n={p.price} className={`text-6xl ${"popular" in p && p.popular ? "text-volt" : "text-white"}`} />
              </div>
              <div className="mt-1 font-mono text-[11px] tracking-[0.22em] uppercase text-white/45">{p.per}</div>
              {p.save ? (
                <div className="mt-4 inline-block self-start border border-volt/40 text-volt px-2 py-1 text-[10px] font-mono uppercase tracking-[0.22em]">{p.save}</div>
              ) : (
                <div className="mt-4 inline-block self-start text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">Sin compromiso</div>
              )}
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13.5px] text-white/80 leading-snug">
                    <span className={`mt-[6px] inline-block h-1.5 w-1.5 ${"popular" in p && p.popular ? "bg-volt" : "bg-white/50"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`mt-8 inline-flex items-center justify-between w-full px-4 py-3.5 border font-bold uppercase tracking-[0.18em] text-[12px] transition ${"popular" in p && p.popular ? "bg-volt text-ink border-volt hover:bg-white hover:border-white" : "bg-transparent text-white border-white/25 hover:bg-volt hover:text-ink hover:border-volt"}`}>
                Seleccionar <Arrow />
              </a>
            </article>
          ))}
        </div>

        <article className="mt-6 grid lg:grid-cols-[1.2fr_1fr] border border-white/10 bg-ink overflow-hidden reveal">
          <div className="p-8 md:p-10 relative">
            <div className="absolute top-5 right-5 font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">PLAN 05 · Premium</div>
            <SectionTag idx="*" label="Personalizado" />
            <h3 className="mt-5 font-display font-black uppercase leading-[0.88] tracking-[-0.03em] text-4xl md:text-6xl">
              Plan <span className="italic text-volt">personalizado</span>
            </h3>
            <p className="mt-4 text-white/65 max-w-lg">
              Entrenamiento 1:1 con un coach dedicado, plan nutricional a medida y acceso total a la zona VIP.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Entrenador personal dedicado", "Plan nutricional personalizado", "Evaluación física semanal", "Acceso zona VIP / Sauna", "Seguimiento continuo vía app", "Horarios flexibles con tu coach"].map((f, i) => (
                <div key={f} className="flex items-start gap-3 text-[13.5px] text-white/85 leading-snug border-t border-white/10 pt-3">
                  <span className="font-mono text-[10px] text-volt mt-[3px]">0{i + 1}</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-8 md:p-10 bg-volt text-ink flex flex-col justify-between">
            <div aria-hidden="true" className="absolute inset-0 diag opacity-[0.06]" />
            <div className="relative">
              <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-ink/70">Desde</div>
              <div className="mt-4 flex items-end gap-1 leading-none">
                <span className="text-ink/70 text-2xl font-display font-black">$</span>
                <BigNumber n={custom[mode]} className="text-ink text-7xl md:text-8xl" />
                <span className="ml-2 mb-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/70">/mes</span>
              </div>
              <div className="mt-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/70">
                {mode === "unica" ? "Única sede · acceso premium" : "Las 3 sedes · acceso premium"}
              </div>
            </div>
            <a href="#contacto" className="relative mt-10 inline-flex items-center justify-between px-5 py-4 bg-ink text-white font-bold uppercase tracking-[0.18em] text-[12px] hover:bg-white hover:text-ink transition">
              Seleccionar personalizado <Arrow />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
