import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter component', () => {
  test('renders count and buttons', () => {
    render(<Counter count={42} onIncrement={() => {}} onDecrement={() => {}} />)
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('+')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()
  })

  test('calls onIncrement when + is clicked', () => {
    const onIncrement = vi.fn()
    render(
      <Counter count={0} onIncrement={onIncrement} onDecrement={() => {}} />
    )
    fireEvent.click(screen.getByText('+'))
    expect(onIncrement).toHaveBeenCalledTimes(1)
  })

  test('calls onDecrement when - is clicked', () => {
    const onDecrement = vi.fn()
    render(
      <Counter count={0} onIncrement={() => {}} onDecrement={onDecrement} />
    )
    fireEvent.click(screen.getByText('-'))
    expect(onDecrement).toHaveBeenCalledTimes(1)
  })
})
