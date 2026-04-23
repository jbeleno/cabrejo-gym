"use client";

import { useState } from "react";
import { SectionTag, Arrow } from "./ui";

const WHATSAPP_NUMBER = "57608123456";

const planes = [
  "Mensual · Única Sede",
  "Trimestral · Única Sede",
  "Semestral · Única Sede",
  "Anual · Única Sede",
  "Mensual · Todas las Sedes",
  "Trimestral · Todas las Sedes",
  "Semestral · Todas las Sedes",
  "Anual · Todas las Sedes",
  "Plan Personalizado",
  "Aún no lo sé · Quiero asesoría",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", plan: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Cuéntanos tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email no válido.";
    if (!form.plan) e.plan = "Elige un plan de interés.";
    if (form.msg.trim().length < 5) e.msg = "Escribe un mensaje corto.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = `Hola Cabrejo Gym\n\nSoy ${form.name}.\nEmail: ${form.email}\nInterés: ${form.plan}\n\n${form.msg}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
    setSent(true);
  };

  const FieldLabel = ({ children, n }: { children: React.ReactNode; n: number }) => (
    <div className="flex items-center gap-3 mb-2">
      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-volt">0{n}</span>
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/55">{children}</span>
    </div>
  );

  return (
    <section id="contacto" className="relative bg-graphite py-24 md:py-32 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-8 font-display font-black italic leading-none text-[26vw] text-white/[0.025] select-none">Cambio</div>

      <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 grid lg:grid-cols-[1fr_1fr] gap-14">
        <div className="reveal">
          <SectionTag idx={8} label="Contacto" />
          <h2 className="mt-6 font-display font-black uppercase leading-[0.84] tracking-[-0.035em] text-[clamp(2.75rem,7.5vw,6.5rem)]">
            ¿Listo para<br />el <span className="italic text-volt">cambio?</span>
          </h2>
          <p className="mt-6 text-white/65 max-w-md text-lg">
            Déjanos tus datos y te contactamos por WhatsApp en menos de 24 horas. Sin costo, sin compromiso.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              { k: "Responde", v: "< 24h" },
              { k: "Cupos", v: "Abiertos" },
              { k: "Prueba", v: "Gratis · 1 día" },
              { k: "Sedes", v: "3 en Neiva" },
            ].map((b, i) => (
              <div key={i} className="bg-graphite p-5">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45">{b.k}</div>
                <div className="mt-1 font-display font-black text-2xl">{b.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
            <span className="h-px flex-1 bg-white/15" />o llámanos<span className="h-px flex-1 bg-white/15" />
          </div>
          <a href="tel:+576081234567" className="mt-4 block font-display font-black text-3xl md:text-4xl hover:text-volt transition">
            +57 (608) 123-4567
          </a>
        </div>

        <form onSubmit={submit} noValidate className="relative p-7 md:p-10 bg-ink border border-white/10 reveal">
          <div className="flex items-center justify-between mb-8">
            <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-white/50">Formulario · F-001</div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" /> Cifrado
            </div>
          </div>

          <div className="space-y-7">
            <div>
              <FieldLabel n={1}>Nombre completo</FieldLabel>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="¿Cómo te llamas?" className="w-full bg-transparent border-0 border-b border-white/20 focus:border-volt py-3 text-xl md:text-2xl font-display font-bold placeholder:text-white/25 outline-none transition" />
              {errors.name && <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.18em] text-volt">{errors.name}</div>}
            </div>
            <div>
              <FieldLabel n={2}>Email</FieldLabel>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@email.com" className="w-full bg-transparent border-0 border-b border-white/20 focus:border-volt py-3 text-xl md:text-2xl font-display font-bold placeholder:text-white/25 outline-none transition" />
              {errors.email && <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.18em] text-volt">{errors.email}</div>}
            </div>
            <div>
              <FieldLabel n={3}>Plan de interés</FieldLabel>
              <select value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} className="appearance-none w-full bg-transparent border-0 border-b border-white/20 focus:border-volt py-3 pr-8 text-xl md:text-2xl font-display font-bold outline-none transition">
                <option value="" className="bg-ink">— Elige un plan —</option>
                {planes.map((p) => <option key={p} value={p} className="bg-ink">{p}</option>)}
              </select>
              {errors.plan && <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.18em] text-volt">{errors.plan}</div>}
            </div>
            <div>
              <FieldLabel n={4}>Mensaje</FieldLabel>
              <textarea rows={3} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} placeholder="Cuéntanos tus objetivos, disponibilidad, dudas…" className="w-full bg-transparent border-0 border-b border-white/20 focus:border-volt py-3 text-lg font-medium placeholder:text-white/25 outline-none resize-none transition" />
              {errors.msg && <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.18em] text-volt">{errors.msg}</div>}
            </div>
          </div>

          <button type="submit" className="mt-10 w-full group relative overflow-hidden bg-volt text-ink py-5 px-6 flex items-center justify-between font-bold uppercase tracking-[0.2em] text-[13px] hover:bg-white transition">
            <span className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52ZM12 21.82c-1.86 0-3.68-.5-5.28-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.8 9.8 0 0 1 2.18 12C2.18 6.58 6.58 2.18 12 2.18S21.82 6.58 21.82 12 17.42 21.82 12 21.82Zm5.4-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.48 1.7.62.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
              Enviar por WhatsApp
            </span>
            <Arrow />
          </button>

          {sent && (
            <div className="mt-5 p-4 bg-volt/10 border border-volt/40 text-volt text-sm">
              ¡Listo! Te abrimos WhatsApp con tu mensaje prellenado.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
