import { toPng, toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

export async function captureResumeAsImage(elementId: string, format: 'png' | 'jpg' | 'pdf' = 'png', filename: string = 'asif'): Promise<void> {
    try {
        const element = document.getElementById(elementId);

        if (!element) {
            console.error('Element not found:', elementId);
            throw new Error('Resume element not found');
        }

        console.log(`Starting capture for ${format}...`);

        // Configure options for high quality output
        const options = {
            quality: 0.98,
            backgroundColor: '#ffffff',
            pixelRatio: 3, // Higher resolution for crisp text
            style: {
                margin: '0', // Reset margins to avoid whitespace issues
            }
        } as const;

        if (format === 'pdf') {
            // Render to high-res PNG, then embed with precise scaling and clickable links
            const imgData = await toPng(element, options);

            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

            // Page size (mm)
            const pageW = pdf.internal.pageSize.getWidth();
            const pageH = pdf.internal.pageSize.getHeight();

            // Use full element dimensions in CSS pixels
            const elemWpx = element.scrollWidth || element.clientWidth;
            const elemHpx = element.scrollHeight || element.clientHeight;

            // Compute uniform scale to fit inside the page (no margins for maximum area)
            const scale = Math.min(pageW / elemWpx, pageH / elemHpx);
            const renderWmm = elemWpx * scale;
            const renderHmm = elemHpx * scale;
            const offsetXmm = (pageW - renderWmm) / 2; // center horizontally
            const offsetYmm = (pageH - renderHmm) / 2; // center vertically

            // Premium white background
            pdf.setFillColor(255, 255, 255);
            pdf.rect(0, 0, pageW, pageH, 'F');

            // Add the image
            pdf.addImage(imgData, 'PNG', offsetXmm, offsetYmm, renderWmm, renderHmm);

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
                        } catch {/* noop */}
                    }
                });

            // Optional metadata
            pdf.setProperties({ title: filename, subject: 'Resume PDF', author: 'Asif Faisal' });

            pdf.save(`${filename}.pdf`);
            return;
        }

        let dataUrl: string;

        if (format === 'png') {
            dataUrl = await toPng(element, options);
        } else {
            dataUrl = await toJpeg(element, { ...options, quality: 0.98 });
        }


        // Create download link
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${filename}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        console.error('Error capturing resume:', error);
        throw error;
    }
}
