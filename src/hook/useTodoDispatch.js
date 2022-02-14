import { useContext } from "react";
import { TodoDispatchContext } from "../context/todoContext";

const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export default useTodoDispatch;
