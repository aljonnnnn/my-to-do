import { useState } from "react"
import { connect } from "react-redux"
import { addTodo } from "../../redux/todos/todoActions"

const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState('')

    const clickAddTodo = () => {
        if (task) {
            addTodo(task)
            setTask('')
        }
    }
    const keyPressAddTodo = (e) => {
        if (e.key === 'Enter') {
            addTodo(task)
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

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (task) => dispatch(addTodo(task))
    }
}

export default connect(null, mapDispatchToProps)(TodoForm)
