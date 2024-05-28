import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    const res = await axios({
      method: 'get',
      url: 'http://localhost:3000/todos',
    });
    setTodos(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
