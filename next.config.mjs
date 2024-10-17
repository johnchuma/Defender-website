/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_IMAGE_PROTOCOL || 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME || 'example.com',
        port: process.env.NEXT_PUBLIC_IMAGE_PORT || '', 
        pathname: process.env.NEXT_PUBLIC_IMAGE_PATHNAME || '/images/*',
      },
    ],
  },
};

export default nextConfig;
