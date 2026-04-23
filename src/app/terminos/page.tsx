import Link from "next/link";

export default function Terminos() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-volt text-sm font-mono uppercase tracking-[0.2em] mb-12 hover:text-white transition">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Volver al inicio
        </Link>

        <h1 className="font-display font-black uppercase text-5xl md:text-7xl tracking-[-0.03em] leading-[0.86]">
          Términos y <span className="italic text-volt">Condiciones</span>
        </h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.25em] uppercase text-white/50">Última actualización: Abril 2026</p>

        <div className="mt-12 space-y-8 text-white/75 leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">1. Membresías</h2>
            <p>Las membresías de Cabrejo Gym son personales e intransferibles. Al adquirir una membresía, usted acepta cumplir con las normas de uso de nuestras instalaciones. Los precios pueden variar según la sede y el plan seleccionado.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">2. Pagos y facturación</h2>
            <p>Los pagos se realizan de forma anticipada según el plan elegido (mensual, trimestral, semestral o anual). Los precios están expresados en pesos colombianos (COP). No se realizan reembolsos por días no utilizados dentro del período de facturación vigente.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">3. Cancelación</h2>
            <p>Las membresías Mensual y Trimestral pueden cancelarse en cualquier momento sin penalidad, con un aviso de 10 días antes de la próxima fecha de facturación. Para planes Semestral y Anual, se aplicará un ajuste proporcional por los meses con descuento ya utilizados.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">4. Cambio de plan o sede</h2>
            <p>Los cambios de plan se hacen efectivos en el siguiente ciclo de facturación. Los upgrades se prorratean de inmediato. El cambio de sede para planes de Única Sede se puede solicitar en recepción o a través de la app.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">5. Uso de instalaciones</h2>
            <p>Los miembros deben utilizar las instalaciones de manera responsable y respetuosa. Cabrejo Gym se reserva el derecho de suspender o cancelar la membresía de cualquier persona que incumpla las normas de convivencia o ponga en riesgo la seguridad de otros miembros.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">6. Responsabilidad</h2>
            <p>Cabrejo Gym no se hace responsable por lesiones personales ocurridas durante el uso de las instalaciones por negligencia del miembro. Recomendamos realizar una evaluación médica antes de iniciar cualquier programa de entrenamiento.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">7. Horarios</h2>
            <p>Los horarios de operación son: Lunes a Viernes de 05:00 a 23:00, Sábados de 07:00 a 18:00, Domingos de 08:00 a 14:00. Los horarios pueden modificarse en días festivos o por mantenimiento con previo aviso.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-3">8. Contacto</h2>
            <p>Para consultas sobre estos términos:<br />
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
