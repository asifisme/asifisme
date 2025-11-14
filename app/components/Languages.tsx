import React from "react";

interface LanguagesProps {
  languages: string;
}

export default function Languages({ languages }: LanguagesProps) {
  return (
    <div>
      <h2 className="section-title">Languages</h2>
      <p className="mt-2 text-sm">{languages}</p>
    </div>
  );
}
