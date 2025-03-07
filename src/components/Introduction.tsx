const Introduction = () => {
  return (
    <div className='min-h-92'>
      <h2 className='my-16 text-center fraunces-bold text-4xl tracking-widest'>
        {' '}
        WE ARE CREATIVES
      </h2>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-16 flex-center'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3'
        />
      </svg>
    </div>
  );
};

export default Introduction;
