/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow placeholder images used throughout the site (TODO: replace with real photos)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
