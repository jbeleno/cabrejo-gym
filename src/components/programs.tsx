import Image from "next/image";

const programs = [
  {
    title: "CrossFit",
    tag: "Intensidad Alta",
    description:
      "Entrenamiento funcional de alta intensidad diseñado para mejorar tu fuerza, resistencia y agilidad.",
    image: "/images/crossfit.jpg",
  },
  {
    title: "Boxing",
    tag: "Combate",
    description:
      "Domina la técnica y mejora tu condición cardiovascular con nuestras sesiones de boxeo profesional.",
    image: "/images/boxing.jpg",
  },
  {
    title: "Yoga & Mobility",
    tag: "Bienestar",
    description:
      "Encuentra el equilibrio perfecto entre fuerza mental y flexibilidad física en un ambiente enfocado.",
    image: "/images/yoga.jpg",
  },
];

export function Programs() {
  return (
    <section id="clases" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic uppercase leading-none tracking-tighter">
            NUESTROS <br />
            <span className="text-accent">PROGRAMAS</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg uppercase tracking-widest font-medium">
            Llevando tu potencial al límite con entrenamiento de clase mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group relative overflow-hidden bg-brand-gray border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image
                  src={program.image}
                  alt={`${program.title} en Cabrejo Gym Neiva`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-8 bg-accent" />
                  <span className="text-accent font-bold text-xs uppercase tracking-widest">
                    {program.tag}
                  </span>
                </div>
                <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tight">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {program.description}
                </p>
                <button className="w-full py-4 border border-white/20 hover:bg-accent hover:text-brand-dark hover:border-accent transition-all font-bold text-xs uppercase tracking-widest">
                  Ver Detalles
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
