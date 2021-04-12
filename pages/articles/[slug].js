import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  })

  return {
    props: { article: items[0] },
  }
}

const ArticleDetails = ({ article }) => {
  const { title, body, author, categories, featuredImage } = article.fields
  const { createdAt } = article.sys
  console.log(article)
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
          color: #909090;
          font-size: 0.6em;
          font-weight: bold;
          text-transform: uppercase;
        }

        .banner .title {
          font-size: 1.7em;
        }

        .banner .author {
          font-size: 0.6em;
          color: #909090;
        }

        .banner .author span {
          color: firebrick;
        }
      `}</style>
    </div>
  )
}

export default ArticleDetails
