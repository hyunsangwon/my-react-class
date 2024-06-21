import React from 'react';
import './Main.css';
import axios from 'axios';

const UserItem = ({ id, name, email, phone, setUserInfo }) => {
  const fetchUserDetail = async (userId) => {
    const res = await axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/users/${userId}`,
    });
    console.log(res.data);
    setUserInfo(res.data);
  };

  return (
    <div className="user-item" onClick={() => fetchUserDetail(id)}>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default UserItem;
