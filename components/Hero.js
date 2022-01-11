import Image from 'next/image'

const Hero = ({ hero }) => {
  return (
    <div className='hero'>
      <div className='image-wrapper'>
        {/* Using image-relative div only to give hero image a parent of position relative to avoid console error  */}
        <div className='image-relative'>
          <Image
            src={`https:${hero.fields.file.url}`}
            alt='hero'
            layout='fill'
            // width={hero.fields.file.details.image.width}
            // height={hero.fields.file.details.image.height}
            objectFit='cover'
            className='hero-image'
            quality='100'
            priority
          />
        </div>
      </div>

      <div className='hero-content'>
        <h1>
          <span>My </span>
          <span>Blog</span>
        </h1>
        <h2>All things cars and tech, mostly</h2>
      </div>

      <style jsx>{`
        .hero {
          min-height: 60vh;
          position: relative;
          display: flex;
          isolation: isolate;
        }

        //  .image-wrapper positioning and -1 z-index needed to make mix-blend-mode work on .hero-content and Next Image component //
        .image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          /* inset: 0; */
          z-index: -1;
        }

        //  Using this div only to give hero image a parent of position relative to avoid console error  //
        .image-relative {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hero .hero-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20vh 0 0 2vw;
          position: relative;
          color: var(--clr-light);
        }

        .hero .hero-content::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          /* inset: 0; */
          background-color: var(--clr-primary);
          z-index: -1;
          mix-blend-mode: multiply;
        }

        .hero .hero-content h1 span:first-child {
          font-size: 1.8rem;
          font-weight: 400;
        }

        .hero .hero-content h1 span:last-child {
          font-size: 2.7rem;
          font-weight: 900;
        }

        .hero .hero-content h1,
        .hero .hero-content h2 {
          margin: 0;
        }

        .hero .hero-content h2 {
          font-size: 1.15rem;
          font-weight: 400;
        }

        @media screen and (min-width: 600px) {
          .hero .hero-content h1 {
            padding-bottom: 0.2em;
          }

          .hero .hero-content h1 span:first-child {
            font-size: 3rem;
          }

          .hero .hero-content h1 span:last-child {
            font-size: 4.6rem;
          }

          .hero .hero-content h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero
