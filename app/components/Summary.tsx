import React from "react";

interface SummaryProps {
    text: string;
}

export default function Summary({ text }: SummaryProps) {
    return (
        <div>
            <h2 className="section-title">Summary</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-700 md:mt-1 md:text-xs md:leading-snug">
                {text}
            </p>
        </div>
    );
}
