import TodoContext from "./todoContext";
import TodoNextIdContext from "./TodoNextIdContext";

const ContextProvider = ({ children }) => {
  return (
    <TodoContext>
      <TodoNextIdContext>{children}</TodoNextIdContext>
    </TodoContext>
  );
};

export default ContextProvider;
