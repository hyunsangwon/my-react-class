import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(false);

  /*
  async : 비동기 통신, 쓰레드를 최소화 하고 자원을 최대한 효율적으로 사용하기 위해 비동기 프로그래밍을 한다.
  ex)네트워크와 통신할 때 주로 사용(백엔드 서버와 데이터를 주고 받을 때)

  await : 비동기 작업이 완료될 때 까지 기다림.
  
  */
  const fetchPosts = async () => {
    const obj = { id: '123' };
    const res = await axios(
      {
        method: 'get',
        url: 'http://localhost:3000/todos',
      },
      { obj },
    );
  };

  const fetchPosts2 = async () => {
    const res = await axios({
      method: 'get',
      url: 'http://localhost:3000/todos',
    });
    setTodos(res.data);
    console.log(res.data);
  };

  /*
  사이드 이펙트(side effects)를 수행하기 위해 사용하는 훅(hook)
  사이드 이펙트는 데이터 가져오기(fetching data), 구독(subscription), 타이머 설정(timer), DOM 직접 조작 등의 작업을 말함.
  이러한 작업들은 리액트 컴포넌트의 렌더링 과정 외부에서 발생하므로 "사이드 이펙트"라고 부름.
  useEffect는 기본적으로 컴포넌트가 처음 렌더링된 후 마운트
  */
  useEffect(() => {
    fetchPosts(); // 여기서 데이터를 가져올 수 있다.
    fetchPosts2();
  }, []); //빈 배열을 두 번째 인자로 전달하면, 이 효과는 컴포넌트가 마운트(처음 시작)될 때 한 번만 실행.

  return (
    <div>
      <h2>할일 목록</h2>
      <ul>
        {todos.map((i, index) => (
          <li key={index}>{i.todo}</li>
        ))}
      </ul>
      <form>
        <input type="text" name="todo" placeholder="새로운 할일" disabled={loading} value={todo} onChange={({ target: { value } }) => setTodo(value)} />
        <button>추가</button>
      </form>
    </div>
  );
};

export default Main;
