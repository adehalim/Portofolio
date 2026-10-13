import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ade Halim Alfajri | Portfolio & EdTech Explorer",
  description:
    "Portofolio Ade Halim Alfajri (Halim) — Mahasiswa Pendidikan Bahasa Arab di UIN Imam Bonjol Padang & Pegiat Eksplorasi Web Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${plusJakarta.variable} ${amiri.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
