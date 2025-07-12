export function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  )
}
