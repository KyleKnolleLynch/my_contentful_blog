import Head from 'next/head'

const Meta = ({ title, desc, keywords, robots, robotsContent }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='UTF-8' />
      <meta name='description' content={desc} />
      <meta name='keywords' content={keywords} />
      <meta name={robots} content={robotsContent} />
      <link rel='icon' href='/favicon.ico' />

      <title>{title}</title>
    </Head>
  )
}

export default Meta
