"use client";

import { useState, useEffect } from "react";
import { PillBtn, Arrow } from "./ui";

const links = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Clases", href: "#clases" },
  { label: "Planes", href: "#planes" },
  { label: "Sedes", href: "#sedes" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-ink/80 border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" className="font-display font-black tracking-[-0.02em] text-[22px] leading-none select-none" aria-label="Cabrejo Gym inicio">
          <span className="text-white">CABREJO</span><span className="text-volt italic">GYM</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-[13px] uppercase tracking-[0.18em] font-bold text-white/80 hover:text-white transition-colors">
              {l.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase">Neiva · 3 sedes</span>
          <PillBtn href="#planes" variant="volt" className="!px-5 !py-3">Únete ahora <Arrow /></PillBtn>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-white/15"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className={`block h-[2px] w-5 bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="bg-ink/95 backdrop-blur border-t border-white/10 px-6 py-8">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="group flex items-center justify-between text-white text-2xl font-display font-black uppercase">
                <span>{l.label}</span>
                <Arrow className="opacity-50 group-hover:opacity-100 group-hover:text-volt transition" />
              </a>
            ))}
            <PillBtn href="#planes" variant="volt" onClick={() => setOpen(false)} className="mt-4 justify-center">
              Únete ahora <Arrow />
            </PillBtn>
          </div>
        </div>
      </div>
    </header>
  );
}
