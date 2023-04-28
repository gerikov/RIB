const OrderForm = ({ setIsOpenForm }) => {
  const handleSubmit = (
    
  ) => { 
    
   }

  return (
    <>
      <div className='fixed  h-full w-full bg-gray-950 left-0 z-30 top-0  opacity-40'></div>
      <div className='fixed h-72 w-11/12 md:max-w-[600px]  bg-gray-100 p-6 rounded-3xl drop-shadow-2xl -translate-y-1/2 top-1/2  -translate-x-1/2 left-1/2 opacity-100 z-40'>
        <div onClick={() => setIsOpenForm((prev) => !prev)}>X</div>
        <form onSubmit={handleSubmit}>
          <label >
            <input type='text' name="name"/>
          </label>
          <label htmlFor=''>
            <input type='text' />
          </label>
        </form>
      </div>
    </>
  );
};
export default OrderForm;
