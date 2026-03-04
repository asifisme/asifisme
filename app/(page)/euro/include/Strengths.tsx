import React from "react";
import SectionTitle from "./SectionTitle";
import { Trophy, DollarSign, Zap, Users, Award } from "lucide-react";

export interface StrengthItemData {
    title: string;
    description: string;
}

interface StrengthsProps {
    strengths: StrengthItemData[];
}

const iconConfigs = [
    { icon: Trophy, bg: "bg-[#fef3c7]", color: "text-[#d97706]" },
    { icon: DollarSign, bg: "bg-[#d1fae5]", color: "text-[#059669]" },
    { icon: Zap, bg: "bg-[#dbeafe]", color: "text-[#2563eb]" },
    { icon: Users, bg: "bg-[#ede9fe]", color: "text-[#7c3aed]" },
    { icon: Award, bg: "bg-[#ffe4e6]", color: "text-[#e11d48]" },
];

export default function Strengths({ strengths }: StrengthsProps) {
    return (
        <section className="mb-2">
            <SectionTitle>KEY ACHIEVEMENTS</SectionTitle>
            <div className="mt-1 space-y-1.5">
                {strengths.map((item, index) => {
                    const config = iconConfigs[index % iconConfigs.length];
                    const Icon = config.icon;
                    return (
                        <div key={index} className="flex gap-2">
                            <div
                                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded ${config.bg}`}
                            >
                                <Icon
                                    size={12}
                                    className={`stroke-[1.5] ${config.color}`}
                                />
                            </div>
                            <div>
                                <h4 className="text-[11px] leading-none font-bold text-[#111111]">
                                    {item.title}
                                </h4>
                                <p className="mt-0.5 text-[10px] leading-tight text-[#2a2a2a]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
