import React from "react";

interface SectionTitleProps {
    children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h2 className="mb-1.5 text-[13px] font-bold tracking-wider text-[#2B3B6F] uppercase relative pb-1 pt-1">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gray-500" />

            {children}

            {/* Bottom thin border */}
            <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gray-300" />
        </h2>
    );
}
