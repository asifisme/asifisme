import React from "react";
import Image from "next/image"; 
import Link from "next/link"; 

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
    <header className="flex items-start justify-between gap-6 border-b pb-6">
      <div className="flex-1">
        <h1 className="text-3xl font-extrabold tracking-tight">{name}</h1>
        <p className="mt-1 text-sky-700 font-medium">{title}</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-600">
          <span>{email}</span>
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
           <Link href={leetcode} target="_blank" rel="noopener noreferrer">
            LeetCode
          </Link>
          <Link href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>         
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src={avatarSrc}
          alt={`${name} headshot`}
          width={80}
          height={80}
          className="h-19 w-20 rounded-full object-cover ring-2 ring-neutral-200"
        />
      </div>
    </header>
  );
}
