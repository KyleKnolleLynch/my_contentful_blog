import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Ooops! That page cannot be found</h2>
      <p>
        You will be automatically redirected to the{' '}
        <Link href='/'>Homepage</Link> in 4 seconds
      </p>
      <style jsx>{`
        .not-found {
          padding: 0 30px;
        }
        h1 {
          font-size: 3em;
        }
        @media screen and (min-width: 768px) {
          .not-found {
            padding-bottom: 309px;
          }
        }
      `}</style>
    </div>
  )
}

export default NotFound
