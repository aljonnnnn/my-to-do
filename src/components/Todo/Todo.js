import { useReducer } from "react"
import { initalTodosState, todosReducer } from "../../reducer/todosReducer"
import TodoDay from "./TodoDay"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const Todo = () => {
    const [state, dispatch] = useReducer(todosReducer, initalTodosState)

    return (
        <section className="todo">
            <div className="todo__container">
                <div className="todo__box">
                    <TodoDay />
                    <TodoForm dispatch={dispatch} />
                    <TodoList  todos={state} dispatch={dispatch} />
                </div>
            </div>
        </section>
    )
}

export default Todo
