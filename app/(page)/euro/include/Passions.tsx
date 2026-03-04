import React from "react";
import SectionTitle from "./SectionTitle";

export interface PassionItemData {
    title: string;
    description: string;
}

interface PassionsProps {
    passions: PassionItemData[];
}

export default function Passions({ passions }: PassionsProps) {
    return (
        <section className="mb-2">
            <SectionTitle>PASSIONS</SectionTitle>
            <div className="mt-1 space-y-1.5">
                {passions.map((passion, idx) => (
                    <div key={idx}>
                        <h4 className="text-[10.5px] leading-tight font-bold text-[#111111]">
                            {passion.title}
                        </h4>
                        <p className="text-[9.5px] leading-snug text-[#1a1a1a]">
                            {passion.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
