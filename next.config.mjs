/**
 * M55 Phase6 Next.js Integration Kit
 * - Output is static export (mobile-friendly)
 * - No image optimization (keeps build deterministic)
 */
const nextConfig = {
 // output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;
