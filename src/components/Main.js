/*
import는 가져오다 뜻
*/
import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="article">Article</div>
      <div className="nav">Nav</div>
      <div className="aside">Aside</div>
    </div>
  );
};
/*
export는 내보내다 뜻
export를 해야 다른 컴포넌트에서 Main를 사용할 수 있음
export default는 단 한번만 사용가능
*/
export default Main;
