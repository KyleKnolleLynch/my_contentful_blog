import { useToastDispatchContext } from '../context/ToastContext'

const Toast = ({ type, message, id, position }) => {
  const dispatch = useToastDispatchContext()

  return (
    <>
      {type == 'success' && (
        <div
          className={`toast-outer ${position}`}
          style={{ background: 'var(--clr-bg-success)' }}
        >
          <div className='toast-row'>
            <div className='svg-alert-type'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='var(--clr-text-success)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-check-circle'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
              </svg>
            </div>

            <div className='toast-message'>
              <p style={{ color: 'var(--clr-text-success)' }}>
                <small>{message}</small>
              </p>
            </div>

            <div className='svg-close'>
              <button
                style={{ color: 'var(--clr-text-success)' }}
                onClick={() => {
                  dispatch({ type: 'DELETE_TOAST', id })
                }}
              >
                <span className='offscreen'>Dismiss</span>
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
          </div>
        </div>
      )}

      {type == 'error' && (
        <div
          className={`toast-outer ${position}`}
          style={{ background: 'var(--clr-bg-error)' }}
        >
          <div className='toast-row'>
            <div className='svg-alert-type'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='var(--clr-text-error)'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-alert-triangle'
              >
                <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
                <line x1='12' y1='9' x2='12' y2='13'></line>
                <line x1='12' y1='17' x2='12.01' y2='17'></line>
              </svg>
            </div>

            <div className='toast-message'>
              <p style={{ color: 'var(--clr-text-error)' }}>
                <small>{message}</small>
              </p>
            </div>

            <div className='svg-close'>
              <button
                style={{ color: 'var(--clr-text-error)' }}
                onClick={() => {
                  dispatch({ type: 'DELETE_TOAST', id })
                }}
              >
                <span className='offscreen'>Dismiss</span>
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
          </div>
        </div>
      )}

      <style jsx>{`
        .toast-outer {
          width: min(100%, 40em);
          margin: 1em;
          padding: 1em;
          position: fixed;
          border-radius: var(--border-radius-md);
          box-shadow: 0 0 14px hsl(0, 0%, 60%);
          opacity: 0.9;
        }

        /*  toast positions  */
        .top-left {
          top: 0.5em;
          left: 0.5em;
          animation: slideInLeft 700ms;
        }

        .top-right {
          top: 0.5em;
          right: 0.5em;
          animation: slideInRight 700ms;
        }

        .bottom-left {
          bottom: 0.5em;
          left: 0.5em;
          animation: slideInLeft 700ms;
        }

        .bottom-right {
          bottom: 0.5em;
          right: 0.5em;
          animation: slideInRight 700ms;
        }

        .toast-row {
          display: flex;
          align-items: center;
        }

        .svg-alert-type {
          flex-shrink: 0;
        }

        .toast-message {
          margin-left: 1em;
        }

        .toast-message p {
          font-weight: bold;
        }

        .svg-close {
          margin-left: auto;
          padding-left: 0.5em;
        }

        .svg-close button {
          display: inline-flex;
          border-radius: var(--border-radius-md);
          padding: 0.3em;
        }

        .svg-close button:hover {
          outline: 2px solid;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translate(0%);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translate(0%);
          }
        }
      `}</style>
    </>
  )
}

export default Toast
