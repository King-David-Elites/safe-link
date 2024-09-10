/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // This will ignore type errors during build
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        //pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        //pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
