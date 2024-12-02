import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/tmdb/:path*',
                destination: 'https://api.themoviedb.org/:path*',
            },
            {
                source: '/fshare/:path*',
                destination: 'https://api.fshare.vn/:path*',
            },
            {
                source: '/terabox/:path*',
                destination: 'https://www.terabox.com/:path*',
            },
            {
                source: '/daily/:path*',
                destination: 'https://www.dailymotion.com/:path*',
            },
            {
                source: '/seeklogo/:path*',
                destination: 'https://seeklogo.com/:path*',
            },
            {
                source: '/googleapis/:path*',
                destination: 'https://www.googleapis.com/:path*',
            },
        ];
    }
};

export default nextConfig;
