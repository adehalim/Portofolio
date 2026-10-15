"use client";

import { useState } from "react";
import { ArrowUp, Heart, RefreshCw, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const { arabicWisdoms } = PORTFOLIO_DATA;
  const [wisdomIndex, setWisdomIndex] = useState(0);

  const handleNextWisdom = () => {
    setWisdomIndex((prev) => (prev + 1) % arabicWisdoms.length);
  };

  const currentWisdom = arabicWisdoms[wisdomIndex];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-950 text-xs text-zinc-500 dark:text-zinc-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Top Interactive Wisdom Card */}
        <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                Hikmah & Mahfuzhat Hari Ini • {currentWisdom.source}
              </span>
            </div>
            <p className="font-arabic text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white" dir="rtl">
              {currentWisdom.arabic}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-mono italic">
              {currentWisdom.latin}
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              &ldquo;{currentWisdom.translation}&rdquo;
            </p>
          </div>

          <button
            onClick={handleNextWisdom}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer self-start sm:self-center shrink-0"
            title="Tampilkan hikmah berikutnya"
          >
            <RefreshCw className="w-3.5 h-3.5 text-blue-500" />
            <span>Ganti Hikmah</span>
          </button>
        </div>

        {/* Main Footer Links & Information */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
          {/* Left Side: Brand & Greeting */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-center sm:justify-start gap-1.5">
              <span>Ade Halim Alfajri</span>
              <span className="text-zinc-400">•</span>
              <span className="font-arabic text-sm text-blue-600 dark:text-blue-400 font-bold" dir="rtl">
                مَعَ التَّمَنِّيَاتِ بِالتَّوْفِيقِ
              </span>
            </p>
            <p className="text-[11px] text-zinc-400">
              © 2026 Hak Cipta Dilindungi. Dibuat dengan dedikasi untuk edukasi bahasa Arab dan teknologi web.
            </p>
          </div>

          {/* Center Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Tentang
            </a>
            <a href="#timeline" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Riwayat
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Keahlian
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Proyek
            </a>
            <a href="#sandbox" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Lab EdTech
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Kontak
            </a>
          </div>

          {/* Right Side: Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all hover:scale-105 active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold">Ke Atas</span>
          </button>
        </div>

        {/* Bottom Attribution */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 pt-2">
          <span>Dibangun dengan</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          <span>menggunakan Next.js 16, React 19, Motion & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
