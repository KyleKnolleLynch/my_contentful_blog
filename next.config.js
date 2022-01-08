module.exports = {
  disDir: 'out/',
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
      outputPath: 'static/fonts/UniversLTStd-Obl.woff2/',
      publicPath: '/_next/static/fonts/UniversLTStd-Obl.woff2/',
      outputPath: 'static/fonts/UniversLTStd-Bold.woff2/',
      publicPath: '/_next/static/fonts/UniversLTStd-Bold.woff2/',
      outputPath: 'static/fonts/UniversBlack.woff2/',
      publicPath: '/_next/static/fonts/UniversBlack.woff2/',
      limit: 1,
    },
  },
}
