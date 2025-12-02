import React from "react";

interface LanguagesProps {
  languages: string;
}

export default function Languages({ languages }: LanguagesProps) {
  return (
    <div>
      <h2 className="section-title">Languages</h2>
      <p className="mt-1.5 md:mt-1 text-sm md:text-xs">{languages}</p>
    </div>
  );
}
