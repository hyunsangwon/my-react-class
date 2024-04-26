import React from 'react';
import Chef from './Chef/ChefList';
import './Main.css';

const Main = () => {
  return (
    <div className="chef">
      <h1 className="section">오늘의 Chef</h1>
      <Chef></Chef>
    </div>
  );
};

export default Main;
