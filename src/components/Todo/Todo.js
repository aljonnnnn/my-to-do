import TodoDay from "./TodoDay"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const Todo = () => {

    return (
        <section className="todo">
            <div className="todo__container">
                <div className="todo__box">
                    <TodoDay />
                    <TodoForm />
                    <TodoList />
                </div>
            </div>
        </section>
    )
}

export default Todo
