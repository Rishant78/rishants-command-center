import { motion } from "motion/react";
import { CheckCircle2, Loader, Trophy } from "lucide-react";
import { experiences } from "@/data/experience";
import { Section } from "./Section";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      subtitle="Completed engagements across AI, gameplay, and IT operations."
    >
      <ol className="relative space-y-6 border-l border-border pl-5 sm:pl-8">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative p-6 bg-card/45 border border-border rounded-xl transition-all duration-300 hover:border-cyan/35 hover:bg-card/65 shadow-sm sm:p-7"
          >
            <span className="absolute top-8.5 -left-[24px] h-2 w-2 rounded-full bg-cyan sm:-left-[37px] transition-transform group-hover:scale-125" />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-sans text-base font-bold text-foreground sm:text-lg">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-cyan/90">{exp.org}</p>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase">
                {exp.status === "completed" ? (
                  <span className="inline-flex items-center gap-1 border border-cyan-500/25 bg-cyan-500/5 px-2.5 py-0.5 rounded-full text-cyan font-sans tracking-normal font-semibold text-[10px] capitalize">
                    <CheckCircle2 size={11} /> Complete
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 border border-violet-500/25 bg-violet-500/5 px-2.5 py-0.5 rounded-full text-violet font-sans tracking-normal font-semibold text-[10px] capitalize">
                    <Loader size={11} className="animate-spin" /> Active
                  </span>
                )}
                <span className="text-muted-foreground font-sans font-medium lowercase first-letter:uppercase">{exp.duration}</span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.technologies.map((t) => (
                <span
                  key={t}
                  className="border border-border bg-surface-2 px-2 py-0.5 rounded font-mono text-[10px] text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 flex items-start gap-2 border-t border-border pt-3.5 text-sm text-foreground/90 font-medium">
              <Trophy size={14} className="mt-0.5 shrink-0 text-violet" />
              {exp.achievement}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
