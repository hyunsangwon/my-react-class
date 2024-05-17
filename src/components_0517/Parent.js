import React from 'react';
import Children from './Children';
import Button from './Button';

const Parent = () => {
  const buttonBlack = { fontSize: '14px', fontWeight: 600, color: '#fff', backgroundColor: 'black', border: 'none', outline: 'none' };
  const buttonBlue = { fontSize: '14px', fontWeight: 600, color: '#000', backgroundColor: 'blue', border: 'none', outline: 'none' };
  return (
    <div>
      <h2>Parent Component</h2>
      <div style={{ display: 'flex' }}>
        {/* children 컴포넌트를 재사용할 수 있고 값을 넘겨줄 수 있다. */}
        <Children width={200} height={400} backgroundColor={'red'}></Children>
        <Children width={100} height={300} backgroundColor={'blue'}></Children>
        <Children width={130} height={330} backgroundColor={'black'}></Children>
      </div>
      {/* json으로 값 넘겨주기 */}
      <Button style={buttonBlue}></Button>
      <Button style={buttonBlack}></Button>
    </div>
  );
};

export default Parent;
