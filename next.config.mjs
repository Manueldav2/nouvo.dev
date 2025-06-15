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
    domains: ['nouvo-dev-backend-4fd39a72f7b1.herokuapp.com'],
  },
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-*', 'lucide-react', 'react-icons'],
  }
}

export default nextConfig
