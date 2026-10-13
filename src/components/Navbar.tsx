"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang", href: "#about" },
    { label: "Riwayat", href: "#timeline" },
    { label: "Keahlian", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        aria-label="Navigasi Utama"
        className={`w-full max-w-5xl transition-all duration-300 rounded-2xl sm:rounded-full px-5 py-3 flex items-center justify-between border ${
          scrolled
            ? "glass-panel shadow-lg shadow-black/5 dark:shadow-black/30 border-zinc-200/80 dark:border-zinc-800/80"
            : "bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/50"
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
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />
          
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold px-4 py-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-sm cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400 dark:text-blue-600 group-hover:text-white transition-colors" />
            <span>Resume</span>
            <span className="text-[10px] uppercase font-mono px-1 py-0.2 bg-white/20 dark:bg-black/10 rounded tracking-wider">
              PDF
            </span>
          </a>
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Lihat CV / Resume [PDF]</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
