import React from "react";

interface SummaryProps {
  text: string;
}

export default function Summary({ text }: SummaryProps) {
  return (
    <div>
      <h2 className="section-title">Summary</h2>
      <p className="mt-1.5 md:mt-1 text-sm md:text-xs leading-relaxed md:leading-snug text-neutral-700">{text}</p>
    </div>
  );
}
