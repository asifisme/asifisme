"use client";
import React, { useState } from "react";
import { captureResumeAsImage } from "../../../utils/captureResume";

interface DownloadButtonProps {
    resumeElementId: string;
    filename?: string;
}

export default function DownloadButton({
    resumeElementId,
    filename = "asif-faisal-resume",
}: DownloadButtonProps) {
    const [isCapturing, setIsCapturing] = useState(false);

    const handleCapture = async () => {
        setIsCapturing(true);
        try {
            await captureResumeAsImage(resumeElementId, filename);
        } catch (error) {
            console.error("Capture failed:", error);
            const msg =
                error instanceof Error
                    ? error.message
                    : "Unknown error occurred";
            alert(`Failed to generate PDF: ${msg}`);
        } finally {
            setIsCapturing(false);
        }
    };

    return (
        <button
            onClick={handleCapture}
            disabled={isCapturing}
            className="flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Download resume as PDF"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {isCapturing ? "Generating PDF..." : "Download PDF"}
        </button>
    );
}
