import React from "react";

interface CertificationItem {
  title: string;
  description: string;
}

interface CertificationProps {
  certifications: CertificationItem[];
}

export default function Certification({ certifications }: CertificationProps) {
  return (
    <div>
      <h2 className="section-title">Certification</h2>
      <ul className="mt-3 space-y-3 text-sm">
        {certifications.map((cert, index) => (
          <li key={index}>
            <p className="font-medium">{cert.title}</p>
            <p className="text-neutral-700">{cert.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
