import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='My personal blog homepage containing articles about tech, web development, cars, or any other personal matters of interest.'
        />
        <link rel='icon' href='/favicon.ico' />
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
        <title>My Blog</title>
      </Head>
      <div className='layout'>
        <header>
          <Link href='/'>
            <a>Blog</a>
          </Link>

          <Link href='!#'>
            <a>Signup/Login</a>
          </Link>
        </header>

        <div className='page-content'>{children}</div>

        <footer>
          <p>
            &copy; 2021 <em>My Blog</em> by Kyle Lynch
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
