import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Lock } from "lucide-react";
import { achievements, totalXp } from "@/data/achievements";
import { Section } from "./Section";

const rarityStyle: Record<string, string> = {
  common: "border-border/60 text-foreground/80 bg-card/45",
  rare: "border-azure/30 text-azure bg-azure/5",
  epic: "border-violet/30 text-violet bg-violet/5",
  legendary: "border-cyan/35 text-cyan bg-cyan/5",
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
      <div className="glass mb-8 flex flex-wrap items-center justify-between gap-6 p-6 rounded-2xl border border-border bg-card/45">
        <div>
          <div className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase">
            Total XP
          </div>
          <div className="font-sans text-3xl font-black text-cyan mt-1">
            <XpCounter target={totalXp} /> <span className="text-base text-violet font-semibold">XP</span>
          </div>
        </div>
        <div className="h-1.5 w-full max-w-md overflow-hidden bg-muted rounded-full sm:w-1/2">
          <motion.div
            className="h-full rounded-full"
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
            className={`glass relative overflow-hidden border p-6 rounded-2xl transition-all duration-300 hover:border-cyan/35 ${rarityStyle[a.rarity]}`}
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sweep bg-gradient-to-r from-transparent via-cyan/12 to-transparent" />
            <div className="flex items-start justify-between gap-3">
              <Trophy size={18} className="text-muted-foreground" />
              <span className="font-mono text-[9px] tracking-wider uppercase opacity-75">
                {a.rarity}
              </span>
            </div>
            <h3 className="mt-3 font-sans text-sm font-bold text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
            <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3.5 font-mono text-[10px] tracking-wide">
              <span className="text-cyan font-semibold">+{a.xp} XP</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground font-sans font-medium">
                Unlocked
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
