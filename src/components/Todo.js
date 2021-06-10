import { useState } from "react"
import useDay from "../hooks/useDay"
import addTodo from "../utils/addTodo"
import removeTodo from "../utils/removeTodo"
import toggleComplete from "../utils/toggleComplete"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const { day } = useDay()

    return (
        <section className="todo">
            <div className="todo__container">
                <div className="todo__box">
                    <h1 className="todo__heading date">{day}</h1>
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
                </div>
            </div>
        </section>
    )
}

export default Todo
