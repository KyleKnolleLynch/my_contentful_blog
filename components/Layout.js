import { useState } from 'react'
import Link from 'next/link'
import Menu from './Menu'

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(-100)
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <a className='logo'>Blog</a>
        </Link>

        <div className='burger' onClick={() => setShowMenu(0)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>
          &copy; 2021 <span>My Blog</span> by Kyle Lynch
        </p>
      </footer>
    </div>
  )
}

export default Layout
