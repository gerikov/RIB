//import './Hero.scss';

const Hero = () => {
  return (
    <section>
      <div className='bg-[url("./images/wazaa.jpg")] bg-cover bg-top screen50vh z-0'>
        <div className='bg-gradient-to-b from-black to-transparent screen50vh flex justify-center '>
          <div className='flex items-center  h-full max-w-5xl w-full justify-start '>
            <h2 className='text-6xl text-yellow-50 uppercase leading-normal  font-poppins'>
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
