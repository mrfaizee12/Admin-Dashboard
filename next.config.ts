import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"static.nike.com"
      },
      {
        hostname:'cdn.sanity.io'
      }
    ]
  }
};

export default nextConfig;
