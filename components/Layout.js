import Header from './Header'

const Layout = ({ children, onInputChange, showAllArticles }) => {
  return (
    <div className='layout'>
      <Header onInputChange={onInputChange} showAllArticles={showAllArticles} />

      <main className='page-content'>{children}</main>

      <footer>
        <p>
          &copy; 2021 <span>My Blog</span> by Kyle Lynch
        </p>
      </footer>

      <style jsx>{`
        .layout {
          width: min(100%, 1400px);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          background: var(--clr-bg-light);
        }

        footer {
          width: 100%;
          margin: auto;
          text-align: center;
          position: relative;
        }

        footer::before {
          content: '';
          width: 80%;
          border-top: 1px solid var(--clr-border-slight);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
        }

        footer p {
          padding: 1.1em;
          font-size: 1.05rem;
        }

        footer p span {
          font-weight: 700;
        }

        .page-content {
          background: var(--clr-bg-light);
        }

        @media screen and (min-width: 600px) {
          footer p {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Layout
