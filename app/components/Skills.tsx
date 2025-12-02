import React from "react";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <h2 className="section-title">Skills</h2>
      <div className="mt-2 md:mt-1.5 flex flex-wrap gap-2 md:gap-1.5 text-sm md:text-xs">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
