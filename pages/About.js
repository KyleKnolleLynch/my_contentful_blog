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
     
        <h1>About Me</h1>
        <section>
          <p>
            Hi, I'm Kyle, a web developer focused on the Javascript ecosystem. I
            engineered this blog as a place to discuss technology, cars, or any
            other subjects that interest me.
          </p>

          <div className='image-wrapper'>
            <Image
              src={`https:${profileImg.fields.file.url}`}
              alt='about_portrait'
              width='300'
              height='300'
              className='profile-image'
              objectFit='cover'
              quality='100'
            />
          </div>
        </section>
      

      <style jsx>{`
        h1 {
          margin-top: 1em;
          text-align: center;
          font-size: 1.8em;
        }

        section {
          max-width: 700px;
          margin: auto;
          padding: 0.5em;
        }

        section p {
          font-size: 0.8em;
        }

        section .image-wrapper {
          margin: 3em auto;
          display: flex;
          justify-content: center;
        }

        @media screen and (min-width: 600px) {
          h1 {
            font-size: 2em;
          }
          section {
            padding: 1em;
          }

          section p {
            font-size: unset;
          }
        }
      `}</style>
   </Layout>
  )
}

export default About
