import { useReducer, createContext } from "react";
import { todoReducer, todosInitialState } from "../reducer/todoReducer";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

const TodoContext = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, todosInitialState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoContext;
