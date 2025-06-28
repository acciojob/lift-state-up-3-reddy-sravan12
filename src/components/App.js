import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import '../styles/App.css'; // Optional styling

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Lifting State Up Demo</h1>
      <p>Selected Option: <strong>{selectedOption || 'None'}</strong></p>

      <ChildComponent1 onOptionSelect={handleOptionChange} />
      <ChildComponent2 onOptionSelect={handleOptionChange} />
    </div>
  );
}

export default App;
