import React from 'react';
import './Chef.css';

const Chef = () => {
  return (
    <div className="chef_row">
      <div className="chef_col">
        <div className="img">
          <img src="images/1.png" alt="" />
        </div>
        <div className="chef-name">
          <h4>Muddsar Qayyum</h4>
          <h4>총주방장</h4>
        </div>
      </div>
      <div className="chef_col">
        <div className="img">
          <img src="images/2.png" alt="" />
        </div>
        <div className="chef-name">
          <h4>Brian Ortega</h4>
          <h4>주방장</h4>
        </div>
      </div>
      <div className="chef_col">
        <div className="img">
          <img src="images/3.png" alt="" />
        </div>
        <div className="chef-name">
          <h4>Mica Galvao</h4>
          <h4>조리장</h4>
        </div>
      </div>
      <div className="chef_col">
        <div className="img">
          <img src="images/4.png" alt="" />
        </div>
        <div className="chef-name">
          <h4>K.Jackson</h4>
          <h4>조리장</h4>
        </div>
      </div>
    </div>
  );
};

export default Chef;
