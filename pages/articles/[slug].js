import { createClient } from 'contentful'
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Skeleton from '../../components/Skeleton'
import { redirect } from 'next/dist/next-server/server/api-utils'

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

  const { title, body, author, categories, featuredImage } = article.fields
  const { createdAt } = article.sys

  return (
    <div>
      <Image
        src={`https:${featuredImage.fields.file.url}`}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
      />
      <div className='banner-content'>
        {categories.map(category => (
          <p key={category} className='categories'>
            {category}
          </p>
        ))}
        <h3 className='title'>{title}</h3>
        <p className='author'>
          Article by: <span>{author}</span> on{' '}
          {new Date(createdAt).toLocaleDateString()}
        </p>

        <div className='body-container'>{documentToReactComponents(body)}</div>

        <h4 className='return-link'>
          Return to{' '}
          <Link href='/'>
            <a>Blog</a>
          </Link>
        </h4>
      </div>

      <style jsx>{`
        .banner-content {
          padding: 0 20px 40px;
        }

        .banner-content .categories {
          padding-right: 0.5em;
          color: #7d7d7d;
          font-size: 0.5em;
          font-weight: bold;
          text-transform: uppercase;
        }

        .banner-content .title {
          font-size: 1.2em;
        }

        .banner-content .author {
          font-size: 0.6em;
          color: #7d7d7d;
        }

        .banner-content .author span {
          color: firebrick;
        }

        .banner-content .body-container {
          font-size: 0.7em;
        }

        .banner-content .return-link {
          margin-top: 80px;
          text-align: center;
        }

        .banner-content .return-link a {
          font-size: 1.2em;
          font-weight: 900;
          transition: opacity 250ms ease-out;
        }

        .banner-content .return-link a:hover {
          opacity: 0.6;
        }

        @media screen and (min-width: 1025px) {
          .banner-content .return-link a {
            text-decoration: none;
          }
        }

        @media screen and (min-width: 600px) {
          .banner-content {
            width: 80%;
            margin: auto;
          }
          .banner-content .categories {
            font-size: 0.6em;
          }
          .banner-content .title {
            font-size: 1.7em;
          }
          .banner-content .body-container {
            font-size: 0.9em;
          }
          .banner-content .return-link a {
            font-size: 1.4em;
          }
        }
      `}</style>
    </div>
  )
}

export default ArticleDetails
