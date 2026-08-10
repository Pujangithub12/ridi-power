import Image from "next/image";

const teamMembers = [
  { name: "Santosh Adhikari", initials: "SA", image: "/team/santosh.jpg" },
  { name: "Bikash Gautam", initials: "BG", image: "/team/bikash.jpg" },
  { name: "Sharmila Ghimire", initials: "SG", image: "/team/sharmila.jpg" },
  { name: "Kopila Neupane", initials: "KN", image: "/team/kopila.jpg" },
  { name: "Tanka Bahadur Magar", initials: "TM", image: "/team/tanka.jpg" },
  { name: "Manju Paudel", initials: "MP", image: "/team/manju.jpg" },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4 block font-mono">
          People
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-sky-900">
          Our Team
        </h1>
        <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
          Meet the dedicated professionals driving Ridi Power Company
          Limited&rsquo;s operations, projects, and day-to-day excellence.
        </p>
      </section>

      {/* Team Grid */}
      <section className="pt-16 pb-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((person, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/70 rounded-xl p-8 text-center shadow-md hover:shadow-lg hover:border-sky-900/20 transition-all duration-300"
              >
                <div className="relative w-20 h-20 mx-auto rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center text-sky-900 text-lg font-bold tracking-tight">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  ) : (
                    person.initials
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mt-5">
                  {person.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
