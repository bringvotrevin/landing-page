import img1 from '/src/assets/desktop/image-gallery-milkbottles.jpg';
import img2 from '/src/assets/desktop/image-gallery-orange.jpg';
import img3 from '/src/assets/desktop/image-gallery-cone.jpg';
import img4 from '/src/assets/desktop/image-gallery-sugarcubes.jpg';
import facebook from '/src/assets/icon-facebook.svg';
import instagram from '/src/assets/icon-instagram.svg';
import twitter from '/src/assets/icon-twitter.svg';
import pinterest from '/src/assets/icon-pinterest.svg';

const Footer = () => {
  return (
    <div className='bg-(--footer-bg) text-(--footer-font)'>
      <div className='flex'>
        <img src={img1} alt='milkbottles' className='w-48 flex-grow' />
        <img src={img2} alt='orange' className='w-48 flex-grow' />
        <img src={img3} alt='cone' className='w-48 flex-grow' />
        <img src={img4} alt='sugarcubes' className='w-48 flex-grow' />
      </div>
      <section className='flex flex-col items-center gap-6 py-12'>
        <span className='font-bold text-3xl'>sunnyside</span>
        <div className='flex-center gap-10 '>
          <span className=' font-semibold hover:brightness-[100]'>About</span>
          <span className=' font-semibold hover:brightness-[100]'>
            Services
          </span>
          <span className=' font-semibold hover:brightness-[100]'>
            Projects
          </span>
        </div>
        <div className='flex gap-6 mt-8'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={facebook}
              alt='Facebook'
              className='w-5 h-5 hover:brightness-[100]'
            />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={instagram}
              alt='Instagram'
              className='w-5 h-5 hover:brightness-[100]'
            />
          </a>
          <a
            href='https://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={twitter}
              alt='Twitter'
              className='w-5 h-5 hover:brightness-[100]'
            />
          </a>
          <a
            href='https://www.pinterest.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={pinterest}
              alt='Pinterest'
              className='w-5 h-5  hover:brightness-[100]'
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
