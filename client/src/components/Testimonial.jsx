import { BsChatLeftQuote } from 'react-icons/bs';

const Testimonial = ({ description, person, title = '' }) => {
  return (
    <div className='h-96 p-4 bg-slate-200  rounded-md bg-opacity-75 md:p-8'>
      <div className='text-7xl text-red-800 mb-6'>
        <BsChatLeftQuote className='w-12' />
      </div>
      <div className='font-semibold -mt-3 text-lg'>{description}</div>
      <div className='italic mt-4'>{person}</div>
    </div>
  );
};
export default Testimonial;
