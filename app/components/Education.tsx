import React from "react";

export interface EducationItemData {
    degree: string;
    period: string;
    location: string;
    institution: string;
}

interface EducationProps {
    education: EducationItemData[];
}

export default function Education({ education }: EducationProps) {
    return (
        <div>
            <h2 className="section-title">Education</h2>
            <div className="mt-2 space-y-3 md:mt-1.5 md:space-y-1.5">
                {education.map((item, index) => (
                    <div key={index}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                            <p className="text-xs font-semibold sm:text-sm">
                                {item.degree}
                            </p>
                            <span className="job-meta whitespace-nowrap">
                                {item.period} · {item.location}
                            </span>
                        </div>
                        <p className="text-xs text-neutral-700 sm:text-sm">
                            {item.institution}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
