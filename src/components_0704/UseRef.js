import React, { useRef, useState } from 'react';

const UseRef = () => {
  const inputEl = useRef(null);
  const handleFocus = () => {
    inputEl.current.focus();
  };

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h3>UseRef example 01 - Access DOM Element</h3>
      <input type="text" ref={handleFocus} />
      <button onClick={handleFocus}>Focus</button>

      <h3>UseRef example 02 - Store Value(temp)</h3>
      <p>Timer : {timer}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default UseRef;
