import Meta from '../components/Meta'
import Layout from '../components/Layout'

const Contact = () => {
  const email = 'email@kylelynch.me'

  return (
    <Layout>
      <Meta
        title='My Blog | Contact'
        desc='Contact page for my personal blog site'
        keywords='tech cars'
      />

      <section>
        <h1>Contact</h1>
        <p>
          Feel free to reach out to me at..
          <br />
          <br />
          <a href={`mailto:${email}`}>email@kylelynch.me</a>
          <br />
          <br />I would really like to hear your feedback and I welcome
          suggestions for improvements or ideas for future article topics.{' '}
        </p>
      </section>

      <style jsx>{`
        section {
          max-width: 700px;
          margin: auto;
          padding: 0.5em;
        }

        h1 {
          text-align: center;
          font-size: 1.8em;
        }

        a {
          text-decoration: underline;
          cursor: pointer;
          font-size: 1.4em;
          font-weight: bold;
        }

        p {
          font-size: 0.8em;
        }

        @media screen and (min-width: 600px) {
          section {
            padding: 1em;
          }

          h1 {
            font-size: 2em;
          }

          a {
            font-size: 1.7em;
          }

          p {
            font-size: unset;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Contact
