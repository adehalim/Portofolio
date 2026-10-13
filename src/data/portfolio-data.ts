export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "EdTech" | "Web App" | "Tools";
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Pengabdian" | "Organisasi" | "Kepanitiaan";
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: string; icon?: string }[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  context: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Ade Halim Alfajri",
    nickname: "Halim",
    title: "Mahasiswa Pendidikan Bahasa Arab & EdTech Explorer",
    positioning: "Bridging Arabic Pedagogy with Modern Web Engineering",
    domicile: "Padang, Sumatera Barat, Indonesia",
    statusBadge: "Active • Open for Collaboration & EdTech Projects",
    arabicQuote: "العِلْمُ بِالتَّعَلُّمِ وَالإِبْدَاعُ بِالتَّطْبِيقِ",
    arabicTranslation: "Ilmu diraih dengan belajar, dan kreativitas lahir dari penerapan nyata.",
    shortBio:
      "Mahasiswa semester 7 Pendidikan Bahasa Arab di UIN Imam Bonjol Padang yang sedang mengabdi di MTsN 2 Solok. Menaruh minat besar pada rekayasa web, teknologi edukasi modern, dan pembuatan antarmuka digital yang intuitif.",
    aboutLong: `Saya percaya bahwa pembelajaran bahasa klasik seperti Bahasa Arab dapat menjadi jauh lebih menarik, adaptif, dan inklusif bila diintegrasikan dengan teknologi web modern.

Saat ini saya menempuh semester 7 di Program Studi Pendidikan Bahasa Arab, Fakultas Tarbiyah dan Keguruan, UIN Imam Bonjol Padang, sekaligus menjalankan pengabdian pengajaran di MTsN 2 Solok. Di luar ruang kelas akademik, saya aktif mengeksplorasi ekosistem web modern (Next.js, TypeScript, Tailwind CSS) dan mendesain solusi digital yang memecahkan masalah pembelajaran nyata.`,
    email: "adehalim815@gmail.com",
    cvLink: "#contact", // Bisa diupdate dengan link file PDF
    stats: [
      {
        label: "Semester 7",
        value: "UIN IB Padang",
        detail: "Pendidikan Bahasa Arab",
      },
      {
        label: "MTsN 2 Solok",
        value: "Pengabdian",
        detail: "Praktik Pengajaran Nyata",
      },
      {
        label: "DEMA Kampus",
        value: "1+ Tahun",
        detail: "Pengurus & Manajerial Organisasi",
      },
      {
        label: "Tech Stack",
        value: "Modern Web",
        detail: "Next.js, TS, Tailwind CSS",
      },
    ],
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/adehalim",
      handle: "@adehalim",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ade-halim-937ab8279/",
      handle: "Ade Halim",
      icon: "Linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aadehalim/",
      handle: "@aadehalim",
      icon: "Instagram",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/aadehalim_",
      handle: "@aadehalim_",
      icon: "Twitter",
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@aadehalim?hl=id",
      handle: "@aadehalim",
      icon: "AtSign",
    },
  ],

  education: [
    {
      institution: "UIN Imam Bonjol Padang",
      degree: "S1 Pendidikan Bahasa Arab (Semester 7)",
      period: "2021 — Sekarang",
      location: "Padang, Sumatera Barat",
      description:
        "Mendalami tata bahasa Arab (Nahwu & Shorof), metodologi pedagogi bahasa asing, pengembangan kurikulum madrasah, serta inovasi media instruksional.",
      highlights: [
        "Fokus studi integrasi teknologi pada pengajaran mufrodat & qawa'id",
        "Aktif dalam kepengurusan ormawa tingkat fakultas dan universitas",
        "Sedang menyelesaikan program praktik pengabdian lapangan (PPL)",
      ],
    },
    {
      institution: "MAN 2 Padang Panjang",
      degree: "Madrasah Aliyah Negeri (MAN) Unggulan",
      period: "2018 — 2021",
      location: "Padang Panjang, Sumatera Barat",
      description:
        "Membangun pondasi literasi bahasa Arab, keilmuan Islam terpadu, dan kepemimpinan organisasi santri madrasah berasrama.",
      highlights: [
        "Penguatan muhadatsah (percakapan Arab harian) & qiro'ah",
        "Terlibat aktif dalam kegiatan ekstrakurikuler dan kepanitiaan santri",
      ],
    },
    {
      institution: "MTsN 6 Model Padang",
      degree: "Madrasah Tsanawiyah Negeri Model",
      period: "2015 — 2018",
      location: "Padang, Sumatera Barat",
      description:
        "Menempa minat awal terhadap sains, teknologi komputer dasar, dan pengenalan kaidah dasar bahasa Arab.",
      highlights: [
        "Aktivitas kepramukaan dan forum keilmuan madrasah",
        "Dasar-dasar teknologi informasi dan komunikasi",
      ],
    },
    {
      institution: "SDN 26 ATT Padang",
      degree: "Sekolah Dasar Negeri",
      period: "2009 — 2015",
      location: "Padang, Sumatera Barat",
      description:
        "Pondasi pendidikan dasar karakter, literasi, dan kepemimpinan awal.",
      highlights: [
        "Prestasi akademik sekolah dasar",
        "Partisipasi aktif dalam kegiatan sosial sekolah",
      ],
    },
  ] as EducationItem[],

  experience: [
    {
      role: "Praktik Pengabdian & Pendidik Lapangan",
      organization: "MTsN 2 Solok",
      period: "2024 — Sekarang",
      location: "Solok, Sumatera Barat",
      type: "Pengabdian",
      description:
        "Menjalankan pengabdian pengajaran bahasa Arab bagi siswa madrasah tsanawiyah, merancang rencana pelaksanaan pembelajaran (RPP), serta menerapkan media pembelajaran digital interaktif.",
      achievements: [
        "Mengembangkan materi latihan kosakata interaktif yang meningkatkan antusiasme siswa di kelas",
        "Membimbing siswa dalam penguasaan pelafalan (makharijul huruf) dan tata bahasa praktis",
        "Berkolaborasi dengan guru pamong dalam evaluasi formatif berbasis teknologi",
      ],
    },
    {
      role: "Pengurus Dewan Eksekutif Mahasiswa (DEMA)",
      organization: "DEMA UIN Imam Bonjol Padang",
      period: "Semester 4 — 5 (2023 — 2024)",
      location: "Padang, Sumatera Barat",
      type: "Organisasi",
      description:
        "Menjalankan amanah dalam lembaga eksekutif tertinggi mahasiswa, mengoordinasikan aspirasi antar program studi, dan memfasilitasi komunikasi digital kegiatan kemahasiswaan.",
      achievements: [
        "Mengelola alur informasi kegiatan ormawa melalui media sosial & kanal resmi",
        "Terlibat dalam perumusan kebijakan serta advokasi fasilitas akademik mahasiswa",
        "Membangun jejaring kolaborasi lintas fakultas dan pimpinan universitas",
      ],
    },
    {
      role: "Koordinator & Tim Kepanitiaan Kampus",
      organization: "Berbagai Kepanitiaan Event UIN Imam Bonjol",
      period: "2021 — Sekarang",
      location: "Padang, Sumatera Barat",
      type: "Kepanitiaan",
      description:
        "Berpartisipasi aktif dalam berbagai kepanitiaan seminar nasional, festival kebahasaan, masa orientasi kampus (PBAK), dan lokakarya kemahasiswaan.",
      achievements: [
        "Memastikan kelancaran logistik, teknis audio-visual, dan publikasi event kampus",
        "Mendapat apresiasi atas kedisiplinan dan koordinasi kerja tim yang tanggap",
      ],
    },
  ] as ExperienceItem[],

  skills: [
    {
      title: "Web & Engineering",
      icon: "Code2",
      description: "Fondasi pengembangan antarmuka modern yang cepat, rapi, dan responsif.",
      skills: [
        { name: "TypeScript", level: "Intermediet" },
        { name: "React / Next.js", level: "Intermediet" },
        { name: "Tailwind CSS", level: "Mahir" },
        { name: "JavaScript (ES6+)", level: "Intermediet" },
        { name: "HTML5 & Semantic UI", level: "Mahir" },
        { name: "Responsive Layouts", level: "Mahir" },
      ],
    },
    {
      title: "Pendidikan & Bahasa Arab",
      icon: "BookOpenCheck",
      description: "Keahlian pedagogis dan pemahaman mendalam struktur bahasa Arab.",
      skills: [
        { name: "Nahwu & Shorof (Grammar)", level: "Akademik Lanjut" },
        { name: "Desain Media Pembelajaran", level: "Praktisi" },
        { name: "Penyusunan RPP & Modul", level: "Praktisi" },
        { name: "Muhadatsah & Qiro'ah", level: "Fasih" },
        { name: "Public Speaking & Edukasi", level: "Intermediet" },
      ],
    },
    {
      title: "Tools & Ekosistem Kerja",
      icon: "Wrench",
      description: "Perangkat lunak penunjang produktivitas, kolaborasi, dan desain visual.",
      skills: [
        { name: "Git & GitHub", level: "Version Control" },
        { name: "VS Code", level: "Daily Driver" },
        { name: "Figma (UI/UX Draft)", level: "Desain Antarmuka" },
        { name: "Notion & Docs", level: "Manajemen Riset" },
        { name: "Canva Pro", level: "Grafis & Presentasi" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "mufrodat-explorer",
      title: "Mufrodat Explorer",
      tagline: "Media Pembelajaran Interaktif Kosakata Bahasa Arab",
      category: "EdTech",
      description:
        "Platform web instruksional yang didesain untuk menjembatani kesulitan siswa madrasah dalam menghafal mufrodat melalui pendekatan visual dan audio real-time.",
      problem:
        "Siswa di madrasah sering merasa jenuh menghafal deretan kosakata dari buku teks hitam-putih konvensional tanpa panduan audio pelafalan asli.",
      solution:
        "Membangun web app interaktif dengan kartu kosakata tematik, pemutar suara makhraj, kuis gamifikasi mini, dan penanda progres belajar siswa.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API"],
      liveUrl: "https://github.com/adehalim",
      githubUrl: "https://github.com/adehalim",
      featured: true,
      metrics: "Diuji coba di lingkungan belajar santri & siswa madrasah",
    },
    {
      id: "portal-dema",
      title: "Portal Informasi Ormawa & DEMA",
      tagline: "Sentralisasi Informasi & Pendaftaran Kegiatan Mahasiswa",
      category: "Web App",
      description:
        "Platform prototipe sistem informasi kemahasiswaan untuk mengelola kalender kegiatan, formulir pendaftaran acara, dan arsip dokumen resmi.",
      problem:
        "Publikasi kegiatan organisasi sering berserakan di grup WhatsApp dan Instagram, menyebabkan informasi penting sering terlewat oleh mahasiswa.",
      solution:
        "Merancang antarmuka satu pintu (single-hub) yang menampilkan timeline event aktif, tombol registrasi terverifikasi, serta transparansi agenda DEMA.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Lucide Icons"],
      liveUrl: "https://github.com/adehalim",
      githubUrl: "https://github.com/adehalim",
      featured: true,
      metrics: "Memangkas waktu koordinasi info acara hingga 50%",
    },
    {
      id: "kalam-tech-sandbox",
      title: "Kalam Tech Sandbox",
      tagline: "Arabic Web Typography & Interactive Transliteration Tools",
      category: "Tools",
      description:
        "Koleksi alat bantu berbasis web untuk memproses teks bahasa Arab, penghitung harakat otomatis, dan konverter transliterasi standar ke aksara Arab.",
      problem:
        "Pendidik dan mahasiswa kerap membutuhkan alat konversi cepat di peramban yang mendukung tata letak teks kanan-ke-kiri (RTL) secara sempurna.",
      solution:
        "Menyediakan utilitas ringan dengan antarmuka responsif tanpa reload, memungkinkan salin instan dan pembersihan format harakat otomatis.",
      techStack: ["TypeScript", "Tailwind CSS", "Regular Expressions", "Next.js"],
      liveUrl: "https://github.com/adehalim",
      githubUrl: "https://github.com/adehalim",
      featured: true,
      metrics: "Mendukung input RTL responsif & instan copy",
    },
  ] as Project[],

  testimonials: [
    {
      quote:
        "Pendekatan Halim dalam menyisipkan media digital dan interaktivitas visual ke dalam kelas pengajaran bahasa Arab membawa suasana belajar yang jauh lebih hidup dan diminati oleh siswa madrasah kami.",
      author: "Pendidik & Pembimbing Lapangan",
      role: "Keluarga Besar MTsN 2 Solok",
      organization: "MTsN 2 Solok",
      context: "Pengabdian & PPL Semester 7",
    },
    {
      quote:
        "Halim adalah rekan kerja yang solutif, teliti dalam menyusun kepanitiaan, dan selalu membawa perspektif teknologi baru yang membuat koordinasi tim organisasi menjadi jauh lebih efektif.",
      author: "Rekan Pengurus DEMA",
      role: "Dewan Eksekutif Mahasiswa",
      organization: "UIN Imam Bonjol Padang",
      context: "Kepengurusan Periode Semester 4-5",
    },
  ] as TestimonialItem[],
};
