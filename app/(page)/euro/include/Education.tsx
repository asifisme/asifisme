import React from "react";
import SectionTitle from "./SectionTitle";
import { Calendar, MapPin } from "lucide-react";

export interface EducationItemData {
    institution: string;
    degree: string;
    period: string;
    location: string;
    coursework?: string[];
}

interface EducationProps {
    education: EducationItemData[];
}

export default function Education({ education }: EducationProps) {
    return (
        <section className="mb-2">
            <SectionTitle>EDUCATION</SectionTitle>
            <div className="mt-1 space-y-2">
                {education.map((item, index) => (
                    <div key={index}>
                        <h3 className="text-[12px] font-semibold text-gray-800 leading-tight">
                            {item.degree}
                        </h3>
                        <h4 className="text-[11px] font-bold text-[#2B3B6F] uppercase leading-tight">
                            {item.institution}
                        </h4>
                        <div className="flex items-center gap-3 text-[9.5px] text-gray-500 font-medium">
                            <div className="flex items-center gap-1">
                                <Calendar size={9} />
                                <span>{item.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin size={9} />
                                <span>{item.location}</span>
                            </div>
                        </div>
                        {item.coursework && item.coursework.length > 0 && (
                            <p className="text-[10px] leading-snug text-gray-700 mt-0.5">
                                <span className="font-semibold">Relevant Coursework:</span>{" "}
                                {item.coursework.join(", ")}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
