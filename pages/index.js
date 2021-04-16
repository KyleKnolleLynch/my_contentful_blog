import { createClient } from 'contentful'
import ArticleCard from '../components/ArticleCard'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blogPost' })

  return {
    props: {
      articles: res.items,
      revalidate: 1,
    },
  }
}

export default function Articles({ articles }) {
  return (
    <div className='article-list'>
      <h3>Latest Articles</h3>
      <div>
        {articles.map(article => (
          <ArticleCard key={article.sys.id} article={article} />
        ))}
      </div>
      <style jsx>
        {`
          .article-list {
            padding: 0 20px 80px;
          }
          .article-list h3 {
            margin: 0;
            padding: 1em 0 2.4em;
            font-size: 1em;
            font-weight: 400;
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
    </div>
  )
}
