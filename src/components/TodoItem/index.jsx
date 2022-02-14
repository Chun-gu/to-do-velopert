import React from "react";
import { TodoItem, CheckCircle, Text, Remove } from "./styled";
import { MdDone, MdDelete } from "react-icons/md";
import useTodoDispatch from "../../hook/useTodoDispatch";

const Index = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItem>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItem>
  );
};

export default React.memo(Index);
