import introPic from '../assets/introduction-large.jpg';
import logoWhite from '../assets/RIB-logo-circle-white.png';

const Introduction = () => {
  return (
    <section className='bg-[#303030] h-screen flex justify-center'>
      <div className='max-w-5xl w-full flex justify-between relative -top-24'>
        <div className='w-1/2'>
          <img src={introPic} alt='stake' className='max-w-md' />
        </div>
        <div className='w-1/2 flex justify-end items-start'>
          <img
            src={logoWhite}
            alt=''
            className='max-w-[200px] object-scale-down opacity-90 rotate-12 pt-6'
          />
          <p>
            
          </p>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
