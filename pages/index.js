import { createClient } from 'contentful'

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blogPost' })

  return {
    props: {
      articles: res.items,
    },
  }
}

export default function Articles({ articles }) {
  console.log(articles)
  return <div className='article-list'>Article List</div>
}
