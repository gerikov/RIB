import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='fixed py-3 w-screen text-sm container'>
      <div>
        <div className='flex justify-between max-w-5xl text-slate-100 mx-auto items-center'>
          <div>
            <h2>R.I.B</h2>
          </div>
          <div>MENU</div>
          <div>
            <button className='bg-red-800 py-2 px-5'>FOGLALJ MOST</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
