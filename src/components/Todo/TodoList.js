import removeTodo from "../../utils/removeTodo"
import toggleComplete from "../../utils/toggleComplete"

const TodoList = ({todos, setTodos}) => {
    return (
        <ul className="todo___list">
            {todos.map(todo => {
                return (
                    <li className={`todo__item ${todo.complete ? 'done' : ''}`} key={todo.id}>
                    <span className='todo__task' onClick={() => toggleComplete(todos, setTodos, todo.id)}>{todo.task}</span>
                    <span className='todo__remove' onClick={() => removeTodo(todos, setTodos, todo.id)}>remove</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList
