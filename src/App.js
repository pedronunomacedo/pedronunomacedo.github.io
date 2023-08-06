import React, { useEffect } from 'react'
import { NavContextProvider } from './contexts/NavContextProvider';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Carrer from './components/Carrer';
import ContactMe from './components/ContactMe';
// import Test from './components/Test';

function App() {
  return (
    <NavContextProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Carrer />
      <ContactMe />
      {/* <Test /> */}
    </NavContextProvider>
  );
}

export default App;
