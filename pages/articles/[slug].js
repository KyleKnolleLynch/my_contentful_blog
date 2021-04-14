import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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

  return {
    props: { article: items[0] },
    revalidate: 1,
  }
}

const ArticleDetails = ({ article }) => {
  
  if(!article) return (<Skeleton />)

  const { title, body, author, categories, featuredImage } = article.fields
  const { createdAt } = article.sys

  return (
    <div className='banner'>
      <Image
        src={`https:${featuredImage.fields.file.url}`}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
      />
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

      <style jsx>{`
        .banner .categories {
          padding-right: 0.5em;
          color: #7d7d7d;
          font-size: 0.5em;
          font-weight: bold;
          text-transform: uppercase;
        }

        .banner .title {
          font-size: 1.2em;
        }

        .banner .author {
          font-size: 0.6em;
          color: #7d7d7d;
        }

        .banner .author span {
          color: firebrick;
        }

        .body-container {
          font-size: 0.7em;
        }

        @media screen and (min-width: 600px) {
          .banner .categories {
            font-size: 0.6em;
          }
          .banner .title {
            font-size: 1.7em;
          }
          .body-container {
            font-size: 1em;
          }
        }
      `}</style>
    </div>
  )
}

export default ArticleDetails
