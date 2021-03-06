import Link from 'next/link'

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <nav
      className='menu-container'
      onClick={() => setShowMenu(-100)}
      aria-label='primary-navigation'
    >
      <ul className='menu-drop'>
        <li>
          <Link href='/'>
            <a data-text='Home'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/About' as='/kyle'>
            <a data-text='About'>About</a>
          </Link>
        </li>
        <li>
          <a
            href='https://kylelynch.me'
            target='_blank'
            rel='noopener'
            data-text='Portfolio'
          >
            Portfolio
          </a>
        </li>
        <li>
          <Link href='/Contact'>
            <a data-text='Contact'>Contact</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        .menu-container {
          width: 100%;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          /* inset: 0; */
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--clr-primary);
          transform: translateY(${showMenu}%);
          transition: transform 600ms ease-in-out;
        }

        .menu-drop {
          padding-bottom: 1.8em;
        }

        .menu-drop li {
          margin: 10px 0;
        }

        .menu-drop li a {
          font-size: 3rem;
          font-weight: 700;
          color: var(--clr-light);
          text-decoration: none;
          text-transform: uppercase;
          position: relative;
        }

        @media screen and (min-width: 600px) {
          .menu-drop {
            padding-bottom: 2.2em;
          }
          .menu-drop li a {
            font-size: 3.75rem;
          }
        }

        @media screen and (min-width: 1025px) {
          .menu-drop li a {
            color: hsla(0, 0%, 100%, 0.5);
          }

          .menu-drop li a::before {
            content: attr(data-text);
            width: 100%;
            position: absolute;
            color: var(--clr-light);
            overflow: hidden;
            transform: translateZ(0);
            transition: 700ms ease-out;
          }

          .menu-drop:hover li a::before {
            width: 0;
          }

          .menu-drop li:hover a::before {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  )
}

export default Menu
