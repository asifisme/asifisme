import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Code, Mail } from "lucide-react";

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  leetcode: string;
  github: string;
  avatarSrc: string;
}

export default function Header({
    name,
    title,
    email,
    linkedin,
    leetcode,
    github,
    avatarSrc,
}: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 border-b pb-4 sm:pb-6">
      <div className="flex-1 text-center sm:text-left w-full">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{name}</h1>
        <p className="mt-1 text-sm sm:text-base text-sky-700 font-medium">{title}</p>
        <div className="mt-2 sm:mt-3 flex flex-wrap justify-center sm:justify-start gap-x-3 sm:gap-x-5 gap-y-1 text-xs sm:text-sm text-neutral-600">
          <Link
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-sky-700"
            aria-label={`Send email to ${email}`}
            title={`Email: ${email}`}
          >
            <Mail className="w-4 h-4" />
            <span className="break-all">{email}</span>
          </Link>

          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-sky-700"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
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
            <span className="hidden sm:inline">LeetCode</span>
          </Link>

          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-sky-700"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src={avatarSrc}
          alt={`${name} headshot`}
          width={80}
          height={80}
          className="h-16 w-16 sm:h-19 sm:w-20 rounded-full object-cover ring-2 ring-neutral-200"
        />
      </div>
    </header>
  );
}
