import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <div className="gallery">
      <h1>COFFEE className</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam tempora praesentium natus perspiciatis iusto nesciunt doloremque maiores obcaecati ad, iure id,
        voluptas ipsa harum unde. Vitae necessitatibus deleniti non?
      </p>
      <div className="row">
        <div className="gallery-col">
          <div className="img-box">
            <img src="" />
          </div>
          <div className="layer">
            <h3>LATTE ART</h3>
          </div>
        </div>
        <div className="gallery-col">
          <div className="img-box">
            <img src="" />
          </div>
          <div className="layer">
            <h3>BASIC BARISTA</h3>
          </div>
        </div>
        <div className="gallery-col">
          <div className="img-box">
            <img src="" />
          </div>
          <div className="layer">
            <h3>CUSTOMER SERVICE</h3>
          </div>
        </div>
        <div className="gallery-col">
          <div className="img-box">
            <img src="" />
          </div>
          <div className="layer">
            <h3>MENU DEVELOPMENT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
