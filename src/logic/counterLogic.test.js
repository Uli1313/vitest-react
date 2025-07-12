import { increment, decrement } from './counterLogic'

describe('counterLogic', () => {
  test('increment increases value by 1', () => {
    expect(increment(0)).toBe(1)
    expect(increment(10)).toBe(11)
    expect(increment(-5)).toBe(-4)
  })

  test('decrement decreases value by 1', () => {
    expect(decrement(0)).toBe(-1)
    expect(decrement(10)).toBe(9)
    expect(decrement(-5)).toBe(-6)
  })
})
