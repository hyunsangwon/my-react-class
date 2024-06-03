import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [isToggle, setToggle] = useState(false);
  const handleClick = () => {
    if (isToggle) setToggle(false);
    if (!isToggle) setToggle(true);
  };
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isToggle} readOnly onClick={handleClick} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Toggle;
