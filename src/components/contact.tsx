export function Contact() {
  return (
    <section id="contacto" className="py-32 px-6 bg-brand-gray">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-4">
          Escríbenos
        </h2>
        <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
          ¿LISTO PARA <br /> EL CAMBIO?
        </h3>
      </div>
      <form className="max-w-2xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              Nombre Completo
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-brand-dark border border-transparent focus:border-accent focus:ring-0 text-white p-5 rounded-sm transition outline-none"
            />
          </div>
          <div className="space-y-3">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-brand-dark border border-transparent focus:border-accent focus:ring-0 text-white p-5 rounded-sm transition outline-none"
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            Interés
          </label>
          <select className="w-full bg-brand-dark border border-transparent focus:border-accent focus:ring-0 text-white p-5 rounded-sm transition appearance-none outline-none">
            <option>Membresía Individual</option>
            <option>Entrenamiento Personal</option>
            <option>Clases Grupales</option>
            <option>Otros</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            Mensaje
          </label>
          <textarea
            placeholder="¿Cómo podemos ayudarte?"
            rows={4}
            className="w-full bg-brand-dark border border-transparent focus:border-accent focus:ring-0 text-white p-5 rounded-sm transition outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-brand-dark font-black uppercase tracking-[0.2em] py-6 rounded-sm hover:bg-white transition duration-300 text-sm"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}
