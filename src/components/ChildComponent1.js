import React from 'react';
import './style.css'

function ChildComponent1({ onOptionSelect }) {
  return (
    <div>
      <button className='child1' onClick={() => onOptionSelect('Option 1')}>Select Option 1</button>
    </div>
  );
}

export default ChildComponent1;
