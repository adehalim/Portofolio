import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Code2, BookOpenCheck, Wrench, Sparkles, Check } from "lucide-react";

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

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
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keahlian & Kemampuan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Kombinasi Tech Stack & Kemampuan Pedagogis
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Perpaduan unik antara kemahiran teknis pengembangan perangkat lunak dan keilmuan pendidikan bahasa Arab yang aplikatif.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs flex flex-col justify-between space-y-6 group"
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

                {/* Skill Chips */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 hover:border-blue-500/50 transition-colors flex items-center gap-2 text-xs shadow-xs"
                    >
                      <Check className="w-3 h-3 text-blue-500" />
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                        ({skill.level})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
