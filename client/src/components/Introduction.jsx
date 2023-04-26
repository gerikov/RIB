import introPic from '../assets/introduction-large.jpg';
import logoWhite from '../assets/RIB-logo-circle-white.png';
import test from '../assets/background.jpg';

const Introduction = () => {
  return (
    <section className=' bg-[#303030] flex justify-center flex-col items-center '>
      <div className='w-full flex flex-col justify-between px-4 container md:flex-row md:my-20 my-8'>
        <div className='md:basis-2/3 order-2 md:order-1 md:p-4'>
          <img src={introPic} alt='stake' className='w-full ' />
        </div>
        <div className='md:basis-1/3 order-1 md:p-4'>
          <div className='w-full flex justify-end px-2 md:-mt-40 -mt-32'>
            <img
              src={logoWhite}
              alt=''
              className='max-w-[200px] opacity-90 rotate-12'
            />
          </div>
          <div className=' mt-4'>
            <p className='text-gray-50 font-poppins font-light text-lg leading-10'>
              Szeretettel üdvözöljük minden BBQ kedvelőt és azokat, akik új
              ízeket keresnek! Nálunk a legjobb minőségű, amerikai stílusú BBQ
              sütéseket kóstolhatja meg, és garantáltan felejthetetlen élményben
              lesz része. Vendégszeretetünkkel és otthonos hangulatunkkal pedig
              biztosan azonnal otthon érezheti magát.
            </p>
            <button className='bg-red-800 py-3 px-6 uppercase text-gray-50 my-6 md:my-12 mx-auto'>
              Lássuk az időpontokat
            </button>
            <p className='outlineText uppercase md:text-9xl text-6xl font-black mb-24 hidden md:visible'>
              barbecue
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Introduction;
