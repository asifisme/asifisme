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
      <ul className="mt-3 space-y-3 text-sm">
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
