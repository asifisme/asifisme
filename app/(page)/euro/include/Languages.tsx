import React from "react";
import SectionTitle from "./SectionTitle";

interface LanguagesProps {
    languages: string;
}

export default function Languages({ languages }: LanguagesProps) {
    return (
        <section className="mb-2">
            <SectionTitle>LANGUAGES</SectionTitle>
            <p className="text-[10.5px] leading-snug text-[#1a1a1a]">
                {languages}
            </p>
        </section>
    );
}
