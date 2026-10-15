"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { BookOpen, Laptop, Users2, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const { profile } = PORTFOLIO_DATA;

  const pillars = [
    {
      icon: BookOpen,
      title: "Pedagogi & Bahasa Arab",
      description:
        "Mendalami kaidah bahasa Arab, fonetik (makharijul huruf), serta perancangan rencana pembelajaran yang memudahkan siswa memahami materi secara sistematis.",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      highlight: "Struktur Qawa'id & Kurikulum",
    },
    {
      icon: Laptop,
      title: "Eksplorasi Teknologi Web",
      description:
        "Memanfaatkan ekosistem JavaScript modern (React, Next.js, Tailwind CSS) untuk mentransformasikan materi ajar konvensional menjadi media digital interaktif.",
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      highlight: "Next.js 16 • TypeScript • RTL",
    },
    {
      icon: Users2,
      title: "Kolaborasi & Pengabdian",
      description:
        "Mengasah kepemimpinan melalui kepengurusan DEMA dan menerapkan ilmu secara langsung lewat praktik pengajaran bagi siswa MTsN 2 Solok.",
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      highlight: "Praktik MTsN 2 Solok & DEMA",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
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
            <Compass className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Menghubungkan Tradisi Bahasa dengan Inovasi Digital
          </h2>
        </motion.div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-zinc-600 dark:text-zinc-300 text-base leading-relaxed"
          >
            <p>
              Perjalanan saya berakar dari kecintaan terhadap dua dunia yang sekilas berbeda:{" "}
              <strong className="text-zinc-900 dark:text-white">bahasa dan kode program</strong>. Sebagai mahasiswa semester 7 di Program Studi Pendidikan Bahasa Arab, Fakultas Tarbiyah dan Keguruan,{" "}
              <strong className="text-zinc-900 dark:text-white">UIN Imam Bonjol Padang</strong>, saya belajar bagaimana mentransfer ilmu pengetahuan secara efektif kepada generasi muda.
            </p>
            <p>
              Saat ini, saya sedang mengabdikan diri di <strong className="text-zinc-900 dark:text-white">MTsN 2 Solok</strong>. Di lapangan, saya melihat secara nyata tantangan yang dihadapi siswa dalam mempelajari bahasa asing. Hal ini semakin mendorong saya untuk mendalami dunia pemrograman—membangun web tools, antarmuka latihan, dan platform edukasi yang membuat proses belajar menjadi menyenangkan dan mudah diakses siapa saja.
            </p>
            <p>
              Saya adalah pembelajar mandiri yang gemar mengeksplorasi teknologi baru, mencoba framework modern, dan mengoptimalkan pengalaman pengguna (UI/UX) agar setiap karya yang dibangun memiliki nilai guna nyata.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-500" />
                <span>Berfokus pada Dampak Sosial & Pendidikan</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Teknologi Ramah Pengguna</span>
              </span>
            </div>
          </motion.div>

          {/* Quick Info Box / Side Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm space-y-4 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-3">
                Sekilas Profil
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-zinc-100/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Nama Lengkap</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{profile.fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Panggilan</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{profile.nickname}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Status Akademik</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">Semester 7 (Aktif)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Perguruan Tinggi</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-right">UIN Imam Bonjol Padang</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100/60 dark:border-zinc-800/60">
                  <span className="text-zinc-500 dark:text-zinc-400">Praktik Lapangan</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-right">MTsN 2 Solok</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500 dark:text-zinc-400">Domisili</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">{profile.domicile}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillar Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all shadow-xs group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {pillar.highlight}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
