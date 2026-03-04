import React from "react";
import SectionTitle from "./SectionTitle";

export interface CertificationItemData {
    title: string;
    description?: string;
    issuer?: string;
    link?: string;
    docs_link?: string;
}

interface CertificationsProps {
    certifications: CertificationItemData[];
}

export default function Certifications({ certifications }: CertificationsProps) {
    return (
        <section className="mb-2">
            <SectionTitle>TRAINING / COURSES</SectionTitle>
            <div className="mt-1 space-y-1.5">
                {certifications.map((cert, idx) => (
                    <div key={idx}>
                        <h4 className="text-[10.5px] font-bold text-gray-800 leading-tight">
                            {cert.title}
                        </h4>
                        <p className="text-[9.5px] leading-snug text-gray-700">
                            {cert.description || cert.issuer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
