const Sidebar = ({ avatar }) => {
  return (
    <div className='sidebar-profile'>
      <div>
        <img
          src={`https://${avatar.fields.file.url}`}
          alt='kyle avatar'
          width={avatar.fields.file.details.image.width}
          height={avatar.fields.file.details.image.height}
          className='avatar'
        />
        <p>
          Blog by <span>Kyle Lynch</span>
        </p>
        <p>
          Visit my{' '}
          <a
            href='https://kylelynch.me'
            target='_blank'
            rel='noopener'
            className='portfolio-link'
          >
            Portfolio
          </a>
        </p>
      </div>
      <ul className='link-icons'>
        <li>
          <a
            href='https://github.com/kyleknollelynch'
            target='_blank'
            rel='noopener'
          >
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>GitHub icon</title>
              <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
            </svg>
          </a>
        </li>
        <li>
          <a
            href='https://codepen.io/kyleknollelynch'
            target='_blank'
            rel='noopener'
          >
            <svg
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <title>CodePen icon</title>
              <path d='M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z' />
            </svg>
          </a>
        </li>
      </ul>

      <style jsx>{`
        .sidebar-profile {
          margin-top: 2em;
          display: flex;
          flex-direction: column;
        }

        .sidebar-profile .avatar {
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .sidebar-profile p {
          margin: 0 0 0.3em;
          font-size: 0.6em;
        }
        .sidebar-profile p:first-of-type span {
          font-weight: 700;
        }

        .sidebar-profile .portfolio-link {
          font-style: oblique;
        }

        .sidebar-profile .link-icons {
          display: flex;
          padding: 0;
        }

        .sidebar-profile .link-icons li {
          margin-right: 24px;
          list-style-type: none;
        }

        .sidebar-profile .link-icons svg {
          width: 40px;
          height: 40px;
        }

        @media screen and (min-width: 768px) {
          .sidebar-profile {
            flex-direction: row;
            justify-content: space-around;
            padding: 8vh 2em 0;
          }

          .sidebar-profile .link-icons {
            flex-direction: column;
            margin-top: 3em;
          }

          .sidebar-profile .link-icons li {
            margin: 0 0 24px;
          }
        }

        @media screen and (min-width: 1025px) {
          .sidebar-profile .link-icons li a:hover {
            fill: rgba(178, 34, 34, 0.4);
          }
        }
      `}</style>
    </div>
  )
}

export default Sidebar
