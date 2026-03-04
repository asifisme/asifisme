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
    // Flatten all skills into a single comma-separated list to match the image
    const allSkills = categories.flatMap((cat) => cat.items).join(", ");

    return (
        <section className="mb-2">
            <SectionTitle>SKILLS</SectionTitle>
            <p className="text-[10px] leading-snug text-[#1a1a1a]">
                {allSkills}
            </p>
        </section>
    );
}
