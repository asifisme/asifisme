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
            <ul className="mt-2 space-y-3 text-sm md:mt-1.5 md:space-y-2 md:text-xs">
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
                                <p className="inline-flex items-center gap-2 font-medium">
                                    {cert.title}
                                    <ExternalLink className="h-4 w-4 text-neutral-500" />
                                </p>
                                <p className="text-neutral-700">
                                    {cert.description}
                                </p>
                            </Link>
                        ) : (
                            <div>
                                <p className="font-medium">{cert.title}</p>
                                <p className="text-neutral-700">
                                    {cert.description}
                                </p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
