import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://adehalim.vercel.app"),
  title: {
    default: "Ade Halim Alfajri | Portfolio & EdTech Explorer",
    template: "%s | Ade Halim Alfajri",
  },
  description:
    "Portofolio resmi Ade Halim Alfajri (Halim) — Mahasiswa Pendidikan Bahasa Arab (Semester 7) di UIN Imam Bonjol Padang & Praktisi Lapangan di MTsN 2 Solok. Menjembatani pedagogi bahasa Arab dengan rekayasa web modern.",
  keywords: [
    "Ade Halim Alfajri",
    "Halim",
    "Pendidikan Bahasa Arab",
    "PBA UIN Imam Bonjol",
    "MTsN 2 Solok",
    "EdTech Arabic",
    "Media Pembelajaran Bahasa Arab",
    "Next.js Portfolio",
    "Frontend Developer Padang",
    "Arabic NLP Web",
  ],
  authors: [{ name: "Ade Halim Alfajri", url: "https://github.com/adehalim" }],
  creator: "Ade Halim Alfajri",
  publisher: "Ade Halim Alfajri",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://adehalim.vercel.app",
    title: "Ade Halim Alfajri | Portfolio & EdTech Explorer",
    description:
      "Bridging Arabic Pedagogy with Modern Web Engineering. Mahasiswa PBA UIN Imam Bonjol & Pendidik Lapangan MTsN 2 Solok.",
    siteName: "Ade Halim Alfajri Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ade Halim Alfajri | Portfolio & EdTech Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ade Halim Alfajri | Portfolio & EdTech Explorer",
    description:
      "Bridging Arabic Pedagogy with Modern Web Engineering. Eksplorasi ekosistem Next.js dan media pembelajaran interaktif.",
    creator: "@aadehalim_",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://adehalim.vercel.app/#person",
      name: "Ade Halim Alfajri",
      alternateName: ["Halim", "aadehalim"],
      url: "https://adehalim.vercel.app",
      jobTitle: "Mahasiswa Pendidikan Bahasa Arab & EdTech Explorer",
      description:
        "Mahasiswa semester 7 Pendidikan Bahasa Arab UIN Imam Bonjol Padang & pendidik lapangan MTsN 2 Solok yang mendalami rekayasa web modern.",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "UIN Imam Bonjol Padang",
        },
        {
          "@type": "EducationalOrganization",
          name: "MAN 2 Padang Panjang",
        },
      ],
      email: "adehalim815@gmail.com",
      sameAs: [
        "https://github.com/adehalim",
        "https://www.linkedin.com/in/ade-halim-937ab8279/",
        "https://www.instagram.com/aadehalim/",
        "https://x.com/aadehalim_",
        "https://www.threads.com/@aadehalim?hl=id",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://adehalim.vercel.app/#website",
      url: "https://adehalim.vercel.app",
      name: "Ade Halim Alfajri Portfolio",
      publisher: {
        "@id": "https://adehalim.vercel.app/#person",
      },
      inLanguage: "id-ID",
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
