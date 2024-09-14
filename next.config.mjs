/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/v0-project-how-to-brew-coffee-public/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/v0-project-how-to-brew-coffee-public' : '',
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  