import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#FFFFFF');
  const [errorMessage, setErrorMessage] = useState('');

  const handleColorChange = (e) => {
    const value = e.target.value;
    setColor(value);
    const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(value);
    if (!isValidHex) {
      setErrorMessage('Invalid HEX color code');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="App">
      <h1>Interactive Color Picker</h1>
      <input 
        type="text" 
        value={color} 
        onChange={handleColorChange} 
        placeholder="Enter HEX Color (e.g., #FFFFFF)" 
      />
      <div className="color-preview" style={{ backgroundColor: color }}></div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default App;
