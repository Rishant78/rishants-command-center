import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./Section";
import { NeonLink } from "./NeonButton";

export function ResumeSection() {
  return (
    <Section
      id="resume"
      index="06"
      title="Resume"
      subtitle="Full dossier available for download or inline review."
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden p-6 sm:p-10 rounded-2xl border border-border bg-card/45"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="font-mono text-[9px] tracking-[0.2em] text-cyan uppercase">
              Credentials // {profile.name}
            </div>

            <h3 className="mt-3 font-sans text-2xl font-bold text-foreground">
              Curriculum Vitae
            </h3>

            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base leading-relaxed">
              My resume is available for download or inline review, including
              my education, technical skills, projects, and experience.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-surface-2 p-3.5 hover:border-cyan/20 transition-colors"
                >
                  <dt className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                    {s.label}
                  </dt>

                  <dd className="mt-1 font-sans text-xs font-bold text-cyan">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-3">
            <NeonLink
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
            >
              <Download size={14} />
              Download Resume
            </NeonLink>

            <NeonLink
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer noopener"
              variant="violet"
              size="lg"
            >
              <FileText size={14} />
              View Resume
            </NeonLink>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}