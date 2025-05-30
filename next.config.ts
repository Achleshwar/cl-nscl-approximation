import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/cl-nscl-approximation' : '',
  assetPrefix: isProd ? '/cl-nscl-approximation/' : '',
}

export default nextConfig
