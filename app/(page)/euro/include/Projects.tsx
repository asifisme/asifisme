import React from "react";
import SectionTitle from "./SectionTitle";

export interface ProjectItemData {
    title: string;
    description: string;
}

interface ProjectsProps {
    projects: ProjectItemData[];
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section className="mb-2">
            <SectionTitle>PROJECTS</SectionTitle>
            <div className="mt-1 space-y-1.5">
                {projects.map((project, idx) => (
                    <div key={idx}>
                        <h4 className="text-[11px] leading-none font-bold text-[#111111]">
                            {project.title}
                        </h4>
                        <p className="mt-0.5 text-[10px] leading-tight text-[#1a1a1a]">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
