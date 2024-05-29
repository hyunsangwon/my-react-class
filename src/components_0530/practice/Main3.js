import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Main.css';

const Main = () => {
  /*
    useState 사용법
    onChange, onClick
  */
  const [initArray, setArray] = useState([]);
  const [inputs, setInputs] = useState({
    userName: '',
    userPhone: '',
    userAddr: '',
    remarks: '',
  });

  const handleInput = (e) => {
    let { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleButton = () => {
    setArray([...initArray, inputs]);
  };

  return (
    <>
      <div className="container">
        <h1>useState 연습2</h1>
        <div className="login-form">
          <div className="txt-field">
            <input name="userName" type="text" required onChange={handleInput} />
            <label>이름</label>
          </div>
          <div className="txt-field">
            <input name="userPhone" type="text" required onChange={handleInput} />
            <label>연락처</label>
          </div>
          <div className="txt-field">
            <input name="userAddr" type="text" required onChange={handleInput} />
            <label>주소</label>
          </div>
          <div className="txt-field">
            <input name="remarks" type="text" required onChange={handleInput} />
            <label>비고</label>
          </div>
          <input className="login-btn" type="butten" value={'작성완료'} readOnly onClick={handleButton} />
          <div className="signup-link" style={{ border: '1px solid black' }}>
            {initArray.map((data) => (
              <p>{data.userName}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
