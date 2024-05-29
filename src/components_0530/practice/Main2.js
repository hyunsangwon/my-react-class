import React, { useState } from 'react';
import './Main.css';
const Main = () => {
  /*
    useState 사용법
    onChange, onClick
  */
  const [isBlock, setBlock] = useState(false);
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
    setBlock(true);
  };

  return (
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
        {isBlock === true ? (
          <div className="signup-link" style={{ border: '1px solid black' }}>
            <p>아래 state 결과</p>
            <p> name : {inputs.userName}</p>
            <p> phone : {inputs.userPhone}</p>
            <p> addr : {inputs.userAddr}</p>
            <p> remarks : {inputs.remarks}</p>
          </div>
        ) : (
          <div className="signup-link" style={{ border: '1px solid black' }}>
            <p>버튼을 클릭하고 내용을 확인하세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
