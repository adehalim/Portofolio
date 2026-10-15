"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Toast } from "./Toast";
import { ResumeModal } from "./ResumeModal";
import {
  ArrowDown,
  Copy,
  Check,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
  Code2,
  FileText,
  MapPin,
} from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowToast(false), 3500);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Arabic Watermark with Floating Pulse */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center -z-10 overflow-hidden"
      >
        <span className="font-arabic text-[120px] sm:text-[180px] md:text-[240px] font-bold text-zinc-900/[0.03] dark:text-white/[0.03] tracking-wider leading-none whitespace-nowrap transform -rotate-3 translate-y-12">
          العِلْمُ وَالتِّقْنِيَّة
        </span>
      </div>

      {/* Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[320px] radial-glow pointer-events-none -z-10 blur-3xl opacity-60 dark:opacity-80"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Status Pill with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-start md:justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium shadow-xs backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profile.statusBadge}</span>
          </div>
        </motion.div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>EdTech & Arabic Pedagogy Explorer</span>
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
                Bridging{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-500">
                  Arabic Pedagogy
                </span>{" "}
                with Modern Web Engineering.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Halo, saya <span className="font-semibold text-zinc-900 dark:text-white">{profile.fullName} ({profile.nickname})</span> — mahasiswa semester 7 Pendidikan Bahasa Arab di <span className="text-zinc-900 dark:text-white font-medium">UIN Imam Bonjol Padang</span> yang sedang mengabdi di MTsN 2 Solok, antusias merancang antarmuka web modern dan solusi teknologi edukasi.
            </p>

            {/* Arabic Quote Banner */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 backdrop-blur-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
              <span className="font-arabic text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-100" dir="rtl">
                {profile.arabicQuote}
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-sans italic">
                &ldquo;{profile.arabicTranslation}&rdquo;
              </span>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Jelajahi Proyek</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Lihat Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                title="Salin alamat email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Modern Profile Visual Frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 blur-xl opacity-70 hover:opacity-100 transition-opacity" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-xl flex flex-col items-center text-center space-y-5">
                {/* Avatar with Elegant Arabic Monogram & Status Ring */}
                <div className="relative">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-zinc-900 p-[3px] shadow-lg shadow-blue-600/20">
                    <div className="w-full h-full rounded-[13px] bg-zinc-950 flex flex-col items-center justify-center text-white relative overflow-hidden group">
                      {/* Geometric grid lines inside avatar */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                      
                      {/* Dynamic Arabic Calligraphy Badge inside */}
                      <span className="font-arabic text-3xl sm:text-4xl font-bold text-blue-400/80 mb-0.5 select-none" dir="rtl">
                        حَلِيم
                      </span>
                      <span className="font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400">
                        Ade Halim
                      </span>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-400 mt-0.5">
                        ● Online • Padang
                      </span>
                    </div>
                  </div>

                  {/* Floating badge top-right */}
                  <span className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-md border-2 border-white dark:border-zinc-900">
                    Sem. 7
                  </span>
                </div>

                {/* Identity Information */}
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {profile.fullName}
                  </h2>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Pendidikan Bahasa Arab • UIN Imam Bonjol
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>{profile.domicile}</span>
                  </p>
                </div>

                {/* Badges / Micro status cards */}
                <div className="w-full grid grid-cols-2 gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-left">
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Praktik Lapangan</p>
                    <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">MTsN 2 Solok</p>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-left">
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Kepengurusan</p>
                    <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">DEMA Kampus</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Key Stats Counter Bar with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {profile.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all hover:scale-[1.02] shadow-xs group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                    {stat.label}
                  </span>
                  {idx === 0 && <GraduationCap className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />}
                  {idx === 1 && <Briefcase className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />}
                  {idx === 2 && <Layers className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />}
                  {idx === 3 && <Code2 className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />}
                </div>
                <p className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copy Toast feedback */}
      <Toast
        isOpen={showToast}
        message="Alamat email berhasil disalin ke clipboard!"
        onClose={() => setShowToast(false)}
      />

      {/* Global CV / Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
