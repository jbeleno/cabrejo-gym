"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cuáles son los planes disponibles?",
    answer:
      "Ofrecemos planes Mensual, Trimestral (3 meses), Semestral (6 meses) y Anual tanto para una sede como para acceso a todas las sedes. Además, tenemos planes Personalizados con entrenador dedicado disponibles únicamente en modalidad mensual.",
  },
  {
    question: "¿Puedo usar mi membresía en cualquier sede?",
    answer:
      'Si tienes un plan "Todas las Sedes", puedes entrenar en nuestras 3 ubicaciones (Norte, Centro y Sur) sin restricción. Los planes de "Única Sede" están limitados a la sede seleccionada al momento de tu inscripción.',
  },
  {
    question: "¿Qué incluye el plan Personalizado?",
    answer:
      "El plan Personalizado incluye un entrenador personal dedicado, plan nutricional a tu medida, evaluación física semanal, acceso a zona VIP/Sauna y seguimiento continuo vía app. Está disponible para una sede o todas las sedes, solo en modalidad mensual.",
  },
  {
    question: "¿Puedo cambiar de plan o de sede?",
    answer:
      "Sí, puedes cambiar tu plan o sede en cualquier momento. El cambio se hace efectivo en tu próximo ciclo de facturación. Para upgrades, el ajuste se prorratea de inmediato.",
  },
  {
    question: "¿Hay algún costo de inscripción?",
    answer:
      "Actualmente contamos con inscripción gratuita en todos nuestros planes. Consulta con tu sede por promociones vigentes.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, no tenemos contratos de permanencia obligatoria. Solo pedimos una notificación de 10 días antes de tu próxima fecha de facturación.",
  },
  {
    question: "¿Cuáles son los horarios de las sedes?",
    answer:
      "Nuestras 3 sedes operan de Lunes a Viernes de 5:00 a 23:00, Sábados de 7:00 a 18:00 y Domingos de 8:00 a 14:00. Los horarios pueden variar ligeramente por sede, consulta en la sección de Sedes.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-brand-dark border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter italic">
          Preguntas <span className="text-accent">Frecuentes</span>
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group gap-4"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="text-base sm:text-lg font-bold group-hover:text-accent transition-colors uppercase tracking-tight">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 text-accent ${
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
                  maxHeight: activeIndex === index ? "300px" : "0",
                }}
              >
                <p className="pb-6 text-gray-400 leading-relaxed font-medium text-sm sm:text-base">
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
