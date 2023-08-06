import React, { useState, createContext } from 'react';

const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <NavContext.Provider value={{ nav, handleClick }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavContextProvider };