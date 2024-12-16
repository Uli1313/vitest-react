import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = (inputValue) => {
    if (!inputValue.trim()) return
    const _todos = [...todos, { id: Date.now(), text: inputValue }]
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
          加入
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => deleteTodo(todo.id)}>刪除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
