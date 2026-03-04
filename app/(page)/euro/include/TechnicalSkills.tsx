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
    return (
        <section className="mb-2">
            <SectionTitle>SKILLS</SectionTitle>
            <div className="space-y-1 text-[10.5px] leading-snug text-[#1a1a1a]">
                {categories.map((cat, idx) => (
                    <div key={idx}>
                        <span className="font-bold">{cat.label}: </span>
                        <span>{cat.items.join(", ")}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
