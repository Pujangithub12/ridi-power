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
  Calendar,
} from "lucide-react";

const companyDescription = [
  "Ridi Power Company Limited is a prestigious institution that continues to strengthen its excellence and contribution to Nepal's energy sector. Established in 2057 BS (2000 AD), the company has played a vital role in expanding energy projects even into remote regions of the country, strengthening energy supply at both local and national levels.",
  "Originally incorporated as Ridi Hydropower Development Company Limited, it merged with Rairang Hydropower Development Company Limited in 2079 BS to become Ridi Power Company Limited. This marked the first-ever merger between two listed hydropower companies in Nepal's history.",
  "While initially focused on hydropower development, the company has since expanded into solar energy projects. Currently, the company operates 3 hydropower projects with a total capacity of 12.8 MW and 1 solar power project with a capacity of 8.5 MW, regularly supplying electricity to the national grid. Additionally, through its equity investment in Sajha Power Company, it is actively involved in developing the under-construction Lower Balephi Hydropower Project (22.5 MW) in Sindhupalchok district.",
  "Ridi Power Company prioritizes not only power generation but also environmental responsibility, social prosperity for local communities, and the long-term interests of its investors. Financially, the company has increased its capital and earned steady profits in recent years, playing an active role in creating a robust investment climate in Nepal's energy sector.",
];

const companyVision =
  "The long-term objective of Ridi Power Company is to increase Nepal's energy self-reliance, promote clean energy, and support sustainable development. In its future plans, the company aims to expand further energy projects and generate local employment to help steer Nepal toward a green and sustainable future. Driven by modern technology, high-level leadership, and a dedicated workforce, Ridi Power Company Limited continues to advance Nepal's energy sector.";

const companyDates = [
  { label: "Establishment Date", value: "2057/11/28 BS" },
  { label: "Conversion to Public Limited Company", value: "2065/04/20 BS" },
  { label: "Power Purchase Agreement (PPA) Date", value: "2063/05/08 BS" },
  { label: "Electricity Generation License Date", value: "2064/02/17 BS" },
  {
    label: "Integrated Business Operations (Post-Merger)",
    value: "2079/03/30 BS",
  },
  { label: "Share Allotment to Local Residents", value: "2070/07/24 BS" },
  { label: "Share Allotment to General Public", value: "2070/12/18 BS" },
  { label: "First Share Listing on NEPSE", value: "2071/03/22 BS" },
  { label: "First Trading Date on Stock Market", value: "2071/03/29 BS" },
];

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
    bgIcon: "bg-sky-900 text-white border border-sky-800",
    description:
      "Environmentally friendly hydroelectric systems that harness natural river flow without large reservoirs, minimizing ecological impact.",
  },
  {
    icon: Shield,
    title: "Reservoir Hydropower",
    bgIcon: "bg-sky-900 text-white border border-sky-800",
    description:
      "Large-scale reservoir projects providing reliable baseload power with water storage capabilities for grid stability and flood control.",
  },
  {
    icon: TrendingUp,
    title: "Pumped Storage",
    bgIcon: "bg-sky-900 text-white border border-sky-800",
    description:
      "Advanced energy storage solutions that pump water uphill during low demand and generate electricity during peak hours.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    bgIcon: "bg-sky-900 text-white border border-sky-800",
    description:
      "Operating across multiple continents with projects in North America, Europe, Asia, and South America, adapting to diverse environments.",
  },
];

const heroSlides = [
  {
    src: "/butwal-solar/83083760_486083888993877_1895281089614708736_n.jpg",
    alt: "Butwal Solar Project",
  },
  {
    src: "/butwal-solar/109243318_289371885644649_2041926808747398399_n%20(1).jpg",
    alt: "Butwal Solar Project",
  },
  { src: "/iwa-khola/IMG-20221229-WA0004.jpg", alt: "Iwa Khola Hydropower Project" },
  { src: "/construction5.jpg", alt: "Project site construction" },
  { src: "/ridi-photo2.jpg", alt: "Ridi Hydropower" },
];

