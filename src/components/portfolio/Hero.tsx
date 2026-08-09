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
          className="inline-flex items-center gap-2 border border-cyan/40 bg-cyan/10 px-4 py-1.5 font-mono text-[10px] tracking-[0.3em] text-cyan uppercase"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan" />
          System Online
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl leading-tight font-black sm:text-6xl md:text-7xl"
        >
          <span className="neon-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase sm:text-sm"
        >
          {profile.roles.join(" • ")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <NeonButton size="lg" onClick={() => scrollTo("about")}>
            Enter Portfolio
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
