import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ExperienceSection } from "@/components/ExperienceSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { SkillsSection } from "@/components/SkillsSection";
import { ExploringSection } from "@/components/ExploringSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <ExperienceSection />
      <JourneyTimeline />
      <SkillsSection />
      <ExploringSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
