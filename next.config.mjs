/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  // Correctly configure for GitHub Pages
  basePath: '/Suubee-Portfolios',
  assetPrefix: '/Suubee-Portfolios',
  // Remove trailing slash for GitHub Pages
  trailingSlash: false,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // Add public assets prefix
  publicRuntimeConfig: {
    basePath: '/Suubee-Portfolios',
  },
}

export default nextConfig
