//리액트 라이브러리에서 useState 훅을 가져옵니다.
import React, { useState } from 'react';

const State = () => {
  const [initVal, setVal] = useState(0);
  /*
  2019년 혜성과 같이 등장한 useState
  useState등장으로 React 코드 방식이 calss기반에서 함수기반으로 변경 됨

  여기서 initVal 현재 상태 값을 나타내며, 
  setVal 이 상태를 업데이트하는 함수. 
  useState(0)은 상태의 초기값을 0으로 설정.
  
  상태를 변경하면, 리액트가 자동으로 컴포넌트를 다시 렌더링하여 변경된 상태를 반영.
  */
  const handleButton = () => {
    setVal(initVal * 2);
  };
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <div>
      <h2>Hook 공부하기</h2>
      <input type="number" placeholder="숫자를 입력해주세요..." value={initVal} onChange={handleChange}></input>
      <button onClick={handleButton}>클릭</button>
      <input type="number" readOnly value={initVal}></input>
    </div>
  );
};

export default State;
