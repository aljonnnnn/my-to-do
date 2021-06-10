const addTodo = (todos, task, setTodos, setTask) => {
    const newTodo = {
        id: Math.floor(Math.random() * 5000),
        task: task,
        complete: false
    }
    if (task) {
        setTodos([...todos, newTodo])
        setTask('')
    }
}

export default addTodo