import { useState, useEffect } from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Searchbar from './Searchbar'

const Header = ({ onInputChange, showAllArticles }) => {
  const [theme, setTheme] = useState('light')
  const [showSearchbar, setShowSearchbar] = useState(-100)
  const [showMenu, setShowMenu] = useState(-100)

  //  global theme changer handling
  const changeTheme = () => {
    if (theme === 'light') {
      saveTheme('dark')
    } else {
      saveTheme('light')
    }
  }

  //  set current theme to state, global storage, and apply it
  const saveTheme = theme => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  //  get theme from local storage if it exists and apply it on render
  useEffect(() => {
    const STORED_THEME = localStorage.getItem('theme')

    if (STORED_THEME) {
      setTheme(STORED_THEME)

      document.documentElement.setAttribute('data-theme', STORED_THEME)
    }
  }, [])

  return (
    <header>
      <Link href='/'>
        <a className='logo' onClick={showAllArticles}>
          Blog
        </a>
      </Link>

      <div className='nav-actions'>
        <Searchbar
          onChange={onInputChange}
          showSearchbar={showSearchbar}
          setShowSearchbar={setShowSearchbar}
          showAllArticles={showAllArticles}
          placeholder='Enter search keywords...'
        />

        <div>
          {theme === 'light' ? (
            <button onClick={changeTheme}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-moon'
              >
                <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
              </svg>
            </button>
          ) : (
            <button onClick={changeTheme}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-sun'
              >
                <circle cx='12' cy='12' r='5'></circle>
                <line x1='12' y1='1' x2='12' y2='3'></line>
                <line x1='12' y1='21' x2='12' y2='23'></line>
                <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                <line x1='1' y1='12' x2='3' y2='12'></line>
                <line x1='21' y1='12' x2='23' y2='12'></line>
                <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
              </svg>
            </button>
          )}
        </div>

        <div className='burger' onClick={() => setShowMenu(0)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
                background: var(--clr-primary);
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                z-index: 10;
              }
              
              header .logo {
                margin: 0 0.5em;
                text-decoration: none;
                color: var(--clr-light);
                font-size: 0.9em;
                text-transform: uppercase;  
              }

              header .nav-actions {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
              }

              header .nav-actions > * {
                margin-left: 1rem;
              }

              header .nav-actions button {
                display: flex;
              }

              header .nav-actions svg {
                stroke: var(--clr-light);
              }
              
              header .burger:hover {
                cursor: pointer;
              }
              
              header .burger div {
                width: 1.1em;
                height: 2px;
                margin: 6px 0;
                background: var(--clr-light);
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
