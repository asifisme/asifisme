"use client";
import React, { useState } from "react";
import { Download } from "lucide-react";
import { captureResumeAsImage } from "../utils/captureResume";

interface CaptureButtonProps {
    resumeElementId: string;
}

export default function CaptureButton({ resumeElementId }: CaptureButtonProps) {
    const [isCapturing, setIsCapturing] = useState(false);

    const handleCapture = async () => {
        setIsCapturing(true);

        try {
            console.log("Attempting to capture resume as PDF");
            await captureResumeAsImage(resumeElementId, "asif");
            console.log("Capture successful");
        } catch (error) {
            console.error("Capture failed:", error);
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "Unknown error occurred";
            alert(
                `Failed to capture resume: ${errorMessage}\n\nPlease check the console for more details.`
            );
        } finally {
            setIsCapturing(false);
        }
    };

    return (
        <button
            onClick={handleCapture}
            disabled={isCapturing}
            className="flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-sky-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Download resume"
        >
            <Download className="h-4 w-4" />
            {isCapturing ? "Generating PDF..." : "Download Resume"}
        </button>
    );
}
