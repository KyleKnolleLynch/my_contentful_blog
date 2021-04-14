module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  use: {
    loader: 'file-loader',
    options: {
      outputPath: 'static/fonts/UniversLTStd.woff2/',
      publicPath: '/_next/static/fonts/UniversLTStd.woff2/',
      outputPath: 'static/fonts/UniversLTStd-Bold.woff2/',
      publicPath: '/_next/static/fonts/UniversLTStd-Bold.woff2/',
      outputPath: 'static/fonts/UniversLTStd-BoldObl.woff2/',
      publicPath: '/_next/static/fonts/UniversLTStd-BoldObl.woff2/',
      limit: 1,
    },
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on fs module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
}
