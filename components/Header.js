import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Menu from './Menu'
import Searchbar from './Searchbar'

const Header = ({ onInputChange }) => {
  const [showSearchbar, setShowSearchbar] = useState(-100)
  const [showMenu, setShowMenu] = useState(-100)
  const router = useRouter()
  return (
    <header>
      <Link href='/'>
        <a className='logo'>Blog</a>
      </Link>

      {router.pathname === '/' && (
        <Searchbar
          onChange={onInputChange}
          showSearchbar={showSearchbar}
          setShowSearchbar={setShowSearchbar}
          placeholder='Enter search keywords...'
        />
      )}

      <div className='burger' onClick={() => setShowMenu(0)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <style>
        {`
            header {
                width: 100%;
                max-width: 1400px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 20px;
                background: firebrick;
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                z-index: 10;
              }
              
              header .logo {
                margin: 0 0.5em;
                text-decoration: none;
                color: #fff;
                font-size: 0.9em;
                text-transform: uppercase;  
              }
              
              header .burger:hover {
                cursor: pointer;
              }
              
              header .burger div {
                width: 1.1em;
                height: 2px;
                margin: 6px 0;
                background: #fff;
                border-radius: 5px;
              }

                
        @media screen and (min-width: 600px) {
                header {
                padding: 22px 60px;
                }
            
                header .logo {
                font-size: 1em;
                }
            }
          `}
      </style>
    </header>
  )
}

export default Header
