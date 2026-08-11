import Image from "next/image";

const boardMembers = [
  {
    name: "Kuber Mani Nepal",
    role: "Chief Executive Officer",
    initials: "KMN",
    image: "/board%20of%20directors/Kuber-Mani-Nepal.jpg",
    bio: "Mr. Nepal is one of pioneer energy developer in Nepalese Private Sector. He holds more than 25 years of experience in Hydropower and Solar Power Energy Projects.",
  },
  {
    name: "Santosh Adhikari",
    role: "Managing Director",
    initials: "SA",
    image: "/board%20of%20directors/santosh.jpg",
    bio: "Mr. Adhikari is a qualified Chartered Accountant from ICAN. He has more than 10 years of experience in Nepalese Audit, Finance, Banking, Insurance and Hydropower Companies, He has been associated with the company for more than 5 years.",
  },
  {
    name: "Ramesh Neupane",
    role: "Director",
    initials: "RN",
    image: "/board%20of%20directors/ramesh.jpg",
    bio: "Mr. Neupane is one of pioneer energy developer in Nepalese Private Sector. He holds more than 25 years of experience in Hydropower and Solar Power Projects.",
  },
  {
    name: "Saika Bhandari",
    role: "Director",
    initials: "SB",
    image: "/board%20of%20directors/saika.jpg",
    bio: "Mrs. Sayika Bhandari holds Master's Degree in Business Administration and is working as an account and finance head since 2014.",
  },
  {
    name: "Dibya Koirala",
    role: "Independent Director",
    initials: "DK",
    image: "/board%20of%20directors/dibya.jpg",
    bio: "Ms. Koirala brings an independent, external perspective to the Board, supporting sound governance and balanced decision-making in the company's strategic direction.",
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
          {/* CEO - Featured */}
          <div className="mb-10 flex justify-center">
            <div className="bg-white border border-slate-200/70 rounded-xl p-7 text-center shadow-lg hover:shadow-xl hover:border-sky-900/20 transition-all duration-300 max-w-xs w-full">
              <div className="relative w-20 h-20 mx-auto rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center text-sky-900 text-lg font-bold tracking-tight">
                {boardMembers[0].image ? (
                  <Image
                    src={boardMembers[0].image}
                    alt={boardMembers[0].name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                ) : (
                  boardMembers[0].initials
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mt-4">
                {boardMembers[0].name}
              </h3>
              <p className="text-[11px] font-bold text-cyan-600 uppercase tracking-widest mt-1">
                {boardMembers[0].role}
              </p>
              {boardMembers[0].bio && (
                <p className="text-sm text-slate-500 leading-relaxed mt-3 text-left">
                  {boardMembers[0].bio}
                </p>
              )}
            </div>
          </div>

          {/* Remaining Directors */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.slice(1).map((person, index) => (
              <div
                key={index}
                className="h-full flex flex-col bg-white border border-slate-200/70 rounded-xl p-6 text-center shadow-md hover:shadow-lg hover:border-sky-900/20 transition-all duration-300"
              >
                <div className="relative w-16 h-16 mx-auto rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center text-sky-900 text-lg font-bold tracking-tight">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  ) : (
                    person.initials
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mt-3">
                  {person.name}
                </h3>
                <p className="text-[11px] font-bold text-cyan-600 uppercase tracking-widest mt-1">
                  {person.role}
                </p>
                {person.bio && (
                  <p className="text-sm text-slate-500 leading-relaxed mt-2 text-left">
                    {person.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
