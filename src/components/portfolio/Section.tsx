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
        <div className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] text-cyan/85 uppercase">
          <span className="h-px w-6 bg-cyan/40" />
          {index} • {title}
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        )}
      </motion.header>
      {children}
    </section>
  );
}
