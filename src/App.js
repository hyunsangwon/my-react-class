import { TodoWrapper } from './components_0604/todo/TodoWrapper';
// import { SimpleTodo } from './components_0530/simple_todo/SimpleTodo';
function App() {
  return (
    <div style={{ margin: '50px auto', width: '800px' }}>
      {/* 
      html을 리턴함 이런 문법을 JSX(JavaScript Syntax eXtension) 라고 함
      export한 컴포넌트를 불러온다. */}
      {/* <UserTable></UserTable> */}
      <TodoWrapper></TodoWrapper>
      {/* <SimpleTodo></SimpleTodo> */}
    </div>
  );
}

export default App;
