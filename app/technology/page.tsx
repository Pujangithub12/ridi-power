"use client";

import Image from "next/image";
import { Sun, Battery, Waves, Cog } from "lucide-react";

const technologies = [
  {
    icon: Sun,
    title: "Solar PV",
    imageSrc:
      "/butwal-solar/109101731_737599080391580_4802212191086660742_n.jpg",
    description:
      "Grid-connected photovoltaic arrays that convert sunlight directly into electricity, complementing our hydropower generation with a diversified renewable portfolio. Panels are laid out and inclined to maximize year-round solar capture at each site, with inverter systems tuned for stable, synchronized grid injection. This flexibility lets us bring capacity online in regions with strong solar irradiance, independent of river flow or seasonal hydrology.",
    specs: ["Efficiency: 21%", "Panel Life: 25+ yrs", "Capacity: 1-50 MW"],
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: Waves,
    title: "Francis Turbines",
    imageSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
    description:
      "The workhorse of modern hydropower, our Francis configurations are precision-machined for medium-head assets requiring absolute lifecycle resilience. Water enters radially through a spiral casing and exits axially through the runner, converting both pressure and velocity into rotational energy with minimal turbulence loss. Their proven mechanical simplicity and broad operating envelope make them the default choice for the majority of our reservoir and diversion projects worldwide.",
    specs: ["Efficiency: 92%", "Head Range: 20-700m", "Capacity: 10-800 MW"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Cog,
    title: "Pelton Wheels",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/PeltonWheel.jpg",
    description:
      "High-head impulse systems designed for rugged topography. Optimized specifically for complex high-velocity run-of-river installations. Precisely machined spoon-shaped buckets deflect free jets of water discharged from needle-valve nozzles, extracting kinetic energy at atmospheric pressure rather than through a submerged runner. This impulse principle lets Pelton wheels harness the extreme heads found in steep mountain terrain, where other turbine types would be mechanically unviable.",
    specs: ["Efficiency: 91%", "Head Range: 200-1800m", "Capacity: 1-50 MW"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Battery,
    title: "Pumped Storage Systems",
    imageSrc:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop",
    description:
      "Reversible pump-turbine plants that serve as high-capacity macro grid batteries, cycling energy to upper reservoirs during supply surpluses. During off-peak hours, surplus grid power drives the units in reverse to pump water uphill into a storage reservoir; on demand, that same water is released back down through the turbines to generate power within seconds. This dispatchable flexibility makes pumped storage a critical stabilizer for grids carrying an increasing share of intermittent renewable generation.",
    specs: ["Round-trip: 87%", "Response: <60s", "Storage: Up to 24h"],
    gradient: "from-teal-500 to-emerald-500",
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold mb-4">
          System Infrastructure Core
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 text-slate-900">
          Our Technology
        </h1>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
           We spec and deploy bespoke variable geometry turbine hardware
            tailored precisely to regional water discharge velocity
            profiles.
        </p>
      </section>

      {/* Turbine Systems */}
      <section className="pt-16 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center py-14 ${index !== 0 ? "border-t border-slate-100" : ""}`}
              >
                <div
                  className={`relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <Image
                    src={tech.imageSrc}
                    alt={tech.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white shadow-md mb-5`}
                  >
                    <tech.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-base text-slate-500 leading-relaxed mb-5">
                    {tech.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tech.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 text-[11px] font-bold shadow-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
