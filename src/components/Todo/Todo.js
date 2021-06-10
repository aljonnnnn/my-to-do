import { useState } from "react"
import TodoDay from "./TodoDay"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    return (
        <section className="todo">
            <div className="todo__container">
                <div className="todo__box">
                    <TodoDay />
                    <TodoForm todos={todos} task={task} setTodos={setTodos} setTask={setTask} />
                    <TodoList  todos={todos} setTodos={setTodos}/>
                </div>
            </div>
        </section>
    )
}

export default Todo
