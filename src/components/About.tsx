import img1 from '/src/assets/desktop/image-transform.jpg';
import img2 from '/src/assets/desktop/image-stand-out.jpg';
import img3 from '/src/assets/desktop/image-graphic-design.jpg';
import img4 from '/src/assets/desktop/image-photography.jpg';

const About = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='p-16 flex flex-col justify-center item-center gap-7'>
        <h3 className='fraunces-bold text-2xl'>Transform your brand</h3>
        <p className='text-(--dark-grayish-blue) font-medium text-base'>
          we are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a className='fraunces-bold text-xs'>LEARN MORE</a>
      </div>
      <img src={img1} alt='dummy1' className='' />
      <img src={img2} alt='dummy2' className='' />
      <div className='p-16 flex flex-col justify-center item-center gap-7'>
        <h3 className='fraunces-bold text-2xl'>
          Stand out to the right audience
        </h3>
        <p className='text-(--dark-grayish-blue) font-medium text-base'>
          Using a collaborative formula of designers, researchers.
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>
        <a className='fraunces-bold text-xs '>LEARN MORE</a>
      </div>
      <div
        className='bg-cover bg-no-repeat bg-center p-16 text-center'
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className='m-5 pt-44 fraunces-bold text-xl text-(--dark-blue)'>
          Graphic Design
        </div>
        <p className='text-(--very-dark-grayish-blue) font-medium text-base'>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>
      <div
        className='bg-cover bg-no-repeat bg-center p-16 text-center'
        style={{ backgroundImage: `url(${img4})` }}
      >
        <div className='m-5 pt-44 fraunces-bold text-xl text-(--dark-blue)'>
          Photography
        </div>
        <p className='text-(--very-dark-grayish-blue) font-medium text-base'>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image
        </p>
      </div>
    </div>
  );
};

export default About;
