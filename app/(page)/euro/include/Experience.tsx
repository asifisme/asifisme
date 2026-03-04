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
            <h3 className="text-[12.5px] leading-tight font-semibold text-[#111111]">
                {item.title}
            </h3>
            <h4 className="text-[11.5px] leading-tight font-bold text-[#1e3264] uppercase">
                {item.company}
            </h4>
            <div className="mb-1 flex items-center gap-3 text-[10px] font-medium text-[#444444]">
                <div className="flex items-center gap-1">
                    <Calendar size={9} />
                    <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MapPin size={9} />
                    <span>{item.location}</span>
                </div>
            </div>
            <ul className="list-disc space-y-0 pl-3.5 marker:text-[#555555]">
                {item.achievements.map((achievement, idx) => (
                    <li
                        key={idx}
                        className="text-[10.5px] leading-tight text-[#1a1a1a]"
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
