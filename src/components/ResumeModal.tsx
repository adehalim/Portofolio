"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Printer, Download, Mail, MapPin, GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { profile, education, experience, skills, projects } = PORTFOLIO_DATA;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-10 my-8 text-zinc-900 dark:text-zinc-100"
          >
            {/* Header Actions (Floating Top-Right) */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Curriculum Vitae • Live Preview
                </span>
              </div>

              <div className="flex items-center gap-2 print:hidden">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-200 transition-colors shadow-xs cursor-pointer"
                  title="Cetak atau Simpan sebagai PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak / PDF</span>
                </button>
                <button
                  onClick={onClose}
                  aria-label="Tutup jendela resume"
                  className="p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="pt-8 space-y-8 print:p-0">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                    {profile.fullName}
                  </h1>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {profile.title}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-lg">
                    {profile.positioning}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  <p className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-500" />
                    <span>{profile.email}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>{profile.domicile}</span>
                  </p>
                </div>
              </div>

              {/* Ringkasan Profil */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Ringkasan Profesional</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {profile.aboutLong}
                </p>
              </div>

              {/* Riwayat Pendidikan */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Riwayat Pendidikan</span>
                </h2>

                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="space-y-1 text-xs sm:text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold">
                        <span className="text-zinc-900 dark:text-white">{edu.institution}</span>
                        <span className="text-xs font-mono text-zinc-500">{edu.period} • {edu.location}</span>
                      </div>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pengalaman & Pengabdian */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  <span>Pengalaman & Pengabdian</span>
                </h2>

                <div className="space-y-4">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="space-y-1.5 text-xs sm:text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold">
                        <span className="text-zinc-900 dark:text-white">
                          {exp.role} — <span className="text-blue-600 dark:text-blue-400">{exp.organization}</span>
                        </span>
                        <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">{exp.description}</p>
                      {exp.achievements && (
                        <ul className="space-y-1 pt-1">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Keahlian & Tech Stack */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Kompetensi Inti
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {skills.map((cat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 space-y-2">
                      <h3 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{cat.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((sk, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
                            {sk.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portofolio Rekayasa & Proyek Terpilih */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Proyek Terpilih
                </h2>
                <div className="space-y-2">
                  {projects.map((proj) => (
                    <div key={proj.id} className="p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 text-xs">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-zinc-900 dark:text-white">{proj.title}</span>
                        <span className="text-[10px] font-mono text-zinc-500">{proj.category}</span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 mt-0.5">{proj.description}</p>
                      <p className="text-[10px] font-mono text-blue-600 dark:text-blue-400 mt-1">
                        Stack: {proj.techStack.join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-end gap-3 print:hidden">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                Tutup
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download / Cetak PDF</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
