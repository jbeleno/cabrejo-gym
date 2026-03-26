import Image from "next/image";

export function Location() {
  return (
    <section id="sedes" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-4">
          <h2 className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-6">
            Ubicación
          </h2>
          <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-8">
            Nuestra Sede <br />
            Central
          </h3>
          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <div className="bg-brand-gray p-4 rounded-sm border border-accent/20">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-xs text-white mb-2">
                  Dirección
                </p>
                <p className="text-gray-400 font-medium">
                  Av. Central 123, Distrito Fitness
                  <br />
                  Ciudad Deportiva, CP 45000
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-brand-gray p-4 rounded-sm border border-accent/20">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-xs text-white mb-2">
                  Contacto
                </p>
                <p className="text-gray-400 font-medium">
                  +52 (555) 123-4567
                  <br />
                  info@cabrejogym.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 h-[500px] bg-brand-gray rounded-sm overflow-hidden relative border border-white/5">
          <Image
            src="/images/map.jpg"
            alt="Mapa de ubicación"
            fill
            className="object-cover dark-map-overlay"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 bg-accent/30 rounded-full animate-ping" />
              <div className="relative w-8 h-8 bg-accent rounded-full shadow-[0_0_25px_rgba(255,245,13,0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
