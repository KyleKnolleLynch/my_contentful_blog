import { createClient } from 'contentful'
import Image from 'next/image'
import ArticleCard from '../components/ArticleCard'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export async function getStaticProps() {
  const posts = await client.getEntries({ content_type: 'blogPost' })

  const structure = await client.getEntries({ content_type: 'blogStructure' })
  return {
    props: {
      articles: posts.items,
      hero: structure.items[0].fields.hero,
      revalidate: 1,
    },
  }
}

// export async function getStaticProps() {
//   const res = await client.getEntries({ content_type: 'blogStructure' })
//   console.log(res.items[0].fields.hero.fields.file.url)
//   return {
//     props: {
//       hero: res.items[0].fields.hero,
//       revalidate: 1,
//     },
//   }
// }

export default function Articles({ articles, hero }) {
  return (
    <>
      <div className='hero'>
        <Image
          src={`https:${hero.fields.file.url}`}
          layout='fill'
          // width={hero.fields.file.details.image.width}
          // height={hero.fields.file.details.image.height}
          alt='hero'
          className='hero-image'
        />
        <div className='overlay'></div>
        <div className='hero-content'>
          <h1>
            <span>My</span>
            <span> Blog</span>
          </h1>
          <h2>Articles I Write</h2>
        </div>
      </div>
      <div className='article-list'>
        <h3>Latest Articles</h3>
        <div>
          {articles.map(article => (
            <ArticleCard key={article.sys.id} article={article} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .hero {
            min-height: 60vh;
            position: relative;
          }

          .hero .overlay {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(200, 0, 0, 0.3);
          }

          .hero .hero-content {
            position: absolute;
            top: 60%;
            left: 30px;
            color: #fff;
            z-index: 5;
          }

          .hero .hero-content span {
            line-height: 1em;
          }

          .hero .hero-content span:first-child {
            font-size: 0.6em;
            font-weight: 400;
          }

          .hero .hero-content span:last-child {
            // color: firebrick;
            font-size: 1em;
            font-weight: 900;
          }

          .hero .hero-content h1,
          .hero .hero-content h2 {
            margin: 0;
          }

          .hero .hero-content h2 {
            font-size: 0.8em;
            font-weight: 400;
          }

          .article-list {
            padding: 80px 20px;
          }
          .article-list h3 {
            margin: 0;
            padding: 1em 0 2.4em;
            font-size: 1em;
            font-weight: 400;
          }

          @media screen and (min-width: 600px) {
            .hero .hero-content span:first-child {
              font-size: 1em;
            }

            .hero .hero-content span:last-child {
              font-size: 1.5em;
            }

            .hero .hero-content h2 {
              font-size: 1.2em;
            }
          }

          @media screen and (min-width: 768px) {
            .article-list {
              display: flex;
            }
            .article-list h3 {
              padding: 0 1em;
            }
            .article-list div {
              width: 60%;
            }
          }

          @media screen and (min-width: 1025px) {
            .article-list h3 {
              width: 24rem;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}
