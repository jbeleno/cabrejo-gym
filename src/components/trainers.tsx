import Image from "next/image";
import { SectionTag, Arrow } from "./ui";

const coaches = [
  { name: "Carlos", last: '"The Beast"', role: "CrossFit Specialist", tag: "C-01", image: "/images/trainer-carlos.jpg" },
  { name: "Elena", last: "V.", role: "Yoga & Mobility Pro", tag: "C-02", image: "/images/trainer-elena.jpg" },
  { name: "Marcus", last: "Ray", role: "Boxing Technical Coach", tag: "C-03", image: "/images/trainer-marcus.jpg" },
  { name: "Sonia", last: "P.", role: "HIIT & Strength", tag: "C-04", image: "/images/trainer-sonia.jpg" },
];

export function Trainers() {
  return (
    <section id="experiencia" className="relative bg-steel py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
          <div>
            <SectionTag idx={3} label="Staff Elite" />
            <h2 className="mt-6 font-display font-black uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.5rem,7vw,6rem)]">
              Conoce a<br />los <span className="stroke-text italic text-volt">expertos</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60 text-lg">
            Coaches certificados con experiencia competitiva. Te acompañan desde el primer día hasta tu siguiente PR.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coaches.map((c, i) => (
            <article key={c.tag} className="group relative overflow-hidden border border-white/10 bg-ink reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={c.image} alt={`${c.name} ${c.last} - ${c.role}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70">{c.tag}</span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-volt" />Activo
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display font-black uppercase leading-[0.9] text-3xl">
                    {c.name}<br /><span className="italic opacity-80">{c.last}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="px-5 py-5 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/45">Especialidad</div>
                    <div className="mt-1 font-bold uppercase tracking-[0.06em] text-sm">{c.role}</div>
                  </div>
                  <span className="relative inline-flex w-9 h-9 items-center justify-center border border-white/20 group-hover:bg-volt group-hover:border-volt group-hover:text-ink transition">
                    <Arrow />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-volt transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
