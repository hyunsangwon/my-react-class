import React, { useState } from 'react';
import './Main.css';
const Main = () => {
  /*
    useState 사용법
    onChange, onClick
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addr, setAddr] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isBlock, setBlock] = useState(false);

  const handleInput = (e) => {
    let { value, name } = e.target;
    console.log('name : ' + name);
    if (name === 'userName') setName(value);
    if (name === 'userPhone') setPhone(value);
    if (name === 'userAddr') setAddr(value);
    if (name === 'remarks') setRemarks(value);
  };

  const handleButton = () => {
    setBlock(true);
  };

  return (
    <div className="container">
      <h1>useState 연습</h1>
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
            <p> name : {name}</p>
            <p> phone : {phone}</p>
            <p> addr : {addr}</p>
            <p> remarks : {remarks}</p>
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
