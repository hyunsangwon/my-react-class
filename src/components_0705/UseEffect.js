import React, { useEffect, useState } from 'react';
import './UseEffect.css';
import axios from 'axios';

const UseEffect = () => {
  const [data, setData] = useState([]);

  const fectchData = async () => {
    const result = await axios({
      method: 'get',
      url: 'https://zxh3vzbnu2.execute-api.ap-northeast-2.amazonaws.com/users',
    });
    setData(result.data);
  };

  useEffect(() => {
    fectchData();
  }, []);

  return (
    <div>
      <h3>User List</h3>
      {data.map((item, key) => (
        <div key={key} className="container">
          <div className="sub">
            <h4>Info</h4>
            <ul>
              <li>ID : {item.id}</li>
              <li>NAME : {item.name}</li>
              <li>AGE : {item.age}</li>
              <li>PHONE : {item.phone}</li>
              <li>JOB : {item.job}</li>
            </ul>
          </div>
          <div className="sub">
            <h4>Address</h4>
            <ul>
              <li>{item.address.city}</li>
              <li>{item.address.street}</li>
              <li>{item.address.zipcode}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseEffect;
