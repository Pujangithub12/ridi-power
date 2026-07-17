"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Share2, MapPin, Mail, Phone } from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
];

const resourceLinks = [
  { label: "Technology", href: "/technology" },
  {
    label: "Disclosure",
    href: "/disclosure/annual-financial-statements",
  },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative w-14 h-14 rounded-xl bg-white overflow-hidden shadow-md">
                <Image
                  src="/ridi-logo.png"
                  alt="Ridi Hydropower"
                  fill
                  sizes="56px"
                  className="object-cover object-[center_45%] scale-[2.1]"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Ridi<span className="text-cyan-400 font-light"> Power</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Engineering sustainable hydropower and renewable infrastructure
              to deliver stable, zero-carbon energy at scale.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#"
                aria-label="Global Network"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Share"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wide">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" strokeWidth={2} />
                <span>info@ridihydropower.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" strokeWidth={2} />
                <span>+1 (503) 555-0123</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" strokeWidth={2} />
                <span>Trade Tower, Thapathali, Kathmandu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ridi Hydropower. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/disclosure/annual-financial-statements"
              className="hover:text-white transition-colors"
            >
              Disclosure
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
