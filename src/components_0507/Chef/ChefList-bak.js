import React from 'react';
import './Chef.css';

const Chef = () => {
  const jsonData = [
    { name: 'Muddsar Qayyum', position: '총주방장', image: 'images/1.png' },
    { name: 'Brian Ortega', position: '주방장', image: 'images/2.png' },
    { name: 'Mica Galvao', position: '조리장', image: 'images/3.png' },
    { name: 'K.Jackson', position: '조리장', image: 'images/4.png' },
  ];
  return (
    <div className="chef_row">
      {jsonData.map((data, index) => (
        <div className="chef_col">
          <div className="img">
            <img src={data.image} alt="" />
          </div>
          <div className="chef-name">
            <h4>{data.name}</h4>
            <h4>{data.position}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chef;
