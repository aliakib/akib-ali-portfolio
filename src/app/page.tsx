import { Hero } from "@/components/Hero";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExploringSection } from "@/components/ExploringSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <JourneyTimeline />
      <FeaturedProjects />
      <ExperienceSection />
      <SkillsSection />
      <ExploringSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
