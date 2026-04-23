import Image from "next/image";
import { SectionTag, Arrow } from "./ui";

const items = [
  { tag: "Intensidad Alta", name: "CrossFit", image: "/images/crossfit.jpg", desc: "Entrenamiento funcional de alta intensidad diseñado para mejorar tu fuerza, resistencia y agilidad.", meta: ["WOD diario", "60 min", "Grupo 12"] },
  { tag: "Combate", name: "Boxing", image: "/images/boxing.jpg", desc: "Domina la técnica y mejora tu condición cardiovascular con nuestras sesiones de boxeo profesional.", meta: ["Ring pro", "55 min", "Todos los niveles"] },
  { tag: "Bienestar", name: "Yoga & Mobility", image: "/images/yoga.jpg", desc: "Encuentra el equilibrio perfecto entre fuerza mental y flexibilidad física en un ambiente enfocado.", meta: ["Sala climatizada", "75 min", "Foco mindful"] },
];

export function Programs() {
  return (
    <section id="clases" className="relative bg-ink py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 reveal">
          <div>
            <SectionTag idx={2} label="Programas" />
            <h2 className="mt-6 font-display font-black uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.75rem,7vw,6rem)]">
              Nuestros<br /><span className="italic">programas</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-lg">
            Tres disciplinas, una obsesión: progreso medible. Cada programa se construye alrededor de tu ritmo y tus objetivos.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <article key={p.name} className="group relative overflow-hidden h-[560px] border border-white/10 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <Image src={p.image} alt={`${p.name} en Cabrejo Gym Neiva`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 img-fade" />

              <div className="absolute top-6 right-6 font-display font-black italic text-[7rem] leading-none text-white/10 select-none" aria-hidden="true">
                0{i + 1}
              </div>

              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="bg-volt text-ink font-bold uppercase text-[10px] tracking-[0.22em] px-2 py-1">{p.tag}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-5xl lg:text-6xl">{p.name}</h3>
                <p className="mt-4 text-white/75 max-w-sm leading-snug">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.meta.map((m) => (
                    <span key={m} className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 border border-white/20 px-2.5 py-1.5">{m}</span>
                  ))}
                </div>
                <a href="#contacto" className="mt-7 inline-flex items-center justify-between w-full group/btn border-t border-white/20 pt-5">
                  <span className="font-bold uppercase tracking-[0.18em] text-[13px] group-hover/btn:text-volt transition">Ver detalles</span>
                  <span className="relative flex items-center justify-center w-10 h-10 border border-white/30 group-hover/btn:bg-volt group-hover/btn:border-volt group-hover/btn:text-ink transition">
                    <Arrow />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
