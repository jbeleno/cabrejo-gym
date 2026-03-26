import Image from "next/image";

const trainers = [
  {
    name: 'Carlos "The Beast"',
    role: "CrossFit Specialist",
    image: "/images/trainer-carlos.jpg",
  },
  {
    name: "Elena V.",
    role: "Yoga & Mobility Pro",
    image: "/images/trainer-elena.jpg",
  },
  {
    name: "Marcus Ray",
    role: "Boxing Technical Coach",
    image: "/images/trainer-marcus.jpg",
  },
  {
    name: "Sonia P.",
    role: "HIIT & Strength",
    image: "/images/trainer-sonia.jpg",
  },
];

export function Trainers() {
  return (
    <section className="py-32 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-accent font-black text-xs uppercase tracking-[0.3em]">
              Staff Elite
            </span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase mt-2 tracking-tighter">
              MEET THE <br />
              <span className="text-stroke-yellow">EXPERTS</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm uppercase leading-relaxed font-bold tracking-wider">
            Nuestros entrenadores están certificados internacionalmente para
            llevarte a tu mejor versión.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="relative group">
              <div className="aspect-[3/4] overflow-hidden bg-brand-dark grayscale hover:grayscale-0 transition-all duration-500 relative">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-brand-dark border-b-2 border-transparent group-hover:border-accent transition-all">
                <h4 className="font-black italic uppercase text-xl">
                  {trainer.name}
                </h4>
                <p className="text-accent text-[10px] uppercase font-bold tracking-widest mt-1">
                  {trainer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
