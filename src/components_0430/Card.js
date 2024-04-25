import React from 'react';

const Card = () => {
  /*  
  return문 안에서는 for, forEach문을 사용하면 안된다.
  forEach는 배열의 요소만 순회만 할 뿐 반환해주는 메소드가 아님.
  map은 요소를 순회하며 값을 반환해주기 때문에 JSX에서는 map을 사용해야 합니다.
  */
  const titleArray = ['Starter1', 'Starter2', 'Starter3'];

  return (
    <div className="container">
      {titleArray.map((data, index) => (
        <div className="item" key={index}>
          <p>{data}</p>
          <h2>19$</h2>
          <ul>
            <li>1 Website</li>
            <li>10 GB Disk Space</li>
            <li>Free Email Address</li>
            <li>Basic Web builder</li>
            <li>No SSL Certificate</li>
            <li>Limited Support</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Card;
