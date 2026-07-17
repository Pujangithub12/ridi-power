"use client";

import Image from "next/image";
import {
  Target,
  Eye,
  Activity,
  Users,
  Award,
  Globe,
  TrendingUp,
  Check,
} from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Foundation",
    description:
      "Established with a clear, localized vision for long-cycle sustainable assets and structural energy frameworks.",
  },
  {
    year: "2021",
    title: "River Dam",
    description:
      "Completed our first major grid-scale installation, introducing a 1MW baseline capacity to the local infrastructure grid.",
  },
  {
    year: "2021",
    title: "2 GW Capacity",
    description:
      "Formally surpassed 2 gigawatts of monitored, installed capacity across our global operational footprint.",
  },
  {
    year: "2024",
    title: "Carbon Neutrality",
    description:
      "Achieved independently verified carbon-neutral status across all commercial facilities, manufacturing pipelines, and field assets.",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To harness the power of water to generate clean, reliable, and sustainable electricity while protecting the environment and empowering communities.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the national leader in sustainable hydropower, setting the standard for environmental stewardship and technological innovation.",
  },
  {
    icon: Activity,
    title: "Values",
    description:
      "Integrity, technical excellence, environmental responsibility, and structural safety guide every project we engineer and build.",
  },
];

const leadership = [
  {
    name: "Kuber Mani Nepal",
    role: "Chief Executive Officer",
    bio: "Former energy policy advisor with 20+ years in renewable energy development.",
    initials: "KMN",
  },
  {
    name: "Kadam Mani Nepal",
    role: "Chief Technology Officer",
    bio: "Pioneer in fish-friendly turbine design. Led development of 12 patented hydropower technologies.",
    initials: "KN",
  },
  {
    name: "Kishor Neupane",
    role: "Director",
    bio: "Environmental scientist specializing in aquatic ecosystems. Former lead researcher at the World Wildlife Fund.",
    initials: "KN",
  },
  {
    name: "Prabin Dhakal",
    role: "Senior Engineer",
    bio: "Expert in large-scale infrastructure management. Oversaw construction of 8 major hydropower installations.",
    initials: "PD",
  },
];

const certifications = [
  "ISO 14001 Environmental Management",
  "ISO 9001 Quality Management",
  "OHSAS 18001 Occupational Health & Safety",
  "LEED Platinum Certified Facilities",
  "UN Global Compact Participant",
  "World Bank Sustainability Standards",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold mb-4">
          Corporate Profile
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-10 mb-3 text-slate-900">
          Engineering the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-cyan-600">
            Future of Flow.
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
          For over two decades,{" "}
          <strong className="font-semibold text-slate-800">
            Ridi Hydropower
          </strong>{" "}
          has operated at the intersection of critical asset infrastructure
          and sustainable engineering, managing the kinetic lifecycle of
          baseline currents worldwide.
        </p>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <div className="relative w-full h-[32vh] min-h-[240px] bg-slate-200 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=800&fit=crop"
            alt="Hydropower facility baseline asset generation"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Core Directives - Technical Grid Layout */}
      <section className="py-28 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-7">
                  <span className="text-xs font-mono font-bold text-cyan-600/70 tracking-widest">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-slate-200 group-hover:bg-cyan-500/50 transition-colors duration-300" />
                  <item.icon
                    className="w-5 h-5 text-sky-900 group-hover:text-cyan-600 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-sky-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Grid - Timeline Architecture */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Fixed Technical Specs Context */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-[1px] bg-cyan-500" />
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest font-mono">
                  Historical Registry
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900 mb-6">
                Milestones that define our architecture.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                A narrative index detailing our methodical deployment timelines,
                grid transitions, and baseline capital development projects over
                the past twenty years.
              </p>
            </div>

            {/* Right Column: Industrial Segmented Steps */}
            <div className="lg:col-span-8 relative border-l border-slate-200 ml-4 md:ml-0 pl-6 md:pl-8 space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative group">
                  {/* Fluid indicator point */}
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-cyan-500 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-cyan-500 transition-colors duration-300" />
                  </div>

                  <div className="grid md:grid-cols-12 gap-2 md:gap-6 items-baseline">
                    <div className="md:col-span-2">
                      <span className="text-2xl font-bold tracking-tight text-cyan-600 font-mono block">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="md:col-span-10 bg-white p-6 rounded-lg border border-slate-200/60 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-bold text-sky-900 text-base mb-2 tracking-tight">
                        {milestone.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance - Premium Structural Cards */}
      <section className="pt-16 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest font-mono mb-3 block">
                Governance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900">
                Meet the executive team.
              </h2>
            </div>
            <div className="h-[2px] bg-slate-100 flex-1 mx-8 hidden md:block" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/70 rounded-xl p-8 text-center hover:border-sky-900/20 hover:shadow-lg hover:shadow-sky-900/5 transition-all duration-300"
              >
                <div className="w-18 h-18 mx-auto rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-900 text-lg font-bold tracking-tight">
                  {person.initials}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mt-5">
                  {person.name}
                </h3>
                <p className="text-[11px] font-bold text-cyan-600 uppercase tracking-widest mt-1">
                  {person.role}
                </p>
                <div className="w-8 h-px bg-slate-200 mx-auto my-5" />
                <p className="text-slate-500 leading-relaxed text-xs">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Assets Matrix */}
      <section className="pt-16 pb-32 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Certifications List */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 font-mono">
                  Framework Compliance
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
                Standards & Operational Safety
              </h2>
              <p className="text-slate-600 mb-10 text-sm leading-relaxed max-w-md">
                We design and manage infrastructure modules to verify continuous
                compliance with strict global sustainability and engineering
                benchmarks.
              </p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3.5 text-xs text-slate-600 font-medium font-sans"
                  >
                    <div className="w-5 h-5 rounded-md bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 shrink-0">
                      <Check
                        className="w-3 h-3 text-cyan-600"
                        strokeWidth={3}
                      />
                    </div>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Industrial Grid Matrix Display */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { icon: Users, val: "2,400+", label: "Active Staff" },
                { icon: Globe, val: "12", label: "Sovereign Markets" },
                { icon: Award, val: "35+", label: "Industry Awards" },
                { icon: TrendingUp, val: "$4.2B", label: "Capital Assets" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-sky-900 p-8 rounded-xl border border-sky-800 flex flex-col justify-center group hover:border-cyan-400/60 hover:shadow-lg hover:shadow-sky-900/20 transition-all duration-300"
                >
                  <stat.icon
                    className="w-6 h-6 text-cyan-400 mb-5"
                    strokeWidth={1.5}
                  />
                  <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1 font-mono text-white group-hover:text-cyan-400 transition-colors">
                    {stat.val}
                  </div>
                  <div className="text-[10px] text-slate-300 font-bold uppercase tracking-widest font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
