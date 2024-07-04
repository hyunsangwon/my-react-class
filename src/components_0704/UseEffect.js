import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);

  const [movie, setMovie] = useState([]);

  const fectchData = async () => {
    //axios : 백엔드 연동 도와주는 라이브러리
    const result = await axios({
      method: 'get',
      url: '백엔드 주소 입력',
    });
    console.log('백엔드로 가져온 데이터는? ');
    console.log(result.data);
    setMovie(result.data);
  };

  useEffect(() => {
    fectchData(); //백엔드 연결 함수 호출
  }, []); //[] : 컴포넌트가 실행될 때 *한번만* 실행한다.

  return (
    <div>
      <h3>useEffect example 01 - Anatomy</h3>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffect;
