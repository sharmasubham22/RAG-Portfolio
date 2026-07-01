import Container from "../common/Container";
import { SectionLabel } from "../common/ReusableHeadings";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Project() {
  return (
    <section id="projects" className="py-32">
      <Container>
        <SectionLabel>My Work Portfolio</SectionLabel>
        <h1 className="font-serif text-6xl my-5">
            Things I built
        </h1>

        <p
          className="
                        mb-20
                        max-w-2xl
                        text-lg
                        text-muted-foreground
                    "
        >
          Projects that showcase my experience in full-stack development, cloud
          technologies, and artificial intelligence.
        </p>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
