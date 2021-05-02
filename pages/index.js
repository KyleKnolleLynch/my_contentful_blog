import Head from 'next/head'
import { useState } from 'react'
import { createClient } from 'contentful'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
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
      avatar: structure.items[0].fields.avatar,
      revalidate: 1,
    },
  }
}

export default function Articles({ articles, hero, avatar }) {
  const [visible, setVisible] = useState(4)
  const showMoreItems = () => {
    visible < articles.length && setVisible(prev => prev + 4)
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='My personal blog homepage containing articles about tech, web development, cars, or any other personal matters of interest.'
        />
        <meta name='keywords' content='cars tech' />
        <link rel='icon' href='/Letter_B.ico' />
        <link
          rel='preload'
          href='/fonts/UniversLTStd.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/UniversLTStd-Obl.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/UniversLTStd-Bold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/UniversBlack.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <title>My Blog | Home</title>
      </Head>
      <div className='hero'>
        <Image
          src={`https:${hero.fields.file.url}`}
          alt='hero'
          layout='fill'
          // width={hero.fields.file.details.image.width}
          // height={hero.fields.file.details.image.height}
          objectFit='cover'
          className='hero-image'
          priority
        />
        <div className='overlay'></div>
        <div className='hero-content'>
          <h1>
            <span>My </span>
            <span>Blog</span>
          </h1>
          <h2>All things cars and tech, mostly</h2>
        </div>
      </div>
      <div className='article-list'>
        <div>
          <h3>Latest Articles</h3>
          {articles.slice(0, visible).map(article => (
            <ArticleCard key={article.sys.id} article={article} />
          ))}
          {visible < articles.length && (
            <button onClick={showMoreItems} className='showMore-btn'>
              Show More
            </button>
          )}
        </div>
        <div>
          <Sidebar avatar={avatar} />
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
            left: 4%;
            color: #fff;
            z-index: 5;
          }

          .hero .hero-content span {
            line-height: 1em;
          }

          .hero .hero-content h1 span:first-child {
            font-size: 0.7em;
            font-weight: 400;
          }

          .hero .hero-content h1 span:last-child {
            // color: firebrick;
            font-size: 1.1em;
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
            padding: 0 20px;
          }
          .article-list div:first-child h3 {
            margin: 0;
            padding: 2em 0;
            font-size: 1em;
            font-weight: 400;
            text-align: center;
          }

          .article-list div:first-child .showMore-btn {
            width: 100%;
            max-width: 850px;
            margin-bottom: 12vh;
            padding: 0.6em;
            font-size: 0.8em;
            font-weight: 700;
            background: firebrick;
            color: #fff;
            opacity: 0.6;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            transition: opacity 250ms ease-in-out;
          }

          .article-list div:first-child .showMore-btn:hover {
            opacity: 1;
          }

          @media screen and (min-width: 600px) {
            .hero .hero-content h1 {
              padding-bottom: 0.2em;
            }

            .hero .hero-content h1 span:first-child {
              font-size: 1.2em;
            }

            .hero .hero-content h1 span:last-child {
              font-size: 1.7em;
            }

            .hero .hero-content h2 {
              font-size: 1.2em;
            }

            .article-list div:first-child h3 {
              text-align: left;
            }
          }

          @media screen and (min-width: 768px) {
            .article-list {
              display: flex;
              flex-direction: row-reverse;
              padding-top: 20px;
            }

            .article-list div:first-child {
              width: 65%;
            }

            .article-list div:last-child {
              width: 35%;
            }
          }

          @media screen and (min-width: 1025px) {
            .article-list div:last-child {
              width: 22rem;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </>
  )
}
