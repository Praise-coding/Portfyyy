import type {NextConfig} from "next";


const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        ppr: 'incremental',
        useCache: true,
    },
    images: {
        remotePatterns: [{
            hostname: "randomuser.me"
        }, {
            hostname: "eu-west-2.graphassets.com"
        }, {
            hostname: "cdn.pixabay.com"
        }, {
            hostname: "cdn.dribbble.com"
        }]
    }
};

export default nextConfig;
