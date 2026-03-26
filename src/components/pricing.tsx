const plans = [
  {
    name: "Básico",
    price: "$29",
    featured: false,
    features: [
      { text: "Acceso de Lunes a Viernes", included: true },
      { text: "Área de Pesas Libres", included: true },
      { text: "Vestidores y Duchas", included: true },
      { text: "Sin Clases Grupales", included: false },
    ],
    cta: "SELECCIONAR",
  },
  {
    name: "Pro",
    price: "$49",
    featured: true,
    features: [
      { text: "Acceso Total 24/7", included: true },
      { text: "Todas las Clases Grupales", included: true },
      { text: "Evaluación Física Inicial", included: true },
      { text: "Plan de Entrenamiento App", included: true },
    ],
    cta: "EMPEZAR AHORA",
  },
  {
    name: "Elite",
    price: "$89",
    featured: false,
    features: [
      { text: "Todo lo del Plan Pro", included: true },
      { text: "4 Sesiones de Personal Trainer", included: true, bold: true },
      { text: "Acceso a Zona VIP / Sauna", included: true },
      { text: "Plan de Nutrición Mensual", included: true },
    ],
    cta: "ELEGIR ELITE",
  },
];

export function Pricing() {
  return (
    <section id="planes" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">
          ÚNETE AL <span className="text-accent">CLAN</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-lg md:text-xl font-light">
          No es solo un gimnasio, es el lugar donde forjas tu mejor versión.
          Elige tu camino.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`p-10 flex flex-col transition-transform ${
              plan.featured
                ? "bg-brand-gray border-2 border-accent relative transform md:-translate-y-4 shadow-2xl"
                : "bg-brand-gray border border-white/5 hover:scale-105"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-brand-dark text-[10px] font-black px-6 py-2 uppercase tracking-[0.2em]">
                Recomendado
              </div>
            )}
            <h2 className="text-xl font-black uppercase mb-2">{plan.name}</h2>
            <div className="mb-6">
              <span
                className={`text-5xl font-black ${plan.featured ? "text-accent" : ""}`}
              >
                {plan.price}
              </span>
              <span className="text-gray-500 text-sm italic">/ mes</span>
            </div>
            <ul
              className={`space-y-4 mb-10 flex-grow text-sm ${
                plan.featured ? "text-gray-100 font-bold" : "text-gray-400 font-medium"
              }`}
            >
              {plan.features.map((feature) => (
                <li
                  key={feature.text}
                  className={`flex items-center ${
                    !feature.included ? "text-gray-700" : ""
                  } ${feature.bold ? "font-bold text-white" : ""}`}
                >
                  {feature.included ? (
                    <span className="text-accent mr-3">✓</span>
                  ) : (
                    "✕ "
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-4 font-black tracking-widest text-xs ${
                plan.featured
                  ? "bg-accent text-brand-dark hover:bg-white transition-colors"
                  : "border-2 border-white text-white hover:bg-white hover:text-brand-dark transition-colors"
              }`}
            >
              {plan.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
