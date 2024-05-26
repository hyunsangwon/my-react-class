import React, { useState } from 'react';

export const SimpleTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  };
  return (
    <div>
      <h1>오늘 할일</h1>
      <form>
        <input type="text" placeholder="할일을 입력하세요..." value={inputValue} onChange={handleChange}></input>
        <button onClick={handleSubmit}>할일 추가</button>
      </form>
      <ul>{todos.length > 0 ? todos.map((todo) => <li key={todo}>{todo}</li>) : <li>No Data</li>}</ul>
    </div>
  );
};
