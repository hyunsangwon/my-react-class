import React from 'react';
import './Main.css';

const Main = () => {
  let message = 'Hello World';
  let isLogin = true;
  let color = 'blue';
  const data = [
    { name: '돈코츠라멘', isSoldout: false, money: 9000 },
    { name: '소유라멘', isSoldout: false, money: 9000 },
    { name: '스바라시라멘', isSoldout: true, money: 10500 },
    { name: '미소라멘', isSoldout: false, money: 9000 },
  ];
  return (
    <div>
      ConditionApp
      {/* && 을 이용한  조건*/}
      <p>{1 > 0 && message} on 24.01.23</p>
      {/* 삼항연산자를 이용한 조건 */}
      <p>{isLogin ? '돈까스' : '치즈돈까스'}</p>
      {/* 삼항연산자를 이용한 css 클래스 이름 변경 */}
      <div className={color === 'blue' ? 'active-blue' : 'active'}></div>
      <div className={color === 'puple' ? 'active-puple' : 'active'}></div>
      {/* map을 활용한 삼항연산자 */}
      <ul>{data.map((i) => (!i.isSoldout ? <li>{i.name}</li> : <li>재료소진</li>))}</ul>
      {/* 문제) 만원이하 라멘 출력하기 */}
    </div>
  );
};

export default Main;
