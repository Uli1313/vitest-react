import { useState } from 'react'
import NoTodos from '../components/NoTodos'
import TodoItem from '../components/TodoItem'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = (inputValue) => {
    if (!inputValue.trim()) return
    const _todos = [
      ...todos,
      { id: Date.now(), text: inputValue, createDate: new Date() },
    ]
    setTodos(_todos)
    setInputValue('')
  }

  const deleteTodo = (id) => {
    const _todos = todos.filter((todo) => todo.id !== id)
    setTodos(_todos)
  }

  return (
    <div className="todo_list_wrapper">
      <h1>Todo List</h1>
      <div className="todo_input">
        <input
          type="text"
          placeholder="輸入代辦事項"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" onClick={() => addTodo(inputValue)}>
          新增
        </button>
      </div>
      {todos.length === 0 ? (
        <NoTodos />
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              createDate={todo.createDate}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
