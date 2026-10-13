"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Toast } from "./Toast";
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  XTwitterIcon,
  ThreadsIcon,
} from "./Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { profile, socials } = PORTFOLIO_DATA;

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

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <GithubIcon className="w-4 h-4" />;
      case "Linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "Instagram":
        return <InstagramIcon className="w-4 h-4" />;
      case "Twitter":
        return <XTwitterIcon className="w-4 h-4" />;
      case "AtSign":
        return <ThreadsIcon className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Contact Hero Container */}
        <div className="relative rounded-3xl p-8 sm:p-12 border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-950/80 backdrop-blur-xl shadow-xl overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: CTA & Fast Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mari Terhubung</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  Tertarik Berkolaborasi atau Berdiskusi?
                </h2>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Saya selalu terbuka untuk diskusi seputar teknologi pendidikan (EdTech), pembelajaran bahasa Arab, proyek pengembangan web, maupun peluang riset dan pengabdian.
              </p>

              {/* Email One-Click Action Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/50 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Alamat Email Resmi
                    </p>
                    <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white font-mono break-all">
                      {profile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors shadow-xs cursor-pointer"
                    title="Salin ke clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profile.email}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Email</span>
                  </a>
                </div>
              </div>

              {/* Location & Status note */}
              <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>{profile.domicile}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Tanggapan Cepat</span>
                </span>
              </div>
            </div>

            {/* Right Column: Social Links */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Jaringan Sosial & Portofolio
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {socials.map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:border-blue-500/40 transition-all flex items-center justify-between group shadow-xs cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-colors">
                        {getSocialIcon(social.icon)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900 dark:text-white">
                          {social.name}
                        </p>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                          {social.handle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast
        isOpen={showToast}
        message="Alamat email berhasil disalin ke clipboard!"
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
