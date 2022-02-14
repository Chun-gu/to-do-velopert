import { useContext } from "react";
import { TodoStateContext } from "../context/todoContext";

const useTodoState = () => {
  const context = useContext(TodoStateContext);

  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export default useTodoState;
