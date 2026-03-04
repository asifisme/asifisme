import React from "react";
import SectionTitle from "./SectionTitle";

export interface SkillCategory {
    label: string;
    items: string[];
}

interface TechnicalSkillsProps {
    categories: SkillCategory[];
}

export default function TechnicalSkills({ categories }: TechnicalSkillsProps) {
    const allSkills = categories.flatMap((cat) => cat.items);

    return (
        <section className="mb-2">
            <SectionTitle>SKILLS</SectionTitle>
            <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-[10.5px] leading-snug text-[#1a1a1a]">
                {allSkills.map((skill, index) => (
                    <span key={index} className="flex items-center">
                        {skill}
                        {index < allSkills.length - 1 ? "," : ""}
                    </span>
                ))}
            </div>
        </section>
    );
}
