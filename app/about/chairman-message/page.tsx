import Image from "next/image";

const letter = [
  "On behalf of the Board of Directors and every member of the Ridi Power Company family, it is my privilege to welcome you and share a few words on where we have been, and where we are headed.",
  "Since our establishment in 2018, Ridi Power Company Limited has grown from a single run-of-river installation into a diversified renewable energy enterprise, delivering clean hydroelectric and solar power to communities across Nepal. What began as a modest engineering initiative has become a trusted name in sustainable infrastructure, built one project, one partnership, and one community at a time.",
  "Our purpose has never wavered: to harness the natural energy of our rivers and sunlight responsibly, and to convert that resource into dependable, affordable electricity without compromising the ecosystems and communities that sustain us. Every turbine we install and every panel we raise reflects this same commitment — engineering excellence balanced with environmental stewardship.",
  "None of this would be possible without the dedication of our engineers, technicians, and administrative teams, nor without the trust of the communities who have welcomed our projects into their valleys and hillsides. We recognize that true progress is measured not only in megawatts generated, but in the livelihoods supported, the local economies strengthened, and the environment preserved for future generations.",
  "As Nepal's energy needs continue to grow, so too does our resolve to expand responsibly — exploring new hydropower sites, scaling our solar initiatives, and investing in the technology and people who will carry this mission forward. We remain guided by the same values that founded this company: integrity, safety, and an unwavering respect for the land and water that give us power.",
  "I want to extend my sincere gratitude to our shareholders, employees, partners, and the communities we serve for their continued confidence in Ridi Power Company Limited. Together, we will continue building a cleaner, more resilient energy future for generations to come.",
];

export default function ChairmanMessagePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4 block font-mono">
          Corporate Profile
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-sky-900">
          Message from the Chairman
        </h1>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
          A welcome note from the Chairman of Ridi Power Company Limited,
          outlining the company&rsquo;s history, values, and commitment to
          sustainable energy.
        </p>
      </section>

      {/* Portrait + Letter */}
      <section className="pb-32 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl shadow-sky-900/5 bg-slate-50">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/board%20of%20directors/Kuber-Mani-Nepal.jpg"
                    alt="Kuber Mani Nepal, Chairman of Ridi Power Company Limited"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 border-t border-slate-200/60">
                  <h3 className="text-lg font-bold tracking-tight text-sky-900">
                    Kuber Mani Nepal
                  </h3>
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mt-1">
                    Chairman, Ridi Power Company Limited
                  </p>
                </div>
              </div>
            </div>

            {/* Letter */}
            <div className="lg:col-span-8">
              <span className="text-4xl text-cyan-500/30 leading-none block mb-4">
                &ldquo;
              </span>
              <div className="space-y-6">
                {letter.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-600 leading-relaxed text-sm md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200/60">
                <p className="text-sm text-slate-500 mb-1">With warm regards,</p>
                <p className="text-lg font-bold tracking-tight text-sky-900">
                  Kuber Mani Nepal
                </p>
                <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mt-1">
                  Chairman, Ridi Power Company Limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
