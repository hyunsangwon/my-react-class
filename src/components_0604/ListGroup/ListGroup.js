import React, { useState } from 'react';
import './List.css';

const ListGroup = () => {
  let noData = [];
  let items = ['Tokyo', 'London', 'Seoul'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No Data</p>}
        {items.map((value, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
