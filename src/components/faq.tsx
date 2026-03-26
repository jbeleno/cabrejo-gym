"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Hay algún costo de inscripción?",
    answer:
      "Nuestra membresía Pro y Elite actualmente cuentan con inscripción gratuita. El plan Básico tiene un costo administrativo único de $15.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, no tenemos contratos de permanencia obligatoria. Solo pedimos una notificación de 10 días antes de tu próxima fecha de facturación.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-brand-dark border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 text-center uppercase tracking-tighter italic">
          Preguntas <span className="text-accent">Frecuentes</span>
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="text-lg font-bold group-hover:text-accent transition-colors uppercase tracking-tight">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 text-accent ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                }}
              >
                <p className="pb-6 text-gray-400 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
