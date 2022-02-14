import { createContext, useRef } from "react";

export const TodoNextIdRefContext = createContext();

const TodoNextIdContext = ({ children }) => {
  const nextId = useRef(5);

  return (
    <TodoNextIdRefContext.Provider value={nextId}>
      {children}
    </TodoNextIdRefContext.Provider>
  );
};

export default TodoNextIdContext;
