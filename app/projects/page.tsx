"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Zap,
  Droplets,
  Clock,
  Filter,
  BarChart3,
  Leaf,
  Activity,
  Globe,
} from "lucide-react";

const categories = ["All", "Run-of-River", "Reservoir", "Pumped Storage"];

const allProjects = [
  {
    id: 1,
    title: "Blue River Dam",
    location: "Oregon, USA",
    country: "USA",
    capacity: "450 MW",
    category: "Reservoir",
    status: "Operational",
    year: "2005",
    description:
      "Our flagship reservoir project featuring advanced fish passage systems and a 2,400-hectare recreational area.",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=500&fit=crop",
    stats: { output: "1.8 TWh/yr", height: "185m", area: "45 km²" },
  },
  {
    id: 2,
    title: "Cascade Falls",
    location: "British Columbia, Canada",
    country: "Canada",
    capacity: "320 MW",
    category: "Run-of-River",
    status: "Operational",
    year: "2010",
    description:
      "A run-of-river installation that harnesses the natural flow of the Cascade River with minimal environmental impact.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    stats: { output: "1.2 TWh/yr", flow: "450 m³/s", length: "3.2 km" },
  },
  {
    id: 3,
    title: "Emerald Valley",
    location: "Vestland, Norway",
    country: "Norway",
    capacity: "280 MW",
    category: "Pumped Storage",
    status: "Under Construction",
    year: "2025",
    description:
      "An advanced pumped storage facility providing grid stability and energy storage for Northern Europe.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop",
    stats: { output: "0.9 TWh/yr", storage: "12 GWh", efficiency: "87%" },
  },
  {
    id: 4,
    title: "Sierra Nevada",
    location: "California, USA",
    country: "USA",
    capacity: "200 MW",
    category: "Run-of-River",
    status: "Operational",
    year: "2014",
    description:
      "Integrated with California's renewable grid, this project powers over 150,000 homes annually.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    stats: { output: "0.8 TWh/yr", homes: "150,000", co2: "400k tons" },
  },
  {
    id: 5,
    title: "Alpine Reservoir",
    location: "Graubünden, Switzerland",
    country: "Switzerland",
    capacity: "600 MW",
    category: "Reservoir",
    status: "Operational",
    year: "2018",
    description:
      "High-altitude reservoir system with seasonal storage capabilities and alpine ecosystem protection measures.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    stats: { output: "2.4 TWh/yr", altitude: "2,400m", volume: "85M m³" },
  },
  {
    id: 6,
    title: "Amazon Basin",
    location: "Pará, Brazil",
    country: "Brazil",
    capacity: "380 MW",
    category: "Run-of-River",
    status: "Planning",
    year: "2027",
    description:
      "Sustainable run-of-river project designed with indigenous community partnerships and rainforest conservation.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
    stats: { output: "1.5 TWh/yr", communities: "12", forest: "2,000 ha" },
  },
];

const categoryStyles: Record<string, string> = {
  "Run-of-River": "bg-blue-500",
  Reservoir: "bg-violet-500",
  "Pumped Storage": "bg-amber-500",
};

const statusStyles: Record<string, string> = {
  Operational: "bg-emerald-500 text-white",
  "Under Construction": "bg-amber-500 text-white",
  Planning: "bg-slate-400 text-white",
};

const heroStats = [
  {
    icon: Activity,
    value: "15+",
    label: "Active Terminals",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    value: "2.4 GW",
    label: "Total Output Capacity",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Globe,
    value: "12",
    label: "Sovereign Regions",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: BarChart3,
    value: "8.5 TWh",
    label: "Annual Generation",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const techBoxes = [
  {
    icon: Droplets,
    title: "Fish-Friendly Turbines",
    description:
      "Our proprietary low-RPM turbine configurations optimize aquatic passage safety up to 99%, preserving regional riverine biodiversity.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Smart Grid Core",
    description:
      "Real-time network telemetry and automated machine learning optimize dispatch efficiency, providing instantaneous grid balancing.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Leaf,
    title: "Ecosystem Telemetry",
    description:
      "Continuous remote sensor grids track water quality, microclimate indices, and wildlife migratory pathways automatically.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold mb-4">
          Global Asset Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 text-slate-900">
          Our Projects
        </h1>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
          From low-impact run-of-river installations to state-of-the-art
          pumped storage networks, explore our assets driving global grid
          decarbonization.
        </p>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <div className="relative w-full h-[32vh] min-h-[240px] bg-slate-200 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=800&fit=crop"
            alt="Hydropower landscape"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* KPI Stat Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center gap-4"
            >
              <div
                className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-md`}
              >
                <stat.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter & Projects Grid */}
      <section className="pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Filter className="w-3.5 h-3.5 text-cyan-500" strokeWidth={2} />
              <span>Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-sky-900 to-slate-800 text-white shadow-md"
                      : "bg-white text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-full shadow-sm ${statusStyles[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div
                    className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold text-white rounded-full shadow-sm ${categoryStyles[project.category]}`}
                  >
                    {project.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col grow">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" strokeWidth={2} />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="rounded-xl bg-slate-50 py-2.5 text-center"
                        >
                          <div className="text-xs font-bold text-slate-900">
                            {value}
                          </div>
                          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 pt-3">
                        <Zap className="w-3.5 h-3.5 text-cyan-500" strokeWidth={2} />
                        <span className="font-bold text-slate-900">
                          {project.capacity}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 pt-3 text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                        <span>Est. {project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold mb-3">
              Engineering Core
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Integrated Project Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techBoxes.map((box, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${box.gradient} flex items-center justify-center text-white shadow-md mb-5`}
                >
                  <box.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold tracking-tight text-slate-900 mb-2">
                  {box.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {box.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
