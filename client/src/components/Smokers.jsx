import offsetSmoker from '../assets/offset-smoker.png';
import offsetSmoker2 from '../assets/offset-smoker-2.png';
import introPic from '../assets/introduction-large.jpg';

const Smokers = () => {
  return (
    // <section className='h-screen bg-[url("./images/bg-1.png")] bg-cover bg-opacity-20 '>
    <section className=' mt-32 mb-32 h-1/2'>
      <div className='bg-gradient-to-t from-white h-full w-full  flex  justify-center'>
        <div className='max-w-5xl h-1/2 flex'>
          <div className='w-1/2 h-80 max-h-80'>
            <img
              src={offsetSmoker2}
              alt=''
              className='drop-shadow-2xl rounded-l-2xl h-[450px] object-cover'
            />
          </div>
          {/* <div className='w-1/2 bg-[url("./images/bg-1.png")] h-80 '> */}
          <div className='w-1/2 bg-slate-800 h-[450px]  text-white p-8 rounded-r-2xl flex justify-center flex-col'>
            <h3 className='text-lg font-bold uppercase mb-4'>offset smoker</h3>
            <p className='mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex
              magnam minima? Eligendi nam mollitia illum cum, recusandae minima
              rerum voluptates labore blanditiis saepe vero odit tempore
              accusamus nesciunt voluptatum?
            </p>
            <h3 className='text-lg font-bold uppercase mb-4'>Kerámia grill</h3>
            <p className='mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex
              magnam minima? Eligendi nam mollitia illum cum, recusandae minima
              rerum voluptates labore blanditiis saepe vero odit tempore
              accusamus nesciunt voluptatum?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Smokers;
