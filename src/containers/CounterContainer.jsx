import { useCounter } from '../hooks/useCounter'
import { Counter } from '../components/Counter'

export default function CounterContainer() {
  const { count, handleIncrement, handleDecrement } = useCounter(0)

  return (
    <Counter
      count={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
}
