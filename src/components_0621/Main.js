import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserItem from './UserItem';

const Main = () => {
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const fetchUser = async () => {
    const res = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    });
    setUsers(res.data);
  };
  //
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container">
      <div className="left">
        {users.map((item, key) => (
          <UserItem key={key} id={item.id} name={item.name} mail={item.email} phone={item.phone} setUserInfo={setUserInfo}></UserItem>
        ))}
      </div>
      <div className="right">
        <div className="user-info">
          <p>name : {userInfo.name}</p>
          <p>phone : {userInfo.phone}</p>
          <p>link : {userInfo.website}</p>
          <p>city : {userInfo.address.city}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
