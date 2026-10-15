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
  overview?: string;
  architecture?: string[];
  keyChallenges?: string[];
  features?: string[];
  impact?: string[];
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

export interface SkillItem {
  name: string;
  level: string;
  proficiency: number; // 0 - 100
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  context: string;
}

export interface ArabicWisdom {
  arabic: string;
  latin: string;
  translation: string;
  source: string;
}

export interface MufrodatSample {
  arabic: string;
  transliteration: string;
  meaning: string;
  category: string;
  phoneticTip: string;
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
      "Mahasiswa semester 7 Pendidikan Bahasa Arab (Angkatan 2023) di UIN Imam Bonjol Padang yang sedang menuntaskan Praktik Lapangan (PL) di MTsN 2 Solok (Juli — Desember). Menaruh minat besar pada rekayasa web, teknologi edukasi modern, dan pembuatan antarmuka digital yang intuitif.",
    aboutLong: `Saya percaya bahwa pembelajaran bahasa klasik seperti Bahasa Arab dapat menjadi jauh lebih menarik, adaptif, dan inklusif bila diintegrasikan dengan teknologi web modern.

Saat ini saya menempuh semester 7 di Program Studi Pendidikan Bahasa Arab (Angkatan 2023), Fakultas Tarbiyah dan Keguruan, UIN Imam Bonjol Padang, sekaligus menjalankan Praktik Lapangan (PL) periode Juli hingga Desember di MTsN 2 Solok. Di luar ruang kelas akademik, saya aktif mengeksplorasi ekosistem web modern (Next.js, TypeScript, Tailwind CSS) dan mendesain solusi digital yang memecahkan masalah pembelajaran nyata.`,
    email: "adehalim815@gmail.com",
    cvLink: "#resume",
    stats: [
      {
        label: "Semester 7",
        value: "Angkatan '23",
        detail: "PBA UIN IB Padang",
      },
      {
        label: "MTsN 2 Solok",
        value: "Praktik Lapangan",
        detail: "Juli — Desember",
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
      period: "2023 — Sekarang",
      location: "Padang, Sumatera Barat",
      description:
        "Mendalami tata bahasa Arab (Nahwu & Shorof), metodologi pedagogi bahasa asing, pengembangan kurikulum madrasah, serta inovasi media instruksional.",
      highlights: [
        "Mahasiswa Angkatan 2023 yang saat ini aktif menempuh Semester 7",
        "Menjalankan Praktik Lapangan (PL) di MTsN 2 Solok periode Juli — Desember",
        "Fokus riset & studi integrasi teknologi pada pengajaran mufrodat & qawa'id",
        "Aktif dalam kepengurusan ormawa tingkat fakultas dan universitas (DEMA)",
      ],
    },
    {
      institution: "MAN 2 Padang Panjang",
      degree: "Madrasah Aliyah Negeri (MAN) Unggulan",
      period: "2020 — 2023",
      location: "Padang Panjang, Sumatera Barat",
      description:
        "Membangun pondasi literasi bahasa Arab, keilmuan Islam terpadu, dan kepemimpinan organisasi santri madrasah berasrama.",
      highlights: [
        "Penguatan muhadatsah (percakapan Arab harian) & qiro'ah kitab",
        "Terlibat aktif dalam kegiatan ekstrakurikuler dan kepanitiaan santri",
      ],
    },
    {
      institution: "MTsN 6 Model Padang",
      degree: "Madrasah Tsanawiyah Negeri Model",
      period: "2017 — 2020",
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
      period: "2011 — 2017",
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
      role: "Praktik Lapangan (PL) Pendidikan Bahasa Arab",
      organization: "MTsN 2 Solok",
      period: "Juli — Desember (Semester Ganjil)",
      location: "Solok, Sumatera Barat",
      type: "Pengabdian",
      description:
        "Menjalankan Praktik Lapangan (PL) pengajaran bahasa Arab bagi siswa madrasah tsanawiyah selama semester ganjil, menyusun modul ajar & rencana pelaksanaan pembelajaran (RPP), serta menerapkan media pembelajaran digital interaktif.",
      achievements: [
        "Mengembangkan materi latihan kosakata interaktif yang meningkatkan antusiasme siswa di kelas",
        "Membimbing siswa dalam penguasaan pelafalan (makharijul huruf) dan tata bahasa praktis",
        "Berkolaborasi dengan guru pamong dalam evaluasi formatif berbasis teknologi",
      ],
    },
    {
      role: "Pengurus Dewan Eksekutif Mahasiswa (DEMA)",
      organization: "DEMA UIN Imam Bonjol Padang",
      period: "2024 — 2025 (Semester 4 — 5)",
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
      period: "2023 — Sekarang",
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
        { name: "TypeScript", level: "Intermediet", proficiency: 82, highlight: true },
        { name: "React / Next.js", level: "Intermediet", proficiency: 85, highlight: true },
        { name: "Tailwind CSS v4", level: "Mahir", proficiency: 92, highlight: true },
        { name: "JavaScript (ES6+)", level: "Intermediet", proficiency: 86 },
        { name: "HTML5 Semantic UI", level: "Mahir", proficiency: 94 },
        { name: "Responsive & Mobile UI", level: "Mahir", proficiency: 90 },
      ],
    },
    {
      title: "Pendidikan & Bahasa Arab",
      icon: "BookOpenCheck",
      description: "Keahlian pedagogis dan pemahaman mendalam struktur bahasa Arab.",
      skills: [
        { name: "Nahwu & Shorof (Tata Bahasa)", level: "Akademik Lanjut", proficiency: 90, highlight: true },
        { name: "Desain Media Pembelajaran", level: "Praktisi", proficiency: 88, highlight: true },
        { name: "Penyusunan RPP & Modul", level: "Praktisi", proficiency: 87 },
        { name: "Muhadatsah & Qiro'ah", level: "Fasih", proficiency: 85 },
        { name: "Makharijul Huruf & Fonetik", level: "Mahir", proficiency: 88 },
        { name: "Public Speaking & Edukasi", level: "Intermediet", proficiency: 80 },
      ],
    },
    {
      title: "Tools & Ekosistem Kerja",
      icon: "Wrench",
      description: "Perangkat lunak penunjang produktivitas, kolaborasi, dan desain visual.",
      skills: [
        { name: "Git & GitHub Workflow", level: "Version Control", proficiency: 84, highlight: true },
        { name: "VS Code / IDE", level: "Daily Driver", proficiency: 92 },
        { name: "Figma (UI/UX Draft)", level: "Desain Antarmuka", proficiency: 78, highlight: true },
        { name: "Notion & Research Docs", level: "Manajemen Riset", proficiency: 85 },
        { name: "Canva Pro", level: "Grafis & Presentasi", proficiency: 88 },
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
        "Siswa di madrasah sering merasa jenuh menghafal deretan kosakata dari buku teks hitam-putih konvensional tanpa panduan audio pelafalan asli dan tanpa latihan yang memikat.",
      solution:
        "Membangun web app interaktif dengan kartu kosakata tematik, pemutar suara makhraj, kuis gamifikasi mini, dan penanda progres belajar siswa secara visual.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API", "Lucide React"],
      liveUrl: "https://github.com/adehalim",
      githubUrl: "https://github.com/adehalim",
      featured: true,
      metrics: "Telah diujicobakan pada siswa MTsN 2 Solok",
      overview:
        "Mufrodat Explorer menggabungkan teori pedagogi bahasa asing (metode asosiasi visual-auditori) dengan rekayasa antarmuka web modern untuk menciptakan pengalaman menghafal kosakata yang adiktif dan ramah anak.",
      architecture: [
        "Client-side State Management untuk mencatat streak dan penguasaan kartu mufrodat",
        "Web Audio Synthesis & Audio Caching untuk pelafalan makhraj huruf yang presisi",
        "Komponen kartu flip 3D dengan CSS transform hardware-accelerated",
        "Algoritma Spaced Repetition mini untuk memprioritaskan kosakata yang belum dikuasai",
      ],
      keyChallenges: [
        "Menjamin tata letak teks Arab (RTL) tidak bergeser saat digabung dengan teks terjemahan bahasa Indonesia",
        "Mengoptimalkan latensi audio pelafalan di perangkat smartphone spesifikasi standar sekolah",
      ],
      features: [
        "Flashcard Kosakata Tematik (Madrasah, Rumah Tangga, Alam, Teknologi)",
        "Audio Makharijul Huruf dengan tombol dengar instan",
        "Mode Kuis Kilat (Tebak Arti & Tebak Kata Arab)",
        "Pencatat Skor & Streak Harian",
      ],
      impact: [
        "Meningkatkan partisipasi aktif siswa di ruang kelas MTsN 2 Solok",
        "Menjadi portofolio percontohan media pembelajaran digital di lingkungan PBA UIN IB",
      ],
    },
    {
      id: "portal-dema",
      title: "Portal Informasi Ormawa & DEMA",
      tagline: "Sentralisasi Informasi & Pendaftaran Kegiatan Mahasiswa",
      category: "Web App",
      description:
        "Platform sistem informasi kemahasiswaan satu pintu untuk mengelola kalender kegiatan, formulir pendaftaran acara, dan transparansi arsip ormawa.",
      problem:
        "Publikasi kegiatan ormawa sering berserakan di grup WhatsApp dan poster Instagram yang hilang ditimpa algoritma feed, menyebabkan informasi penting kerap terlewat oleh mahasiswa.",
      solution:
        "Merancang antarmuka satu pintu (single-hub) yang menampilkan timeline event aktif, formulir registrasi digital terverifikasi, serta transparansi agenda DEMA.",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      liveUrl: "https://github.com/adehalim",
      githubUrl: "https://github.com/adehalim",
      featured: true,
      metrics: "Memangkas waktu koordinasi info acara hingga 50%",
      overview:
        "Proyek ini berangkat dari pengalaman langsung sebagai pengurus DEMA UIN Imam Bonjol yang merasakan hambatan komunikasi birokrasi dan sebaran info kegiatan mahasiswa.",
      architecture: [
        "Responsive Event Feed dengan filter kategori (Seminar, Festival, Advokasi, Lomba)",
        "Modal dialog registrasi cepat dengan validasi form berbasis TypeScript",
        "Timeline tracker tahapan agenda kemahasiswaan secara real-time",
        "Arsip digital publikasi dan pengumuman resmi kampus",
      ],
      keyChallenges: [
        "Mendesain hierarki visual yang tetap bersih meski memuat banyak informasi teks agenda",
        "Menjaga performa loading cepat pada koneksi internet seluler di area kampus",
      ],
      features: [
        "Kalender Agenda Ormawa terintegrasi",
        "Formulir Pendaftaran Acara Digital instan",
        "Status Verifikasi Peserta & Tiket Digital",
        "Pusat Unduhan Surat & Panduan Resmi DEMA",
      ],
      impact: [
        "Mengeliminasi kebingungan mahasiswa mencari tautan pendaftaran",
        "Meningkatkan efisiensi kerja tim publikasi dan dokumentasi ormawa",
      ],
    },
    {
      id: "kalam-tech-sandbox",
      title: "Kalam Tech Sandbox",
      tagline: "Arabic Web Typography & Interactive Transliteration Tools",
      category: "Tools",
      description:
        "Koleksi utilitas berbasis web untuk manipulasi teks bahasa Arab: pembersih harakat otomatis, penghitung kepadatan vokal, dan konverter transliterasi standar ke aksara Arab.",
      problem:
        "Pendidik dan mahasiswa kerap membutuhkan alat konversi cepat di peramban yang mendukung tata letak teks kanan-ke-kiri (RTL) secara sempurna tanpa gangguan reload halaman.",
      solution:
        "Menyediakan utilitas ringan dengan antarmuka responsif tanpa reload, memungkinkan salin instan, pembersihan format harakat otomatis, dan analisis fonetik dasar.",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Regular Expressions Unicode", "Web API"],
      liveUrl: "https://github.com/adehalim",
      githubUrl: "https://github.com/adehalim",
      featured: true,
      metrics: "Mendukung input RTL responsif & instan copy 1-klik",
      overview:
        "Eksplorasi mendalam perlakuan Unicode karakter Arab (U+0600 hingga U+06FF) dalam peramban web modern, memastikan pemisahan tanda baca dan diakritik harakat secara matematis tepat.",
      architecture: [
        "Unicode Tashkeel Stripper berbasis RegEx kompilasi efisien",
        "Kalkulator statistik rasio harakat terhadap konsonan",
        "Dukungan dynamic text direction detection (LTR/RTL switch otomatis)",
        "Clipboard API integration dengan visual feedback instan",
      ],
      keyChallenges: [
        "Menangani ligatur tulisan Arab klasik tanpa merusak rendering font browser",
        "Memastikan performa pembersihan teks tetap 60fps untuk dokumen teks panjang",
      ],
      features: [
        "1-Click Strip Harakat (Tashkeel Remover)",
        "Penghitung Huruf & Harakat Real-time",
        "Papan Uji Tipografi Arab (Amiri, Noto Naskh, Scheherazade)",
        "Salin Teks Bersih dalam hitungan milidetik",
      ],
      impact: [
        "Membantu mahasiswa PBA mempercepat penyiapan modul ajar tanpa harakat",
        "Menjadi modul dasar untuk integrasi platform pembelajaran bahasa Arab yang lebih besar",
      ],
    },
  ] as Project[],

  testimonials: [
    {
      quote:
        "Pendekatan Halim dalam menyisipkan media digital dan interaktivitas visual ke dalam kelas pengajaran bahasa Arab membawa suasana belajar yang jauh lebih hidup dan diminati oleh siswa madrasah kami.",
      author: "Pendidik & Pembimbing Lapangan",
      role: "Keluarga Besar MTsN 2 Solok",
      organization: "MTsN 2 Solok",
      context: "Praktik Lapangan (PL) Semester Ganjil",
    },
    {
      quote:
        "Halim adalah rekan kerja yang solutif, teliti dalam menyusun kepanitiaan, dan selalu membawa perspektif teknologi baru yang membuat koordinasi tim organisasi menjadi jauh lebih efektif.",
      author: "Rekan Pengurus DEMA",
      role: "Dewan Eksekutif Mahasiswa",
      organization: "UIN Imam Bonjol Padang",
      context: "Kepengurusan DEMA Periode Semester 4-5",
    },
    {
      quote:
        "Dedikasinya dalam memadukan keilmuan bahasa Arab dengan keterampilan rekayasa digital menunjukkan profil lulusan madrasah & universitas Islam masa depan yang adaptif terhadap zaman.",
      author: "Rekan Mahasiswa & Peneliti",
      role: "Fakultas Tarbiyah dan Keguruan",
      organization: "UIN Imam Bonjol Padang",
      context: "Kolaborasi Akademik & Riset Media",
    },
  ] as TestimonialItem[],

  arabicWisdoms: [
    {
      arabic: "مَنْ سَارَ عَلَى الدَّرْبِ وَصَلَ",
      latin: "Man saara 'alad-darbi washala",
      translation: "Barangsiapa berjalan pada jalurnya, niscaya ia akan sampai pada tujuannya.",
      source: "Mahfuzhat Populer",
    },
    {
      arabic: "العِلْمُ بِلَا عَمَلٍ كَالشَّجَرِ بِلَا ثَمَرٍ",
      latin: "Al-'ilmu bilaa 'amalin kasy-syajari bilaa tsamarin",
      translation: "Ilmu tanpa pengamalan bagaikan pohon rindang yang tidak berbuah.",
      source: "Kata Mutiara Arab",
    },
    {
      arabic: "تَعَلَّمْ فَإِنَّ المَرْءَ لَا يُولَدُ عَالِمًا",
      latin: "Ta'allam fa-innal-mar'a laa yuuladu 'aaliman",
      translation: "Belajarlah, karena sungguh tidak ada manusia yang terlahir langsung serba tahu.",
      source: "Sya'ir Imam Asy-Syafi'i",
    },
    {
      arabic: "جَرِّبْ وَلَاحِظْ تَكُنْ عَارِفًا",
      latin: "Jarrib wa laahidz takun 'aarifan",
      translation: "Cobalah dan amatilah, niscaya engkau akan menjadi orang yang mengerti.",
      source: "Prinsip Eksplorasi Keilmuan",
    },
    {
      arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
      latin: "Khairun-naasi anfa'uhum lin-naas",
      translation: "Sebaik-baik manusia adalah yang paling banyak memberi manfaat bagi sesama.",
      source: "Hadits Riwayat Thabrani",
    },
  ] as ArabicWisdom[],

  mufrodatSamples: [
    {
      arabic: "كِتَابٌ",
      transliteration: "Kitaabun",
      meaning: "Buku / Kitab",
      category: "Peralatan Belajar",
      phoneticTip: "Makhraj Kaaf dari pangkal lidah, Baa dengan merapatkan dua bibir.",
    },
    {
      arabic: "مَدْرَسَةٌ",
      transliteration: "Madrasatun",
      meaning: "Sekolah / Madrasah",
      category: "Tempat Belajar",
      phoneticTip: "Makhraj Dal dengan ujung lidah menyentuh pangkal gigi seri atas.",
    },
    {
      arabic: "قَلَمٌ",
      transliteration: "Qalamun",
      meaning: "Pena / Pulpen",
      category: "Peralatan Belajar",
      phoneticTip: "Makhraj Qaaf dari pangkal lidah mendekati anak tekak (uvula).",
    },
    {
      arabic: "عِلْمٌ",
      transliteration: "'Ilmun",
      meaning: "Ilmu Pengetahuan",
      category: "Konsep Dasar",
      phoneticTip: "Makhraj 'Ain keluar dari tengah tenggorokan (wasathul halq).",
    },
    {
      arabic: "حَاسُوبٌ",
      transliteration: "Haasuubun",
      meaning: "Komputer / Laptop",
      category: "Teknologi Modern",
      phoneticTip: "Makhraj Haa halus keluar dari tengah tenggorokan.",
    },
    {
      arabic: "مُعَلِّمٌ",
      transliteration: "Mu'allimun",
      meaning: "Guru / Pendidik",
      category: "Profesi Edukasi",
      phoneticTip: "Tasydid pada Lam diucapkan dengan penekanan sejenak yang proporsional.",
    },
  ] as MufrodatSample[],
};
