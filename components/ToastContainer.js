import Toast from './Toast'
import { useToastStateContext } from '../context/ToastContext'

const ToastContainer = () => {
  const { toasts } = useToastStateContext()

  return (
    <div className='toast-container'>
      <div className='toast'>
        {toasts &&
          toasts.map(toast => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>

      <style jsx>{`
        .toast-container {
          width: 100%;
          position: absolute;
          bottom: 8em;
          z-index: 50;
        }

        .toast {
          width: min(100%, 40em);
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default ToastContainer
