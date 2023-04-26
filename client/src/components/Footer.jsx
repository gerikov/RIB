import logo from '../assets/RIB-logo-circle-white.png';

const Footer = () => {
  return (
    <section className='bg-black text-white'>
      <div class='container mx-auto p-4 flex justify-between py-8'>
        <div className='md:basis-1/3 flex  flex-col'>
          <h3 className='font-bold text-xl pb-4'>Social</h3>
          <a href='https://www.facebook.com/restinbeefbbq'>Facebook</a>
          <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Frestinbeefbbq%2F%3Ffbclid%3DIwAR265SpMoFaLotCG9IHL19BSF74SpRGMGyTtt525TFGSKDvtWOQnkJfxlQk&h=AT3Ly68JDyRyA1aMSJL_sT8WF2adt9AsluhcWNEjoQ7P8lX7DlLi9ojgMkcQouazlvKsAnyYG8ghgKWYe5IlrU1tpT3SeaZT9_WcJUcgK0vpHSEMywi3MvcIG2tZcRa9Epvz7Mwn30Im25U4qQsg2A'>
            Instagram
          </a>
          <a href='https://www.youtube.com/@restinbeefbbq'>Youtube</a>
        </div>
        <div className='md:basis-1/3 md:flex justify-center hidden'>
          <img src={logo} alt='' className='max-h-[120px]' />
        </div>
        <div className='md:basis-1/3 flex flex-col items-end'>
          <h3 className='font-bold text-xl pb-4'>Elérhetőség</h3>
          <p>Valentai Attila E.V.</p>
          <p>+36 (70) 423 7787</p>
          <p>restinbeefbbq@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
