"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { MessageSquareQuote, Quote, BadgeCheck } from "lucide-react";

export function TestimonialsSection() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-2 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Kesan & Rekomendasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Apresiasi Lingkungan Pengabdian & Organisasi
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            Pandangan rekan kerja dan pembimbing mengenai etos kerja, inovasi pembelajaran, dan kolaborasi tim.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-blue-500/40 dark:text-blue-400/30" />
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed italic font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                      {item.author}
                    </h3>
                    <BadgeCheck className="w-4 h-4 text-blue-500 shrink-0" />
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    {item.organization}
                  </p>
                </div>

                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 shrink-0">
                  {item.context}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
