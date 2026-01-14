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
      <div className="mt-2 md:mt-1.5 space-y-3 md:space-y-1.5">
        {education.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2">
              <p className="font-semibold text-xs sm:text-sm">{item.degree}</p>
              <span className="job-meta whitespace-nowrap">
                {item.period} · {item.location}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700">{item.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
