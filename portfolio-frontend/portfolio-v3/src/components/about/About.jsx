import Section from "../common/Section";
import { Badge } from "../ui/badge";
import SkillCategory from "./SkillCategory";
import { about } from "@/data/about";

export default function About() {
  return (
    <Section
      id="about"
      subtitle="About Me"
      title="Building AI Powered Products"
    >
      <div
        className="
                    grid
                    gap-16
                    lg:grid-cols-2
                "
      >
        {/* LEFT */}
        <div>
          <p className="text-muted-foreground">
            I specialize in building high-performance web applications and the
            infrastructure that powers them. My work sits at the intersection of
            developer experience, system reliability, and product craft.
          </p>
          <p className="text-muted-foreground my-3">
            Before Vercel, I worked at Stripe and Airbnb, where I shipped
            features used by millions of users and contributed to core
            infrastructure that processes billions of requests per day.
          </p>
          <p className="text-muted-foreground">
            Outside of work, I contribute to open-source tools in the Rust
            ecosystem and mentor early-career engineers through ADPList.
          </p>
          <div className="flex gap-10 mt-10">
            {about.stats.map((stat) => (
              <div>
                <div className="font-serif text-4xl text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-primary font-mono inline-flex items-center gap-2">
            Tech Stack<span className="w-20 h-px bg-muted-foreground"></span>
          </p>
          <div
            className="flex flex-wrap gap-1"
          >
            {about.technologies.map((tech) => (
              <div>
                <Badge key={tech} variant="skills">
                  {tech.value}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
