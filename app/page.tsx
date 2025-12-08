'use client';
import React from "react";
import Header from "./components/Header";
import avatarPng from "./components/image.png";
import Summary from "./components/Summary";
import Experience, { ExperienceItemData } from "./components/Experience";
import Education, { EducationItemData } from "./components/Education";
import Languages from "./components/Languages";
import Strengths from "./components/Strengths";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import Passions from "./components/Passions";
import CaptureButton from "./components/CaptureButton";

export default function Home() {
  // Ensure assets work on GitHub Pages when the site is served under a basePath (e.g., /repo-name)

  const headerData = {
    name: "Asif Faisal",
    title: "Full-Stack & Financial Solutions Developer",
    email: "f.asif.official@gmail.com",
    linkedin: "https://www.linkedin.com/in/asifisme",
    leetcode: "https://www.leetcode.com/asifisme",
    github: "https://www.github.com/asifisme",
    // Use static import so Next.js handles the asset path both locally and on GitHub Pages
    avatarSrc: avatarPng,
  };

  // Summary data
  const summaryText =
    "Passionate Full-Stack & Financial Solutions Developer skilled in Django, DRF, FastAPI, React, Next.js, PostgreSQL, and MySQL. I specialize in building secure, scalable, and data-driven fintech applications with strong backend architectures and modern frontend interfaces.";

  const experiences: ExperienceItemData[] = [
    {
      title: "Full Stack Software Developer",
      company: "OrbitX",
      period: "Jun 2025 – Present",
      location: "London, UK (Remote)",
      description: "Led full-stack development on scalable, high-impact projects using Django, Next.js, and microservices architecture.",
      achievements: [
        "Architected microservices ecosystem with Django REST Framework, enhancing scalability and reducing deployment time by 40%.",
        "Engineered high-availability API Gateway integrating multiple services and third-party APIs for robust, seamless performance.",
        "Implemented real-time data streaming via Django Channels and WebSockets, eliminating polling and boosting frontend responsiveness.",
        "Optimized Next.js frontend with Redux Toolkit and Axios, streamlining state management and API interactions for superior UX."
      ],
    },
    {
      title: "Backend Developer",
      company: "Zenorin",
      period: "Jun – Dec 2025",
      location: "Dhaka, Bangladesh",
      description: "Drove backend innovation for e-commerce platform, focusing on secure APIs, infrastructure, and team collaboration.",
      achievements: [
        "Orchestrated end-to-end financial lifecycle modeling (orders, invoices, refunds, payouts) for comprehensive transaction transparency.",
        "Engineered advanced product/inventory system with multi-level categorization and dynamic attributes to handle complex variants.",
        "Deployed granular RBAC framework with custom permissions, fortifying module-level security and compliance.",
        "Collaborated cross-functionally to integrate APIs seamlessly, elevating user experience and development velocity.",
        // "Mentored junior developers, accelerating team skills and output through targeted code reviews and knowledge sharing."
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Exoveon",
      period: "Jan 2025 – Present",
      location: "Dhaka, Bangladesh",
      description: "Contributed to full-stack e-commerce solutions, specializing in Django-based accounting and financial modules.",
      achievements: [
        "Developed comprehensive e-commerce accounting suite, including double-entry journaling for precise financial reconciliation.",
        "Designed flexible Chart of Accounts (CoA) structure to enable advanced reporting and customizable financial categorization.",
        "Built jurisdiction-aware taxation engine supporting compound rates, ensuring global compliance and accuracy.",
        "Created immutable customer wallet system with audit trails, enhancing fund security and traceability in high-volume transactions."
      ],
    },
  ];

  // Education data
  const education: EducationItemData[] = [
    {
      degree: "Bachelor's Degree in Finance",
      period: "2020 – 2024",
      location: "Jashore, Bangladesh",
      institution: "Jashore University of Science and Technology",
    },
    {
      degree: "Python Programming Course",
      period: "2024 – 2025",
      location: "Jashore, Bangladesh",
      institution: "Jashore University of Science and Technology",
    },
  ];

  // Languages
  const languages = "English";

  // Strengths data
  const strengths = [
    {
      title: "Detail-Oriented",
      description:
        "Able to catch bugs in code before deployment, resulting in 20% less testing time.",
    },
    {
      title: "Team Player",
      description:
        "Collaborated with cross-functional teams to achieve 100% project completions.",
    },
    {
      title: "Problem Solving",
      description: "Resolved software crashes, reducing downtime by 30%.",
    },
  ];

  // Skills data
  const skills = [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Server-side logic",
    "Database Integration",
    "API Building",
    "Testing Tools",
    "Microservice Architecture",
  ];

  // Certification data
  const certifications = [
    {
      title: "Data Analysis with Python",
      docs_link: "https://training.edge.gov.bd/certificate-validation?certificate_no=EDGE-DSTS-115-6709-00009",
      description:
        "Training conducted by Jashore University of Science & Technology under EDGE Project of Bangladesh Computer Council, ICT Division. (Nov 2024 – Jan 2025)",
    },
    {
      title: "Full Stack Web Development with Python, Django & React",
      docs_link: "https://ostad.app/share/certificate/c29360-asif-faisal",
      description:
        "Course provided by Ostad.",
    },
    {
      title: "Developing Scalable Apps in Python",
      description:
        "Google Cloud Training course focused on constructing scalable Python apps.",
    },
  ];

  // Passions data
  const passions = [
    {
      title: "Data Analysis",
      description: "Enjoy practicing coding skills with various programs and exploring data patterns.",
    },
    {
      title: "System Architecture",
      description: "Interested in designing scalable and maintainable software architectures.",
    },
  ];

  return (
    <main className="bg-[#0f172a] min-h-screen py-2 sm:py-4 md:py-6 lg:py-10">
      {/* Capture Button - Outside resume container */}
      <div className="mx-auto w-full md:w-[210mm] px-3 sm:px-4 md:px-4 mb-4">
        <div className="flex justify-end">
          <CaptureButton resumeElementId="resume-container" />
        </div>
      </div>

      {/* Resume Container */}
      <div className="mx-auto w-full md:w-[210mm] min-h-[297mm] px-3 sm:px-4 md:px-4">
        <div id="resume-container" className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-4">
          <Header {...headerData} />
          <div className="mt-3 sm:mt-2 md:mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-3 md:gap-4">
            {/* Left column */}
            <section className="md:col-span-2 space-y-4 md:space-y-3">
              <Summary text={summaryText} />
              <Experience experiences={experiences} />
              <Education education={education} />
              <Languages languages={languages} />
            </section>

            {/* Right column (sidebar) */}
            <aside className="md:col-span-1 space-y-4 md:space-y-3">
              <Strengths strengths={strengths} />
              <Skills skills={skills} />
              <Certification certifications={certifications} />
              <Passions passions={passions} />
            </aside>

            {/* Full width section */}
            <div className="md:col-span-3">
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
