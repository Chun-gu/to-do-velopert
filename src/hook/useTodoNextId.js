import { useContext } from "react";
import { TodoNextIdRefContext } from "../context/TodoNextIdContext";

const useTodoNextId = () => {
  const context = useContext(TodoNextIdRefContext);

  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export default useTodoNextId;
