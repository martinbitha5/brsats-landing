/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuration pour Hostinger Cloud
  output: 'standalone',
  // S'assurer que l'application écoute sur toutes les interfaces
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig

