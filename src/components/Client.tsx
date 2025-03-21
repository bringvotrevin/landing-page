import Emily from '/src/assets/image-emily.jpg';
import Thomas from '/src/assets/image-thomas.jpg';
import Jennie from '/src/assets/image-jennie.jpg';

const Client = () => {
  return (
    <section className='p-20 flex flex-col gap-10 justify-center items-center'>
      <h3 className='fraunces-bold text-(--grayish-blue) tracking-[0.2em]'>
        CLIENT TESTIMONIALS
      </h3>
      <ul className='flex gap-7'>
        <li className='flex flex-col gap-10 items-center w-68'>
          <img src={Emily} alt='Emily R' className='rounded-full w-16' />
          <p className='text-center text-sm font-semibold text-(--dark-grayish-blue)'>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className='text-center'>
            <div className='fraunces-bold text-base'>Emily R.</div>
            <div className='font-semibold text-(--grayish-blue) text-xs'>
              Marketing Director
            </div>
          </div>
        </li>
        <li className='flex flex-col gap-10 items-center w-68'>
          <img src={Thomas} alt='Emily R' className='rounded-full w-16' />
          <p className='text-center text-sm font-semibold text-(--dark-grayish-blue)'>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <div className='text-center'>
            <div className='fraunces-bold text-base'>Thomas S.</div>
            <div className='font-semibold text-(--grayish-blue) text-xs'>
              Cheif Operationg Officer
            </div>
          </div>
        </li>
        <li className='flex flex-col gap-10 items-center w-68'>
          <img src={Jennie} alt='Emily R' className='rounded-full w-16' />
          <p className='text-center text-sm font-semibold text-(--dark-grayish-blue)'>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. <br /> Highly recommended!
          </p>
          <div className='text-center'>
            <div className='fraunces-bold text-base'>Jennie F.</div>
            <div className='font-semibold text-(--grayish-blue) text-xs'>
              Business Owner
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Client;
