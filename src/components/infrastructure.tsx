import Image from "next/image";

const gallery = [
  { src: "/images/gym-weights.jpg", alt: "Weight Area", className: "row-span-2" },
  { src: "/images/gym-cardio.jpg", alt: "Cardio Zone", className: "col-span-2" },
  { src: "/images/gym-lockers.jpg", alt: "Locker Rooms", className: "" },
  { src: "/images/gym-machines.jpg", alt: "Machines", className: "" },
];

export function Infrastructure() {
  return (
    <section id="infraestructura" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Instalaciones
          </h2>
          <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
            Infraestructura <br />
            Premium
          </h3>
        </div>
        <p className="text-gray-400 max-w-sm text-lg font-light border-l-2 border-accent pl-8">
          Equipamiento de última generación y espacios diseñados para tu
          comodidad y rendimiento máximo.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4">
          {gallery.map((item) => (
            <div
              key={item.alt}
              className={`overflow-hidden rounded-sm group relative ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
