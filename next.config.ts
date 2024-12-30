import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'cdn.sanity.io',
      'live.staticflickr.com'
    ],
  },
};

export default nextConfig;
