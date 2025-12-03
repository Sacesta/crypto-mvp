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
    unoptimized: true,
    domains: ['gola-nft-marketplace.infura-ipfs.io','gateway.pinata.cloud', '93.127.185.55']
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'sharp', 'canvas'];
    }
    
    // Completely bypass Next.js image optimization
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('jpg|jpeg|png|gif|webp|svg')) {
        rule.type = 'asset/resource';
        delete rule.use;
      }
    });
    
    return config;
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
