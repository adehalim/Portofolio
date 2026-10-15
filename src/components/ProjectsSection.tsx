"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import { ProjectModal } from "./ProjectModal";
import {
  FolderGit2,
  ExternalLink,
  Lightbulb,
  CheckCircle,
  ArrowUpRight,
  Calendar,
  Volume2,
  FileText,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("Semua");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const { projects } = PORTFOLIO_DATA;

  const categories = ["Semua", "EdTech", "Web App", "Tools"];

  const filteredProjects =
    filter === "Semua"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Helper to render realistic simulated mockups based on project id
  const renderProjectMockup = (projectId: string) => {
    switch (projectId) {
      case "mufrodat-explorer":
        return (
          <div className="w-full rounded-2xl bg-gradient-to-br from-blue-900/10 via-zinc-900/40 to-indigo-950/20 border border-blue-500/20 p-4 sm:p-5 flex flex-col justify-between space-y-3">
            {/* Mock browser top bar */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200/40 dark:border-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                mufrodat-explorer.edu / live-preview
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold">
                Flashcard v2
              </span>
            </div>

            {/* Mock interactive card */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-blue-500 font-bold uppercase">
                  Kosakata Harian #04
                </span>
                <p className="font-arabic text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white" dir="rtl">
                  مَدْرَسَةٌ ذَكِيَّةٌ
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Madrasah Dzakiyyah • Sekolah Cerdas
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                  <Volume2 className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Makhraj Dal</span>
              </div>
            </div>

            {/* Simulated Quiz Footer */}
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Streak Belajar: 14 Hari</span>
              </span>
              <span className="font-mono text-blue-500 dark:text-blue-400 font-semibold">
                Tingkat Akurasi: 96%
              </span>
            </div>
          </div>
        );

      case "portal-dema":
        return (
          <div className="w-full rounded-2xl bg-gradient-to-br from-indigo-900/10 via-zinc-900/40 to-blue-950/20 border border-indigo-500/20 p-4 sm:p-5 flex flex-col justify-between space-y-3">
            {/* Mock browser top bar */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200/40 dark:border-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                dema.uinib.ac.id / agenda-hub
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                Terverifikasi
              </span>
            </div>

            {/* Mock Event Cards */}
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white/80 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">
                      Festival Budaya & Bahasa Arab 2026
                    </p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                      Aula Utama UIN IB • Pendaftaran Terbuka
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2 py-1 rounded bg-blue-600 text-white">
                  Daftar
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
              <span>Mahasiswa Terdaftar: 450+</span>
              <span className="font-mono text-indigo-400">Status: Real-time Sync</span>
            </div>
          </div>
        );

      case "kalam-playground":
        return (
          <div className="w-full rounded-2xl bg-gradient-to-br from-emerald-950/20 via-zinc-900/40 to-teal-950/30 border border-emerald-500/20 p-4 sm:p-5 flex flex-col justify-between space-y-3">
            {/* Mock browser top bar */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200/40 dark:border-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                kalam-playground.app / mufradat-lab
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                React 19 • Level 1 مُبْتَدِئ
              </span>
            </div>

            {/* Interactive Reading / Word Inspector preview */}
            <div className="p-3.5 rounded-xl bg-white/80 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Teks Bacaan &amp; Klik Kata
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 font-mono text-[9px]">
                  مُشَكَّلٌ (Harakat Penuh)
                </span>
              </div>

              {/* Word Card Interactive */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <Volume2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-emerald-800 dark:text-emerald-300">
                      Jenis: Isim • Akar: ك-ت-ب
                    </span>
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Buku / Kitab (Jamak: كُتُبٌ)
                    </p>
                  </div>
                </div>
                <span className="font-arabic text-xl font-bold text-emerald-700 dark:text-emerald-300" dir="rtl">
                  كِتَابٌ
                </span>
              </div>
            </div>

            {/* Action & metric row */}
            <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
              <span>Game: Susun Huruf &amp; Pasang Kata</span>
              <span className="font-mono text-emerald-400 font-semibold">
                Web Speech TTS Ready
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <section id="projects" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Proyek Unggulan</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Karya & Studi Kasus Rekayasa
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
                Setiap proyek dirancang untuk memecahkan problem nyata dengan pendekatan desain yang terstruktur. Klik proyek untuk membuka studi kasus lengkap.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="inline-flex p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 self-start sm:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    filter === cat
                      ? "bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project Cards (Case Study Style with Interactive Mockups) */}
          <div className="grid grid-cols-1 gap-10">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs space-y-6 group"
              >
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          <span>{project.metrics}</span>
                        </span>
                      )}
                    </div>
                    <h3
                      onClick={() => setActiveProjectModal(project)}
                      className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-500" />
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Action Links & Case Study Trigger */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Studi Kasus</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-semibold transition-colors shadow-xs"
                        title="Lihat Kode di GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Kode</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs"
                        title="Kunjungi Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Simulated Visual Mockup Frame */}
                {renderProjectMockup(project.id)}

                {/* Case Study Details: Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                      <Lightbulb className="w-4 h-4 shrink-0" />
                      <span>Tantangan / Problem</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      <span>Solusi & Pendekatan</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mr-1">
                    Stack:
                  </span>
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </>
  );
}
