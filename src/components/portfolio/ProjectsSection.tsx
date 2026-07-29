import { projects } from "@/data/projects";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      subtitle="Shipped builds across AI backends, analytics, and Unity game systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
