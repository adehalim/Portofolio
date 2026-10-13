"use client";

import { Check, X } from "lucide-react";

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Toast({ message, isOpen, onClose }: ToastProps) {
  if (!isOpen) return null;

  return (
    <aside
      aria-label="Notifikasi sistem"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-2xl border border-zinc-800 dark:border-zinc-200 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 dark:text-emerald-600 flex items-center justify-center shrink-0">
        <Check className="w-3.5 h-3.5" />
      </div>
      <p className="text-sm font-medium pr-2">{message}</p>
      <button
        onClick={onClose}
        aria-label="Tutup notifikasi"
        className="p-1 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-100 text-zinc-400 dark:text-zinc-500 transition-colors cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
