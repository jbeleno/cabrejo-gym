import Image from "next/image";

export function Hero() {
  return (
    <header
      id="experiencia"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Gym Interior"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-10">
          <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter mb-6 uppercase">
            Transforma <br />
            <span className="text-outline">Tu</span> Realidad
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed">
            Más que un gimnasio, una cultura de excelencia. Tecnología de punta y
            entrenamiento de élite en el corazón de la ciudad.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-white text-brand-dark px-10 py-5 font-black uppercase tracking-widest hover:bg-accent transition-colors">
              Comienza Hoy
            </button>
            <button className="border border-white/20 px-10 py-5 font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
              Ver Instalaciones
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 hidden md:block">
        <div className="flex gap-12 text-right">
          <div>
            <div className="text-accent text-4xl font-black">24/7</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">
              Acceso Total
            </div>
          </div>
          <div>
            <div className="text-accent text-4xl font-black">15+</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">
              Coaches Pro
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
