import { Arrow } from "./ui";

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/40 mb-4">{title}</div>
      <ul className="space-y-2.5">
        {items.map(([l, h]) => (
          <li key={l}><a href={h} className="text-white/80 hover:text-volt transition text-sm leading-tight">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-white/10">
      <div aria-hidden="true" className="relative overflow-hidden max-w-[1600px] mx-auto px-5 md:px-10 pt-16 md:pt-20">
        <div className="font-display font-black italic uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(2.5rem,10vw,8rem)] select-none whitespace-nowrap">
          <span className="text-white">CABREJO</span><span className="text-volt">GYM</span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-12 pb-10">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 md:gap-8 border-t border-white/10 pt-12">
          <div>
            <p className="text-white/70 max-w-sm leading-snug">
              3 sedes, una comunidad. El gimnasio de referencia en Neiva. Entrena, crece y transforma tu realidad con Cabrejo Gym.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { n: "Instagram", href: "https://www.instagram.com/cabrejogym", icon: <><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></> },
                { n: "Facebook", href: "https://www.facebook.com/cabrejogym", icon: <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.3-2 2-2h2V2.1c-.9-.1-2-.2-3.1-.2-3.1 0-5 1.9-5 5.2V10H6v4h3v8h4Z" /> },
                { n: "TikTok", href: "https://www.tiktok.com/@cabrejogym", icon: <path d="M16 3c0 2.2 1.8 4 4 4v3c-1.6 0-3.1-.5-4.3-1.4V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3a3 3 0 1 0 2 2.8V3h3.3Z" /> },
              ].map((s) => (
                <a key={s.n} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.n} className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/75 hover:bg-volt hover:text-ink hover:border-volt transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explora" items={[["Sobre Nosotros", "#experiencia"], ["Instalaciones", "#experiencia"], ["Programas", "#clases"], ["Precios", "#planes"]]} />
          <FooterCol title="Horarios" items={[["Lun — Vie · 05:00 — 23:00", "#sedes"], ["Sábado · 07:00 — 18:00", "#sedes"], ["Domingo · 08:00 — 14:00", "#sedes"]]} />

          <div>
            <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/40 mb-4">Sedes</div>
            <ul className="space-y-2.5 text-white/80 text-sm">
              <li><span className="font-bold">Norte</span> · Av. Principal Norte 456</li>
              <li><span className="font-bold">Centro</span> · Cra 5 #10-23</li>
              <li><span className="font-bold">Sur</span> · Cll 21 Sur #7-89</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between font-mono text-[11px] tracking-[0.22em] uppercase text-white/40">
          <div>© 2026 Cabrejo Gym · Neiva, Huila — Todos los derechos reservados</div>
          <div className="flex items-center gap-6">
            <a href="/privacidad" className="hover:text-volt">Privacidad</a>
            <a href="/terminos" className="hover:text-volt">Términos</a>
            <span className="hidden md:flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-volt" />Cupo abierto</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
