import '../styles/globals.css'
import ToastContainer from '../components/ToastContainer'
import { ToastProvider } from '../context/ToastContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ToastProvider>
    </>
  )
}

export default MyApp
