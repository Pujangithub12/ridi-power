"use client";

import Image from "next/image";
import {
  Cpu,
  Droplets,
  Zap,
  BarChart3,
  Shield,
  Wifi,
  Battery,
  Waves,
  Cog,
} from "lucide-react";

const technologies = [
  {
    icon: Droplets,
    title: "Kaplan Turbines",
    imageSrc:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop",
    description:
      "Variable-pitch blade turbines optimized for low-head, high-flow conditions. Our custom designs achieve engineered efficiency benchmarks.",
    specs: ["Efficiency: 94%", "Head Range: 2-40m", "Capacity: 5-200 MW"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Waves,
    title: "Francis Turbines",
    imageSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop",
    description:
      "The workhorse of modern hydropower, our Francis configurations are precision-machined for medium-head assets requiring absolute lifecycle resilience.",
    specs: ["Efficiency: 92%", "Head Range: 20-700m", "Capacity: 10-800 MW"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Cog,
    title: "Pelton Wheels",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/PeltonWheel.jpg",
    description:
      "High-head impulse systems designed for rugged topography. Optimized specifically for complex high-velocity run-of-river installations.",
    specs: ["Efficiency: 91%", "Head Range: 200-1800m", "Capacity: 1-50 MW"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Battery,
    title: "Pumped Storage Systems",
    imageSrc:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop",
    description:
      "Reversible pump-turbine plants that serve as high-capacity macro grid batteries, cycling energy to upper reservoirs during supply surpluses.",
    specs: ["Round-trip: 87%", "Response: <60s", "Storage: Up to 24h"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const innovations = [
  {
    icon: Cpu,
    title: "Predictive Analytics Engine",
    description:
      "Advanced neural networks process high-frequency structural vibration data to pinpoint mechanical anomalies weeks before onset.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wifi,
    title: "Industrial IoT Topology",
    description:
      "Dense telemetry array nodes actively transmit synchronous operational data channels covering hydraulic flow, thermal variance, and structural load.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Zero-Trust SCADA Infrastructure",
    description:
      "Hardened execution environments and cryptographically isolated network paths secure critical distribution layers against external threat vectors.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: BarChart3,
    title: "Dynamic Digital Twins",
    description:
      "High-fidelity real-time physics simulations run concurrently with physical hardware blocks to execute real-time efficiency stress tests safely.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-slate-50 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-48 bg-slate-100">
                  <Image
                    src={tech.imageSrc}
                    alt={tech.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white shadow-md mb-5`}
                  >
                    <tech.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {tech.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {tech.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-white text-slate-600 text-[11px] font-bold shadow-sm"
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

      {/* Smart Grid Integration */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-slate-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold mb-3">
                  Operational Framework
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
                  Smart Grid Integration & Infrastructure
                </h2>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Transforming foundational static fluid kinetics into a
                dynamic, adaptive cloud-responsive telemetry asset built to
                secure national energetic security profiles.
              </p>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-900 to-blue-900 flex items-center gap-5 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Zap className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-2xl font-black tracking-tight text-white">
                    99.71%
                  </div>
                  <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wide mt-0.5">
                    Mean Operational Uptime
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${innovation.gradient} flex items-center justify-center text-white mb-5 shadow-md`}
                  >
                    <innovation.icon className="w-4.5 h-4.5" strokeWidth={2} />
                  </div>
                  <h3 className="text-sm font-bold tracking-tight text-slate-900 mb-2">
                    {innovation.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {innovation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
