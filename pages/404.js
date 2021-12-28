import Meta from '../components/Meta'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <Layout>
      <Meta
        title='404'
        robots='robots'
        robotsContent='follow, noarchive, noindex'
      />

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
          h2 {
            font-size: 1.1em;
          }
          p {
            font-size: 0.8em;
          }
          @media screen and (min-width: 600px) {
            h2 {
              font-size: 1.5em;
            }
            p {
              font-size: 1em;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}

export default NotFound
