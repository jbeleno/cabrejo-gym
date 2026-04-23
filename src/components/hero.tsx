import Image from "next/image";
import { SectionTag, PillBtn, Arrow, BigNumber } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] pt-[72px] overflow-hidden bg-ink">
      <div className="absolute inset-0 grain" aria-hidden="true">
        <Image src="/images/real-sede-centro.jpg" alt="Interior Cabrejo Gym Neiva" fill sizes="100vw" className="object-cover opacity-30" priority />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-28 font-display font-black italic leading-none text-[28vw] text-white/[0.035] select-none">01</div>
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink via-ink/80 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-10 pt-6 flex items-center justify-between text-[10px] md:text-[11px] font-mono uppercase tracking-[0.15em] md:tracking-[0.22em] text-white/45">
        <span className="hidden sm:inline">Est. 2014 · Neiva, Huila</span>
        <span className="sm:hidden">Neiva, Huila</span>
        <span className="hidden md:inline">Abierto 05:00 — 23:00</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-volt animate-pulse" />Cupo abierto</span>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-10 pt-20 md:pt-28">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-volt" />
          <span className="font-mono text-[11px] tracking-[0.28em] text-volt uppercase">Cultura · Disciplina · Acero</span>
        </div>

        <h1 className="font-display font-black uppercase leading-[0.84] tracking-[-0.035em] text-[clamp(3.5rem,11.5vw,10rem)]">
          <span className="block">Transforma</span>
          <span className="block"><span className="stroke-text italic text-volt">Tu</span> <span className="italic">realidad</span></span>
        </h1>

        <div className="mt-10 grid md:grid-cols-[1.1fr_1fr] gap-10 items-end">
          <p className="text-white/70 text-lg md:text-xl max-w-xl leading-snug">
            Más que un gimnasio, una cultura de excelencia. Tecnología de punta y entrenamiento de élite en <span className="text-white">3 sedes</span> de la ciudad.
          </p>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <PillBtn href="#planes" variant="solid">Comienza hoy <Arrow /></PillBtn>
            <PillBtn href="#experiencia" variant="ghost">Ver instalaciones</PillBtn>
          </div>
        </div>

        <div className="mt-16 md:mt-24 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { n: "3", l: "Sedes en Neiva", sub: "Norte · Centro · Sur" },
              { n: "18h", l: "Horario extendido", sub: "05:00 — 23:00" },
              { n: "15+", l: "Coaches PRO", sub: "Certificados" },
              { n: "5K+", l: "Miembros activos", sub: "Y creciendo" },
            ].map((s, i) => (
              <div key={i} className={`p-6 md:p-8 border-white/15 ${i < 3 ? "border-r" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}>
                <BigNumber n={s.n} className="text-volt text-4xl md:text-6xl" />
                <div className="mt-3 text-[13px] font-bold uppercase tracking-[0.14em]">{s.l}</div>
                <div className="mt-1 font-mono text-[11px] text-white/45 uppercase tracking-[0.16em]">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="hidden md:flex absolute left-10 bottom-6 items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
        <span className="block h-8 w-px bg-white/40 animate-pulse" />Desliza
      </div>
    </section>
  );
}
