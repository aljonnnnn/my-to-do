import { useState } from "react"

const TodoForm = ({dispatch}) => {
    const [task, setTask] = useState('')

    const addTodo = () => {
        if (task) {
            dispatch({type: 'ADD_TODO', payload: task})
            setTask('')
        }
    }
    
    return (
        <div className="todo__form">
            <input type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add New Todo" 
                className="todo__input" 
            />
            <button 
                onClick={addTodo}
                className="todo__btn">
                +
            </button>
        </div>
    )
}

export default TodoForm
