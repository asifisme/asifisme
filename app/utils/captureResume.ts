import { toPng, toJpeg } from 'html-to-image';

export async function captureResumeAsImage(
    elementId: string,
    format: 'png' | 'jpg' = 'png',
    filename: string = 'resume'
): Promise<void> {
    try {
        const element = document.getElementById(elementId);

        if (!element) {
            console.error('Element not found:', elementId);
            throw new Error('Resume element not found');
        }

        console.log('Starting capture with html-to-image...');

        // Configure options for high quality
        const options = {
            quality: 0.95,
            backgroundColor: '#ffffff',
            pixelRatio: 2, // Higher resolution
            style: {
                margin: '0', // Reset margins to avoid whitespace issues
            }
        };

        let dataUrl: string;

        if (format === 'png') {
            dataUrl = await toPng(element, options);
        } else {
            dataUrl = await toJpeg(element, options);
        }

        console.log('Image generated successfully');

        // Create download link
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${filename}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('Download initiated successfully');
    } catch (error) {
        console.error('Error capturing resume:', error);
        throw error;
    }
}
