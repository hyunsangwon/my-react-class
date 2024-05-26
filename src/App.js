import Event from './components_0528/Event';
import UserTable from './components_0528/table/UserTable';

function App() {
  return (
    <div style={{ margin: '50px auto', width: '800px' }}>
      {/* 
      html을 리턴함 이런 문법을 JSX(JavaScript Syntax eXtension) 라고 함
      export한 컴포넌트를 불러온다. */}
      {/* <UserTable></UserTable> */}
      <Event></Event>
    </div>
  );
}

export default App;
