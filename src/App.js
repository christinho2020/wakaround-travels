import React from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Destination from './components/Destination';
import Search from './components/Search';
import Selects from './components/Selects';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Destination />
      <Search />
      <Selects />
      <Carousel /> 
      <Footer />
    </div>
  );
}

export default App;