const galleryPreviewImages = [
  { src: "/ridi-photo.jpg", alt: "Ridi Hydropower" },
  { src: "/ridi-khola-hydro.jpg", alt: "Ridi Khola Hydropower Project" },
  { src: "/ridi-khola-hydro2.jpg", alt: "Ridi Khola Hydropower Project" },
  { src: "/iwa-khola-hydro-project.jpg", alt: "Iwa Khola Hydropower Project" },
  {
    src: "/iwa-khola-hydro-powerhouse.jpg",
    alt: "Iwa Khola powerhouse",
  },
  { src: "/iwa-khola/IMG-20221229-WA0001.jpg", alt: "Iwa Khola Hydropower Project" },
  { src: "/rairang-khola.jpg", alt: "Rairang Khola Hydropower Project" },
  { src: "/rairang-khola2.jpg", alt: "Rairang Khola Hydropower Project" },
  {
    src: "/butwal-solar/107931855_2649846508598469_5449660091921747925_n.png",
    alt: "Butwal Solar Project",
  },
  {
    src: "/butwal-solar/IMG_20201029_134157.jpg",
    alt: "Butwal Solar Project",
  },
];

export default function HomePage() {
  return (
    <div className="mt-6 min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
      {/* Hero Section - Deep Immersive Gradient Screen */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden bg-gradient-to-br from-sky-900 via-sky-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#0e1e38_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 py-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-400/30 text-white text-xs font-bold uppercase tracking-widest font-mono mb-8 backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 animate-pulse" />
                Infrastructure Systems
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                Driving Industrial Capacity <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200 font-normal">
                  through Constant Kinetic Currents.
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl font-light">
                Ridi Hydropower engineers continuous baseload energy arrays,
                combining advanced hydraulic flow architecture with stable
                grid integration topologies.
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
                  href="/about/chairman-message"
                  className="inline-flex items-center gap-2.5 px-6 py-4 bg-sky-900/40 backdrop-blur-md text-white font-bold rounded-xl border border-slate-700 hover:bg-sky-900/80 hover:border-cyan-500/40 transition-all duration-200"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative col-span-2 h-48 rounded-md overflow-hidden shadow-xl">
                  <Image
                    src={heroSlides[0].src}
                    alt={heroSlides[0].alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                {heroSlides.slice(1).map((slide, index, arr) => {
                  const isLastOdd =
                    arr.length % 2 === 1 && index === arr.length - 1;
                  return (
                    <div
                      key={slide.src}
                      className={`relative h-32 rounded-md overflow-hidden shadow-xl ${isLastOdd ? "col-span-2" : ""}`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes={
                          isLastOdd
                            ? "(min-width: 1024px) 40vw, 100vw"
                            : "(min-width: 1024px) 20vw, 50vw"
                        }
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description - Corporate Profile */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-[1px] bg-cyan-500" />
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest font-mono">
                  Corporate Profile
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900 mb-8">
                Ridi Power Company Limited
              </h2>

              <div className="space-y-5">
                {companyDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm md:text-base text-slate-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-lg">
                <h3 className="text-sm font-bold text-sky-900 uppercase tracking-widest font-mono mb-3">
                  Long-Term Vision
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {companyVision}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-cyan-600" strokeWidth={2} />
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest font-mono">
                  Key Company Information & Dates
                </span>
              </div>
              <div className="rounded-2xl border border-slate-200/60 overflow-hidden">
                <dl className="divide-y divide-slate-100">
                  {companyDates.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 px-5 py-4 bg-white hover:bg-slate-50 transition-colors"
                    >
                      <dt className="text-sm text-slate-500 font-medium">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-bold text-sky-900 font-mono text-right shrink-0">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mt-6">
                With its long-term vision, standards, and commitment to
                social responsibility, the company will remain a strong
                pillar of Nepal&rsquo;s energy sector in the coming decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dotted Grid Technical Matrix */}
      <section className="py-24 relative overflow-hidden bg-white mt-4">
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
                className="p-8 bg-slate-50 rounded-xl border border-slate-200/60 shadow-md hover:border-cyan-500/40 hover:bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-sky-900/10"
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
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-[1px] bg-cyan-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 font-mono">
                  Visual Archive
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900">
                Gallery
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-3 leading-relaxed">
                A visual record of our hydropower and solar projects, from
                early construction to full operational commissioning.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-900 hover:text-cyan-600 transition-colors border-b-2 border-sky-900 hover:border-cyan-500 pb-1.5 self-start md:self-auto font-mono"
            >
              View Full Gallery
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-5 gap-4 [column-fill:_balance]">
            {galleryPreviewImages.map((img, index) => (
              <div
                key={img.src + index}
                className="group relative w-full mb-4 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={375}
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block - Premium Structural Box */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
