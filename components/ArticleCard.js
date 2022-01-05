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

      <section className='content'>
        <p className='categories'>{categories[0]}</p>
        <Link href={`/articles/${slug}`}>
          <a className='link-group'>
            <h2 className='title'>{title}</h2>
            <h3 className='snippet'>{snippet}</h3>
          </a>
        </Link>
        <p className='author'>
          Article by: <span>{author}</span> on{' '}
          {new Date(createdAt).toLocaleDateString()}
        </p>
        <button className='actions'>
          <Link href={`/articles/${slug}`}>
            <a>Read Article</a>
          </Link>
        </button>
      </section>

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
        }

        .content .categories {
          color: var(--clr-text-gray);
          font-size: 0.6em;
          font-weight: bold;
          text-transform: uppercase;
        }

        .content .link-group {
          text-decoration: none;
          color: inherit;
        }

        .content .link-group > * {
          transition: opacity 150ms ease-in-out;
        }

        .content .link-group:hover > * {
          opacity: 0.6;
        }

        .content .title {
          font-size: 1.2em;
          margin-bottom: 0;
        }

        .content .snippet {
          font-size: 0.75em;
        }

        .content .author {
          font-size: 0.55em;
          color: var(--clr-text-gray);
        }

        .content .author span {
          color: var(--clr-primary);
        }

        .content .actions {
          align-self: flex-end;
          margin-top: 1.5em;
          padding: 1.1rem 1rem 0.8rem;
          font-size: 0.7em;
          border-radius: 0.5rem;
          background: var(--clr-primary);
        }

        .content .actions a {
          color: var(--clr-light);
          text-decoration: none;
        }

        @media screen and (min-width: 600px) {
          .content .title {
            font-size: 1.5em;
          }

          .content .snippet {
            font-size: 0.95em;
          }

          @media screen and (min-width: 1025px) {
            .content .actions {
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
