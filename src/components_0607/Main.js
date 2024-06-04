import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import './Main.css';

const Main = () => {
  const current_theme = localStorage.getItem('current_theme'); //현재 테마 색을 알려줌
  console.log(current_theme);
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
    </div>
  );
};

export default Main;
