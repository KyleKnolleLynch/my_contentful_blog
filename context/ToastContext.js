import { useReducer, createContext, useContext } from 'react'

const ToastStateContext = createContext({ toasts: [] })
const ToastDispatchContext = createContext(null)

const ToastReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST': {
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      }
    }
    case 'DELETE_TOAST': {
      const updatedToasts = state.toasts.filter(toast => toast.id !== action.id)
      return {
        ...state,
        toasts: updatedToasts,
      }
    }
    default: {
      throw new Error('unhandled reducer action')
    }
  }
}

export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToastReducer, {
    toasts: [],
  })

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  )
}

export const useToastStateContext = () => useContext(ToastStateContext)
export const useToastDispatchContext = () => useContext(ToastDispatchContext)
