import React, { useState } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </div>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>content1</h2>
          <hr></hr>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros
            nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at
            purus neque nam leo? Suspendisse semper facilisi parturient sit
            euismod placerat. Orci ante luctus praesent torquent orci commodo
            aptent blandit. Placerat arcu dui potenti; nullam taciti taciti
            amet.
          </p>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>content2</h2>
          <hr></hr>
          <p>
            Ridiculus proin etiam justo vivamus dignissim suscipit maecenas.
            Gravida ornare interdum ex dui eu faucibus dictum dis blandit.
            Rhoncus habitasse suscipit felis massa, ultrices auctor. Laoreet
            magnis justo velit vulputate iaculis at pulvinar augue. Condimentum
            suspendisse habitasse metus cubilia curabitur non sem. Primis nam in
            nulla phasellus bibendum pretium.
          </p>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>content3</h2>
          <hr></hr>
          <p>
            Augue malesuada massa torquent diam tortor; porttitor dis massa.
            Habitasse nunc ad placerat; ante netus gravida a porttitor. Vel
            aliquet hendrerit efficitur facilisis fames lacinia porta per.
            Integer euismod aenean mi hendrerit in volutpat consequat tempus
            turpis. Bibendum massa ad tincidunt, platea montes ac arcu.
            Penatibus elit justo adipiscing magna vulputate leo per.
          </p>
        </div>
      </div>
    </div>
  );
};
