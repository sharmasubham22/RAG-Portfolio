import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Project() {
  return (
    <Section id="projects" title="Things I built" subtitle="My Work Portfolio" description="Projects that showcase my experience in full-stack development, cloud
          technologies, and artificial intelligence.">
    <div className="space-y-32">
            {projects.map((project, index) => (
                <ProjectCard
                key={project.id}
                project={project}
                reverse={index % 2 !== 0}
                />
            ))}
            </div>
          </Section>
  );
}
