# 📄 Asif Faisal - Professional Resume

A modern, responsive resume website built with Next.js 16, React 19, and Tailwind CSS 4. Deployed automatically to GitHub Pages.

## 🌐 Live Website

**Visit:** [https://asifisme.github.io/](https://asifisme.github.io/)

---

## 👨‍💻 About Me

I’m **Asif Faisal**, a passionate **Full-Stack & Financial Solutions Developer** skilled in:

-   **Backend:** Django, DRF, FastAPI
-   **Frontend:** React, Next.js
-   **Databases:** PostgreSQL, MySQL

I specialize in building secure, scalable, and data-driven fintech applications with strong backend architectures and modern frontend interfaces.

I’ve developed ERP systems, REST APIs, and financial dashboards integrated with cloud platforms like **AWS** and **GCP**, ensuring top-tier performance and security. My expertise spans backend development, frontend optimization, and database design, with a deep focus on security best practices and financial data integrity.

Combining technical precision with business understanding, I deliver end-to-end fintech solutions that are reliable, efficient, and production-ready.

---

## ✨ Features

-   **Modern Design** - Clean, professional layout with Tailwind CSS
-   **Fully Responsive** - Works perfectly on all devices
-   ⚡ **Fast Performance** - Static site generation with Next.js
-   **Auto Deploy** - Automatic deployment via GitHub Actions
-   📦 **Component-Based** - Modular and maintainable code structure

---

## 🛠️ Tech Stack

-   **Framework:** Next.js 16
-   **UI Library:** React 19
-   **Styling:** Tailwind CSS 4
-   **Language:** TypeScript 5
-   **Deployment:** GitHub Pages
-   **CI/CD:** GitHub Actions

---

## 📂 Project Structure

```
resume/
├── app/
│   ├── page.tsx              # Main resume page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── components/           # Resume components
│       ├── Header.tsx        # Name, title, contact info
│       ├── Summary.tsx       # Professional summary
│       ├── Experience.tsx    # Work experience
│       ├── Education.tsx     # Education history
│       ├── Skills.tsx        # Technical skills
│       ├── Strengths.tsx     # Key strengths
│       ├── Languages.tsx     # Languages
│       ├── Certification.tsx # Certifications
│       └── Passions.tsx      # Interests
├── public/                   # Static assets (images)
├── components/ui/            # Reusable UI components
└── .github/workflows/        # GitHub Actions CI/CD
```

---

## 🚀 Getting Started

### Prerequisites

-   Node.js 20.x or higher
-   npm or yarn

### Local Development

1.  **Clone the repository**
    ```bash
    git clone https://github.com/asifisme/resume.git
    cd resume
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    ```
    http://localhost:3000
    ```

---

## 📝 Customization

### Update Your Information

Edit `app/page.tsx` to update:

-   Personal information (name, email, links)
-   Professional summary
-   Work experience
-   Education
-   Skills and certifications

### Add Your Photo

Replace `/public/image.png` with your professional photo.

### Modify Styling

-   Global styles: `app/globals.css`
-   Tailwind config: `tailwind.config.js`
-   Component styles: Individual component files

---

## 🚢 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1.  **Commit your changes**
    ```bash
    git add .
    git commit -m "Update resume information"
    ```

2.  **Push to GitHub**
    ```bash
    git push origin main
    ```

3.  **Monitor deployment**
    -   Go to: `https://github.com/asifisme/resume/actions`
    -   Wait for the workflow to complete
    -   Your site will be live at: `https://asifisme.github.io/`

### Manual Build

```bash
npm run build
```

This generates static files in the `out/` directory.

---

## ⚙️ Configuration

### GitHub Pages Setup

1.  Go to **Repository Settings → Pages**
2.  Set **Source** to **"GitHub Actions"**
3.  The workflow will handle the rest automatically

### Next.js Configuration

The `next.config.ts` is configured for static export:

```typescript
{
  output: 'export',           // Static HTML export
  images: {
    unoptimized: true,        // No image optimization (for static hosting)
  },
  trailingSlash: true,        // Add trailing slashes to URLs
}
```

---

## 🤝 Contributing

This is a personal resume project, but feel free to:

-   Fork the repository for your own resume
-   Submit issues for bugs or suggestions
-   Create pull requests for improvements

---

## 📄 License

This project is open source and available for personal use.

---

## 👤 Author

**Asif Faisal**

-   GitHub: [@asifisme](https://github.com/asifisme)
-   LinkedIn: [asifisme](https://www.linkedin.com/in/asifisme)
-   LeetCode: [asifisme](https://www.leetcode.com/asifisme)
-   Twitter: [@asifisme](https://twitter.com/asifismeX)
-   Facebook: [asifisme](https://www.facebook.com/asifisme)
-   Instagram: [@asifisme](https://www.instagram.com/asifisme)
-   Email: f.asif.official@gmail.com
-   Phone: +8801516373037

---

## 🙏 Acknowledgments

-   Built with [Next.js](https://nextjs.org/)
-   Styled with [Tailwind CSS](https://tailwindcss.com/)
-   Deployed on [GitHub Pages](https://pages.github.com/)

---

**⭐ If you find this resume template helpful, consider giving it a star!**