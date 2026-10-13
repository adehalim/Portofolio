"use client";

import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950 text-xs text-zinc-500 dark:text-zinc-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand & Arabic Greeting */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-center sm:justify-start gap-1.5">
            <span>Ade Halim Alfajri</span>
            <span className="text-zinc-400">•</span>
            <span className="font-arabic text-sm text-blue-600 dark:text-blue-400 font-bold" dir="rtl">
              مَعَ التَّمَنِّيَاتِ بِالتَّوْفِيقِ
            </span>
          </p>
          <p className="text-[11px] text-zinc-400">
            © 2026 Hak Cipta Dilindungi. Dibuat dengan dedikasi untuk edukasi dan teknologi.
          </p>
        </div>

        {/* Center: Tech Stack Attribution */}
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
          <span>Dibangun dengan</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          <span>menggunakan Next.js & Tailwind CSS</span>
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
    </footer>
  );
}
