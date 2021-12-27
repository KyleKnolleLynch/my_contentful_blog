const Searchbar = ({ ...rest }) => {
  return (
    <>
      <div className='searchbar'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#7d7d7d'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-search'
        >
          <circle cx='11' cy='11' r='8'></circle>
          <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
        </svg>
        <input type='text' {...rest} />
      </div>
      <style jsx>{`
        .searchbar {
          display: flex;
          align-items: center;
          margin: 1rem 2rem;
          outline: 2px solid #7d7d7d;
          border-radius: 0.3rem;
        }

        .searchbar .feather-search {
          margin: auto 0.5rem;
        }

        .searchbar input {
          flex: 1;
          padding: 0.6em 0.2em 0.4em;
          font-size: 1.3rem;
          border: none;
          outline: none;
        }
      `}</style>
    </>
  )
}

export default Searchbar
