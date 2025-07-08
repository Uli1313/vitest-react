function TodoItem({ id, text, createDate, deleteTodo }) {
  return (
    <li>
      <span>{text}</span>
      <span className="create_date">建立於 {createDate.toLocaleString()}</span>
      <button onClick={() => deleteTodo(id)}>刪除</button>
    </li>
  )
}

export default TodoItem
