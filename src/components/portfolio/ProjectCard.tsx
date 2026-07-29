import { useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { NeonLink } from "./NeonButton";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [shot, setShot] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 6, y: px * 6 });
  };

  const step = (dir: number) =>
    setShot((s) => (s + dir + project.screenshots.length) % project.screenshots.length);

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group glass clip-hud flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-cyan/60 hover:shadow-[var(--glow-cyan)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.screenshots[shot]}
          alt={`${project.title} screenshot ${shot + 1}`}
          loading="lazy"
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

        <a
          href={project.videoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-label={`Play demo video for ${project.title}`}
        >
          <span className="neon-border flex h-14 w-14 items-center justify-center rounded-full bg-background/70 text-cyan">
            <Play size={20} />
          </span>
        </a>

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-cyan uppercase">
            {project.category}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => step(-1)}
              aria-label="Previous screenshot"
              className="border border-border bg-background/70 p-1 text-foreground/80 hover:text-cyan"
            >
              <ChevronLeft size={13} />
            </button>
            <span className="font-mono text-[10px] text-muted-foreground">
              {shot + 1}/{project.screenshots.length}
            </span>
            <button
              onClick={() => step(1)}
              aria-label="Next screenshot"
              className="border border-border bg-background/70 p-1 text-foreground/80 hover:text-cyan"
            >
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-cyan/30 bg-cyan/8 px-2 py-0.5 font-mono text-[10px] text-cyan"
            >
              {t}
            </span>
          ))}
        </div>

        <dl className="mt-5 space-y-3 border-t border-border pt-4 text-sm">
          {[
            ["Challenges", project.challenges],
            ["My Contribution", project.contribution],
            ["Lessons Learned", project.lessons],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="font-mono text-[10px] tracking-[0.2em] text-violet uppercase">
                {label}
              </dt>
              <dd className="mt-1 text-muted-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          <NeonLink
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            variant="ghost"
            size="sm"
          >
            <Github size={12} /> GitHub
          </NeonLink>
          <NeonLink
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            variant="primary"
            size="sm"
          >
            <ExternalLink size={12} /> Live Demo
          </NeonLink>
        </div>
      </div>
    </motion.article>
  );
}
