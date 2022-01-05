import Meta from '../components/Meta'
import { createClient } from 'contentful'
import Layout from '../components/Layout'
import Image from 'next/image'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export async function getStaticProps() {
  const structure = await client.getEntries({ content_type: 'blogStructure' })

  return {
    props: {
      profileImg: structure.items[0].fields.profileImg,
    },
    revalidate: 1,
  }
}

const About = ({ profileImg }) => {
  return (
    <Layout>
      <Meta
        title='My Blog | Kyle'
        desc='About me page for my personal blog'
        keywords='cars tech'
      />

      <section>
        <h1>About Me</h1>
        <p>
          Hi, I'm Kyle, a web developer focused on the Javascript ecosystem. I
          engineered this blog as a place to discuss technology, cars, or any
          other subjects that interest me.
        </p>

        <figure>
          <Image
            src={`https:${profileImg.fields.file.url}`}
            alt='about_portrait'
            width='300'
            height='300'
            className='profile-image'
            objectFit='cover'
            quality='100'
          />
        </figure>
      </section>

      <style jsx>{`
        section {
          width: min(100%, 700px);
          margin: 0 auto;
          padding: 0.5em;
          display: flex;
          flex-direction: column;
        }

        section h1 {
          text-align: center;
          font-size: 1.8rem;
        }

        section p {
          font-size: 0.9rem;
          margin-bottom: 3em;
          letter-spacing: 0.05ch;
          word-spacing: 0.5ch;
          line-height: 1.25;
        }

        section figure {
          display: flex;
          justify-content: center;
        }

        @media screen and (min-width: 600px) {
          section {
            padding: 1em;
          }

          section h1 {
            font-size: 2rem;
          }

          section p {
            font-size: 1.2rem;
            word-spacing: unset;
          }
        }
      `}</style>
    </Layout>
  )
}

export default About
