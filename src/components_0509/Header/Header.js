import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import logo from '../images/logo.png';

const Header = () => {
  const menu = ['HOME', 'ABOUT', 'PROGRAMS', 'FACILITIES', 'CONTACT'];

  return (
    <div className="header">
      <div className="nav">
        <a href="#">
          <img src={logo} className="logo" />
        </a>
        <Nav menu={menu}></Nav>
      </div>
      <div className="text-box">
        <h1>Coffee one day className</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque cupiditate sint rerum quasi quaerat delectus! Blanditiis quas consequuntur, libero beatae
          ipsum pariatur, consectetur harum commodi inventore fugiat nisi quos.
        </p>
        <a href="#" className="hero-btn">
          PROGRAMS OPEN
        </a>
      </div>
    </div>
  );
};

export default Header;
