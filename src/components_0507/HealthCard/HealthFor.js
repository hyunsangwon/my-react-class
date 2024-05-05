import React from 'react';
import './HealthCard.css';

const HealthFor = () => {
  const json = [
    { title: '크로스핏', imgName: 'img1', isUse: false },
    { title: '웨이트 훈련', imgName: 'img2', isUse: true },
    { title: '요가', imgName: 'img3', isUse: true },
  ];

  return (
    <div className="card-container">
      {json.map((data, index) => (
        <div className="col" key={index}>
          <h2>{data.title}</h2>
          <div className="caption">
            <p>Strength does not come from the physical capacity. It comes from an indomitable will.</p>
            {/* 삼항연산자로 className 변경 */}
            <button className={data.isUse ? 'btn-active' : 'btn-inactive'}>Know More</button>
          </div>
          <img src={require('../images/' + data.imgName + '.png')} alt="" />
        </div>
      ))}
    </div>
  );
};

export default HealthFor;
