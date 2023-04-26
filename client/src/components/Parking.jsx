import parkingPic from '../assets/parking.jpg';

const Parking = () => {
  return (
    <section className=' bg-[#303030] flex justify-center flex-col items-center '>
      <div className='w-full flex flex-col justify-between px-4 container md:flex-row md:my-20 my-8'>
        <div className='basis-1/2 flex justify-center'>
          <img
            src={parkingPic}
            alt='térkép parkoláshoz'
            className='rounded-lg max-h-[650px]'
          />
        </div>
        <div className='basis-1/2 flex flex-col justify-center text-gray-50 font-poppins font-light text-lg leading-10'>
          <p>Kedves Vendégeink!</p>
          <p>
            Parkolási információt hoztunk Nektek és egy kéréssel fordulunk
            Hozzátok!
          </p>
          <p>
            Arra kérnénk a hozzánk érkezőket, hogy a mánfai temetővel szemben
            található közterületen parkoljanak (tőlünk 3 perc séta), hogy
            elkerülhető legyen a környékbeli ingatlanok elé/út szélére történő
            féreállás. Köszönjük! 😍
          </p>
          <p className='font-semibold mt-8'>Cím: 7304 Mánfa Kaposvári út 18</p>
          <a href='https://goo.gl/maps/zTj92Y71f2JTQAoL8'>
            <button className='bg-transparent border font-semibold border-white px-6 py-2 w-fit text-white mt-8 hover:bg-white hover:text-[#303030] duration-300'>
              Megnyitás térképen
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Parking;
