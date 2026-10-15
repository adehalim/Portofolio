import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TimelineSection } from "@/components/TimelineSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ArabicPlaygroundSection } from "@/components/ArabicPlaygroundSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-600 selection:text-white">
      {/* Scroll Progress Bar at Top Edge */}
      <ScrollProgress />

      {/* Subtle Ambient Mouse Spotlight */}
      <MouseSpotlight />

      {/* Background Grid Pattern */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20 opacity-60"
      />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <ArabicPlaygroundSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
