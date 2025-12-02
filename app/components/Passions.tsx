import React from "react";

interface PassionItem {
  title: string;
  description: string;
}

interface PassionsProps {
  passions: PassionItem[];
}

export default function Passions({ passions }: PassionsProps) {
  return (
    <div>
      <h2 className="section-title">Passions</h2>
      <ul className="mt-2 md:mt-1.5 space-y-3 md:space-y-2 text-sm md:text-xs">
        {passions.map((passion, index) => (
          <li key={index}>
            <p className="font-medium">{passion.title}</p>
            <p className="text-neutral-700">{passion.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
