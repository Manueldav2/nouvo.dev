// next.config.mjs
var nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
    domains: ["nouvo-dev-backend-4fd39a72f7b1.herokuapp.com"]
  },
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@radix-ui/react-*", "lucide-react", "react-icons"]
  }
};
var next_config_default = nextConfig;
export {
  next_config_default as default
};
