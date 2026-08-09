import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.35em] text-cyan/80">
          <span className="h-px w-8 bg-cyan/60" />
          {index} // {title.toUpperCase()}
        </div>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          <span className="neon-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        )}
      </motion.header>
      {children}
    </section>
  );
}
