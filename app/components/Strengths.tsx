import React from "react";

interface StrengthItem {
    title: string;
    description: string;
}

interface StrengthsProps {
    strengths: StrengthItem[];
}

export default function Strengths({ strengths }: StrengthsProps) {
    return (
        <div>
            <h2 className="section-title">Strengths</h2>
            <ul className="mt-2 space-y-3 text-sm md:mt-1.5 md:space-y-2 md:text-xs">
                {strengths.map((strength, index) => (
                    <li key={index}>
                        <strong className="font-semibold">
                            {strength.title}
                        </strong>
                        <p className="text-neutral-700">
                            {strength.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
