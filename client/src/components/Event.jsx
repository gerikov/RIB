import moment from 'moment';
import { useState } from 'react';
import { BsCalendarEvent } from 'react-icons/bs';
import './Event.scss';

const Event = ({ name, date, description, key, remaining, soldOut }) => {
  let formattedDate = moment(date);
  const month = formattedDate.format('MM');
  const day = formattedDate.format('DD');
  // const day = formattedDate.format('MM.DD');

  const [toggle, setToggle] = useState({});

  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }

  return (
    <div className='relative bg-slate-200 rounded-xl md:p-8 p-5 md:w-[45%] w-full drop-shadow-l flex md:gap-5 gap-2 h-max min-h-[220px]'>
      {remaining === 0 && (
        <>
          <div className='w-full h-full absolute z-10 bg-black top-0 left-0 rounded-xl flex justify-center items-center opacity-60'></div>
          <div className='z-20 w-full h-full top-0 left-0 rounded-xl flex justify-center items-center absolute'>
            <p className='text-4xl font-extrabold text-white notTrasparent uppercase tracking-widest -rotate-12'>
              megtelt
            </p>
          </div>
        </>
      )}
      <div className=' font-patua md:text-3xl text-2xl font-semibold flex flex-col justify-center items-center  md:basis-1/3 basis-1/4 gap-4'>
        <span>
          <BsCalendarEvent size={46} />
        </span>
        <span>
          {month}.{day}
        </span>
      </div>
      <div className='flex flex-col justify-between gap-2 w-full'>
        <div className=' flex md:flex-row flex-col justify-between items-center'>
          <div className='font-bold text-xl '>
            <p className='text-center'>{name}</p>
          </div>
          <div>
            <button
              onClick={() => toggleFunction(key)}
              className='text-red-800 font-semibold  duration-300 w-fit  py-2'
            >
              Részletek
            </button>
          </div>
        </div>
        {toggle[key] && <div>{description}</div>}
        {remaining !== 0 && (
          <div className='w-full flex justify-center font-semibold'>
            Szabad helyek száma: {remaining}
          </div>
        )}
        <div className='w-full flex justify-center mt-2'>
          <button
            disabled={remaining === 0}
            className='bg-red-800 px-6 py-2 text-white font-semibold rounded-lg disabled:bg-gray-400 disabled:'
          >
            Foglalás
          </button>
        </div>
      </div>
    </div>
  );
};
export default Event;
