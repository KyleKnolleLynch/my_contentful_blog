const Searchbar = ({ showSearchbar, setShowSearchbar, ...rest }) => {
  return (
    <>
      <div className='searchbar'>
        <div className='input-container'>
          <input type='text' {...rest} />
          <button onClick={() => setShowSearchbar(-100)}>
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
              className='feather feather-x'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </button>
        </div>

        <button onClick={() => setShowSearchbar(0)}>
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
            className='feather feather-search'
          >
            <circle cx='11' cy='11' r='8'></circle>
            <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
          </svg>
        </button>
      </div>
      <style jsx>{`
        .searchbar {
          display: flex;
          align-items: center;
          margin-left: auto;
        }

        .searchbar .input-container {
          display: flex;
          align-items: center;
          position: absolute;
          inset: 0;
          background: firebrick;
          transform: translateY(${showSearchbar}%);
          transition: transform 500ms ease-in-out;
        }

        .searchbar input {
          flex: 1;
          padding: 0.5em 1em 0.3em;
          font-size: 1.2rem;
          border: none;
          outline: none;
          background: firebrick;
          color: #fff;
        }

        .searchbar input::placeholder {
          color: #fff;
        }

        .searchbar button {
          margin: 0 1rem;
          cursor: pointer;
          background: transparent;
          border: none;
          display: flex;
        }

        .searchbar .feather {
          stroke: #fff;
        }
      `}</style>
    </>
  )
}

export default Searchbar
