import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  test('should initialize with initial value', () => {
    const { result } = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })

  test('should increment', () => {
    const { result } = renderHook(() => useCounter(0))
    act(() => result.current.handleIncrement())
    expect(result.current.count).toBe(1)
  })

  test('should decrement', () => {
    const { result } = renderHook(() => useCounter(0))
    act(() => result.current.handleDecrement())
    expect(result.current.count).toBe(-1)
  })
})
