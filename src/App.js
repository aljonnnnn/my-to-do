import { useEffect, useState } from 'react';
import './styles/css/main.min.css'

function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  const [day, setDay] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 5000),
      task: task,
      complete: false
    }
    setTodos([...todos, newTodo])
    setTask('')
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo ))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const getDay = () => {
    switch (new Date().getDay()) {
      case 0:
        setDay('Sunday')
        break;
      case 1:
        setDay('Monday')
        break;
      case 2:
         setDay('Tuesday')
        break;
      case 3:
        setDay('Wednesday')
        break;
      case 4:
        setDay('Thursday')
        break;
      case 5:
        setDay('Friday')
        break;
      case 6:
        setDay('Saturday')
        break;
      default: setDay('something wrong in date')
    }
  }


  useEffect(() => {
    getDay()
  }, [day])
  
  return (
    <div className="App">
      <section className="todo">
          <div className="todo__container">
              <div className="todo__box">
                  <h1 className="todo__heading date">{day}</h1>
                  <form onSubmit={handleSubmit} className="todo__form">
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
                  </form>
                  <ul className="todo___list">
                    {todos.map(todo => {
                      return (
                        <li className={`todo__item ${todo.complete ? 'done' : ''}`} key={todo.id}>
                          <span className='todo__task' onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
                          <span className='todo__remove' onClick={() => removeTodo(todo.id)}>remove</span>
                        </li>
                      )
                    })}
                  </ul>
              </div>
          </div>
      </section>
    </div>
  );
}

export default App;
