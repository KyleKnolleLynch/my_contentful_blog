import Meta from '../../components/Meta'
import { createClient } from 'contentful'
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../../components/Layout'
import Skeleton from '../../components/Skeleton'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogPost',
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { article: items[0] },
    revalidate: 1,
  }
}

const ArticleDetails = ({ article }) => {
  if (!article) return <Skeleton />

  const { title, body, author, categories, featuredImage, snippet } =
    article.fields
  const { createdAt } = article.sys

  return (
    <Layout>
      <Meta title={title} desc={snippet} keywords='cars tech' />
      <section>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt='featuredImage_1400x400'
          // width={featuredImage.fields.file.details.image.width}
          // height={featuredImage.fields.file.details.image.height}
          width='1400'
          height='400'
          objectFit='cover'
          quality='100'
        />
        <article className='banner-content'>
          <p className='categories'>{categories[0]}</p>
          <h1 className='title'>{title}</h1>
          <p className='author'>
            Article by: <span>{author}</span> on{' '}
            <time dateTime={createdAt}>
              {new Date(createdAt).toLocaleDateString()}
            </time>
          </p>

          <div className='body-container'>
            {documentToReactComponents(body)}
          </div>

          <p className='return-link'>
            Return to{' '}
            <Link href='/'>
              <a>Blog</a>
            </Link>
          </p>
        </article>
      </section>
      <style jsx>{`
        .banner-content {
          padding: 14px 20px 40px;
        }

        .banner-content .categories {
          color: var(--clr-text-gray);
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        .banner-content .title {
          font-size: 1.4rem;
          margin-bottom: 0.5em;
        }

        .banner-content .author {
          font-size: 0.75rem;
          color: var(--clr-text-gray);
          padding-bottom: 1.5em;
        }

        .banner-content .author span {
          color: var(--clr-primary);
        }

        .banner-content .body-container {
          font-size: 0.9rem;
          padding-bottom: 3em;
          letter-spacing: 0.05ch;
          word-spacing: 0.5ch;
          line-height: 1.25;
        }

        .banner-content .return-link {
          text-align: center;
          font-weight: bold;
        }

        .banner-content .return-link a {
          font-size: 1.35rem;
          font-weight: 900;
        }

        @media screen and (min-width: 600px) {
          .banner-content {
            width: 80%;
            margin: auto;
          }

          .banner-content .categories {
            font-size: 0.85rem;
          }

          .banner-content .title {
            font-size: 2.4rem;
          }

          .banner-content .author {
            font-size: 0.85rem;
          }

          .banner-content .body-container {
            font-size: 1.2rem;
          }

          .banner-content .return-link {
            font-size: 1.3rem;
          }

          .banner-content .return-link a {
            font-size: 1.8rem;
            transition: opacity 250ms ease-out;
          }

          .banner-content .return-link a:hover {
            opacity: 0.6;
          }
        }
      `}</style>
    </Layout>
  )
}

export default ArticleDetails
