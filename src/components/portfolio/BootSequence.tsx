import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LINES = [
  "Initializing Portfolio...",
  "Loading AI Models...",
  "Compiling Projects...",
  "Connecting to Backend...",
  "Welcome Recruiter.",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= LINES.length) {
      const t = setTimeout(onDone, 700);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), step === LINES.length - 1 ? 900 : 620);
    return () => clearTimeout(t);
  }, [step, onDone]);

  const progress = Math.min(100, Math.round((step / LINES.length) * 100));

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-background px-6"
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid-floor pointer-events-none absolute inset-0 opacity-40" />
      <div className="scanlines relative w-full max-w-lg">
        <div className="font-mono text-xs tracking-[0.4em] text-cyan/70">SYSTEM BOOT</div>
        <ul className="mt-6 space-y-3 font-mono text-sm sm:text-base">
          <AnimatePresence>
            {LINES.slice(0, step).map((line, i) => (
              <motion.li
                key={line}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className={
                  i === LINES.length - 1
                    ? "font-semibold text-cyan"
                    : "text-muted-foreground"
                }
              >
                <span className="text-violet">&gt;</span> {line}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <div className="mt-8 h-1 w-full overflow-hidden bg-muted">
          <motion.div
            className="h-full"
            style={{ background: "var(--gradient-neon)" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] tracking-widest text-muted-foreground">
          <span>LOADING ASSETS</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
