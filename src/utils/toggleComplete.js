const toggleComplete = (todos, setTodos, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo ))
}

export default toggleComplete