import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "@/components/ui/button";
import img from "@/assets/stock1.jpg"

export default function ProjectCard({ project, reverse = false }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`grid items-center gap-16 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      {/* IMAGE */}
      <div className="aspect-16/10 overflow-hidden">
        <img
          src={img}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"/>
      </div>

      {/* CONTENT */}

      <div>
        <p className="text-muted-foreground font-mono">{project.subtitle}</p>

        <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>

        <p
          className="
                        mt-6
                        text-muted-foreground
                        leading-8
                    "
        >
          {project.description}
        </p>

        <div
          className="
                        mt-8
                        flex
                        flex-wrap
                        gap-2
                    "
        >
          {project.technologies.map((technology) => (
            <Badge variant="techs" key={technology}>
              {technology}
            </Badge>
          ))}
        </div>

        <div className="mt-10 flex gap-4">
          <Button variant="link">Live Demo →</Button>
          <Button variant="outline">GitHub</Button>
        </div>
      </div>
    </motion.div>
  );
}
