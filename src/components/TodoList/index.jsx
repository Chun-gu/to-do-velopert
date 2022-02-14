import { TodoList } from "./styled";
import { default as TodoItem } from "../TodoItem";
import useTodoState from "../../hook/useTodoState";

const Index = () => {
  const todos = useTodoState();

  return (
    <TodoList>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoList>
  );
};

export default Index;
