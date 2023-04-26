import moment from 'moment';
import { useState } from 'react';

const Event = ({ name, date, description, key }) => {
  let formattedDate = moment(date);
  formattedDate = formattedDate.format('MM.DD');

  const [toggle, setToggle] = useState({});

  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  }

  return (
    <div className='bg-slate-200 rounded-xl p-8 w-[600px] drop-shadow-l flex gap-5'>
      <div className=' font-patua text-3xl font-semibold flex justify-start items-center p-2'>
        {formattedDate}
      </div>
      <div className='flex flex-col justify-between gap-6 w-full'>
        <div className='font-bold text-xl'>{name}</div>
        {toggle[key] && <div>{description}</div>}
        <div className='w-full flex justify-end'>
          <button
            onClick={() => toggleFunction(key)}
            className='text-red-800 border-red-800 border  duration-300 w-fit px-6 py-2'
          >
            Részletek
          </button>
        </div>
      </div>
    </div>
  );
};
export default Event;
