import Image from "next/image";

export function Hero() {
  return (
    <header
      id="experiencia"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/real-sede-centro.jpg"
          alt="Interior de Cabrejo Gym sede centro en Neiva con área de pesas"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black leading-none tracking-tighter mb-6 uppercase">
            Transforma <br />
            <span className="text-outline">Tu</span> Realidad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed">
            Más que un gimnasio, una cultura de excelencia. Tecnología de punta y
            entrenamiento de élite en 3 sedes de la ciudad.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-16">
            <button className="bg-white text-brand-dark px-6 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-accent transition-colors">
              Comienza Hoy
            </button>
            <button className="border border-white/20 px-6 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-white/10 transition-colors">
              Ver Instalaciones
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 sm:gap-12">
          <div>
            <div className="text-accent text-3xl sm:text-4xl font-black">3</div>
            <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mt-1">
              Sedes
            </div>
          </div>
          <div>
            <div className="text-accent text-3xl sm:text-4xl font-black">24/7</div>
            <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mt-1">
              Acceso Total
            </div>
          </div>
          <div>
            <div className="text-accent text-3xl sm:text-4xl font-black">15+</div>
            <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mt-1">
              Coaches Pro
            </div>
          </div>
          <div>
            <div className="text-accent text-3xl sm:text-4xl font-black">5K+</div>
            <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mt-1">
              Miembros
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
