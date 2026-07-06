import React from 'react'
import { Badge } from '../ui/badge';

export default function SkillCategory({title, skills,}) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant='techs'>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}
