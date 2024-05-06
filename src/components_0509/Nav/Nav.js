import React from 'react';
import './Nav.css';

const Nav = ({ menu }) => {
  //부모컴포넌트에서 자식컴포넌트로 데이터 전달
  console.log(menu);
  return (
    <div className="nav-links">
      <ul>
        {menu.map((data, index) => (
          <li key={index}>
            <a href="#">{data}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
