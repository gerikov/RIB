const OrderForm = ({ setIsOpenForm }) => {
  const handleSubmit = () => {};

  return (
    <>
      <div className='fixed  h-full w-full bg-gray-950 left-0 z-30 top-0  opacity-40'></div>
      <div className='fixed h-72 w-11/12 md:max-w-[600px]  bg-gray-100 p-6 rounded-3xl drop-shadow-2xl -translate-y-1/2 top-1/2  -translate-x-1/2 left-1/2 opacity-100 z-40'>
        <div onClick={() => setIsOpenForm((prev) => !prev)}>X</div>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='flex flex-col'>
            Név
            <input type='text' name='name'  className="py-1 bg-tra"/>
          </label>
          <label className='flex flex-col'>
            Email cím
            <input type='text' name='email' className="py-1 bg-tra" />
          </label>
          <label className='flex flex-col'>
            Telefon szám
            <input type='text' name='phone' className="py-1 bg-tra" />
          </label>
          <label className='flex flex-col'>
            Létszám
            <select name='numPeople' id=''>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
            </select>
          </label>
          <button type='submit'>Elküld</button>
        </form>
      </div>
    </>
  );
};
export default OrderForm;
