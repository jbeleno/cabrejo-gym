import Link from "next/link";

const navLinks = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#clases", label: "Clases" },
  { href: "#planes", label: "Planes" },
  { href: "#sedes", label: "Sedes" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
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
      <Link
        href="#planes"
        className="bg-accent text-brand-dark px-8 py-3 font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
      >
        Únete Ahora
      </Link>
    </nav>
  );
}
