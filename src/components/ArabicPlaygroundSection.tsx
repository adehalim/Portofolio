"use client";

import { useState } from "react";
import { PORTFOLIO_DATA, MufrodatSample } from "@/data/portfolio-data";
import { Volume2, Sparkles, RefreshCw, Copy, Check, Terminal } from "lucide-react";

export function ArabicPlaygroundSection() {
  const { mufrodatSamples } = PORTFOLIO_DATA;
  const [selectedWord, setSelectedWord] = useState<MufrodatSample>(mufrodatSamples[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);

  // Tashkeel / Harakat tool state
  const defaultArabicText = "العِلْمُ نُورٌ وَالجَهْلُ ظَلَامٌ وَالتِّقْنِيَّةُ تَبْنِي المُسْتَقْبَلَ";
  const [inputText, setInputText] = useState(defaultArabicText);
  const [cleanedText, setCleanedText] = useState("");
  const [isStripped, setIsStripped] = useState(false);

  // Function to pronounce Arabic word using browser SpeechSynthesis
  const speakArabic = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Browser Anda tidak mendukung Web Speech API");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    utterance.rate = 0.85; // slightly slower for instructional clarity

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  // Strip Harakat regex (Unicode range for Arabic Tashkeel: \u064B-\u065F, \u0670)
  const stripHarakat = (text: string) => {
    return text.replace(/[\u064B-\u065F\u0670]/g, "");
  };

  // Count harakat vs letters
  const harakatCount = (inputText.match(/[\u064B-\u065F\u0670]/g) || []).length;
  const totalChars = inputText.replace(/\s+/g, "").length;
  const letterCount = totalChars - harakatCount;
  const harakatRatio = totalChars > 0 ? Math.round((harakatCount / totalChars) * 100) : 0;

  const handleToggleStrip = () => {
    if (isStripped) {
      setIsStripped(false);
    } else {
      setCleanedText(stripHarakat(inputText));
      setIsStripped(true);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="sandbox" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive EdTech Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Kalam Playground — Lab Pedagogi & Web
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Eksplorasi langsung bagaimana rekayasa web (Speech Synthesis API, manipulasi Unicode teks RTL, dan UI interaktif) diterapkan pada pembelajaran bahasa Arab.
          </p>
        </div>

        {/* 2-Column Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Interactive Mufrodat Audio Card (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Flashcard Mufrodat & Makhraj
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                  Web Speech API
                </span>
              </div>

              {/* Main Card Display */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-800 border border-blue-100 dark:border-zinc-700/60 flex flex-col items-center justify-center text-center space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  {selectedWord.category}
                </span>

                <div className="py-2">
                  <span
                    className="font-arabic text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white transition-all transform hover:scale-105 inline-block select-none"
                    dir="rtl"
                  >
                    {selectedWord.arabic}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 font-mono">
                    {selectedWord.transliteration}
                  </p>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    &ldquo;{selectedWord.meaning}&rdquo;
                  </p>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm pt-2 italic">
                  💡 {selectedWord.phoneticTip}
                </p>

                {/* Audio Trigger Action */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => speakArabic(selectedWord.arabic)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Volume2 className="w-4 h-4 animate-bounce" />
                        <span>Memutar Audio...</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>Dengarkan Pelafalan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Word Selector Chips */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Pilih Kosakata untuk Diuji:
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {mufrodatSamples.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedWord(word);
                        speakArabic(word.arabic);
                      }}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedWord.arabic === word.arabic
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm font-bold"
                          : "bg-white dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700/80 hover:border-blue-400 text-zinc-800 dark:text-zinc-200"
                      }`}
                    >
                      <span className="font-arabic text-sm block" dir="rtl">
                        {word.arabic}
                      </span>
                      <span className="text-[10px] block truncate opacity-80 mt-0.5">
                        {word.meaning}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Arabic Tashkeel / Harakat Stripper Tool (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Unicode Harakat Tool
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  RegEx Engine
                </span>
              </div>

              {/* Text Area Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  Teks Arab (Input / Uji Coba):
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    dir="rtl"
                    value={isStripped ? cleanedText : inputText}
                    onChange={(e) => {
                      setInputText(e.target.value);
                      setIsStripped(false);
                    }}
                    className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/60 font-arabic text-lg leading-relaxed text-zinc-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Ketik teks Arab di sini..."
                  />
                  {isStripped && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      Harakat Dihapus
                    </span>
                  )}
                </div>
              </div>

              {/* Real-time Text Statistics */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 text-center font-mono">
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase">Huruf</p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">{letterCount}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase">Harakat</p>
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{harakatCount}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase">Kepadatan</p>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{harakatRatio}%</p>
                </div>
              </div>

              {/* Tool Actions */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleToggleStrip}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isStripped
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isStripped ? "Kembalikan Harakat" : "Hapus Harakat (Strip)"}</span>
                </button>

                <button
                  onClick={() => handleCopy(isStripped ? cleanedText : inputText)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                  title="Salin hasil ke clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-3">
                Dirancang untuk membantu pendidik bahasa Arab menyiapkan modul ujian qiro&apos;ah tanpa harakat secara instan dalam 1 klik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
