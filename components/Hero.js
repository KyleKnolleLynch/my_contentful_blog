import Image from 'next/image'

const Hero = ({ hero }) => {
  return (
    <>
      <div className='hero'>
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
        <div className='overlay'></div>
        <div className='hero-content'>
          <h1>
            <span>My </span>
            <span>Blog</span>
          </h1>
          <h2>All things cars and tech, mostly</h2>
        </div>
      </div>
      <style>
        {`
            .hero {
                min-height: 60vh;
                position: relative;
              }
  
              .hero .overlay {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: rgba(200, 0, 0, 0.3);
              }
  
              .hero .hero-content {
                position: absolute;
                top: 60%;
                left: 4%;
                color: #fff;
                z-index: 5;
              }
  
              .hero .hero-content span {
                line-height: 1em;
              }
  
              .hero .hero-content h1 span:first-child {
                font-size: 0.7em;
                font-weight: 400;
              }
  
              .hero .hero-content h1 span:last-child {
                // color: firebrick;
                font-size: 1.1em;
                font-weight: 900;
              }
  
              .hero .hero-content h1,
              .hero .hero-content h2 {
                margin: 0;
              }
  
              .hero .hero-content h2 {
                font-size: 0.8em;
                font-weight: 400;
              }

              @media screen and (min-width: 600px) {
                .hero .hero-content h1 {
                  padding-bottom: 0.2em;
                }
  
                .hero .hero-content h1 span:first-child {
                  font-size: 1.2em;
                }
  
                .hero .hero-content h1 span:last-child {
                  font-size: 1.7em;
                }
  
                .hero .hero-content h2 {
                  font-size: 1.2em;
                }
              }
        `}
      </style>
    </>
  )
}

export default Hero
