import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExperienceHighlights from "./ExperienceHighlights";
import { Badge } from "../ui/badge";

export default function ExperienceItem({ experience }) {
  return (
    <div className="py-16">
      <h3 className="text-lg font-bold">{experience.role}</h3>
      <h4 className="mt-2 text-sm font-mono text-primary">
        {experience.company}
      </h4>

      <div className="mt-5 flex flex-wrap gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {experience.location}
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {experience.duration}
        </div>
      </div>

      <ExperienceHighlights highlights={experience.highlights} />

      <div className="mt-8 flex flex-wrap gap-3">
        {experience.technologies.map((technology) => (
          <Badge variant="techs" key={technology}>
            {technology}
          </Badge>
        ))}
      </div>

      <Button variant="link" className="mt-8 px-0">
        View Details →
      </Button>
    </div>
  );
}
