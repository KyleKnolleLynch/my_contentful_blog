import { useRef } from 'react'
import { useRouter } from 'next/router'

const Searchbar = ({
  showSearchbar,
  setShowSearchbar,
  showAllArticles,
  ...rest
}) => {
  const router = useRouter()
  const inputRef = useRef()

  const submitHandler = e => {
    e.preventDefault()
    //  if no search keyword is entered, display all articles and return to top of homepage
    if (inputRef.current.value === '') {
      showAllArticles()
      router.push('/#layout')
    } else {
      //  if search keyword is entered, route to articles section and display filtered articles accordingly. close and clear text in searchbar.
      router.push('/#article-container')
      setShowSearchbar(-100)
      inputRef.current.value = ''
    }
  }

  //  open searchbar and focus keyboard on text input
  const handleSearchClick = () => {
    setShowSearchbar(0)
    inputRef.current.focus()
  }

  return (
    <>
      <div className='searchbar'>
        <form onSubmit={submitHandler}>
          <label htmlFor='search-input' className='offscreen'>
            Search my blog
          </label>
          <input type='text' id='search-input' {...rest} ref={inputRef} />
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
            <span className='offscreen'>Close Searchbar</span>
          </button>
        </form>

        <button onClick={handleSearchClick}>
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
          <span className='offscreen'>Open Searchbar</span>
        </button>
      </div>
      <style jsx>{`
        .searchbar {
          display: flex;
          align-items: center;
        }

        .searchbar form {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.7em;
          position: absolute;
          inset: 0;
          background: var(--clr-secondary);
          transform: translateY(${showSearchbar}%);
          transition: transform 500ms ease-in-out;
        }

        .searchbar input {
          width: 100%;
          font-size: 1.2rem;
          border: none;
          outline: none;
          background: var(--clr-secondary);
          color: var(--clr-light);
        }

        .searchbar input::placeholder {
          color: var(--clr-light);
        }

        .searchbar button {
          display: flex;
        }

        .searchbar .feather {
          stroke: var(--clr-light);
        }
      `}</style>
    </>
  )
}

export default Searchbar
