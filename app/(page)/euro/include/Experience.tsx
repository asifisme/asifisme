import React from "react";
import SectionTitle from "./SectionTitle";
import { Calendar, MapPin } from "lucide-react";

export interface ExperienceItemData {
    title: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
}

function ExperienceItem({ item }: { item: ExperienceItemData }) {
    return (
        <article className="mb-2.5">
            <h3 className="text-[12px] font-semibold text-gray-800 leading-tight">
                {item.title}
            </h3>
            <h4 className="text-[11px] font-bold text-[#2B3B6F] uppercase leading-tight">
                {item.company}
            </h4>
            <div className="flex items-center gap-3 text-[9.5px] text-gray-500 mb-1 font-medium">
                <div className="flex items-center gap-1">
                    <Calendar size={9} />
                    <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MapPin size={9} />
                    <span>{item.location}</span>
                </div>
            </div>
            <ul className="list-disc pl-3.5 space-y-0 marker:text-gray-400">
                {item.achievements.map((achievement, idx) => (
                    <li
                        key={idx}
                        className="text-[10px] leading-snug text-gray-700"
                    >
                        {achievement}
                    </li>
                ))}
            </ul>
        </article>
    );
}

interface ExperienceProps {
    experiences: ExperienceItemData[];
}

export default function Experience({ experiences }: ExperienceProps) {
    return (
        <section className="mb-2">
            <SectionTitle>EXPERIENCE</SectionTitle>
            <div className="mt-1">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} item={exp} />
                ))}
            </div>
        </section>
    );
}
