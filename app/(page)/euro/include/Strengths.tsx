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
    { icon: Trophy, bg: "bg-amber-50", color: "text-amber-500" },
    { icon: DollarSign, bg: "bg-emerald-50", color: "text-emerald-500" },
    { icon: Zap, bg: "bg-blue-50", color: "text-blue-500" },
    { icon: Users, bg: "bg-purple-50", color: "text-purple-500" },
    { icon: Award, bg: "bg-rose-50", color: "text-rose-500" },
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
                            <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded flex items-center justify-center ${config.bg}`}>
                                <Icon size={12} className={`stroke-[1.5] ${config.color}`} />
                            </div>
                            <div>
                                <h4 className="text-[10.5px] font-bold text-gray-800 leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-[9.5px] leading-snug text-gray-600">
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
