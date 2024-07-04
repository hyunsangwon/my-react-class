import React, { useState } from 'react';
import './UseState.css';
const UseState = () => {
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h3>UseState example 01 - Manage Form Input</h3>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>

      <h3>UseState example 02 - Toggle Visible</h3>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Button</button>
      {isVisible && <div>Content to Show/Hide</div>}

      <h3>UseState example 03 - Dynamic Styles</h3>
      <button className={isActive ? 'active' : 'inactive'} onClick={() => setIsActive(!isActive)}>
        Click Me
      </button>

      <h3>UseState example 04 - Counters</h3>
      <div>
        <button onClick={() => setCount(count + 1)}> - </button>
        {count}
        <button onClick={() => setCount(count - 1)}> - </button>
      </div>
    </div>
  );
};

export default UseState;
