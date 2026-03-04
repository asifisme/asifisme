import React from "react";

interface SkillsProps {
    skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <div>
            <h2 className="section-title">Skills</h2>
            <div className="mt-2 flex flex-wrap gap-2 text-sm md:mt-1.5 md:gap-1.5 md:text-xs">
                {skills.map((skill) => (
                    <span key={skill} className="chip">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
