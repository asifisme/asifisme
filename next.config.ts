import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  
  // Set base path for GitHub Pages project deployment
  // If deploying to https://username.github.io/, set basePath to ''
  // If deploying to https://username.github.io/repo-name/, set basePath to '/repo-name'
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better compatibility
  trailingSlash: true,
};

export default nextConfig;
