/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: false,
  
    env: {
        ZOOM_WEBHOOK_SECRET_TOKEN: process.env.ZOOM_WEBHOOK_SECRET,
      },
};

export default nextConfig;
