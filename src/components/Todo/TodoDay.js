import useDay from "../../hooks/useDay";

const TodoDay = () => {
  const { day } = useDay();
  return <h1 className="todo__heading date">{day}</h1>;
};

export default TodoDay;
