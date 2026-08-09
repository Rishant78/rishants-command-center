import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BootSequence } from "@/components/portfolio/BootSequence";
import { NavBar } from "@/components/portfolio/NavBar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Rishant Kushwaha — Software, AI & Unity Game Engineer";
const DESCRIPTION =
  "Portfolio of Rishant Kushwaha: final-year CSE student in Graphics & Gaming building AI backends, ML analytics, and Unity multiplayer games.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!booted && <BootSequence onDone={() => setBooted(true)} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <NavBar />
        <Hero />
        <About />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </>
  );
}
