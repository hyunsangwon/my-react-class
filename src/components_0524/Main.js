import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    // 컴포넌트가 마운트된 후에 실행되는 코드
    console.log('컴포넌트가 마운트되었습니다!');

    // 정리 함수는 컴포넌트가 언마운트되기 전에 실행됩니다.
    return () => {
      console.log('컴포넌트가 언마운트되었습니다!');
    };
  }, []); // 빈 배열을 두 번째 인자로 전달하면, 이 효과는 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  return <div>Main</div>;
};

export default Main;
