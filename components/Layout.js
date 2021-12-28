import Header from './Header'

const Layout = ({ children, onInputChange }) => {
  return (
    <div className='layout'>
      <Header onInputChange={onInputChange} />

      <div className='page-content'>{children}</div>

      <footer>
        <p>
          &copy; 2021 <span>My Blog</span> by Kyle Lynch
        </p>
      </footer>
      <style>
        {`
         .layout {
          width: min(100%, 1400px);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          background: #fff;
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
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
        
        footer p {
          padding: 18px;
          font-size: 0.7em;
        }
        
        footer p span {
          font-weight: 700;
        }
        
        .page-content {
          background: #fff;
        }
        
        @media screen and (min-width: 600px) {
          footer p {
            font-size: 0.9em;
          }
        }
      `}
      </style>
    </div>
  )
}

export default Layout
