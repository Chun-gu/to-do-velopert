import GlobalStyle from "./GlobalStyle";
import { TodoTemplate, TodoHead, TodoList, TodoCreate } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
