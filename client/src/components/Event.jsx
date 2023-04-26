import moment from 'moment';
import { useState } from 'react';
import { BsCalendarEvent } from 'react-icons/bs';

const Event = ({ name, date, description, key }) => {
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
    <div className='bg-slate-200 rounded-xl md:p-8 p-5 md:w-[45%] w-full drop-shadow-l flex md:gap-5 gap-2 '>
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
        <div className='w-full flex justify-center'>
          <button>Link az eseményhez</button>
        </div>
      </div>
    </div>
  );
};
export default Event;
