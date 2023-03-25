// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }
    return config
  },
  experimental: {
    appDir: true,
  },
  transpilePackages: ['db', 'sample-package', 'util'],
}

module.exports = nextConfig
