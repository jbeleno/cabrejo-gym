export function Contact() {
  return (
    <section id="contacto" className="py-32 px-6 bg-brand-gray">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-4">
          Escríbenos
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter">
          ¿LISTO PARA <br /> EL CAMBIO?
        </h3>
      </div>
      <form className="max-w-2xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label
              htmlFor="nombre"
              className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500"
            >
              Nombre Completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              autoComplete="name"
              className="w-full bg-brand-dark border border-transparent focus:border-accent focus:ring-0 text-white p-5 rounded-sm transition outline-none"
            />
          </div>
          <div className="space-y-3">
            <label
              htmlFor="email"
              className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              autoComplete="email"
              className="w-full bg-brand-dark border border-transparent focus:border-accent focus:ring-0 text-white p-5 rounded-sm transition outline-none"
            />
          </div>
        </div>
        <div className="space-y-3">
          <label
            htmlFor="interes"
            className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500"
          >
            Interés
          </label>
          <select
            id="interes"
            name="interes"
            className="w-full bg-brand-dark border border-transparent focus:border-accent focus:ring-0 text-white p-5 rounded-sm transition appearance-none outline-none"
          >
            <option>Plan Mensual - Única Sede</option>
            <option>Plan Trimestral - Única Sede</option>
            <option>Plan Semestral - Única Sede</option>
            <option>Plan Anual - Única Sede</option>
            <option>Plan Mensual - Todas las Sedes</option>
            <option>Plan Trimestral - Todas las Sedes</option>
            <option>Plan Semestral - Todas las Sedes</option>
            <option>Plan Anual - Todas las Sedes</option>
            <option>Plan Personalizado - Única Sede</option>
            <option>Plan Personalizado - Todas las Sedes</option>
            <option>Otro / Información General</option>
          </select>
        </div>
        <div className="space-y-3">
          <label
            htmlFor="mensaje"
            className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
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
