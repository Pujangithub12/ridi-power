"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "ridipower@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone number",
    value: "+977-01-5111015 / 5111016",
  },
  {
    icon: Clock,
    label: "Availability Hours",
    value: "Sun–Fri: 10:00 AM – 05:00 PM",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Kathmandu, Nepal",
  },
];

const faqs = [
  {
    question: "How can I partner with Ridi on a new hydropower project?",
    answer:
      "We welcome partnership opportunities with governments, utilities, and private developers. Please reach out through our business development team or use the contact form below with 'Partnership' as the subject.",
  },
  {
    question: "Does Ridi offer tours of your facilities?",
    answer:
      "Yes! We offer educational tours at select operational facilities for schools, universities, and community groups. Tours must be scheduled at least 30 days in advance. Contact our community relations team for availability.",
  },
  {
    question: "What career opportunities are available for recent graduates?",
    answer:
      "We offer robust internship and new graduate programs across engineering, environmental science, and business functions."
  },
  {
    question: "How does Ridi support local communities near project sites?",
    answer:
      "Each project includes a Community Benefit Agreement with local stakeholders. This covers local employment, infrastructure investment, education funds, and environmental monitoring. Details vary by project and community needs.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-20">
      {/* Split Hero - Statement + Framed Asset Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4 block font-mono">
              Communication Desk
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-sky-900 font-mono uppercase">
              Connect With Us<span className="text-cyan-500 font-light">.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light max-w-lg">
              Have a question about our structural projects, global
              partnerships, or career pathways? Reach out to establish a
              direct line with our operational teams.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/10 border border-slate-200">
              <iframe
                title="Ridi Hydropower location — Trade Tower, Thapathali, Kathmandu"
                src="https://www.google.com/maps?q=Trade+Tower,+Thapathali,+Kathmandu,+Nepal&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards Row */}
      <section className="border-t border-slate-200/60 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-slate-200/60 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-sky-900/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-900 border border-sky-800 flex items-center justify-center text-white group-hover:bg-cyan-500 transition-colors duration-300 mb-5">
                  <card.icon className="w-4.5 h-4.5" strokeWidth={2} />
                </div>
                <p className="font-bold text-sky-900 font-mono text-xs uppercase tracking-widest mb-2">
                  {card.label}
                </p>
                <p className="text-slate-500 text-sm">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Form - Dark Panel with Floating Card */}
      <section className="py-24 lg:py-32 bg-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0e1e38_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 block font-mono">
              Send a Message
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white font-mono uppercase">
              Reach the Right Desk
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            {formStatus === "success" ? (
              <div className="text-center space-y-6 py-8">
                <div className="w-12 h-12 mx-auto rounded-xl bg-sky-900 border border-sky-800 flex items-center justify-center text-cyan-400 shadow-md">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-tight text-sky-900 font-mono uppercase">
                    Message Sent
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto leading-relaxed font-light">
                    Thank you for contacting Ridi Hydropower. Your message has
                    been routed to our corresponding regional desk.
                  </p>
                </div>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-cyan-600 hover:text-sky-900 font-mono transition-colors pt-2"
                >
                  Send Another Message &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50/40 border border-slate-200 rounded-xl text-sm font-mono placeholder:text-slate-300 focus:outline-none focus:bg-white focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-all shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50/40 border border-slate-200 rounded-xl text-sm font-mono placeholder:text-slate-300 focus:outline-none focus:bg-white focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-all shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50/40 border border-slate-200 rounded-xl text-sm font-mono appearance-none focus:outline-none focus:bg-white focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-all shadow-sm cursor-pointer text-slate-700"
                    >
                      <option>General Inquiry</option>
                      <option>Business Partnership</option>
                      <option>Media & Press</option>
                      <option>Career Opportunities</option>
                      <option>Environmental Concern</option>
                      <option>Investor Relations</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown
                      className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50/40 border border-slate-200 rounded-xl text-sm font-mono placeholder:text-slate-300 focus:outline-none focus:bg-white focus:border-sky-900 focus:ring-1 focus:ring-sky-900 transition-all shadow-sm resize-none"
                    placeholder="Detail your inquiry here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-sky-900 text-white font-bold font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-600 disabled:bg-slate-300 transition-all duration-300 disabled:cursor-not-allowed shadow-md shadow-sky-900/10"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={2.5}
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section - Two-Column Card Grid */}
      <section className="py-32 border-t border-slate-200/60 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest font-mono mb-3 block">
                Support Index
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-sky-900 font-mono uppercase">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="h-[2px] bg-slate-100 flex-1 mx-8 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50/40 border border-slate-200/60 rounded-xl px-6 hover:border-cyan-500/40 hover:bg-white hover:shadow-lg hover:shadow-sky-900/5 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left focus:outline-none"
                  >
                    <span
                      className={`font-mono uppercase tracking-tight font-bold text-sm transition-colors duration-300 ${isOpen ? "text-cyan-600" : "text-sky-900"}`}
                    >
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp
                        className="w-4 h-4 text-cyan-600 shrink-0"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <ChevronDown
                        className="w-4 h-4 text-slate-400 shrink-0"
                        strokeWidth={2}
                      />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}
                  >
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
