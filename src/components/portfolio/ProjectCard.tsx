import { useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { NeonLink } from "./NeonButton";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: -py * 6,
      y: px * 6,
    });
  };

  // Convert Google Drive file links into embeddable preview links
  const getVideoUrl = (url: string) => {
    const match = url.match(/\/file\/d\/([^/]+)/);

    if (match?.[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }

    return url;
  };

  const isGame = project.category.includes("Unity");

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 2) * 0.08,
      }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group glass flex flex-col overflow-hidden rounded-2xl transition-[border-color,box-shadow,transform] duration-300 hover:border-cyan/35 hover:shadow-[0_8px_30px_rgba(6,182,212,0.08)] hover:-translate-y-1 bg-card/45"
    >
      {/* Project Video */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/60 border-b border-border">
        <iframe
          src={getVideoUrl(project.videoUrl)}
          title={`${project.title} showcase video`}
          className="absolute inset-0 h-full w-full border-0 animate-fade-in"
          allow="autoplay; fullscreen"
          allowFullScreen
        />

        {/* Project Category */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-background/80 backdrop-blur-md border border-border px-2.5 py-0.75 rounded-full font-mono text-[9px] tracking-[0.1em] text-cyan uppercase font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-sans text-lg font-bold text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 rounded-full font-mono text-[9px] text-cyan/95"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Details */}
        <dl className="mt-5 space-y-3.5 border-t border-border pt-4 text-sm">
          {[
            ["Challenges", project.challenges],
            ["My Contribution", project.contribution],
            ["Lessons Learned", project.lessons],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="font-mono text-[9px] tracking-[0.1em] text-violet uppercase font-semibold">
                {label}
              </dt>

              <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          {project.github && (
            <NeonLink
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              variant="ghost"
              size="sm"
            >
              <Github size={12} />
              GitHub
            </NeonLink>
          )}

          <NeonLink
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            variant="primary"
            size="sm"
          >
            <ExternalLink size={12} />
            {isGame ? "Play Game" : "Live Demo"}
          </NeonLink>
        </div>
      </div>
    </motion.article>
  );
}