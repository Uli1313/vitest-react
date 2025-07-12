import { useState } from 'react'
import { increment, decrement } from '../logic/counterLogic'

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const handleIncrement = () => setCount((prev) => increment(prev))
  const handleDecrement = () => setCount((prev) => decrement(prev))

  return { count, handleIncrement, handleDecrement }
}
