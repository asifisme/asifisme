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
                        <h4 className="text-[10.5px] leading-tight font-bold text-[#111111]">
                            {project.title}
                        </h4>
                        <p className="text-[9.5px] leading-snug text-[#1a1a1a]">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
