import { CircleCheckBig } from "lucide-react";

export default function ExperienceHighlights({ highlights }) {
  return (
    <div className="mt-10">
      <ul className="space-y-4">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2">
            <CircleCheckBig
              className="mt-1 h-5 w-5 text-primary shrink-0"
            />

            <span className="text-muted-foreground">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
