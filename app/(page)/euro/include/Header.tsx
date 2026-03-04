import React from "react";
import { Phone, MapPin, Globe, Linkedin, Star } from "lucide-react";

interface HeaderProps {
    name: string;
    title?: string;
    phone?: string;
    email: string;
    location?: string;
    linkedin: string;
    github?: string;
    leetcode?: string;
    extraField?: string;
}

export default function Header({
    name,
    title,
    phone = "+1-(234)-555-1234", // Using a placeholder if not provided, you should update this
    email,
    location = "Chicago, IL", // Using a placeholder if not provided, you should update this
    linkedin,
    github,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    leetcode,
    extraField = "Extra Field", // Placeholder
}: HeaderProps) {
    // Extract display-friendly URLs
    const linkedinDisplay = linkedin
        .replace(/^https?:\/\/(www\.)?/, "")
        .replace(/\/$/, "");
    const githubDisplay = github
        ? github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
        : null;

    return (
        <header className="bg-[#2B3B6F] text-white -mx-[12mm] -mt-[10mm] px-[12mm] pt-5 pb-4 mb-3">
            <h1 className="text-[28px] font-bold tracking-wider uppercase mb-0.5 leading-tight">
                {name}
            </h1>
            <h2 className="text-[13px] font-semibold mb-3 leading-snug">
                {title || "Python AI Developer | TensorFlow & NLP Specialist"}
            </h2>
            
            <div className="flex justify-between text-[11px] font-medium">
                {/* Column 1 */}
                <div className="space-y-0.5">
                    {phone && (
                        <div className="flex items-center gap-1.5">
                            <Phone size={11} />
                            <span>{phone}</span>
                        </div>
                    )}
                    {location && (
                        <div className="flex items-center gap-1.5">
                            <MapPin size={11} />
                            <span>{location}</span>
                        </div>
                    )}
                </div>
                
                {/* Column 2 */}
                <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[13px]">@</span>
                        <a href={`mailto:${email}`} className="hover:underline">
                            {email}
                        </a>
                    </div>
                    {extraField && (
                        <div className="flex items-center gap-1.5">
                            <Star size={11} />
                            <span>{extraField}</span>
                        </div>
                    )}
                </div>
                
                {/* Column 3 */}
                <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                        <Linkedin size={11} />
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {linkedinDisplay}
                        </a>
                    </div>
                    {githubDisplay && (
                        <div className="flex items-center gap-1.5">
                            <Globe size={11} />
                            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {githubDisplay}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
