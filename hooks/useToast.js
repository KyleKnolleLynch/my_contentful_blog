import { useToastDispatchContext } from '../context/ToastContext'

export const useToast = delay => {
  const dispatch = useToastDispatchContext()

  const toast = (type, position, message) => {
    const id = Math.random().toString(36).substr(2, 9)
    dispatch({
      type: 'ADD_TOAST',
      toast: {
        type,
        position,
        message,
        id,
      },
    })

    setTimeout(() => {
      dispatch({ type: 'DELETE_TOAST', id })
    }, delay)
  }

  return toast
}
