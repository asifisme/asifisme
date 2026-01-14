'use client';
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { captureResumeAsImage } from '../utils/captureResume';

interface CaptureButtonProps {
    resumeElementId: string;
}

export default function CaptureButton({ resumeElementId }: CaptureButtonProps) {
    const [isCapturing, setIsCapturing] = useState(false);

    const handleCapture = async () => {
        setIsCapturing(true);

        try {
            console.log('Attempting to capture resume as PDF');
            await captureResumeAsImage(resumeElementId, 'asif');
            console.log('Capture successful');
        } catch (error) {
            console.error('Capture failed:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            alert(`Failed to capture resume: ${errorMessage}\n\nPlease check the console for more details.`);
        } finally {
            setIsCapturing(false);
        }
    };

    return (
        <button
            onClick={handleCapture}
            disabled={isCapturing}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            aria-label="Download resume"
        >
            <Download className="w-4 h-4" />
            {isCapturing ? 'Generating PDF...' : 'Download Resume'}
        </button>
    );
}
