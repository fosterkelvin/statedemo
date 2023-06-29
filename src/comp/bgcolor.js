import React, { useState, useEffect } from 'react';

function Color() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      body.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
    }
  }, [darkMode]);

  const handleBlueClick = () => {
    document.body.style.backgroundColor = 'blue';
  };

  const handleOrangeClick = () => {
    document.body.style.backgroundColor = 'orange';
  };

  const handleRedClick = () => {
    document.body.style.backgroundColor = 'red';
  };

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button onClick={handleBlueClick} style={{backgroundColor: 'blue', color: 'white'}}>Blue</button>
      <button onClick={handleOrangeClick} style={{backgroundColor: 'orange', color: 'white'}}>Orange</button>
      <button onClick={handleRedClick} style={{backgroundColor: 'red', color: 'white'}}>Red</button>
    </div>
  );
}

export default Color;