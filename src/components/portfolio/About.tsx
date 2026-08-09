import { motion } from "motion/react";
import avatar from "@/assets/avatar.jpg";
import { profile } from "@/data/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" title="About" subtitle={profile.tagline}>
      <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ rotateY: 6, rotateX: -4 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          className="glass relative overflow-hidden p-4 rounded-2xl border border-border"
        >
          <img
            src={avatar}
            alt={`Portrait of ${profile.name}`}
            loading="lazy"
            width={768}
            height={960}
            className="rounded-xl aspect-[4/5] w-full object-cover"
          />
          <div className="mt-4 grid grid-cols-2 gap-2">
            {profile.stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-surface-2 p-3 hover:border-cyan/20 transition-colors">
                <div className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                  {s.label}
                </div>
                <div className="mt-1 font-sans text-xs font-bold text-cyan">{s.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass p-6 sm:p-8 rounded-2xl border border-border"
        >
          {profile.about.map((p) => (
            <p key={p} className="mb-4 text-base leading-relaxed text-muted-foreground sm:text-lg font-normal">
              {p}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.focus.map((f) => (
              <span
                key={f}
                className="rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 font-mono text-[10px] tracking-[0.1em] text-violet uppercase"
              >
                {f}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
