import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/todos/todoSlice"

const TodoForm = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const clickAddTodo = () => {
        if (task) {
            dispatch(addTodo(task))
            setTask('')
        }
    }
    const keyPressAddTodo = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTodo(task))
            setTask('')
        }
    }
    
    return (
        <div className="todo__form">
            <input type="text"
                onKeyPress={keyPressAddTodo} 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add New Todo" 
                className="todo__input" 
            />
            <button 
                onClick={clickAddTodo}
                className="todo__btn">
                +
            </button>
        </div>
    )
}

export default TodoForm
