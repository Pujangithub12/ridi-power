"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const managementTeamLinks = [
  { href: "/about/management-team/head-office", label: "Head Office" },
  {
    href: "/about/management-team/iwa-khola-project",
    label: "Iwa Khola Project",
  },
  {
    href: "/about/management-team/ridi-khola-project",
    label: "Ridi Khola Project",
  },
  {
    href: "/about/management-team/rairang-khola-project",
    label: "Rairang Khola Project",
  },
  {
    href: "/about/management-team/butwal-solar-project",
    label: "Butwal Solar Project",
  },
];

const aboutLinks = [
  { href: "/about/chairman-message", label: "Message from Chairman" },
  { href: "/about/board-of-directors", label: "Board of Directors" },
  {
    href: "/about/management-team",
    label: "Management Team",
    children: managementTeamLinks,
  },
];

const disclosureLinks = [
  {
    href: "/disclosure/annual-financial-statements",
    label: "Annual Financial Statements",
  },
  {
    href: "/disclosure/quarterly-financial-statements",
    label: "Quarterly Financial Statements",
  },
  { href: "/disclosure/news-and-notice", label: "News & Notice" },
];

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/technology", label: "Technology" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mgmtOpen, setMgmtOpen] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMgmtOpen, setMobileMgmtOpen] = useState(false);
  const [mobileDisclosureOpen, setMobileDisclosureOpen] = useState(false);
  const pathname = usePathname();
  const isAboutActive = pathname === "/about" || pathname.startsWith("/about/");
  const isDisclosureActive = pathname.startsWith("/disclosure/");

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileAboutOpen(false);
    setMobileMgmtOpen(false);
    setMobileDisclosureOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Tech & Fluid Hybrid */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/ridi-logo.png"
              alt="Ridi Hydropower"
              width={52}
              height={52}
              className="w-13 h-13 object-contain"
              priority
            />
            <span className="text-xl font-black tracking-tight text-sky-900 font-mono uppercase">
              Ridi<span className="text-cyan-500 font-light"> Power</span>
            </span>
          </Link>

          {/* Desktop Navigation - Clean Monospace Typographic Matrix */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-xs font-bold uppercase tracking-widest font-mono transition-all duration-200 relative py-2 block ${
                pathname === "/"
                  ? "text-cyan-600 font-extrabold"
                  : "text-slate-500 hover:text-sky-900"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 rounded-full" />
              )}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => {
                setAboutOpen(false);
                setMgmtOpen(false);
              }}
            >
              <Link
                href="/about"
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest font-mono transition-all duration-200 relative py-2 ${
                  isAboutActive
                    ? "text-cyan-600 font-extrabold"
                    : "text-slate-500 hover:text-sky-900"
                }`}
              >
                About Us
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
                {isAboutActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 rounded-full" />
                )}
              </Link>

              {aboutOpen && (
                <div className="absolute top-full left-0 pt-3 w-64">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xl shadow-sky-900/10 py-2">
                    {aboutLinks.map((item) =>
                      item.children ? (
                        <div
                          key={item.href}
                          className="relative"
                          onMouseEnter={() => setMgmtOpen(true)}
                          onMouseLeave={() => setMgmtOpen(false)}
                        >
                          <div className="flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider font-mono text-slate-600">
                            {item.label}
                            <ChevronRight
                              className="w-3.5 h-3.5 text-slate-400"
                              strokeWidth={2.5}
                            />
                          </div>

                          {mgmtOpen && (
                            <div className="absolute top-0 left-full pl-2 w-64">
                              <div className="bg-white border border-slate-200 rounded-xl shadow-xl shadow-sky-900/10 py-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="block px-4 py-3 text-xs font-bold uppercase tracking-wider font-mono text-slate-600 hover:text-sky-900 hover:bg-slate-50 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-xs font-bold uppercase tracking-wider font-mono text-slate-600 hover:text-sky-900 hover:bg-slate-50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Disclosure Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDisclosureOpen(true)}
              onMouseLeave={() => setDisclosureOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest font-mono transition-all duration-200 relative py-2 focus:outline-none ${
                  isDisclosureActive
                    ? "text-cyan-600 font-extrabold"
                    : "text-slate-500 hover:text-sky-900"
                }`}
              >
                Disclosure
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${disclosureOpen ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
                {isDisclosureActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 rounded-full" />
                )}
              </button>

              {disclosureOpen && (
                <div className="absolute top-full left-0 pt-3 w-72">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xl shadow-sky-900/10 py-2">
                    {disclosureLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-xs font-bold uppercase tracking-wider font-mono text-slate-600 hover:text-sky-900 hover:bg-slate-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-widest font-mono transition-all duration-200 relative py-2 block ${
                    isActive
                      ? "text-cyan-600 font-extrabold"
                      : "text-slate-500 hover:text-sky-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA - Industrial Premium Action */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-bold tracking-widest uppercase font-mono bg-sky-900 hover:bg-cyan-500 text-white px-5 py-3 rounded-xl transition-all shadow-md shadow-sky-900/10 hover:shadow-cyan-500/20 hover:-translate-y-0.5 duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:text-sky-900 hover:bg-white transition-all duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-sky-900/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-6 py-8 space-y-4">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block text-sm font-bold uppercase tracking-wider font-mono p-3 rounded-lg transition-all ${
                pathname === "/"
                  ? "bg-cyan-500/10 text-cyan-600 border-l-4 border-cyan-500 pl-4"
                  : "text-slate-600 hover:bg-slate-50 hover:text-sky-900"
              }`}
            >
              Home
            </Link>

            {/* About Accordion */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider font-mono p-3 rounded-lg transition-all ${
                  isAboutActive
                    ? "bg-cyan-500/10 text-cyan-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-sky-900"
                }`}
              >
                About Us
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </button>

              {mobileAboutOpen && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-slate-100 space-y-1">
                  {aboutLinks.map((item) =>
                    item.children ? (
                      <div key={item.href}>
                        <button
                          onClick={() => setMobileMgmtOpen(!mobileMgmtOpen)}
                          aria-label="Toggle Management Team submenu"
                          className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider font-mono p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-sky-900 transition-all"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileMgmtOpen ? "rotate-180" : ""}`}
                            strokeWidth={2.5}
                          />
                        </button>
                        {mobileMgmtOpen && (
                          <div className="ml-3 pl-3 border-l-2 border-slate-100 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block text-xs font-bold uppercase tracking-wider font-mono p-3 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-sky-900 transition-all"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block text-xs font-bold uppercase tracking-wider font-mono p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-sky-900 transition-all"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Disclosure Accordion */}
            <div>
              <button
                onClick={() => setMobileDisclosureOpen(!mobileDisclosureOpen)}
                className={`w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider font-mono p-3 rounded-lg transition-all ${
                  isDisclosureActive
                    ? "bg-cyan-500/10 text-cyan-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-sky-900"
                }`}
              >
                Disclosure
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileDisclosureOpen ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </button>

              {mobileDisclosureOpen && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-slate-100 space-y-1">
                  {disclosureLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block text-xs font-bold uppercase tracking-wider font-mono p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-sky-900 transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block text-sm font-bold uppercase tracking-wider font-mono p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-600 border-l-4 border-cyan-500 pl-4"
                      : "text-slate-600 hover:bg-slate-50 hover:text-sky-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-6 mt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full text-center text-xs font-bold tracking-widest uppercase font-mono bg-sky-900 hover:bg-cyan-500 text-white py-4 rounded-xl transition-colors shadow-lg shadow-sky-900/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
