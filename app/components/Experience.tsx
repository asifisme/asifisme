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
      <div className="flex items-baseline justify-between">
        <h3 className="job-title">
          {item.title} — {item.company}
        </h3>
        <span className="job-meta">
          {item.period} · {item.location}
        </span>
      </div>
      <p className="mt-1 text-[13px] text-neutral-700">{item.description}</p>
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
