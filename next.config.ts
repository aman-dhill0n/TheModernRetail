/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'the-modern-retail.local',
				port: '',
				pathname: '/wp-content/uploads/**',
			},
		],
	},
};

export default nextConfig;
