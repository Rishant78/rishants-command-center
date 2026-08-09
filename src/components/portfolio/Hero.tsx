import { motion } from "motion/react";
import { Download, Github, Linkedin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { profile } from "@/data/profile";
import { ParticleField } from "./ParticleField";
import { NeonLink, NeonButton } from "./NeonButton";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28 pb-16"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="grid-floor absolute inset-0 opacity-30" />
      <ParticleField density={70} />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1.5 rounded-full font-sans text-[11px] font-medium tracking-wide text-emerald-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl leading-tight font-black sm:text-6xl md:text-7.5xl tracking-tight"
        >
          <span className="neon-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase sm:text-xs"
        >
          {profile.roles.join("  •  ")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <NeonButton size="lg" onClick={() => scrollTo("about")}>
            View My Work
          </NeonButton>
          <NeonLink href={profile.links.resume} download variant="violet" size="lg">
            <Download size={14} /> Download Resume
          </NeonLink>
          <NeonLink
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            variant="ghost"
            size="lg"
          >
            <Github size={14} /> GitHub
          </NeonLink>
          <NeonLink
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            variant="ghost"
            size="lg"
          >
            <Linkedin size={14} /> LinkedIn
          </NeonLink>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 z-10 text-cyan/70 hover:text-cyan"
      >
        <ChevronDown />
      </motion.button>
    </section>
  );
}
