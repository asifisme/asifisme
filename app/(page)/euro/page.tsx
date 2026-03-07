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
        phone: "+880 1516-373037",
        email: "f.asif.official@gmail.com",
        location: "Dhaka, Bangladesh",
        linkedin: "https://www.linkedin.com/in/asifisme",
        github: "https://www.github.com/asifisme",
        leetcode: "https://www.leetcode.com/asifisme",
        extraField: "Available for Remote Work", // Placeholder
    };

    /* ─── Summary ─── */
    const summaryText =
        "Full-Stack Developer with 2+ years of experience building SaaS and business applications using Python (Django, FastAPI) and React/Next.js. Experienced in designing backend APIs, multi-tenant architectures, CI/CD pipelines, and cloud deployments on AWS and GCP. Passionate about building scalable systems and clean, maintainable software.";

    /* ─── Experience ─── */
    const experiences: ExperienceItemData[] = [
        {
            title: "Full Stack Software Developer",
            company: "Exoveon Ltd.",
            period: "Jul 2025 – Present",
            location: "Dhaka, Bangladesh (Hybrid)",
            achievements: [
                "Designed and developed backend services using Django REST Framework to support scalable SaaS applications, improving system modularity and simplifying feature deployment.",
                "Built a multi-tenant SaaS architecture ensuring strict tenant-level data isolation and efficient resource utilization across 20+ client organizations.",
                "Developed an API Gateway layer integrating 10+ internal and third-party services, improving system interoperability and simplifying service communication.",
                "Implemented background job processing using Redis queues to handle asynchronous tasks such as notification delivery and data processing, improving system responsiveness.",
                "Implemented CI/CD pipelines with GitHub Actions and Docker, enabling automated testing and deployment with zero-downtime releases across staging and production environments.",
                "Deployed and managed production infrastructure on AWS and GCP, configuring compute instances, databases to ensure reliable and highly available workloads.",
                "Integrated Llama-based LLM APIs to automate sentiment analysis on customer feedback, reducing manual review workload and improving response accuracy.",
            ],
        },
        {
            title: "Backend Developer",
            company: "OrbitX",
            period: "Nov 2024 – Jun 2025",
            location: "(Remote)",
            achievements: [
                "Built an enterprise inventory management system supporting 200+ product variants and high-frequency inventory updates across multiple warehouses.",
                "Developed a centralized Human Resource Management System (HRMS) for employee records, attendance tracking, and performance monitoring.",
                "Created an AI-driven feedback processing engine that categorizes user reviews and detects product pain points, automating approximately 40% of manual quality analysis tasks.",
                "Implemented a role-based access control (RBAC) framework with fine-grained permissions to enforce module-level security across platform services.",
                "Applied NLP pipelines for multilingual text processing and sentiment classification, improving automated analysis performance by 12%.",
                "Refactored database schemas and backend logic, improving data processing efficiency and reducing server load during high-traffic operations.",
                "Delivered multiple API-based integrations for client systems, improving automation workflows and increasing overall platform usability.",
            ],
        },
        {
            title: "Junior Software Developer",
            company: "Miicon Solutions",
            period: "Jan 2024 – Oct 2024",
            location: "Jashore, Bangladesh",
            achievements: [
                "Developed a double-entry accounting module for an HR platform capable of processing 1,000+ daily journal entries with automated reconciliation workflows.",
                "Designed a flexible Chart of Accounts (CoA) system supporting hierarchical account structures and customizable financial reporting.",
                "Implemented an automated financial processing module that manages internal banking transactions and updates accounting records to ensure accurate and consistent financial operations.",
                "Built an immutable customer wallet system with complete audit logging to ensure transparency and integrity for high-volume financial transactions.",
            ],
        },
    ];

    /* ─── Technical Skills ─── */
    const skillCategories: SkillCategory[] = [
        {
            label: "Languages",
            items: ["Python", "JavaScript", "TypeScript", "SQL", "C#", "Bash"],
        },
        {
            label: "Frameworks",
            items: [
                "Django",
                "Django REST Framework",
                "FastAPI",
                "Express", 
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
            title: "Scalable Backend Systems",
            description:
                "Designed and developed backend services using Django REST Framework to support SaaS applications, improving modularity.",
        },
        {
            title: "Multi-Tenant SaaS Architecture",
            description:
                "Built a secure multi-tenant architecture ensuring strict tenant data isolation and efficient scaling across 20+ independent client organizations.",
        },
        {
            title: "Automated CI/CD Delivery",
            description:
                "Implemented CI/CD pipelines with GitHub Actions and Docker enabling automated testing and zero-downtime deployments.",
        },
        {
            title: "API Integration & Cloud Deployment",
            description:
                "Developed an API gateway integrating 10+ internal and third-party services and deployed production workloads on AWS and GCP for reliable system operations.",
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
                "Built a financial accounting platform using Django that supports double-entry bookkeeping, automated reconciliation, hierarchical chart of accounts, and internal transaction processing.",
        },
        {
            title: "API Integration Gateway",
            description:
                "Developed a centralized API gateway integrating 10+ internal and third-party services and deployed containerized services on cloud infrastructure using Docker.",
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
