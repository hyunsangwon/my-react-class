import React, { useEffect, useState } from 'react';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>할일 목록</h2>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
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
