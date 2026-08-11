"use client";

import Image from "next/image";
import {
  MapPin,
  Zap,
  Clock,
  BarChart3,
  Activity,
  Globe,
} from "lucide-react";

const allProjects = [
  {
    id: 7,
    title: "Ridi Khola Small Hydropower Project",
    location: "Ridi River, Palpa/Gulmi border, Nepal",
    country: "Nepal",
    capacity: "2,400 kW",
    category: "Run-of-River",
    status: "Operational",
    year: "2066 B.S.",
    description:
      "Ridi Power Company Limited is currently operating this 2,400 kW small hydropower project on the Ridi River. In F.Y. 2081/82, the project generated 8,793,724 kWh of electricity against a target of 12,017,630 kWh, earning a total revenue of Rs. 37,891,468.",
    image: "/ridi-photo.jpg",
    stats: {
      generation: "8.79M kWh",
      target: "73.17%",
      revenue: "Rs. 3.79 Cr",
    },
  },
  {
    id: 10,
    title: "Iwakhola Hydropower Project",
    location: "Iwa River, Panchthar/Taplejung border, Nepal",
    country: "Nepal",
    capacity: "9.9 MW",
    category: "Run-of-River",
    status: "Operational",
    year: "2076 B.S.",
    description:
      "Ridi Power Company completed this 9,900 kW hydropower project on the Iwa River, in commercial operation since Ashwin 20, 2076 B.S. In F.Y. 2081/82, the project generated 36,354,349 kWh against a target of 56,624,954 kWh, earning a total revenue of Rs. 218,422,737.",
    image: "/iwa-khola/IMG-20221229-WA0004.jpg",
    stats: {
      generation: "36.35M kWh",
      target: "64.2%",
      revenue: "Rs. 21.84 Cr",
    },
  },
  {
    id: 9,
    title: "Rairang Khola Small Hydropower Project",
    location: "Rairang River, Thakre Rural Municipality, Dhading, Nepal",
    country: "Nepal",
    capacity: "500 kW",
    category: "Run-of-River",
    status: "Operational",
    year: "2061 B.S.",
    description:
      "Ridi Power Company Limited operates this 500 kW hydropower project on the Rairang River, in commercial operation since B.S. 2061. The project came under Ridi Power's management following the merger of the two companies. In F.Y. 2081/82, the project generated 1,055,743 kWh against a target of 2,318,896 kWh, earning a total revenue of Rs. 4,644,596.",
    image: "/rairang-khola.jpg",
    stats: {
      generation: "1.06M kWh",
      target: "45.5%",
      revenue: "Rs. 46.4 Lakh",
    },
  },
  {
    id: 8,
    title: "Grid-Connected Butwal Solar Power Project",
    location: "Ward No. 5, Tilottama Municipality, Rupandehi, Nepal",
    country: "Nepal",
    capacity: "8.5 MW",
    category: "Solar",
    status: "Operational",
    year: "2077 B.S.",
    description:
      "Ridi Power Company Limited constructed this 8,500 kW grid-connected solar project in Tilottama Municipality, Rupandehi, in commercial operation since Kartik 20, 2077 B.S. Power is sold to NEA at a fixed rate of Rs. 7.30 per unit under a 25-year PPA. In F.Y. 2081/82, the project generated 13,176,690 kWh against a target of 14,510,613 kWh, earning a total revenue of Rs. 94,526,875.",
    image:
      "/butwal-solar/107931855_2649846508598469_5449660091921747925_n.png",
    stats: {
      generation: "13.18M kWh",
      rate: "Rs. 7.30/unit",
      revenue: "Rs. 9.45 Cr",
    },
  },
];

const heroStats = [
  {
    icon: Activity,
    value: "15+",
    label: "Active Terminals",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: Zap,
    value: "2.4 GW",
    label: "Total Output Capacity",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Globe,
    value: "12",
    label: "Sovereign Regions",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: BarChart3,
    value: "8.5 TWh",
    label: "Annual Generation",
    gradient: "from-teal-500 to-emerald-500",
  },
];

export default function ProjectsPage() {
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

      {/* Projects Grid */}
      <section className="pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white/70 mb-1.5">
                      <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow">
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-4">
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
    </div>
  );
}
