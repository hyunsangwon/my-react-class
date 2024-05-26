import React from 'react';
import Header from './Header';
import Card from './Card';
import Card2 from './Crad2';
import './Main.css';

const Main = () => {
  // conditional rendering : 조건 렌더링
  let isLogin = true;
  return (
    <div className="plan">
      <Header></Header>
      {isLogin ? <Card /> : <Card2 />}
    </div>
  );
};

export default Main;
