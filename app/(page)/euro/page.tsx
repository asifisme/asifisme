"use client";
import React from "react";
import Header from "./include/Header";
import Summary from "./include/Summary";
import Experience, { ExperienceItemData } from "./include/Experience";
import TechnicalSkills, { SkillCategory } from "./include/TechnicalSkills";
import Education, { EducationItemData } from "./include/Education";
import Certifications, {
    CertificationItemData,
} from "./include/Certifications";
import Strengths, { StrengthItemData } from "./include/Strengths";
import Passions, { PassionItemData } from "./include/Passions";
import Projects, { ProjectItemData } from "./include/Projects";
import Languages from "./include/Languages";
import DownloadButton from "./include/DownloadButton";

export default function EuroResumePage() {
    /* ─── Header ─── */
    const headerData = {
        name: "Asif Faisal",
        title: "Full-Stack Developer | SAAS | ERP | Finance | Cloud | AI",
        phone: "+880 1516-373037", // Placeholder, you should update this
        email: "f.asif.official@gmail.com",
        location: "Dhaka, Bangladesh",
        linkedin: "https://www.linkedin.com/in/asifisme",
        github: "https://www.github.com/asifisme",
        leetcode: "https://www.leetcode.com/asifisme",
        extraField: "Available for Remote Work", // Placeholder
    };

    /* ─── Summary ─── */
    const summaryText =
        "Full-Stack Developer with 2+ years of professional experience designing and building scalable web applications and financial platforms. Proficient in Python (Django, FastAPI), JavaScript/TypeScript (React, Next.js), and cloud infrastructure (AWS, GCP). Demonstrated expertise in microservice architecture, RESTful API design, CI/CD automation, and real-time systems. Passionate about writing clean, maintainable code and solving complex engineering challenges at scale.";

    /* ─── Experience ─── */
    const experiences: ExperienceItemData[] = [
        {
            title: "Full Stack Software Developer",
            company: "Exoveon Ltd.",
            period: "Sep 2025 – Present",
            location: "Dhaka, Bangladesh",
            achievements: [
                "Architected a microservices ecosystem with Django REST Framework, improving system modularity and reducing deployment cycles by 40%.",
                "Built CI/CD pipelines using GitHub Actions and Docker, achieving zero-downtime releases across staging and production environments.",
                "Designed and deployed cloud infrastructure on AWS and GCP, ensuring high availability and fault tolerance for production workloads.",
                "Engineered an API Gateway integrating 10+ internal and third-party services, improving inter-service reliability by 35%.",
                "Implemented real-time data streaming via Django Channels and WebSockets, eliminating polling and reducing client latency by 60%.",
                "Conducted weekly training sessions in TensorFlow, boosting team competency and model accuracy by 15% over six months.",
                "Revamped the system architecture, leading to a 60% reduction in model training time and resource usage.",
            ],
        },
        {
            title: "Backend Developer",
            company: "OrbitX",
            period: "Nov 2024 – Jun 2025",
            location: "London, UK (Remote)",
            achievements: [
                "Engineered a multi-level product/inventory system with dynamic attributes, supporting 500+ product variants and complex categorization.",
                "Orchestrated containerized deployments using Docker and Docker Compose, reducing environment setup time from hours to minutes.",
                "Implemented automated cloud backup strategies, achieving 99.9% data durability and system uptime.",
                "Deployed a granular RBAC framework with custom permissions, ensuring module-level security compliance across the platform.",
                "Utilized Spacy for text processing in a multilingual project, enhancing sentiment analysis performance by 12%.",
                "Engaged in extensive API project deployments, increasing client satisfaction rate by 40% through process automation.",
            ],
        },
        {
            title: "Junior Software Developer",
            company: "Miicon Solutions",
            period: "Jan 2024 – Oct 2024",
            location: "Jashore, Bangladesh",
            achievements: [
                "Developed a double-entry accounting module for HR platform, processing 1,000+ daily journal entries with automated reconciliation.",
                "Designed a flexible Chart of Accounts (CoA) architecture supporting multi-level hierarchies and customizable financial reporting.",
                "Built a jurisdiction-aware taxation engine supporting compound rates across multiple regions for global compliance.",
                "Created an immutable customer wallet system with full audit trails, securing high-volume financial transactions.",
            ],
        },
    ];

    /* ─── Technical Skills ─── */
    const skillCategories: SkillCategory[] = [
        {
            label: "Languages",
            items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
        },
        {
            label: "Frameworks",
            items: [
                "Django",
                "Django REST Framework",
                "FastAPI",
                "React",
                "Next.js",
            ],
        },
        {
            label: "Developer Tools",
            items: [
                "Git",
                "Docker",
                "GitHub Actions",
                "AWS",
                "GCP",
                "PostgreSQL",
                "MySQL",
                "Redis",
            ],
        },
        {
            label: "Concepts",
            items: [
                "Microservice Architecture",
                "RESTful APIs",
                "CI/CD Pipelines",
                "Database Design",
                "System Design",
                "WebSockets",
            ],
        },
    ];

    /* ─── Strengths (Key Achievements) ─── */
    const strengths: StrengthItemData[] = [
        {
            title: "Boosted System Performance",
            description:
                "Architected microservices ecosystem with Django REST Framework, improving system modularity and reducing deployment cycles by 40%.",
        },
        {
            title: "Cost Reduction",
            description:
                "Deployed cloud infrastructure on AWS and GCP, reducing server costs by 30% through automated scaling and resource optimization.",
        },
        {
            title: "Efficiency Improvement",
            description:
                "Implemented CI/CD pipelines using GitHub Actions and Docker, achieving zero-downtime releases and reducing delivery time by 20%.",
        },
        {
            title: "Team Collaboration",
            description:
                "Collaborated with cross-functional teams to achieve 100% project completions, mentoring junior developers through targeted code reviews.",
        },
    ];

    /* ─── Education ─── */
    const education: EducationItemData[] = [
        {
            institution: "Jashore University of Science and Technology",
            degree: "Bachelor Degree",
            period: "2020 – 2024",
            location: "Jashore, Bangladesh",
            activities: [
                "Microsoft Excel Workshop",
                "Organized departmental seminars",
                "Community Service Volunteer",
            ],
        },
    ];

    /* ─── Certifications ─── */
    const certifications: CertificationItemData[] = [
        {
            title: "Data Analysis with Python",
            issuer: "EDGE Project, Bangladesh Computer Council, ICT Division (2024)",
            link: "https://training.edge.gov.bd/certificate-validation?certificate_no=EDGE-DSTS-115-6709-00009",
            description:
                "Training conducted by Jashore University of Science & Technology under EDGE Project of Bangladesh Computer Council, ICT Division. (Nov 2024 – Jan 2025)",
        },
        {
            title: "Full Stack Web Development with Python, Django & React",
            issuer: "Ostad",
            link: "https://ostad.app/share/certificate/c29360-asif-faisal",
            description: "Course provided by Ostad.",
        },
        {
            title: "Developing Scalable Apps in Python",
            issuer: "Google Cloud Training",
            description:
                "Google Cloud Training course focused on constructing scalable Python apps.",
        },
    ];

    /* ─── Passions ─── */
    const passions: PassionItemData[] = [
        {
            title: "Data Analysis",
            description:
                "Enjoy practicing coding skills with various programs and exploring data patterns.",
        },
        {
            title: "System Architecture",
            description:
                "Interested in designing scalable and maintainable software architectures.",
        },
    ];

    /* ─── Projects ─── */
    const projects: ProjectItemData[] = [
        {
            title: "HR Accounting Platform",
            description:
                "Developed a comprehensive double-entry accounting system with Django, featuring automated reconciliation",
        },
        {
            title: "Real-time API Gateway",
            description:
                "API gateway integrating 10+ internal and third-party services with WebSocket support, deployed on AWS with Docker.",
        },
    ];

    /* ─── Languages ─── */
    const languages = "English (Professional), Bengali (Native)";

    return (
        <main className="min-h-screen bg-[#0f172a] py-2 sm:py-4 md:py-6 lg:py-10">
            {/* Download Button — outside the resume */}
            <div className="mx-auto mb-4 w-full px-3 sm:px-4 md:w-[210mm] md:px-0">
                <div className="flex justify-end">
                    <DownloadButton resumeElementId="euro-resume" />
                </div>
            </div>

            {/* A4 Resume Container */}
            <div className="mx-auto w-full px-2 sm:px-4 md:w-[210mm] md:px-0">
                <div
                    id="euro-resume"
                    className="h-[297mm] overflow-hidden bg-white text-black shadow-lg md:rounded-sm"
                    style={{
                        padding: "10mm 6mm",
                    }}
                >
                    <Header {...headerData} />

                    <div className="mt-1 grid grid-cols-[1fr_240px] gap-2">
                        {/* Left Column (Main Content) */}
                        <div className="border-r border-gray-200 pr-3">
                            <Summary text={summaryText} />
                            <Experience experiences={experiences} />
                            <Education education={education} />
                            <Languages languages={languages} />
                        </div>

                        {/* Right Column (Sidebar) */}
                        <div className="pl-1">
                            <Projects projects={projects} />
                            <Strengths strengths={strengths} />
                            <TechnicalSkills categories={skillCategories} />
                            <Certifications certifications={certifications} />
                            <Passions passions={passions} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
