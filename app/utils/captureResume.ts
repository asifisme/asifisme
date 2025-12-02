import { toPng, toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

export async function captureResumeAsImage(
    elementId: string,
    format: 'png' | 'jpg' | 'pdf' = 'png',
    filename: string = 'asif'
): Promise<void> {
    try {
        const element = document.getElementById(elementId);

        if (!element) {
            console.error('Element not found:', elementId);
            throw new Error('Resume element not found');
        }

        console.log(`Starting capture for ${format}...`);

        // Configure options for high quality
        const options = {
            quality: 0.95,
            backgroundColor: '#ffffff',
            pixelRatio: 2, // Higher resolution
            style: {
                margin: '0', // Reset margins to avoid whitespace issues
            }
        };

        if (format === 'pdf') {
            // Generate PNG first for PDF
            const imgData = await toPng(element, options);

            // A4 dimensions in mm
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${filename}.pdf`);

            console.log('PDF generated successfully');
            return;
        }

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
