import React from 'react';

const User = () => {
  const [user, setUser] = useState({
    name: '홍길동',
    age: 20,
    school: '민국대학교',
  });
  return (
    <div>
      <h1>이름: {user.name}</h1>
      <h2>나이: {user.age}</h2>
      <h3>학교: {user.school}</h3>
      <button
        onClick={() => {
          setUser({
            ...user,
            name: '홍길순',
            school: '한국대학교',
          });
        }}
      >
        사람 변경
      </button>
    </div>
  );
};

export default User;
