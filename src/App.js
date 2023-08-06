import React from 'react'
import { NavContextProvider } from './contexts/NavContextProvider';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects';
import Carrer from './components/Carrer';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <NavContextProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Carrer />
      <ContactMe />
    </NavContextProvider>
  );
}

export default App;
