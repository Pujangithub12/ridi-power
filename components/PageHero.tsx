import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-40 pb-32">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4 block font-mono">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-sky-900 font-mono uppercase">
          {title}
        </h1>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl font-light">
          {description}
        </p>

        {children ?? (
          <div className="mt-16 p-10 border-2 border-dashed border-slate-200 rounded-2xl bg-white/50 text-xs text-slate-400 font-mono uppercase tracking-widest text-center">
            Content coming soon
          </div>
        )}
      </div>
    </section>
  );
}
