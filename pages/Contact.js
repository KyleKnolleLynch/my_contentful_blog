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
          Feel free to reach out..
          <br />
          <br />
          <a href={`mailto:${email}`}>email@kylelynch.me</a>
          <br />
          <br />I would really like to hear your feedback, and I welcome
          suggestions for improvements or ideas for future article topics.{' '}
        </p>
      </section>

      <style jsx>{`
        section {
          width: min(100%, 700px);
          margin: 0 auto;
          padding: 0.5em;
        }

        section h1 {
          text-align: center;
          font-size: 1.8rem;
        }

        section p {
          font-size: 0.9rem;
          letter-spacing: 0.05ch;
          word-spacing: 0.5ch;
          line-height: 1.25;
        }

        section a {
          text-decoration: underline;
          font-size: 1.4rem;
          font-weight: bold;
        }

        @media screen and (min-width: 600px) {
          section {
            padding: 1em;
          }

          section h1 {
            font-size: 2rem;
          }

          section p {
            font-size: 1.2rem;
            word-spacing: unset;
          }

          section a {
            font-size: 1.7rem;
            cursor: pointer;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Contact
