import Link from "next/link";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-volt text-sm font-mono uppercase tracking-[0.2em] mb-12 hover:text-white transition">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Volver al inicio
        </Link>

        <h1 className="font-display font-black uppercase text-5xl md:text-7xl tracking-[-0.03em] leading-[0.86]">
          Política de <span className="italic text-volt">Privacidad</span>
        </h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.25em] uppercase text-white/50">Última actualización: Abril 2026</p>

        <div className="mt-12 space-y-8 text-white/75 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">1. Información que recopilamos</h2>
            <p>Cabrejo Gym recopila información personal que usted nos proporciona voluntariamente a través de nuestro formulario de contacto: nombre completo, dirección de correo electrónico, plan de interés y mensaje. Esta información se transmite directamente a WhatsApp para facilitar la comunicación.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">2. Uso de la información</h2>
            <p>Utilizamos su información exclusivamente para responder a sus consultas, proporcionarle información sobre nuestros planes y servicios, y mejorar su experiencia como usuario potencial o miembro de Cabrejo Gym.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">3. Compartir información</h2>
            <p>No vendemos, comercializamos ni transferimos su información personal a terceros. La información proporcionada a través del formulario se envía únicamente a través de WhatsApp (Meta Platforms) para facilitar la comunicación directa con nuestro equipo.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">4. Cookies y tecnologías</h2>
            <p>Este sitio web utiliza cookies esenciales para su funcionamiento. Utilizamos mapas de Leaflet/CartoDB que pueden establecer cookies de terceros para cargar los tiles del mapa.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">5. Sus derechos</h2>
            <p>De acuerdo con la Ley 1581 de 2012 de Colombia (Ley de Protección de Datos Personales), usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales. Para ejercer estos derechos, contáctenos a centro@cabrejogym.com.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">6. Contacto</h2>
            <p>Para preguntas sobre esta política de privacidad, puede contactarnos en:<br />
              <strong className="text-white">Email:</strong> centro@cabrejogym.com<br />
              <strong className="text-white">Teléfono:</strong> +57 (608) 123-4567<br />
              <strong className="text-white">Dirección:</strong> Cra 5 #10-23, Centro, Neiva, Huila
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
