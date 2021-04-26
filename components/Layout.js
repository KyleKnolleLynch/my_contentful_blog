import Link from 'next/link'

const Layout = ({ children }) => {
  return (
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
  )
}

export default Layout
