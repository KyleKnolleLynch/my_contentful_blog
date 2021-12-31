import { useState, useEffect } from 'react'
import { createClient } from 'contentful'
import Meta from '../components/Meta'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
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
    },
    revalidate: 1,
  }
}

export default function Articles({ articles, hero, avatar }) {
  const [visible, setVisible] = useState(4)
  const [keyword, setKeyword] = useState('')
  const [displayedArticles, setDisplayedArticles] = useState(articles)

  //  Set selected amount of posts to display at a time
  const showMoreItems = () => {
    visible < articles.length && setVisible(prev => prev + 4)
  }

  //  Set keyword to value of searchbar input
  const onInputChange = e => {
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase())
  }

  //  Filter posts with searchbar keyword
  const filteredArticles = articles.filter(
    article =>
      article.fields.categories[0].toLowerCase().includes(keyword) ||
      article.fields.title.toLowerCase().includes(keyword) ||
      article.fields.snippet.toLowerCase().includes(keyword)
  )

  //  Show all articles/refresh filtered list, upon clicking homepage logo
  const showAllArticles = () => {
    setDisplayedArticles(articles)
  }

  //  Show articles/posts on render, based on search keywords, if none, show all articles/posts
  useEffect(() => {
    setDisplayedArticles(filteredArticles)
  }, [keyword])

  return (
    <Layout onInputChange={onInputChange} showAllArticles={showAllArticles}>
      <Meta
        title='My Blog | Home'
        desc='My personal blog homepage containing articles about tech, web development, cars, or any other personal matters of interest.'
        keywords='cars tech'
      />
      <div className='main-container'>
        <div className='hero-container'>
          <Hero hero={hero} />
        </div>

        <div className='article-container' id='article-container'>
          <h3>Latest Articles</h3>
          {displayedArticles.slice(0, visible).map(article => (
            <ArticleCard key={article.sys.id} article={article} />
          ))}
          {visible < displayedArticles.length && (
            <button onClick={showMoreItems} className='showMore-btn'>
              Show More
            </button>
          )}
        </div>

        <div className='sidebar-container'>
          <Sidebar avatar={avatar} />
        </div>

        <style jsx>
          {`
            .main-container {
              display: grid;
              grid-template-columns: fit-content 1fr 1fr;
              grid-template-areas:
                'hero hero hero'
                'articles articles articles'
                'sidebar sidebar sidebar';
              gap: 10px;
            }

            .hero-container {
              grid-area: hero;
            }

            .article-container {
              grid-area: articles;
              margin: 0 20px;
            }

            .article-container h3 {
              margin: 0;
              padding: 2em 0;
              font-size: 1em;
              font-weight: 400;
              text-align: center;
            }

            .article-container .showMore-btn {
              width: 100%;
              max-width: 850px;
              margin-bottom: 12vh;
              padding: 0.6em;
              font-size: 0.8em;
              font-weight: 700;
              background: var(--clr-primary);
              color: var(--clr-light);
              border-radius: 0.5rem;
            }

            .sidebar-container {
              grid-area: sidebar;
            }

            @media screen and (min-width: 600px) {
              .article-container h3 {
                text-align: left;
              }
            }

            @media screen and (min-width: 768px) {
              .main-container {
                grid-template-areas:
                  'hero hero hero'
                  'sidebar articles articles';
              }

              .hero-container {
                margin-bottom: 20px;
              }

              @media screen and (min-width: 1025px) {
                .article-container .showMore-btn {
                  opacity: 0.6;
                  transition: opacity 200ms ease-in-out;
                }

                .article-container .showMore-btn:hover {
                  opacity: 1;
                }
              }
            }
          `}
        </style>
      </div>
    </Layout>
  )
}
