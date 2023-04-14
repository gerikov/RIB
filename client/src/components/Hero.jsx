//import './Hero.scss';

const Hero = () => {
  return (
    <section className=' '>
      <div className='bg-[url("./images/wazaa.jpg")] bg-cover bg-top md:screen50vh h-screen'>
        <div className='bg-gradient-to-b from-black to-transparent md:screen50vh h-screen flex justify-center '>
          <div className='flex items-center  h-full max-w-5xl w-full justify-start px-4'>
            <h2 className='md:text-6xl text-4xl text-yellow-50 uppercase leading-normal font-patua '>
              Az igazi <br />
              <span className='font-bold '>Texas BBQ</span> <br />
              életérzés
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
