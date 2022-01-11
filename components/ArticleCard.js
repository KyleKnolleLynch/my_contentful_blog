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
          <time dateTime={createdAt}>
            {new Date(createdAt).toLocaleDateString()}
          </time>
        </p>
        <button className='actions' type='button'>
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
          font-size: 0.77rem;
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
          font-size: 1.6rem;
          margin-bottom: 0;
        }

        .content .snippet {
          font-size: 1.05rem;
        }

        .content .author {
          font-size: 0.8rem;
          color: var(--clr-text-gray);
          margin-bottom: 1.5em;
        }

        .content .author span {
          color: var(--clr-primary);
        }

        .content .actions {
          align-self: flex-end;
          padding: 1.1em 1em 0.8em;
          font-size: 0.9rem;
          border-radius: var(--border-radius-md);
          background: var(--clr-primary);
        }

        .content .actions a {
          color: var(--clr-light);
          text-decoration: none;
        }

        @media screen and (min-width: 600px) {
          .content .categories {
            font-size: 0.85rem;
          }

          .content .title {
            font-size: 2.3rem;
          }

          .content .snippet {
            font-size: 1.45rem;
          }

          .content .author {
            font-size: 0.85rem;
          }

          @media screen and (min-width: 1025px) {
            .content .author {
              margin-bottom: 0;
            }

            .content .actions {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border-width: 0;
            }
          }
        }
      `}</style>
    </article>
  )
}

export default ArticleCard
