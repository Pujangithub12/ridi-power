"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/ridi-photo.jpg",
    alt: "Ridi Hydropower",
    category: "Ridi Khola",
  },
  {
    src: "/ridi-photo2.jpg",
    alt: "Ridi Hydropower",
    category: "Ridi Khola",
  },
  {
    src: "/ridi-khola-hydro.jpg",
    alt: "Ridi Khola Hydropower Project",
    category: "Ridi Khola",
  },
  {
    src: "/ridi-khola-hydro2.jpg",
    alt: "Ridi Khola Hydropower Project",
    category: "Ridi Khola",
  },
  {
    src: "/ridi-khola-hydro3.jpg",
    alt: "Ridi Khola Hydropower Project",
    category: "Ridi Khola",
  },
  {
    src: "/ridi-khola-penstock.jpg",
    alt: "Ridi Khola penstock construction",
    category: "Ridi Khola",
  },
  {
    src: "/iwa-khola-hydro-project.jpg",
    alt: "Iwa Khola Hydropower Project",
    category: "Iwa Khola",
  },
  {
    src: "/iwa-khola-hydro-powerhouse.jpg",
    alt: "Iwa Khola powerhouse",
    category: "Iwa Khola",
  },
  {
    src: "/iwa-khola-construction.jpg",
    alt: "Iwa Khola under construction",
    category: "Iwa Khola",
  },
  {
    src: "/iwa-penstock-construction.jpg",
    alt: "Iwa Khola penstock construction",
    category: "Iwa Khola",
  },
  {
    src: "/rairang-khola.jpg",
    alt: "Rairang Khola Hydropower Project",
    category: "Rairang Khola",
  },
  {
    src: "/rairang-khola2.jpg",
    alt: "Rairang Khola Hydropower Project",
    category: "Rairang Khola",
  },
  {
    src: "/butwal-solar.jpg",
    alt: "Butwal Solar Project",
    category: "Butwal Solar",
  },
  {
    src: "/butwal-solar-construction.jpg",
    alt: "Butwal Solar under construction",
    category: "Butwal Solar",
  },
  {
    src: "/butwal-solar-construction2.jpg",
    alt: "Butwal Solar under construction",
    category: "Butwal Solar",
  },
  {
    src: "/construction.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction2.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction3.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction4.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction5.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction6.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction7.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction8.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction9.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
  {
    src: "/construction10.jpg",
    alt: "Project site construction",
    category: "Construction",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(galleryImages.map((img) => img.category))),
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold mb-4">
          Visual Archive
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 text-slate-900">
          Gallery
        </h1>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
          A visual record of our hydropower and solar projects, from early
          construction to full operational commissioning.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-sky-900 text-white shadow-md"
                  : "bg-white text-slate-500 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {filtered.map((img, index) => (
              <button
                key={img.src + index}
                onClick={() => setSelected(index)}
                className="group relative w-full mb-4 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid block"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={375}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wide">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
          <div
            className="relative w-full max-w-4xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[selected].src}
              alt={filtered[selected].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
