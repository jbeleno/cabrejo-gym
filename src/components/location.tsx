"use client";

import { useState } from "react";
import Image from "next/image";

const sedes = [
  {
    name: "Sede Norte",
    address: "Av. Principal Norte 456, Zona Norte",
    city: "Ciudad Deportiva, CP 45010",
    phone: "+52 (555) 111-2233",
    email: "norte@cabrejogym.com",
    hours: "Lun-Vie 5:00-23:00 | Sáb 7:00-18:00 | Dom 8:00-14:00",
  },
  {
    name: "Sede Centro",
    address: "Av. Central 123, Distrito Fitness",
    city: "Ciudad Deportiva, CP 45000",
    phone: "+52 (555) 123-4567",
    email: "centro@cabrejogym.com",
    hours: "Lun-Vie 5:00-23:00 | Sáb 7:00-18:00 | Dom 8:00-14:00",
  },
  {
    name: "Sede Sur",
    address: "Blvd. del Sur 789, Plaza Fitness",
    city: "Ciudad Deportiva, CP 45030",
    phone: "+52 (555) 444-5566",
    email: "sur@cabrejogym.com",
    hours: "Lun-Vie 5:00-23:00 | Sáb 7:00-20:00 | Dom 8:00-16:00",
  },
];

export function Location() {
  const [active, setActive] = useState(0);
  const sede = sedes[active];

  return (
    <section id="sedes" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-4">
            3 Ubicaciones
          </h2>
          <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
            Nuestras <span className="text-accent">Sedes</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-md mx-auto text-lg font-light">
            Entrena donde te quede mejor. Misma calidad, mismo equipo, en toda la
            ciudad.
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {sedes.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              className={`px-5 sm:px-10 py-3 text-xs font-black uppercase tracking-widest transition-all border ${
                active === i
                  ? "bg-accent text-brand-dark border-accent"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/30"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-3xl font-black italic uppercase tracking-tight">
              {sede.name}
            </h4>

            <div className="flex items-start space-x-5">
              <div className="bg-brand-gray p-3 border border-accent/20 shrink-0">
                <svg
                  className="h-5 w-5 text-accent"
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
                <p className="font-black uppercase tracking-[0.2em] text-[10px] text-white mb-1">
                  Dirección
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  {sede.address}
                  <br />
                  {sede.city}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="bg-brand-gray p-3 border border-accent/20 shrink-0">
                <svg
                  className="h-5 w-5 text-accent"
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
                <p className="font-black uppercase tracking-[0.2em] text-[10px] text-white mb-1">
                  Contacto
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  {sede.phone}
                  <br />
                  {sede.email}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="bg-brand-gray p-3 border border-accent/20 shrink-0">
                <svg
                  className="h-5 w-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-[10px] text-white mb-1">
                  Horarios
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  {sede.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 h-[350px] sm:h-[400px] lg:h-[500px] bg-brand-gray overflow-hidden relative border border-white/5">
            <Image
              src="/images/map.jpg"
              alt={`Mapa ${sede.name}`}
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
      </div>
    </section>
  );
}
