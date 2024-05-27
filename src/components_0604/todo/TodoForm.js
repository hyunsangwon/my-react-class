import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState(0);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value, priority);
      // clear form after submission
      setValue('');
      setPriority(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder="What is the task today?" />
      <input type="number" value={priority} onChange={(e) => setPriority(e.target.value)} className="todo-input" placeholder="Priority" />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
