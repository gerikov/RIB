import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Smokers from './components/Smokers';
import Testimonials from './components/Testimonials';
import Parking from './components/Parking';
import Footer from './components/Footer';
import Events from './components/Events';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Hero />
      <Introduction />
      {/* <Smokers /> */}
      <Testimonials />
      <Events />
      <Parking />
      <Footer />
    </Provider>
  );
}

export default App;
