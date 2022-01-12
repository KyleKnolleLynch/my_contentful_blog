import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'
import Meta from '../components/Meta'
import Layout from '../components/Layout'

const Contact = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: '/api/contactme',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    }

    try {
      const response = await axios(config)
      if (response.status === 200) {
        reset()
        router.push('/')
        alert('Message successfully sent!')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <Meta
        title='My Blog | Contact'
        desc='Contact page and contact form for my personal blog site'
        keywords='tech cars'
      />

      <section>
        <h1>Contact</h1>
        <p>
          I would really like to hear your feedback, and I welcome suggestions
          for improvements or ideas for future article topics.
          <br />
          <br />
          Feel free to reach out..
        </p>

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor='name' className='offscreen'>
            Full name
          </label>
          <input
            type='text'
            name='name'
            {...register('name', {
              required: true,
              pattern: /(.|\s)*\S(.|\s)*/,
            })}
            className={errors.name && 'error-outline'}
            placeholder='Full name'
          />
          <span className='error-text'>
            <em>
              <small>
                {errors.name?.type === 'required' && 'Your name is required'}
                {errors.name?.type === 'pattern' && 'Your name is required'}
              </small>
            </em>
          </span>

          <label htmlFor='email' className='offscreen'>
            Email
          </label>
          <input
            type='text'
            name='email'
            {...register('email', {
              required: true,
              pattern:
                /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
            })}
            className={errors.email && 'error-outline'}
            placeholder='Email'
          />
          <span className='error-text'>
            <em>
              <small>
                {errors.email?.type === 'required' && 'Valid Email is required'}
                {errors.email?.type === 'pattern' &&
                  'Please enter a valid email'}
              </small>
            </em>
          </span>

          <label htmlFor='phone' className='offscreen'>
            Phone
          </label>
          <input
            type='text'
            name='phone'
            {...register('phone', {
              required: false,
              pattern:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            })}
            placeholder='Phone (optional)'
          />
          <span className='error-text'>
            <em>
              <small>
                {errors.phone?.type === 'pattern' &&
                  'Please enter a valid phone number'}
              </small>
            </em>
          </span>

          <label htmlFor='message' className='offscreen'></label>
          <textarea
            name='message'
            {...register('message', {
              required: true,
              maxLength: 1000,
              pattern: /^[a-zA-Z0-9-\s\S]{20,}\b/,
              // pattern: /^[\S\s]{20,1000}$/,
            })}
            className={errors.message && 'error-outline'}
            rows='4'
            placeholder='Message'
          ></textarea>
          <span className='error-text'>
            <em>
              <small>
                {(errors.message?.type === 'required' &&
                  'You need to enter your message') ||
                  (errors.message?.type === 'maxLength' &&
                    "Your message can't be more than 1000 characters long") ||
                  (errors.message?.type === 'pattern' &&
                    'Your message must be at least 20 characters long')}
              </small>
            </em>
          </span>

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
          padding: 0.5em;
          font-size: 0.9rem;
          border-radius: var(--border-radius-sm);
        }

        form input:focus,
        form textarea:focus {
          outline: 2px solid var(--clr-outline-focus);
        }

        form button {
          margin-bottom: 2em;
          padding: 0.7em 0;
          background: var(--clr-primary);
          color: var(--clr-light);
          font-size: 0.9rem;
          font-weight: bold;
          border-radius: var(--border-radius-sm);
        }

        form .error-text {
          color: var(--clr-text-error);
        }

        form .error-outline {
          outline: 2px solid var(--clr-text-error);
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
