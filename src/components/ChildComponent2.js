import React from "react";

const ChildComponent2 = ({ onSelect }) => {
  return (
    <div className="child2">
      <h2>Child Component 2</h2>
      <button id="option2-btn" onClick={() => onSelect("Option 2")}>
        Option 2
      </button>
    </div>
  );
};

export default ChildComponent2;