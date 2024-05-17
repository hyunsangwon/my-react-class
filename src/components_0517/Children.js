import React from 'react';

const Children = (props) => {
  //props는 읽기 전용, 수정이 불가능하다.

  const style = { width: props.width, height: props.height, backgroundColor: props.backgroundColor };

  return (
    <div>
      <h4>Childten Component</h4>
      <div style={style}>
        <img src="" />
      </div>
    </div>
  );
};

export default Children;
