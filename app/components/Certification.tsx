import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CertificationItem {
  title: string;
  description: string;
  docs_link?: string;
}

interface CertificationProps {
  certifications: CertificationItem[];
}

export default function Certification({ certifications }: CertificationProps) {
  return (
    <div>
      <h2 className="section-title">Certification</h2>
      <ul className="mt-2 md:mt-1.5 space-y-3 md:space-y-2 text-sm md:text-xs">
        {certifications.map((cert, index) => (
          <li key={index}>
            {cert.docs_link ? (
              <Link
                href={cert.docs_link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Open certificate for ${cert.title}`}
                title={`Open certificate for ${cert.title}`}
              >
                <p className="font-medium inline-flex items-center gap-2">
                  {cert.title}
                  <ExternalLink className="w-4 h-4 text-neutral-500" />
                </p>
                <p className="text-neutral-700">{cert.description}</p>
              </Link>
            ) : (
              <div>
                <p className="font-medium">{cert.title}</p>
                <p className="text-neutral-700">{cert.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
