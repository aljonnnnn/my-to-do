import { DELETE_TODO, TOGGLE_TODO } from "../../reducer/todosTypes"

const TodoList = ({todos, dispatch}) => {
    return (
        <ul className="todo___list">
            {todos.map(todo => {
                return (
                    <li className={`todo__item ${todo.complete ? 'done' : ''}`} key={todo.id}>
                        <span className='todo__task' onClick={() => dispatch({type: TOGGLE_TODO, payload: todo.id})}>{todo.task}</span>
                        <span className='todo__remove' onClick={() => dispatch({type: DELETE_TODO, payload: todo.id})}>remove</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList
