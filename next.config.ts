import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set the base path for GitHub Pages (repository name)
  basePath: '/resume',
  
  // Asset prefix for static files
  assetPrefix: '/resume/',
  
  // Enable static export
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better compatibility
  trailingSlash: true,
};

export default nextConfig;
