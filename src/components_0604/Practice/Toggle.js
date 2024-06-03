import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [isToggle, setToggle] = useState(false);
  const [inputs, setInputs] = useState({
    value1: '',
    value2: '',
    value3: '',
  });
  const handleClick = () => {
    if (isToggle) setToggle(false);
    if (!isToggle) setToggle(true);
  };
  const handleInput = (e) => {
    let { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (inputs.value1 !== '' && inputs.value2 !== '' && inputs.value3 !== '') {
      setToggle(true);
    }
  };
  return (
    <div>
      <div style={{ border: '1px solid black', padding: '1%' }}>
        {/* 문제. input 안에있는 값을 모두 입력시 toggle 활성화 */}
        <input type="text" name="value1" placeholder="input..." onChange={handleInput} />
        <input type="text" name="value2" placeholder="input..." onChange={handleInput} />
        <input type="text" name="value3" placeholder="input..." onChange={handleInput} />
      </div>
      <label className="switch">
        <input type="checkbox" checked={isToggle} onClick={handleClick} readOnly />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Toggle;
