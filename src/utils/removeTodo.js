const removeTodo = (todos, setTodos, id) => {
    setTodos(todos.filter(todo => todo.id !== id))
}

export default removeTodo