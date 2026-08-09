import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillTree } from "@/data/skills";
import { projects } from "@/data/projects";
import { Section } from "./Section";

const titleOf = (id: string) => projects.find((p) => p.id === id)?.title ?? id;

export function SkillsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section
      id="skills"
      index="04"
      title="Technical Skills"
      subtitle="Hover or focus a node to reveal the projects where it was deployed."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillTree.map((branch, bi) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: bi * 0.05 }}
            className="glass p-5 rounded-2xl border border-border bg-card/45"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              <h3 className="font-sans text-xs font-bold tracking-widest text-foreground uppercase">
                {branch.name}
              </h3>
            </div>

            <ul className="mt-4 space-y-2 border-l border-border pl-4">
              {branch.skills.map((skill) => {
                const key = `${branch.id}-${skill.name}`;
                const open = hovered === key;
                return (
                  <li key={skill.name} className="relative">
                    <span className="absolute top-1/2 -left-4 h-px w-3 bg-border" />
                    <button
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(key)}
                      onBlur={() => setHovered(null)}
                      className={`w-full border rounded-lg px-3.5 py-2 text-left text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                        open
                          ? "border-cyan/40 bg-cyan/10 text-cyan"
                          : "border-border bg-surface-2 text-foreground/80 hover:border-cyan/35 hover:text-cyan"
                      }`}
                    >
                      {skill.name}
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-1.5 border border-violet-500/20 bg-violet-500/5 rounded-lg px-3 py-1.5 font-mono text-[9px] text-violet-400">
                            {skill.projects.length
                              ? skill.projects.map(titleOf).join(" • ")
                              : "No linked project yet"}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
