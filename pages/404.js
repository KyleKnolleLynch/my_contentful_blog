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

      <section>
        <h1>404</h1>
        <h2>Ooops! That page cannot be found</h2>
        <p>
          You will be automatically redirected to the{' '}
          <Link href='/'>
            <a>Homepage</a>
          </Link>{' '}
          in <time dateTime='PT4S'>four seconds</time>
        </p>
        <style jsx>{`
          section {
            padding: 0.5em;
          }
          h1 {
            font-size: 5rem;
          }
          h2 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          @media screen and (min-width: 600px) {
            section {
              padding: 1em;
            }
            h2 {
              font-size: 1.5rem;
            }
            p {
              font-size: unset;
            }
          }
        `}</style>
      </section>
    </Layout>
  )
}

export default NotFound
