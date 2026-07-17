"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Droplets,
  Zap,
  Leaf,
  Users,
  ArrowRight,
  ChevronRight,
  Shield,
  Globe,
  TrendingUp,
  MapPin,
} from "lucide-react";

const stats = [
  {
    value: "2.4 GW",
    label: "Installed Capacity",
    icon: Zap,
    color: "text-cyan-400",
    bg: "bg-sky-900 border-sky-800",
  },
  {
    value: "15+",
    label: "Active Projects",
    icon: Droplets,
    color: "text-cyan-400",
    bg: "bg-sky-900 border-sky-800",
  },
  {
    value: "98%",
    label: "Clean Energy Output",
    icon: Leaf,
    color: "text-cyan-400",
    bg: "bg-sky-900 border-sky-800",
  },
  {
    value: "500K+",
    label: "Homes Powered",
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-sky-900 border-sky-800",
  },
];

const features = [
  {
    icon: Droplets,
    title: "Run-of-River Systems",
    bgIcon: "bg-sky-900 text-cyan-400 border border-sky-800",
    description:
      "Environmentally friendly hydroelectric systems that harness natural river flow without large reservoirs, minimizing ecological impact.",
  },
  {
    icon: Shield,
    title: "Reservoir Hydropower",
    bgIcon: "bg-sky-900 text-cyan-400 border border-sky-800",
    description:
      "Large-scale reservoir projects providing reliable baseload power with water storage capabilities for grid stability and flood control.",
  },
  {
    icon: TrendingUp,
    title: "Pumped Storage",
    bgIcon: "bg-sky-900 text-cyan-400 border border-sky-800",
    description:
      "Advanced energy storage solutions that pump water uphill during low demand and generate electricity during peak hours.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    bgIcon: "bg-sky-900 text-cyan-400 border border-sky-800",
    description:
      "Operating across multiple continents with projects in North America, Europe, Asia, and South America, adapting to diverse environments.",
  },
];

const projects = [
  {
    title: "Blue River Dam",
    location: "Hetauda, Nepal",
    capacity: "450 MW",
    status: "Operational",
    statusColor: "bg-sky-900 text-cyan-400 border border-sky-800",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=500&fit=crop",
  },
  {
    title: "Cascade Falls",
    location: "Jhapa, Nepal",
    capacity: "320 MW",
    status: "Operational",
    statusColor: "bg-sky-900 text-cyan-400 border border-sky-800",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
  },
  {
    title: "Emerald Valley",
    location: "Bhojpur, Nepal",
    capacity: "280 MW",
    status: "Under Construction",
    statusColor: "bg-slate-100 text-slate-700 border border-slate-200",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop",
  },
];

const testimonials = [
  {
    quote:
      "Ridi Hydropower has transformed our community's energy landscape. Their commitment to sustainability and local engagement is unmatched.",
    author: "Sarah Mitchell",
    role: "Mayor, Riverside County",
  },
  {
    quote:
      "The technical expertise and environmental stewardship demonstrated by Ridi sets a new standard for renewable energy projects.",
    author: "Dr. James Chen",
    role: "Environmental Scientist, EPA",
  },
  {
    quote:
      "Working with Ridi has been exceptional. Their projects deliver reliable power while preserving the natural beauty of our region.",
    author: "Maria Santos",
    role: "Director, Green Energy Alliance",
  },
];

export default function HomePage() {
  return (
    <div className="mt-6 min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
      {/* Hero Section - Deep Immersive Gradient Screen */}
      <section className="relative h-[92vh] min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&h=1080&fit=crop"
            alt="Industrial hydropower turbine installation asset"
            fill
            className="object-cover object-center contrast-[1.05] brightness-95"
            priority
          />
          {/* Dynamic Eco-Industrial Blend Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-sky-900/85 to-sky-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-900 via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 pt-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold uppercase tracking-widest font-mono mb-8 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              Infrastructure Systems
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Driving Industrial Capacity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200 font-normal">
                through Constant Kinetic Currents.
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl font-light">
              Ridi Hydropower engineers continuous baseload energy arrays,
              combining advanced hydraulic flow architecture with stable grid
              integration topologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 group hover:-translate-y-0.5 duration-200"
              >
                Explore Our Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-sky-900/40 backdrop-blur-md text-white font-bold rounded-xl border border-slate-700 hover:bg-sky-900/80 hover:border-cyan-500/40 transition-all duration-200"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section - Dotted Grid Technical Matrix */}
      <section className="py-32 relative overflow-hidden bg-white mt-4">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-4 h-[1px] bg-cyan-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 font-mono">
                Technical Classifications
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900 mb-4">
              Comprehensive Hydropower Solutions
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
              We spec, build, and optimize grid-connected hydraulic production
              environments tailored precisely to geographic discharge vectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-slate-50 rounded-xl border border-slate-200/60 hover:border-cyan-500/40 hover:bg-white transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-sky-900/5"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgIcon} flex items-center justify-center mb-8 shadow-md group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors duration-300`}
                  >
                    <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-sky-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Editorial Card Pipeline */}
      <section className="py-32 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-[1px] bg-cyan-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 font-mono">
                  Production Registry
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900">
                Featured Power Stations
              </h2>
              <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
                Active commercial installations monitoring continuous kinetic
                matrix performance outputs.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-900 hover:text-cyan-600 transition-colors border-b-2 border-sky-900 hover:border-cyan-500 pb-1.5 self-start md:self-auto font-mono"
            >
              View All Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-xl border border-slate-200/80 overflow-hidden bg-white hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-sky-900/5 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent" />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md rounded-md ${project.statusColor}`}
                  >
                    {project.status}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-cyan-600 mb-2.5 uppercase tracking-wider font-mono">
                    <MapPin
                      className="w-3.5 h-3.5 text-slate-400"
                      strokeWidth={2}
                    />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-4 tracking-tight group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                      {project.capacity} Capacity
                    </span>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-900 group-hover:text-cyan-600 transition-colors font-mono"
                    >
                      Details{" "}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Endorsements - Premium Structured Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 font-mono block mb-3">
              Stakeholder Endorsements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-slate-50 rounded-xl border border-slate-200/60 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-white hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300"
              >
                <div>
                  <span className="text-4xl text-cyan-500/30 font-serif leading-none block mb-2">
                    “
                  </span>
                  <p className="text-slate-600 mb-8 leading-relaxed text-xs md:text-sm font-normal">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-slate-200/60">
                  <div className="w-9 h-9 rounded-lg bg-sky-900 flex items-center justify-center text-cyan-400 font-bold font-mono text-xs tracking-wider border border-sky-800">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-bold text-sky-900 text-xs md:text-sm tracking-tight">
                      {testimonial.author}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 font-mono">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block - Premium Structural Box */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-2xl bg-sky-900 text-white border border-sky-800 p-12 md:p-20 overflow-hidden shadow-2xl shadow-sky-900/20">
            <div className="absolute inset-0 bg-[radial-gradient(#0e1e38_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Power a Sustainable Future?
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto font-light">
                Whether assessing localized asset modernization updates or
                planning large-scale baseline macro development architectures,
                our field groups are available.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/10 hover:-translate-y-0.5 duration-200"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-sky-800/40 backdrop-blur-sm text-white font-bold rounded-xl border border-sky-700 hover:bg-sky-800 hover:border-cyan-500/30 transition-all duration-200"
                >
                  Join Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
