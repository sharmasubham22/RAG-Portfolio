import React from 'react'
import Section from '../common/Section'
import { experiences } from '@/data/experience'
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <Section
      id="experience"
      subtitle="Work History"
      title="Teams I've been a part of"
    >
      {experiences.map((experience, index) => (
        <div key={experience.id}>
          <ExperienceItem experience={experience} />

          {index !== experiences.length - 1 && (
            <hr className="border-border/40" />
          )}
        </div>
      ))}
    </Section>
  );
}
