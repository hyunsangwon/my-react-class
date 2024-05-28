import React, { useState } from 'react';

const Event = () => {
  const menu = [
    { name: '아메리카노', no: 1 },
    { name: '카페라떼', no: 2 },
    { name: '카페모카', no: 3 },
  ];
  const selectBoxPrint = (value) => {
    console.log(value);
  };
  const inputPrint = (value) => {
    console.log(value);
  };
  const buttonPrint = () => {
    console.log('버튼 클릭');
  };

  const [inputs, setInputs] = useState({
    userName: '',
    userAge: 0,
    userPhone: '',
    userAddr: '',
  });
  const [data, setData] = useState([]);

  const inputOnChange = (e) => {
    const { value, name } = e.target;
    console.log('value : ' + value);
    console.log('name : ' + name);
    //...inputs을 작성하지 않으면 나머지 값은 없어짐
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const createUser = () => {
    //초기화 진행 해야함
    setData([...data, inputs]);
  };
  return (
    <div style={{ border: '1px solid black' }}>
      <div>
        <select onChange={(e) => selectBoxPrint(e.target.value)} options={menu}>
          {menu.map((i) => (
            <option key={i.no} value={i.name}>
              {i.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input type="text" onChange={(e) => inputPrint(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={() => buttonPrint()}>
          Click
        </button>
      </div>
      <div>
        <h3>list</h3>
        <ul>
          {data.map((data, index) => (
            <li key={index}>{data.userName}</li>
          ))}
        </ul>
      </div>
      <div style={{ border: '1px solid red', marginTop: '20px', padding: '2%' }}>
        <input type="text" name="userName" onChange={inputOnChange} placeholder="이름을 작성하세요..." />
        <input type="text" name="userAge" onChange={inputOnChange} placeholder="나이를 작성하세요..." />
        <input type="text" name="userPhone" onChange={inputOnChange} placeholder="연락처를 작성하세요..." />
        <input type="text" name="userAddr" onChange={inputOnChange} placeholder="지역을 입력하세요..." />
        <button type="button" onClick={() => createUser()}>
          Click
        </button>
      </div>
    </div>
  );
};

export default Event;
