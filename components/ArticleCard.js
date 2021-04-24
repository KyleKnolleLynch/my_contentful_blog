import Image from 'next/image'
import Link from 'next/link'

const ArticleCard = ({ article }) => {
  const { title, slug, categories, author, thumbnail, snippet } = article.fields

  const { createdAt } = article.sys
  console.log(article.sys)

  return (
    <div className='card'>
      <div className='featured'>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt='thumbnail'
          className='featured-image'
        />
      </div>

      <div className='content'>
        <div className='info'>
          {categories.map(category => (
            <p key={category} className='categories'>
              {category}
            </p>
          ))}
          <h3 className='title'>{title}</h3>
          <h4 className='snippet'>{snippet}</h4>
          <p className='author'>
            Article by: <span>{author}</span> on{' '}
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className='actions'>
          <Link href={`/articles/${slug}`}>
            <a>Read Article</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          margin-bottom: 12vh;
          padding-bottom: 7vh;
          border-bottom: 2px solid firebrick;
        }
        .content {
          display: flex;
          flex-direction: column;
        }
        .info .categories {
          color: #7d7d7d;
          font-size: 0.6em;
          font-weight: bold;
          text-transform: uppercase;
        }
        .info .title {
          font-size: 1.1em;
        }

        .info .snippet {
          font-size: 0.8em;
        }

        .info .author {
          font-size: 0.6em;
          color: #7d7d7d;
        }

        .info .author span {
          color: firebrick;
        }
        .actions {
          align-self: flex-end;
          margin-top: 1.5em;
        }
        .actions a {
          padding: 1rem;
          font-size: 0.7em;
          border-radius: 0.5rem;
          text-decoration: none;
          color: #fff;
          background: firebrick;
          transition: opacity 250ms ease-out;
        }
        .actions a:hover {
          opacity: 0.6;
        }

        @media screen and (min-width: 600px) {
          .info .title {
            font-size: 1.4em;
          }

          .info .snippet {
            font-size: 1em;
          }
        }
      `}</style>
    </div>
  )
}

export default ArticleCard
