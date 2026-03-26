"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#clases", label: "Clases" },
  { href: "#planes", label: "Planes" },
  { href: "#sedes", label: "Sedes" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="px-6 py-5 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter italic">
          CABREJO<span className="text-accent">GYM</span>
        </div>
        <div className="hidden md:flex gap-12 text-sm font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#planes"
            className="hidden sm:inline-block bg-accent text-brand-dark px-8 py-3 font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Únete Ahora
          </Link>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#planes"
            className="block bg-accent text-brand-dark px-8 py-3 font-black text-xs uppercase tracking-widest text-center mt-4"
            onClick={() => setOpen(false)}
          >
            Únete Ahora
          </Link>
        </div>
      </div>
    </nav>
  );
}
