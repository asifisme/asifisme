import React from "react";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <h2 className="section-title">Skills</h2>
      <div className="mt-3 flex flex-wrap gap-2 text-[13px]">
        {skills.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
