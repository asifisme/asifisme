'use client';
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { captureResumeAsImage } from '../utils/captureResume';

interface CaptureButtonProps {
    resumeElementId: string;
}

export default function CaptureButton({ resumeElementId }: CaptureButtonProps) {
    const [isCapturing, setIsCapturing] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleCapture = async (format: 'png' | 'jpg') => {
        setIsCapturing(true);
        setShowMenu(false);

        try {
            console.log('Attempting to capture resume as', format);
            await captureResumeAsImage(resumeElementId, format, 'Asif_Faisal_Resume');
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
        <div className="relative">
            <button
                onClick={() => setShowMenu(!showMenu)}
                disabled={isCapturing}
                className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                aria-label="Download resume as image"
            >
                <Download className="w-4 h-4" />
                {isCapturing ? 'Capturing...' : 'Download as Image'}
            </button>

            {showMenu && !isCapturing && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 min-w-[160px] z-50">
                    <button
                        onClick={() => handleCapture('png')}
                        className="w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                        Download as PNG
                    </button>
                    <button
                        onClick={() => handleCapture('jpg')}
                        className="w-full px-4 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                        Download as JPG
                    </button>
                </div>
            )}
        </div>
    );
}
