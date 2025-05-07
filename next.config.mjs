/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Suubee-Portfolios' : '',
  // Remove trailing slash for GitHub Pages
  trailingSlash: false,
  // Fixes issues with GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Suubee-Portfolios' : '',
}

export default nextConfig
