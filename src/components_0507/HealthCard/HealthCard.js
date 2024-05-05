import React from 'react';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import './HealthCard.css';

const HealthCard = () => {
  return (
    <div className="card-container">
      <div className="col">
        <h2>크로스 핏</h2>
        <div className="caption">
          <p>Strength does not come from the physical capacity. It comes from an indomitable will.</p>
          <button type="button">Know More</button>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="col">
        <h2>웨이트 훈련</h2>
        <div className="caption">
          <p>Strength does not come from the physical capacity. It comes from an indomitable will.</p>
          <button type="button">Know More</button>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className="col">
        <h2>요가</h2>
        <div className="caption">
          <p>Strength does not come from the physical capacity. It comes from an indomitable will.</p>
          <button type="button">Know More</button>
        </div>
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default HealthCard;
