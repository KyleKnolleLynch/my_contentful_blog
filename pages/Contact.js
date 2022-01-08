import Meta from '../components/Meta'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const email = 'email@kylelynch.me' // TODO

  function onSubmitForm(values) {
    console.log(values)
  }

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

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor='name' className='offscreen'>
            Full name
          </label>
          <input
            type='text'
            name='name'
            {...register('name', { required: true })}
            placeholder='Full name'
          />
          <em>
            <small>{errors.name && 'Name is required'}</small>
          </em>

          <label htmlFor='email' className='offscreen'>
            Email
          </label>
          <input
            type='email'
            name='email'
            {...register('email', { required: true })}
            placeholder='Email'
          />
          <em>
            <small>{errors.email && 'Valid Email is required'}</small>
          </em>

          <label htmlFor='phone' className='offscreen'>
            Phone
          </label>
          <input
            type='text'
            name='phone'
            {...register('phone', { required: false })}
            placeholder='Phone (optional)'
          />

          <label htmlFor='message' className='offscreen'></label>
          <textarea
            name='message'
            {...register('message', { required: true })}
            rows='4'
            placeholder='Message'
          ></textarea>
          <em>
            <small>{errors.message && 'Message is required'}</small>
          </em>
          <button type='submit'>Submit</button>
        </form>
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
          letter-spacing: 0.02ch;
          word-spacing: 0.2ch;
          line-height: 1.25;
        }

        section a {
          text-decoration: underline;
          font-size: 1.4rem;
          font-weight: bold;
        }

        section form {
          width: min(100%, 500px);
          display: grid;
          grid-template-columns: 1fr;
          gap: 1em 0;
          margin: 0 auto;
          padding-top: 1.5em;
        }

        form input,
        form textarea {
          /* margin-bottom: 1em; */
          padding: 0.5em;
          font-size: 0.9rem;
        }

        form button {
          margin-bottom: 2em;
          padding: 0.7em 0;
          background: var(--clr-primary);
          color: var(--clr-light);
          font-size: 0.9rem;
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

          form input,
          form textarea,
          form button {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Contact
