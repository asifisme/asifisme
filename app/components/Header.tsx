import React from "react";
// Photo removed per request
// import Image from "next/image";
import Link from "next/link";
// import { StaticImageData } from 'next/image';
import { Code, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



interface HeaderProps {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  leetcode: string;
  github: string;
  // avatarSrc removed
}

export default function Header({name, title, email, linkedin, leetcode, github}: HeaderProps) {
    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const subject = encodeURIComponent("Interested in Working Together");
      const body = encodeURIComponent(
        `Hi ${name},\n\nI came across your resume and I'm interested in discussing potential collaboration or hiring opportunities.\n\nLooking forward to connecting with you.\n\nBest regards`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailUrl, '_blank');
    };

  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 border-b pb-4 sm:pb-6">
      <div className="flex-1 text-center sm:text-left w-full">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{name}</h1>
        <p className="mt-1 text-sm sm:text-base text-sky-700 font-medium">{title}</p>
        <div className="mt-2 sm:mt-3 flex flex-wrap justify-center sm:justify-start gap-x-3 sm:gap-x-5 gap-y-1 text-xs sm:text-sm text-neutral-600">
          <a
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 hover:text-sky-700 cursor-pointer"
            aria-label={`Send email to ${email}`}
            title={`Email: ${email}`}
          >
            <Mail className="w-4 h-4" />
            <span className="break-all">{email}</span>
          </a>

          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-sky-700"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-sky-700"
            aria-label="LeetCode profile"
            title="LeetCode"
          >
            <Code className="w-4 h-4" />
            <span>LeetCode</span>
          </Link>

          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-sky-700"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
      {/* Photo removed intentionally */}
    </header>
  );
}
