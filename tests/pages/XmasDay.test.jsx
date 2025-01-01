import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import XmasDay from '../../src/pages/XmasDay'
import { describe, beforeEach, afterEach } from 'vitest'

describe('pages > XmasDay 測試(模擬 Date)', () => {
  const mockDate = (date) => {
    const RealDate = Date
    global.Date = class extends RealDate {
      constructor(...args) {
        if (args.length) return new RealDate(...args)
        return new RealDate(date)
      }
      static now() {
        return new RealDate(date).getTime()
      }
    }
  }

  afterEach(() => {
    global.Date = Date
  })

  test('元件是否正確渲染', () => {
    render(<XmasDay />)
    expect(screen.getByText('Xmas Day')).toBeInTheDocument()
  })

  test('當日期是聖誕節時，顯示正確訊息', () => {
    mockDate('2024-12-25')
    render(<XmasDay />)
    expect(screen.getByText(/2024\/12\/25/)).toBeInTheDocument()
    expect(screen.getByText('今天是聖誕節')).toBeInTheDocument()
  })

  test('當日期不是聖誕節時，顯示正確訊息', () => {
    mockDate('2024-12-24')
    render(<XmasDay />)
    expect(screen.getByText(/2024\/12\/24/)).toBeInTheDocument()
    expect(screen.getByText('今天不是聖誕節')).toBeInTheDocument()
  })
})

describe.only('pages > XmasDay 測試(setSystemTime)', () => {
  beforeEach(() => {
    // vi.useFakeTimers()
    const currentDate = new Date()
    console.log('beforeEach測試時間：', {
      完整日期: currentDate,
      格式化日期: currentDate.toLocaleDateString(),
    })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('元件是否正確渲染', () => {
    render(<XmasDay />)
    expect(screen.getByText('Xmas Day')).toBeInTheDocument()
  })

  test('當日期是聖誕節時，顯示正確訊息', () => {
    vi.setSystemTime(new Date('2024-12-25'))
    const currentDate = new Date()
    console.log('聖誕節測試時間：', {
      完整日期: currentDate,
      格式化日期: currentDate.toLocaleDateString(),
    })
    render(<XmasDay />)
    expect(screen.getByText(/2024\/12\/25/)).toBeInTheDocument()
    expect(screen.getByText('今天是聖誕節')).toBeInTheDocument()
  })

  test('當日期不是聖誕節時，顯示正確訊息', () => {
    vi.setSystemTime(new Date('2024-12-24'))
    const currentDate = new Date()
    console.log('非聖誕節測試時間：', {
      完整日期: currentDate,
      格式化日期: currentDate.toLocaleDateString(),
    })
    render(<XmasDay />)
    expect(screen.getByText(/2024\/12\/24/)).toBeInTheDocument()
    expect(screen.getByText('今天不是聖誕節')).toBeInTheDocument()
  })
})
