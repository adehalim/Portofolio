"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function TimelineSection() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");
  const { education, experience } = PORTFOLIO_DATA;

  return (
    <section id="timeline" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
              <Calendar className="w-3.5 h-3.5" />
              <span>Jejak Langkah</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Pendidikan & Rekam Jejak Pengalaman
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "education"
                  ? "bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Riwayat Pendidikan</span>
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "experience"
                  ? "bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Pengalaman & Organisasi</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {activeTab === "education" &&
            education.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-blue-600 shadow-xs transition-transform group-hover:scale-125" />

                <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
                      {item.period}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.degree}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

          {activeTab === "experience" &&
            experience.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-indigo-600 shadow-xs transition-transform group-hover:scale-125" />

                <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/40">
                        {item.period}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {item.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.achievements && item.achievements.length > 0 && (
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-1.5">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
