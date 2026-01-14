import {toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

export async function captureResumeAsImage(elementId: string, filename: string = 'asif'): Promise<void> {
    try {
        const element = document.getElementById(elementId);

        if (!element) {
            console.error('Element not found:', elementId);
            throw new Error('Resume element not found');
        }

        console.log(`Starting capture for PDF...`);

        // Configure options for best quality while maintaining a reasonable size
        const options = {
            quality: 1, // User requested quality
            backgroundColor: '#ffffff',
            pixelRatio: 4, // High resolution for crisp text (4x is very clear)
            style: {
                margin: '0', // Reset margins to avoid browser defaults interfering
            }
        } as const;

        // Render to JPEG for smaller file size compared to PNG
        const imgData = await toJpeg(element, options);

        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

        // Page size (mm)
        const pageW = pdf.internal.pageSize.getWidth();
        const pageH = pdf.internal.pageSize.getHeight();

        // Use full element dimensions in CSS pixels
        const elemWpx = element.scrollWidth || element.clientWidth;
        const elemHpx = element.scrollHeight || element.clientHeight;

        // Compute scale to match page width exactly means "Follow HTML design"
        // HTML is w-[210mm] which matches PDF used width.
        const scale = pageW / elemWpx;

        const renderWmm = elemWpx * scale;
        const renderHmm = elemHpx * scale;

        // Position at top-left (0,0) so HTML controls all internal spacing/margins
        const offsetXmm = 0;
        const offsetYmm = 0;

        // Premium white background for the whole page
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageW, pageH, 'F');

        // Add the image (JPEG format)
        pdf.addImage(imgData, 'JPEG', offsetXmm, offsetYmm, renderWmm, renderHmm);

        // Add clickable link annotations for ALL links (email, LinkedIn, GitHub, LeetCode, certifications)
        const anchorNodes = Array.from(element.querySelectorAll('a')) as HTMLAnchorElement[];
        const rootRect = element.getBoundingClientRect();

        // Filter to include all valid links (http/https/mailto)
        const isValidLink = (href: string) => {
            if (!href || href === '#' || href === 'javascript:void(0)') return false;
            return /^(https?:\/\/|mailto:)/i.test(href);
        };

        anchorNodes
            .filter(a => !!a.href && isValidLink(a.href))
            .forEach(a => {
                const r = a.getBoundingClientRect();
                const xPx = r.left - rootRect.left;
                const yPx = r.top - rootRect.top;
                const wPx = r.width;
                const hPx = r.height;

                const xMm = offsetXmm + xPx * scale;
                const yMm = offsetYmm + yPx * scale;
                const wMm = Math.max(0.1, wPx * scale);
                const hMm = Math.max(0.1, hPx * scale);

                try {
                    // Create a link annotation over the area
                    pdf.link(xMm, yMm, wMm, hMm, { url: a.href });
                } catch {
                    // Fallback: place an invisible textWithLink nearby if needed
                    try {
                        pdf.textWithLink(' ', xMm, yMm + 1, { url: a.href });
                    } catch {/* noop */ }
                }
            });

        // Optional metadata
        pdf.setProperties({ title: filename, subject: 'Resume PDF', author: 'Asif Faisal' });

        pdf.save(`${filename}.pdf`);

    } catch (error) {
        console.error('Error capturing resume:', error);
        throw error;
    }
}
