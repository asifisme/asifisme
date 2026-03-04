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
                        <h4 className="text-[10.5px] font-bold text-gray-800 leading-tight">
                            {project.title}
                        </h4>
                        <p className="text-[9.5px] leading-snug text-gray-700">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
