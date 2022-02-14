import GlobalStyle from "./GlobalStyle";
import { TodoTemplate, TodoHead, TodoList, TodoCreate } from "./components";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </ContextProvider>
    </>
  );
}

export default App;
