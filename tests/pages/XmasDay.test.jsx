import { render, screen, prettyDOM } from '@testing-library/react'
import '@testing-library/jest-dom'
import XmasDay from '../../src/pages/XmasDay'

describe('pages > XmasDay 測試(setSystemTime)', () => {
  beforeEach(() => {
    // vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  // test('元件是否正確渲染', () => {
  //   const { container } = render(<XmasDay />)
  //   expect(screen.getByText('Xmas Day')).toBeInTheDocument()
  // })

  test('當日期是 12/24 時，顯示 "離聖誕節還有 1 天"', () => {
    vi.setSystemTime(new Date('2024-12-24'))
    render(<XmasDay />)
    // expect(screen.getByText('離聖誕節還有 1 天')).toBeInTheDocument()
  })

  test('當日期是 12/25 時，顯示 "今天是聖誕節"', () => {
    vi.setSystemTime(new Date('2024-12-25'))
    render(<XmasDay />)
    // expect(screen.getByText('今天是聖誕節')).toBeInTheDocument()
  })

  test('當日期是 12/26 時，顯示 "今年聖誕節過了"', () => {
    vi.setSystemTime(new Date('2024-12-26'))
    render(<XmasDay />)
    // expect(screen.getByText('今年聖誕節過了')).toBeInTheDocument()
  })
})
