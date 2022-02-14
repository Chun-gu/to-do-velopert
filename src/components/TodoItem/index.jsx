import { TodoItem, CheckCircle, Text, Remove } from "./styled";
import { MdDone, MdDelete } from "react-icons/md";

const index = ({ id, done, text }) => {
  return (
    <TodoItem>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItem>
  );
};

export default index;
