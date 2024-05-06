import React from 'react';
import './Nav.css';

const Nav = (props) => {
  /*props : 부모컴포넌트에서 자식컴포넌트로 데이터 전달
  프로퍼티, props(properties의 줄임말) 라고 한다.
  프로퍼티는 수정할 수 없다는 특징이 있다.
  */
  console.log(props.menu);
  return (
    <div className="nav-links">
      <ul>
        {props.menu.map((data, index) => (
          <li key={index}>
            <a href="#">{data}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
