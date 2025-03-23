const Nav = () => {
  return (
    <section className='px-10 pt-5 flex justify-between '>
      <h1 className='font-bold text-3xl'>sunnyside</h1>
      <div className='flex-center gap-6'>
        <span className='hover:brightness-0'>About</span>
        <span className='hover:brightness-0'>Services</span>
        <span className='hover:brightness-0'>Projects</span>
        <div className='group px-5 py-3 rounded-4xl bg-white fraunces-semibold hover:bg-white/40 transition-colors'>
          <span className='text-black group-hover:text-white transition-colors'>
            CONTACT
          </span>
        </div>
      </div>
    </section>
  );
};

export default Nav;
