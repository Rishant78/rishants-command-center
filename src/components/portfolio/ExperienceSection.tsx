import { motion } from "motion/react";
import { CheckCircle2, Loader, Trophy } from "lucide-react";
import { experiences } from "@/data/experience";
import { Section } from "./Section";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="02"
      title="Missions"
      subtitle="Completed deployments across AI, gameplay, and IT operations."
    >
      <ol className="relative space-y-5 border-l border-border pl-5 sm:pl-8">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group glass clip-hud relative p-5 transition-all duration-300 hover:border-cyan/50 sm:p-6"
          >
            <span className="absolute top-8 -left-[26px] h-2.5 w-2.5 rotate-45 bg-cyan shadow-[var(--glow-cyan)] sm:-left-[38px]" />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-cyan/90">{exp.org}</p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                {exp.status === "completed" ? (
                  <span className="inline-flex items-center gap-1.5 border border-cyan/40 bg-cyan/10 px-2 py-1 text-cyan">
                    <CheckCircle2 size={11} /> Complete
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 border border-violet/40 bg-violet/10 px-2 py-1 text-violet">
                    <Loader size={11} className="animate-spin" /> Active
                  </span>
                )}
                <span className="text-muted-foreground">{exp.duration}</span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.technologies.map((t) => (
                <span
                  key={t}
                  className="border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 flex items-start gap-2 border-t border-border pt-3 text-sm text-foreground/90">
              <Trophy size={14} className="mt-0.5 shrink-0 text-violet" />
              {exp.achievement}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
