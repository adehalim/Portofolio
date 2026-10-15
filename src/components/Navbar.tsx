"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { ResumeModal } from "./ResumeModal";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll offset
      const sections = ["about", "timeline", "skills", "projects", "sandbox", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang", href: "#about", id: "about" },
    { label: "Riwayat", href: "#timeline", id: "timeline" },
    { label: "Keahlian", href: "#skills", id: "skills" },
    { label: "Proyek", href: "#projects", id: "projects" },
    { label: "Lab EdTech", href: "#sandbox", id: "sandbox", badge: "Demo" },
    { label: "Kontak", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
        <nav
          aria-label="Navigasi Utama"
          className={`w-full max-w-5xl transition-all duration-300 rounded-2xl sm:rounded-full px-5 py-2.5 sm:py-3 flex items-center justify-between border ${
            scrolled
              ? "glass-panel shadow-lg shadow-black/5 dark:shadow-black/30 border-zinc-200/80 dark:border-zinc-800/80"
              : "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/50"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="#"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              H
            </span>
            <span className="font-display tracking-tight text-base sm:text-lg">
              Halim<span className="text-blue-600 dark:text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "text-blue-600 dark:text-white font-semibold"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200/60 dark:border-blue-700/40 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />

            <button
              onClick={() => setResumeOpen(true)}
              className="group inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold px-4 py-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400 dark:text-blue-600 group-hover:text-white transition-colors" />
              <span>Resume</span>
              <span className="text-[10px] uppercase font-mono px-1 py-0.2 bg-white/20 dark:bg-black/10 rounded tracking-wider">
                PDF
              </span>
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-xs -z-10 md:hidden"
              />

              {/* Menu Container */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="md:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-4"
              >
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                        activeSection === link.id
                          ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                            {link.badge}
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                    </a>
                  ))}
                </div>

                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setResumeOpen(true);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Lihat Curriculum Vitae (CV)</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Global CV / Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
