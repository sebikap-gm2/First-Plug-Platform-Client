/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  images: {
    //this domains is only rendering mock data in components
    domains: ["lh3.googleusercontent.com", "loremflickr.com", "picsum.photos", "cloudflare-ipfs.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;