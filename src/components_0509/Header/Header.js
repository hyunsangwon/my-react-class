import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <a href="#">{/* <img src="#" className="logo" /> */}</a>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PROGRAMS</a>
            </li>
            <li>
              <a href="#">FACILITIES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
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
