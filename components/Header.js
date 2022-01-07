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

      <nav className='nav-actions' aria-label='navigation-actions'>
        <Searchbar
          onChange={onInputChange}
          showSearchbar={showSearchbar}
          setShowSearchbar={setShowSearchbar}
          showAllArticles={showAllArticles}
          placeholder='Enter search keywords...'
        />

        {theme === 'light' ? (
          <button onClick={changeTheme} type='button'>
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
            <span className='offscreen'>Use dark theme</span>
          </button>
        ) : (
          <button onClick={changeTheme} type='button'>
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
            <span className='offscreen'>Use light theme</span>
          </button>
        )}

        <button
          className='burger-btn'
          onClick={() => setShowMenu(0)}
          type='button'
        >
          <div className='burger'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span className='offscreen'>Open menu</span>
        </button>
      </nav>

      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

      <style jsx>{`
        header {
          width: 100%;
          max-width: 1400px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1em 1.2em;
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
          font-size: 1.35rem;
          text-transform: uppercase;
        }

        header .nav-actions {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }

        header .nav-actions > * {
          margin-left: 0.7rem;
        }

        header .nav-actions button {
          display: flex;
          -webkit-tap-highlight-color: transparent;
        }

        header .nav-actions svg {
          stroke: var(--clr-light);
        }

        header .burger-btn {
          font-size: unset;
        }

        header .burger > div {
          width: 1.4em;
          height: 2px;
          margin: 6px 0;
          background: var(--clr-light);
          border-radius: 5px;
        }

        @media screen and (min-width: 600px) {
          header {
            padding: 1.2em 2em;
          }

          header .logo {
            font-size: 1.5rem;
          }

          header .nav-actions > * {
          margin-left: 1.5rem;
        }
        }
      `}</style>
    </header>
  )
}

export default Header
