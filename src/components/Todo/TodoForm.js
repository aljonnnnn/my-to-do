import addTodo from "../../utils/addTodo"

const TodoForm = ({todos, task, setTodos, setTask}) => {
    return (
        <div className="todo__form">
            <input type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add New Todo" 
                className="todo__input" 
            />
            <button 
                onClick={() => addTodo(todos, task, setTodos, setTask)}
                className="todo__btn">
                +
            </button>
        </div>
    )
}

export default TodoForm
