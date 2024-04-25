import React from 'react';
import Header from './Header';
import Card from './Card';
import Card2 from './Crad2';
import './Main.css';

const Main = () => {
  // conditional rendering : 조건 렌더링
  // 1. if/else 이용
  let isLogin = true;
  if (isLogin) {
    return (
      <div className="plan">
        <Header></Header>
        <Card></Card>
      </div>
    );
  }
  return (
    <div className="plan">
      <Header></Header>
      <Card2></Card2>
    </div>
  );
};

export default Main;
