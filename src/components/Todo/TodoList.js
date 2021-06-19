import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleComplete } from "../../redux/todos/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul className="todo___list">
      {todos.map((todo) => {
        return (
          <li className={`todo__item ${todo.done ? "done" : ""}`} key={todo.id}>
            <span
              className="todo__task"
              onClick={() => dispatch(toggleComplete(todo.id))}
            >
              {todo.task}
            </span>
            <span
              className="todo__remove"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              remove
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
