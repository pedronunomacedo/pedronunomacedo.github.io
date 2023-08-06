import React, { useEffect } from 'react'
import { NavContextProvider } from './contexts/NavContextProvider';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects';
import Carrer from './components/Carrer';
import ContactMe from './components/ContactMe';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          console.log("Intersecting");
          entry.target.classList.add('show');
        } else {
          console.log("Not intersecting");
          entry.target.classList.remove('show');
        }
      });
    });

    const scrollanimElements = document.querySelectorAll('.scroll-anim');
    scrollanimElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  });

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
