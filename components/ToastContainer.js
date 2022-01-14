import Toast from './Toast'
import { useToastStateContext } from '../context/ToastContext'

const ToastContainer = () => {
  const { toasts } = useToastStateContext()

  return (
    <div className='toast-container'>
      {toasts &&
        toasts.map(toast => (
          <Toast
            id={toast.id}
            key={toast.id}
            type={toast.type}
            message={toast.message}
            position={toast.position}
          />
        ))}

      <style jsx>{`
        .toast-container {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 50;
        }
      `}</style>
    </div>
  )
}

export default ToastContainer
