import Image from 'next/image'
import Link from 'next/link'

const ArticleCard = ({ article }) => {
  const { title, slug, categories, author, thumbnail, snippet } = article.fields

  const { createdAt } = article.sys

  return (
    <article className='card'>
      <Image
        src={`https:${thumbnail.fields.file.url}`}
        alt='thumbnail_600x400'
        // width={thumbnail.fields.file.details.image.width}
        // height={thumbnail.fields.file.details.image.height}
        width='600'
        height='400'
        objectFit='cover'
        quality='100'
      />

      <div className='content'>
        <div className='info'>
          <span className='categories'>{categories[0]}</span>
          <Link href={`/articles/${slug}`}>
            <a className='link-group'>
              <h3 className='title'>{title}</h3>
              <h4 className='snippet'>{snippet}</h4>
            </a>
          </Link>

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
          max-width: 850px;
          margin-bottom: 12vh;
          padding-bottom: 7vh;
          border-bottom: 2px solid var(--clr-primary);
        }

        .content {
          display: flex;
          flex-direction: column;
          padding-top: 1rem;
        }

        .info .categories {
          color: var(--clr-text-gray);
          font-size: 0.6em;
          font-weight: bold;
          text-transform: uppercase;
        }

        .info .link-group {
          text-decoration: none;
          color: inherit;
        }

        .info .link-group > * {
          transition: opacity 150ms ease-in-out;
        }

        .info .link-group:hover > * {
          opacity: 0.6;
        }

        .info .title {
          font-size: 1.1em;
          margin-bottom: 0;
        }

        .info .snippet {
          font-size: 0.8em;
        }

        .info .author {
          font-size: 0.6em;
          color: var(--clr-text-gray);
        }

        .info .author span {
          color: var(--clr-primary);
        }

        .actions {
          align-self: flex-end;
          margin-top: 1.5em;
        }
        .actions a {
          padding: 1.1rem 1rem 1rem;
          font-size: 0.7em;
          border-radius: 0.5rem;
          text-decoration: none;
          color: var(--clr-light);
          background: var(--clr-primary);
        }

        @media screen and (min-width: 600px) {
          .info .title {
            font-size: 1.4em;
          }

          .info .snippet {
            font-size: 1em;
          }

          @media screen and (min-width: 1025px) {
            .actions {
              position: absolute;
              left: -9999px;
            }
          }
        }
      `}</style>
    </article>
  )
}

export default ArticleCard
