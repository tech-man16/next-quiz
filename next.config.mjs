/** @type {import('next').NextConfig} */
const nextConfig = { 
  exportPathMap: async () => ({ ...defaultPathMap, outDir: 'public/build' }) }

export default nextConfig;
