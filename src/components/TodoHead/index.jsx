import { TodoHead } from "./styled";

const index = () => {
  return (
    <TodoHead>
      <h1>2022년 2월 14일</h1>
      <div className="day">월요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHead>
  );
};

export default index;
