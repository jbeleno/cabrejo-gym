"use client";

import { useState } from "react";
import { SectionTag } from "./ui";

const qs = [
  { q: "¿Cuáles son los planes disponibles?", a: "Ofrecemos cuatro membresías estándar — Mensual, Trimestral, Semestral y Anual — cada una en dos alcances: Única Sede o Todas las Sedes. Además contamos con el Plan Personalizado, con entrenador dedicado y zona VIP incluida." },
  { q: "¿Puedo usar mi membresía en cualquier sede?", a: 'Si eliges el alcance "Todas las Sedes" podrás entrenar sin restricciones en Norte, Centro y Sur. Con el plan de sede única, un cambio de sede se hace desde tu perfil en la app con un click.' },
  { q: "¿Qué incluye el plan Personalizado?", a: "Entrenador personal dedicado, plan nutricional a medida, evaluación física semanal, acceso a zona VIP y sauna, seguimiento en la app y horarios flexibles coordinados con tu coach." },
  { q: "¿Puedo cambiar de plan o de sede?", a: "Sí. Puedes hacer upgrade o cambiar de sede en cualquier momento desde la app o en recepción; el ajuste se prorratea automáticamente contra tu ciclo actual." },
  { q: "¿Hay algún costo de inscripción?", a: "No cobramos matrícula ni inscripción. Solo pagas tu membresía; el kit de bienvenida llega incluido a partir del plan Anual." },
  { q: "¿Puedo cancelar mi suscripción en cualquier momento?", a: "Sí. Las membresías Mensual y Trimestral son sin permanencia. En Semestral y Anual aplicamos un pequeño ajuste por los meses descontados; te explicamos todo de forma transparente antes de firmar." },
  { q: "¿Cuáles son los horarios de las sedes?", a: "Lunes a Viernes de 05:00 a 23:00, Sábados de 07:00 a 18:00 y Domingos de 08:00 a 14:00 en todas nuestras sedes de Neiva." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 grid lg:grid-cols-[1fr_1.6fr] gap-14">
        <div className="reveal">
          <SectionTag idx={6} label="Preguntas frecuentes" />
          <h2 className="mt-6 font-display font-black uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.5rem,6vw,5rem)]">
            Preguntas<br /><span className="italic">frecuentes</span>
          </h2>
          <p className="mt-6 text-white/60 max-w-sm">
            Si no encuentras lo que buscas, <a href="#contacto" className="text-volt underline underline-offset-4 hover:text-white">escríbenos</a>. Respondemos en menos de 24h.
          </p>
          <div className="mt-10 hidden lg:block border-l-4 border-volt pl-6">
            <div className="font-display font-black italic text-6xl leading-none text-white/85">24h</div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.22em] uppercase text-white/50">Tiempo medio de respuesta</div>
          </div>
        </div>

        <div className="reveal">
          {qs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`border-t ${i === qs.length - 1 ? "border-b" : ""} border-white/15`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`} className="w-full text-left flex items-start justify-between gap-8 py-6 group">
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-[11px] tracking-[0.25em] text-volt uppercase pt-1.5">0{i + 1}</span>
                    <span className={`font-display font-black uppercase tracking-[-0.01em] text-xl md:text-2xl leading-tight transition ${isOpen ? "text-white" : "text-white/85 group-hover:text-white"}`}>
                      {item.q}
                    </span>
                  </div>
                  <span className={`shrink-0 mt-1 w-9 h-9 border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-volt text-ink border-volt rotate-180" : "text-white border-white/25 group-hover:border-volt group-hover:text-volt"}`}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6" /></svg>
                  </span>
                </button>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out" style={{ maxHeight: isOpen ? "220px" : "0px", opacity: isOpen ? 1 : 0 }}>
                  <p className="pb-6 pl-10 md:pr-16 text-white/70 leading-relaxed max-w-2xl">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
