"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  AlertCircle,
  ChevronDown,
  Loader2,
  LogIn,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const aboutLinks = [
  { href: "/about/chairman-message", label: "Message from Chairman" },
  { href: "/about/board-of-directors", label: "Board of Directors" },
  { href: "/about/management-team", label: "Our Team" },
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
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileDisclosureOpen, setMobileDisclosureOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isAboutActive = pathname === "/about" || pathname.startsWith("/about/");
  const isDisclosureActive = pathname.startsWith("/disclosure/");

  const [authed, setAuthed] = useState(isAuthenticated);
  const [prevIsAuthenticated, setPrevIsAuthenticated] = useState(isAuthenticated);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  if (isAuthenticated !== prevIsAuthenticated) {
    setPrevIsAuthenticated(isAuthenticated);
    setAuthed(isAuthenticated);
  }

  useEffect(() => {
    if (!showLogin) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLoginModal();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLogin]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileAboutOpen(false);
    setMobileDisclosureOpen(false);
  };

  function openLoginModal() {
    setEmail("");
    setPassword("");
    setLoginError(null);
    setShowLogin(true);
  }

  function closeLoginModal() {
    setShowLogin(false);
  }

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setLoggingIn(true);
    setLoginError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      setAuthed(true);
      setShowLogin(false);
      setEmail("");
      setPassword("");
      router.refresh();
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoggingIn(false);
    }
  }

  async function handleLogout() {
    setAuthed(false);
    closeMobileMenu();
    await fetch("/api/auth/logout", { method: "POST" });
    router.refresh();
  }

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
              Ridi<span className="text-cyan-500 font-medium"> Power</span>
            </span>
          </Link>

          {/* Desktop Navigation - Clean Monospace Typographic Matrix */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-bold uppercase tracking-widest font-mono transition-all duration-200 relative py-2 block ${
                pathname === "/" || pathname === "/home"
                  ? "text-cyan-600 font-extrabold"
                  : "text-slate-500 hover:text-sky-900"
              }`}
            >
              Home
              {(pathname === "/" || pathname === "/home") && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 rounded-full" />
              )}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest font-mono transition-all duration-200 relative py-2 focus:outline-none ${
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
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-0 pt-3 w-64">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xl shadow-sky-900/10 py-2">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm font-bold uppercase tracking-wider font-mono text-slate-600 hover:text-sky-900 hover:bg-slate-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
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
                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest font-mono transition-all duration-200 relative py-2 focus:outline-none ${
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
                        className="block px-4 py-3 text-sm font-bold uppercase tracking-wider font-mono text-slate-600 hover:text-sky-900 hover:bg-slate-50 transition-colors"
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
                  className={`text-sm font-bold uppercase tracking-widest font-mono transition-all duration-200 relative py-2 block ${
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
          <div className="hidden lg:flex items-center gap-3">
            {authed ? (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase font-mono text-slate-500 hover:text-sky-900 px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all duration-200"
              >
                <LogOut className="w-3.5 h-3.5" strokeWidth={2} />
                Logout
              </button>
            ) : (
              <button
                type="button"
                onClick={openLoginModal}
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase font-mono text-slate-500 hover:text-sky-900 px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all duration-200"
              >
                <LogIn className="w-3.5 h-3.5" strokeWidth={2} />
                Login
              </button>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-bold tracking-widest uppercase font-mono bg-sky-900 hover:bg-cyan-500 text-white px-5 py-3 rounded-xl transition-all shadow-md shadow-sky-900/10 hover:shadow-cyan-500/20 hover:-translate-y-0.5 duration-200"
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
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block text-sm font-bold uppercase tracking-wider font-mono p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-sky-900 transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
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
                      className="block text-sm font-bold uppercase tracking-wider font-mono p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-sky-900 transition-all"
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
            <div className="pt-6 mt-2 border-t border-slate-100 space-y-3">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full text-center text-sm font-bold tracking-widest uppercase font-mono bg-sky-900 hover:bg-cyan-500 text-white py-4 rounded-xl transition-colors shadow-lg shadow-sky-900/10"
              >
                Contact Us
              </Link>
              {authed ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full text-sm font-bold tracking-widest uppercase font-mono text-slate-500 border border-slate-200 py-4 rounded-xl hover:bg-slate-50 hover:text-sky-900 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" strokeWidth={2} />
                  Logout
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    openLoginModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full text-sm font-bold tracking-widest uppercase font-mono text-slate-500 border border-slate-200 py-4 rounded-xl hover:bg-slate-50 hover:text-sky-900 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" strokeWidth={2} />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
          onClick={closeLoginModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-dialog-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative"
          >
            <button
              type="button"
              onClick={closeLoginModal}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div
              id="login-dialog-title"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-6"
            >
              <LogIn className="w-3.5 h-3.5" strokeWidth={2} />
              Admin Login
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>

              <button
                type="submit"
                disabled={loggingIn || !email || !password}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-sky-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loggingIn ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <LogIn className="w-3.5 h-3.5" strokeWidth={2} />
                )}
                {loggingIn ? "Signing in..." : "Sign In"}
              </button>

              {loginError && (
                <p className="flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {loginError}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
