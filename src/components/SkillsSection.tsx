"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Code2, BookOpenCheck, Wrench, Sparkles, Check, Star } from "lucide-react";

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState<string>("Semua");

  const categories = ["Semua", "Web & Engineering", "Pendidikan & Bahasa Arab", "Tools & Ekosistem Kerja"];

  const filteredSkills =
    selectedFilter === "Semua"
      ? skills
      : skills.filter((cat) => cat.title.toLowerCase().includes(selectedFilter.toLowerCase()) || cat.title === selectedFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case "BookOpenCheck":
        return <BookOpenCheck className="w-5 h-5 text-emerald-500" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-indigo-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
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
              <Sparkles className="w-3.5 h-3.5" />
              <span>Keahlian & Kemampuan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Kombinasi Tech Stack & Kemampuan Pedagogis
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
              Perpaduan unik antara kemahiran teknis pengembangan perangkat lunak dan keilmuan pendidikan bahasa Arab yang aplikatif.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                {cat === "Web & Engineering" ? "Web Dev" : cat === "Pendidikan & Bahasa Arab" ? "Pedagogi" : cat === "Tools & Ekosistem Kerja" ? "Tools" : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredSkills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200/80 dark:border-zinc-700/80 shadow-xs">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill List with Visual Meter Progress Bar */}
                <div className="pt-2 space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/80 space-y-1.5 shadow-2xs group/item hover:border-blue-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          {skill.highlight ? (
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          ) : (
                            <Check className="w-3.5 h-3.5 text-blue-500" />
                          )}
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                          {skill.level}
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.05, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            category.title.includes("Web")
                              ? "bg-gradient-to-r from-blue-600 to-indigo-500"
                              : category.title.includes("Pendidikan")
                              ? "bg-gradient-to-r from-emerald-600 to-teal-500"
                              : "bg-gradient-to-r from-indigo-500 to-violet-500"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
