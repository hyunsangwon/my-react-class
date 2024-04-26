import React from 'react';
import Nav from './Nav/Nav';
import './Main.css';
import Content from './Content/Content';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Main = () => {
  return (
    <div className="container">
      <Nav></Nav>
      <div className="main">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
