/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. Only use this if you're sure.
    ignoreDuringBuilds: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_RPC_URL: process.env.NEXT_PUBLIC_RPC_URL,
  },  
  staticPageGenerationTimeout: 1000,
  images: {
    unoptimized: true, // Disable image optimization for Vercel compatibility
    domains: ['gola-nft-marketplace.infura-ipfs.io','gateway.pinata.cloud']
  },
  compiler: {
    styledComponents: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, content-type, Authorization'
          }
        ]
      }
    ];
  },
  experimental: {}
};

module.exports = nextConfig;
