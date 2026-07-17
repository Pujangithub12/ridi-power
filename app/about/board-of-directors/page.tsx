const boardMembers = [
  {
    name: "Kuber Mani Nepal",
    role: "Chairman",
    initials: "KMN",
  },
  {
    name: "Kadam Mani Nepal",
    role: "Director",
    initials: "KN",
  },
  {
    name: "Ramesh Bhattarai",
    role: "Director",
    initials: "RB",
  },
  {
    name: "Sunita Gurung",
    role: "Director",
    initials: "SG",
  },
  {
    name: "Kishor Neupane",
    role: "Director",
    initials: "KN",
  },
];



export default function BoardOfDirectorsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4 block font-mono">
          Governance
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-sky-900">
          Board of Directors
        </h1>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
          The Board of Ridi Power Company Limited guides the company&rsquo;s
          strategic direction, corporate governance, and long-term
          accountability to shareholders and the communities we serve.
        </p>
      </section>

      {/* Board Grid */}
      <section className="pt-16 pb-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
  
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((person, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
