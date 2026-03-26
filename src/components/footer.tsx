import Link from "next/link";

const exploreLinks = ["Sobre Nosotros", "Instalaciones", "Programas", "Precios"];

const schedule = [
  { days: "Lunes - Viernes:", hours: "5:00 - 23:00" },
  { days: "Sábados:", hours: "7:00 - 18:00" },
  { days: "Domingos:", hours: "8:00 - 14:00" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 md:gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="text-4xl font-black italic tracking-tighter mb-8">
            CABREJO<span className="text-accent">GYM</span>
          </div>
          <p className="text-gray-500 max-w-sm mb-10 text-lg leading-relaxed font-medium">
            3 sedes, una comunidad. La red fitness más exclusiva del país.
            Diseñada por atletas para atletas. No es solo ejercicio, es estilo de vida.
          </p>
          <div className="flex space-x-8 font-black text-xs tracking-widest text-gray-400">
            <Link href="#" className="hover:text-accent transition">
              INSTAGRAM
            </Link>
            <Link href="#" className="hover:text-accent transition">
              FACEBOOK
            </Link>
            <Link href="#" className="hover:text-accent transition">
              TIKTOK
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-white mb-8">
            Explora
          </h4>
          <ul className="space-y-5 text-gray-500 text-sm font-bold uppercase tracking-widest">
            {exploreLinks.map((label) => (
              <li key={label}>
                <Link href="#" className="hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-white mb-8">
            Horarios
          </h4>
          <ul className="space-y-5 text-gray-500 text-sm font-bold tracking-tight">
            {schedule.map((item) => (
              <li key={item.days} className="flex justify-between">
                <span>{item.days}</span>
                <span className="text-white">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.3em] font-black">
        <p>&copy; 2026 CABREJO GYM. Todos los derechos reservados.</p>
        <div className="flex space-x-12 mt-6 md:mt-0">
          <Link href="#" className="hover:text-white transition">
            Privacidad
          </Link>
          <Link href="#" className="hover:text-white transition">
            Términos
          </Link>
        </div>
      </div>
    </footer>
  );
}
