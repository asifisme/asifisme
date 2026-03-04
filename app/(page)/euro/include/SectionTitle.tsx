import React from "react";

interface SectionTitleProps {
    children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h2 className="relative mb-1.5 pt-1 pb-1 text-[13px] font-bold tracking-wider text-[#1e3264] uppercase">
            {/* Top border */}
            <div className="absolute top-0 left-0 h-[1.5px] w-full bg-[#333333]" />

            {children}

            {/* Bottom thin border */}
            <div className="absolute bottom-0 left-0 h-[0.5px] w-full bg-[#cccccc]" />
        </h2>
    );
}
