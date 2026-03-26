"use client";

import { useState } from "react";

type SedeType = "unica" | "todas";

const standardPlans = {
  unica: [
    {
      name: "Mensual",
      price: "$89",
      period: "/ mes",
      saving: null,
      featured: false,
      features: [
        "Acceso a una sede",
        "Área de pesas y cardio",
        "Clases grupales incluidas",
        "Vestidores y duchas",
      ],
    },
    {
      name: "Trimestral",
      price: "$239",
      period: "/ 3 meses",
      saving: "Ahorra $28",
      featured: false,
      features: [
        "Acceso a una sede",
        "Área de pesas y cardio",
        "Clases grupales incluidas",
        "Vestidores y duchas",
        "Evaluación física inicial",
      ],
    },
    {
      name: "Semestral",
      price: "$429",
      period: "/ 6 meses",
      saving: "Ahorra $105",
      featured: true,
      features: [
        "Acceso a una sede",
        "Área de pesas y cardio",
        "Todas las clases grupales",
        "Evaluación física trimestral",
        "Plan de entrenamiento app",
      ],
    },
    {
      name: "Anual",
      price: "$779",
      period: "/ año",
      saving: "Ahorra $289",
      featured: false,
      features: [
        "Acceso a una sede",
        "Área de pesas y cardio",
        "Todas las clases grupales",
        "Evaluación física mensual",
        "Plan de entrenamiento app",
        "1 mes gratis incluido",
      ],
    },
  ],
  todas: [
    {
      name: "Mensual",
      price: "$119",
      period: "/ mes",
      saving: null,
      featured: false,
      features: [
        "Acceso a las 3 sedes",
        "Área de pesas y cardio",
        "Clases grupales incluidas",
        "Vestidores y duchas",
      ],
    },
    {
      name: "Trimestral",
      price: "$319",
      period: "/ 3 meses",
      saving: "Ahorra $38",
      featured: false,
      features: [
        "Acceso a las 3 sedes",
        "Área de pesas y cardio",
        "Clases grupales incluidas",
        "Vestidores y duchas",
        "Evaluación física inicial",
      ],
    },
    {
      name: "Semestral",
      price: "$579",
      period: "/ 6 meses",
      saving: "Ahorra $135",
      featured: true,
      features: [
        "Acceso a las 3 sedes",
        "Área de pesas y cardio",
        "Todas las clases grupales",
        "Evaluación física trimestral",
        "Plan de entrenamiento app",
      ],
    },
    {
      name: "Anual",
      price: "$1,049",
      period: "/ año",
      saving: "Ahorra $379",
      featured: false,
      features: [
        "Acceso a las 3 sedes",
        "Área de pesas y cardio",
        "Todas las clases grupales",
        "Evaluación física mensual",
        "Plan de entrenamiento app",
        "1 mes gratis incluido",
      ],
    },
  ],
};

const personalizedPlans = {
  unica: {
    price: "$179",
    sedeLabel: "una sede",
  },
  todas: {
    price: "$239",
    sedeLabel: "las 3 sedes",
  },
};

const personalizedFeatures = [
  "Entrenador personal dedicado",
  "Plan nutricional personalizado",
  "Evaluación física semanal",
  "Acceso zona VIP / Sauna",
  "Seguimiento continuo vía app",
  "Horarios flexibles con tu coach",
];

export function Pricing() {
  const [sede, setSede] = useState<SedeType>("unica");

  const plans = standardPlans[sede];
  const personalized = personalizedPlans[sede];

  return (
    <section id="planes" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">
          ÚNETE AL <span className="text-accent">CLAN</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-lg md:text-xl font-light mb-10">
          Elige tu plan y comienza a transformar tu vida. 3 sedes, un solo
          objetivo.
        </p>

        <div className="inline-flex bg-brand-gray border border-white/10 p-1 mb-16">
          <button
            onClick={() => setSede("unica")}
            className={`px-6 sm:px-10 py-3 text-xs font-black uppercase tracking-widest transition-all ${
              sede === "unica"
                ? "bg-accent text-brand-dark"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Única Sede
          </button>
          <button
            onClick={() => setSede("todas")}
            className={`px-6 sm:px-10 py-3 text-xs font-black uppercase tracking-widest transition-all ${
              sede === "todas"
                ? "bg-accent text-brand-dark"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Todas las Sedes
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`p-8 flex flex-col transition-all ${
              plan.featured
                ? "bg-brand-gray border-2 border-accent relative transform lg:-translate-y-4 shadow-2xl"
                : "bg-brand-gray border border-white/5 hover:border-white/20"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-brand-dark text-[10px] font-black px-5 py-1.5 uppercase tracking-[0.2em] whitespace-nowrap">
                Más Popular
              </div>
            )}
            {plan.saving && (
              <span className="text-accent text-[10px] font-black uppercase tracking-widest mb-2">
                {plan.saving}
              </span>
            )}
            <h3 className="text-lg font-black uppercase mb-3">{plan.name}</h3>
            <div className="mb-6">
              <span
                className={`text-4xl font-black ${
                  plan.featured ? "text-accent" : ""
                }`}
              >
                {plan.price}
              </span>
              <span className="text-gray-500 text-sm italic">
                {" "}
                {plan.period}
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow text-sm text-gray-400 font-medium">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-4 font-black tracking-widest text-xs transition-colors ${
                plan.featured
                  ? "bg-accent text-brand-dark hover:bg-white"
                  : "border border-white/20 text-white hover:bg-white hover:text-brand-dark hover:border-white"
              }`}
            >
              SELECCIONAR
            </button>
          </article>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-gray border border-accent/30 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[2px] w-8 bg-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                Entrenamiento a tu medida
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tight mb-4">
              Plan Personalizado
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Acceso a {personalized.sedeLabel} &middot; Solo mensual
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400 font-medium">
              {personalizedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-right shrink-0">
            <div className="mb-4">
              <span className="text-5xl font-black text-accent">
                {personalized.price}
              </span>
              <span className="text-gray-500 text-sm italic"> / mes</span>
            </div>
            <button className="bg-accent text-brand-dark px-12 py-4 font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">
              COMENZAR AHORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
