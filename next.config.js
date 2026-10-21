/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // public/ logos are already small AVIF files. Runtime optimization
    // re-encodes every srcset width with sharp, and glibc keeps that native
    // memory. A cold homepage is enough to exceed the 512 MB Render starter
    // limit. Serving the originals skips sharp. /_next/image is disabled.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
    // Unmatched URLs need their own document because marketing and Facebook
    // offer pages use separate root layouts.
    globalNotFound: true,
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
