import React from "react";

export interface ExperienceItemData {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

interface ExperienceItemProps {
  item: ExperienceItemData;
}

function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2">
        <h3 className="job-title text-sm sm:text-base">
          {item.title} — {item.company}
        </h3>
        <span className="job-meta whitespace-nowrap">
          {item.period} · {item.location}
        </span>
      </div>
      <p className="mt-1 text-xs sm:text-[13px] text-neutral-700">{item.description}</p>
      <ul className="bullet-list">
        {item.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
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
    <div>
      <h2 className="section-title">Experience</h2>
      <div className="mt-4 space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} item={exp} />
        ))}
      </div>
    </div>
  );
}
