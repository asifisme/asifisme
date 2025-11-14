import React from "react";

interface SummaryProps {
  text: string;
}

export default function Summary({ text }: SummaryProps) {
  return (
    <div>
      <h2 className="section-title">Summary</h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-800">{text}</p>
    </div>
  );
}
