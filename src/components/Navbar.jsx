import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';//

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode("darkmode"); //
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode); //
  };
  console.log(darkMode) //

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
