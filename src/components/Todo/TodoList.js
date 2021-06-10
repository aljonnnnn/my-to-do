import { connect } from "react-redux"
import { deleteTodo, toggleTodo } from "../../redux/todos/todoActions"

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    console.log(todos)
    return (
        <ul className="todo___list">
            {todos.map(todo => {
                return (
                    <li className={`todo__item ${todo.done ? 'done' : ''}`} key={todo.id}>
                        <span className='todo__task' onClick={() => toggleTodo(todo.id)}>{todo.task}</span>
                        <span className='todo__remove' onClick={() => deleteTodo(todo.id)}>remove</span>
                    </li>
                )
            })}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        toggleTodo: (id) => dispatch(toggleTodo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
