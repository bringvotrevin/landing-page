import Emily from '/src/assets/image-emily.jpg';
import Thomas from '/src/assets/image-thomas.jpg';
import Jennie from '/src/assets/image-jennie.jpg';

const Client = () => {
  return (
    <section className='p-20 flex flex-col gap-10 justify-center items-center'>
      <h3 className='fraunces-bold text-(--grayish-blue) tracking-[0.2em]'>
        CLIENT TESTIMONIALS
      </h3>
      <ul className='flex'>
        <li className='flex flex-col gap-10 items-center w-72'>
          <img src={Emily} alt='Emily R' className='rounded-full w-16' />
          <p className='text-center text-sm font-semibold text-(--dark-grayish-blue)'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            repudiandae aperiam eum dolorem libero. Vero tempora nihil,
          </p>
          <div className='text-center'>
            <div className='fraunces-bold'>Emily R.</div>
            <div className='font-semibold text-(--dark-grayish-blue) text-sm'>
              Marketing Director
            </div>
          </div>
        </li>
        <li className='flex flex-col gap-10 items-center w-72'>
          <img src={Thomas} alt='Emily R' className='rounded-full w-16' />
          <p className='text-center text-sm font-semibold text-(--dark-grayish-blue)'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            repudiandae aperiam eum dolorem libero. Vero tempora nihil,
          </p>
          <div className='text-center'>
            <div className='fraunces-bold'>Thomas S.</div>
            <div className='font-semibold text-(--dark-grayish-blue) text-sm'>
              Cheif Operationg Officer
            </div>
          </div>
        </li>
        <li className='flex flex-col gap-10 items-center w-72'>
          <img src={Jennie} alt='Emily R' className='rounded-full w-16' />
          <p className='text-center text-sm font-semibold text-(--dark-grayish-blue)'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            repudiandae aperiam eum dolorem libero. Vero tempora nihil,
          </p>
          <div className='text-center'>
            <div className='fraunces-bold'>Jennie F.</div>
            <div className='font-semibold text-(--dark-grayish-blue) text-sm'>
              Business Owner
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Client;
