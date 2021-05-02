import Meta from '../components/Meta'

const Contact = () => {
  const email = 'email@kylelynch.me'

  return (
    <>
      <Meta
        title='My Blog | Contact'
        desc='Contact page for my personal blog site'
        keywords='tech cars'
      />
      <div>
        <h1>Contact</h1>
        <section>
          <p>Feel free to reach out to me at..</p>
          <h2>
            <a href={`mailto:${email}`}>email@kylelynch.me</a>
          </h2>
          <p>
            I would really like to hear your feedback and welcome suggestions
            for improvements or ideas for future article topics.{' '}
          </p>
        </section>
      </div>

      <style jsx>{`
        h1 {
          margin-top: 1em;
          text-align: center;
          font-size: 1.8em;
        }

        section {
          max-width: 700px;
          margin: auto;
          padding: 0.5em;
        }

        h2 a {
          text-decoration: underline;
          cursor: pointer;
        }

        section p {
          font-size: 0.9em;
        }

        @media screen and (min-width: 600px) {
          h1 {
            font-size: 2em;
          }

          section {
            padding: 1em;
          }

          section p {
            font-size: 1em;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
