import React from 'react';
import './style.css'

function ChildComponent2({ onOptionSelect }) {
  return (
    <div>
      <button className='child2' onClick={() => onOptionSelect('Option 2')}>Select Option 2</button>
    </div>
  );
}

export default ChildComponent2;
