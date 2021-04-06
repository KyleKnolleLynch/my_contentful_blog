import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='layout'>
        <header>
          <Link href='/'>
            <a>
              <h1>
                <span>My</span>
                <span> Blog</span>
              </h1>
              <h2>Articles I Write</h2>
            </a>
          </Link>
        </header>

        <div className='page-content'>{children}</div>

        <footer>
          <p>
            &copy; 2021 <em>My Blog</em> Articles by Kyle Lynch
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
