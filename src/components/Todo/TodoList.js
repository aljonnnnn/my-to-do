import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, toggleTodo } from "../../redux/todos/todoActions"

const TodoList = () => {
    const todos = useSelector(state => state)
    const dispatch = useDispatch()
    
    return (
        <ul className="todo___list">
            {todos.map(todo => {
                return (
                    <li className={`todo__item ${todo.done ? 'done' : ''}`} key={todo.id}>
                        <span className='todo__task' onClick={() => dispatch(toggleTodo(todo.id))}>{todo.task}</span>
                        <span className='todo__remove' onClick={() => dispatch(deleteTodo(todo.id))}>remove</span>
                    </li>
                )
            })}
        </ul>
    )
}
export default TodoList
