import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Smokers from './components/Smokers';
import Testimonials from './components/Testimonials';
import Parking from './components/Parking';
import Footer from './components/Footer';
import Events from './components/Events';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      {/* <Smokers /> */}
      <Testimonials />
      <Events />
      <Parking />
      <Footer />
    </>
  );
}

export default App;
