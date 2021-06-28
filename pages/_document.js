import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <meta charSet='UTF-8' />
        <link
          rel='preload'
          href='/fonts/UniversLTStd.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/UniversLTStd-Bold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/UniversBlack.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link rel='icon' href='/Letter_B.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
