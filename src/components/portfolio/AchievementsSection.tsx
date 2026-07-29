import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Lock } from "lucide-react";
import { achievements, totalXp } from "@/data/achievements";
import { Section } from "./Section";

const rarityStyle: Record<string, string> = {
  common: "border-border text-foreground/80",
  rare: "border-azure/50 text-azure",
  epic: "border-violet/50 text-violet",
  legendary: "border-cyan/60 text-cyan shadow-[var(--glow-cyan)]",
};

function XpCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export function AchievementsSection() {
  return (
    <Section
      id="achievements"
      index="05"
      title="Achievements"
      subtitle="Unlocked milestones and accumulated experience points."
    >
      <div className="glass clip-hud mb-8 flex flex-wrap items-center justify-between gap-4 p-5">
        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Total XP
          </div>
          <div className="font-display text-3xl font-black text-cyan">
            <XpCounter target={totalXp} /> <span className="text-base text-violet">XP</span>
          </div>
        </div>
        <div className="h-2 w-full max-w-md overflow-hidden bg-muted sm:w-1/2">
          <motion.div
            className="h-full"
            style={{ background: "var(--gradient-neon)" }}
            initial={{ width: 0 }}
            whileInView={{ width: "82%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className={`glass clip-hud relative overflow-hidden border p-5 ${rarityStyle[a.rarity]}`}
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sweep bg-gradient-to-r from-transparent via-cyan/12 to-transparent" />
            <div className="flex items-start justify-between gap-3">
              <Trophy size={20} />
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-80">
                {a.rarity}
              </span>
            </div>
            <h3 className="mt-3 font-display text-sm font-bold text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] tracking-[0.2em] uppercase">
              <span className="text-cyan">+{a.xp} XP</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <Lock size={10} className="opacity-0" /> Unlocked
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
