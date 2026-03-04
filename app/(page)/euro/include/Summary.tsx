import React from "react";
import SectionTitle from "./SectionTitle";

interface SummaryProps {
    text: string;
}

export default function Summary({ text }: SummaryProps) {
    return (
        <section className="mb-2">
            <SectionTitle>SUMMARY</SectionTitle>
            <p className="text-[10.5px] leading-snug text-gray-700">
                {text}
            </p>
        </section>
    );
}
