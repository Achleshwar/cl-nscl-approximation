import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cl-nscl-approximation',
  assetPrefix: '/cl-nscl-approximation/',
}

export default nextConfig
